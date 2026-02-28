"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { scrollToSection } from "@/lib/scroll-to-section"

const navLinks = [
  { label: "Capabilities", href: "#capabilities" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 80)
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  return (
    <header
      className="fixed top-0 right-0 left-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(33,17,3,0.95)" : "transparent",
        borderBottom: scrolled ? "1px solid rgba(162,112,53,0.15)" : "1px solid transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 md:px-12 lg:px-20">
        <a href="#" className="flex items-center">
          <Image
            src="/images/rank4-logo.svg"
            alt="Rank4 logo"
            width={1340}
            height={483}
            className="h-auto w-[100px]"
            priority
          />
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium transition-colors hover:opacity-100"
                style={{ color: "#F1DAC4", opacity: 0.6 }}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <button
              onClick={(e) => { e.preventDefault(); scrollToSection("contact", 0.35) }}
              className="inline-flex cursor-pointer items-center rounded-sm px-5 py-2 font-mono text-[11px] font-semibold uppercase tracking-[0.1em] transition-all hover:brightness-110"
              style={{ backgroundColor: "#7B0D1E", color: "#F1DAC4" }}
            >
              Request Consultation
            </button>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          style={{ color: "#F1DAC4" }}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="px-6 pb-6 md:hidden"
          style={{
            backgroundColor: "rgba(33,17,3,0.98)",
            borderTop: "1px solid rgba(162,112,53,0.15)",
          }}
        >
          <ul className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium transition-colors"
                  style={{ color: "#F1DAC4", opacity: 0.7 }}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <button
                className="inline-flex cursor-pointer items-center rounded-sm px-5 py-2 font-mono text-[11px] font-semibold uppercase tracking-[0.1em]"
                style={{ backgroundColor: "#7B0D1E", color: "#F1DAC4" }}
                onClick={() => { setMobileOpen(false); scrollToSection("contact", 0.35) }}
              >
                Request Consultation
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}


