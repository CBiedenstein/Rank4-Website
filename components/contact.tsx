"use client"

import { useState, useEffect, useRef, useCallback, type FormEvent } from "react"
import Image from "next/image"
import { Send, ArrowUpRight } from "lucide-react"

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max)
}

export function Contact() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [submitted, setSubmitted] = useState(false)

  const handleScroll = useCallback(() => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const totalScroll = containerRef.current.scrollHeight - window.innerHeight
    const progress = Math.min(Math.max(-rect.top / totalScroll, 0), 1)
    setScrollProgress(progress)
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  // Header fades in immediately, stays visible
  const headerOpacity = clamp(scrollProgress / 0.08, 0, 1)
  const headerY = Math.max(40 - scrollProgress * 500, 0)

  // Left column (info) fades in second
  const infoOpacity = clamp((scrollProgress - 0.1) / 0.12, 0, 1)
  const infoY = Math.max(40 - (scrollProgress - 0.1) * 350, 0)

  // Right column (form) fades in third
  const formOpacity = clamp((scrollProgress - 0.2) / 0.15, 0, 1)
  const formY = Math.max(50 - (scrollProgress - 0.2) * 300, 0)

  // Footer line fades in last
  const footerOpacity = clamp((scrollProgress - 0.4) / 0.12, 0, 1)

  // Global fade out
  const fadeOut = clamp(1 - (scrollProgress - 0.8) / 0.2, 0, 1)
  const globalOpacity = scrollProgress < 0.8 ? 1 : fadeOut

  // Image parallax
  const imageY = scrollProgress * -60
  const imageScale = 1 + scrollProgress * 0.06

  return (
    <div ref={containerRef} className="relative" data-scroll-room="contact" style={{ height: "350vh" }}>
      {/* Sticky viewport */}
      <div className="sticky top-0 h-dvh w-full overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0"
          style={{
            transform: `translateY(${imageY}px) scale(${imageScale})`,
            willChange: "transform",
          }}
        >
          <Image
            src="/images/contact-bg.jpg"
            alt="Engineer workstation with precision tools and warm lighting"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>

        {/* Dark overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: "#211103",
            opacity: 0.7 + scrollProgress * 0.15,
          }}
          aria-hidden="true"
        />

        {/* Noise texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
          aria-hidden="true"
        />

        {/* Floating content */}
        <div
          className="relative z-10 flex h-full flex-col justify-center px-6 pb-[env(safe-area-inset-bottom)] pt-[env(safe-area-inset-top)] md:px-12 lg:px-20"
          style={{ opacity: globalOpacity }}
          id="contact"
        >
          <div className="mx-auto w-full max-w-[1400px]">
            {/* Section header */}
            <div
              style={{
                opacity: headerOpacity,
                transform: `translateY(${Math.round(headerY)}px)`,
              }}
            >
              <div className="flex items-center gap-4">
                <div className="h-px w-12" style={{ backgroundColor: "#A27035" }} />
                <span
                  className="font-mono text-[10px] font-semibold uppercase tracking-[0.3em]"
                  style={{ color: "#A27035" }}
                >
                  Get in touch
                </span>
              </div>
              <h2
                className="mt-4 text-[clamp(2rem,6vw,5rem)] font-bold leading-[0.9] tracking-[-0.03em]"
                style={{ color: "#F1DAC4" }}
              >
                {"Let's"} Build
                <span className="block font-mono font-light" style={{ color: "#7B0D1E" }}>
                  Something.
                </span>
              </h2>
            </div>

            {/* Two-column layout */}
            <div className="mt-10 grid gap-10 lg:mt-16 lg:grid-cols-5 lg:gap-16">
              {/* Left - Info */}
              <div
                className="lg:col-span-2"
                style={{
                  opacity: infoOpacity,
                  transform: `translateY(${Math.round(infoY)}px)`,
                }}
              >
                <p
                  className="max-w-sm text-sm leading-relaxed md:text-base"
                  style={{ color: "#F1DAC4", opacity: 0.6 }}
                >
                  Whether you have a specific FPGA challenge or need help
                  architecting a full signal processing pipeline, we are ready to talk.
                </p>

                <div className="mt-10 flex flex-col gap-6">
                  <a
                    href="mailto:contact@rank4.io"
                    className="group flex items-center gap-3 transition-opacity hover:opacity-100"
                    style={{ opacity: 0.8 }}
                  >
                    <div
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm"
                      style={{ backgroundColor: "rgba(123,13,30,0.4)" }}
                    >
                      <Send className="h-4 w-4" style={{ color: "#F1DAC4" }} />
                    </div>
                    <div>
                      <p
                        className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em]"
                        style={{ color: "#A27035" }}
                      >
                        Email
                      </p>
                      <p
                        className="text-sm font-medium"
                        style={{ color: "#F1DAC4" }}
                      >
                        contact@rank4.io
                      </p>
                    </div>
                    <ArrowUpRight
                      className="ml-auto h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100"
                      style={{ color: "#A27035" }}
                    />
                  </a>

                  <div className="flex items-center gap-3" style={{ opacity: 0.8 }}>
                    <div
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm"
                      style={{ backgroundColor: "rgba(123,13,30,0.4)" }}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#F1DAC4"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="M2 12h20" />
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                      </svg>
                    </div>
                    <div>
                      <p
                        className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em]"
                        style={{ color: "#A27035" }}
                      >
                        Location
                      </p>
                      <p
                        className="text-sm font-medium"
                        style={{ color: "#F1DAC4" }}
                      >
                        United States &middot; Remote-First
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right - Form */}
              <div
                className="lg:col-span-3"
                style={{
                  opacity: formOpacity,
                  transform: `translateY(${Math.round(formY)}px)`,
                }}
              >
                <div
                  className="rounded-sm border p-6 md:p-8"
                  style={{
                    borderColor: "rgba(162,112,53,0.2)",
                    backgroundColor: "rgba(33,17,3,0.9)",
                  }}
                >
                  {submitted ? (
                    <div className="flex flex-col items-center justify-center py-16 text-center">
                      <div
                        className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-sm"
                        style={{ backgroundColor: "rgba(123,13,30,0.4)" }}
                      >
                        <Send className="h-6 w-6" style={{ color: "#F1DAC4" }} />
                      </div>
                      <h3
                        className="text-lg font-semibold"
                        style={{ color: "#F1DAC4" }}
                      >
                        Message Received
                      </h3>
                      <p
                        className="mt-2 text-sm"
                        style={{ color: "#F1DAC4", opacity: 0.5 }}
                      >
                        {"We'll"} be in touch within one business day.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                      <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <label
                            htmlFor="contact-name"
                            className="mb-2 block font-mono text-[10px] font-semibold uppercase tracking-[0.2em]"
                            style={{ color: "#A27035" }}
                          >
                            Name
                          </label>
                          <input
                            id="contact-name"
                            name="name"
                            type="text"
                            required
                            className="w-full rounded-sm border bg-transparent px-4 py-3 text-sm transition-colors focus:outline-none focus:ring-1"
                            style={{
                              borderColor: "rgba(162,112,53,0.25)",
                              color: "#F1DAC4",
                            }}
                            placeholder="Your name"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="contact-email"
                            className="mb-2 block font-mono text-[10px] font-semibold uppercase tracking-[0.2em]"
                            style={{ color: "#A27035" }}
                          >
                            Email
                          </label>
                          <input
                            id="contact-email"
                            name="email"
                            type="email"
                            required
                            className="w-full rounded-sm border bg-transparent px-4 py-3 text-sm transition-colors focus:outline-none focus:ring-1"
                            style={{
                              borderColor: "rgba(162,112,53,0.25)",
                              color: "#F1DAC4",
                            }}
                            placeholder="you@company.com"
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="contact-subject"
                          className="mb-2 block font-mono text-[10px] font-semibold uppercase tracking-[0.2em]"
                          style={{ color: "#A27035" }}
                        >
                          Subject
                        </label>
                        <input
                          id="contact-subject"
                          name="subject"
                          type="text"
                          required
                          className="w-full rounded-sm border bg-transparent px-4 py-3 text-sm transition-colors focus:outline-none focus:ring-1"
                          style={{
                            borderColor: "rgba(162,112,53,0.25)",
                            color: "#F1DAC4",
                          }}
                          placeholder="FPGA Design Inquiry"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="contact-message"
                          className="mb-2 block font-mono text-[10px] font-semibold uppercase tracking-[0.2em]"
                          style={{ color: "#A27035" }}
                        >
                          Message
                        </label>
                        <textarea
                          id="contact-message"
                          name="message"
                          required
                          rows={4}
                          className="w-full resize-none rounded-sm border bg-transparent px-4 py-3 text-sm transition-colors focus:outline-none focus:ring-1"
                          style={{
                            borderColor: "rgba(162,112,53,0.25)",
                            color: "#F1DAC4",
                          }}
                          placeholder="Tell us about your project requirements..."
                        />
                      </div>
                      <button
                        type="submit"
                        className="mt-2 inline-flex items-center justify-center gap-2.5 rounded-sm px-8 py-3.5 font-mono text-xs font-semibold uppercase tracking-[0.15em] transition-all hover:brightness-110"
                        style={{ backgroundColor: "#7B0D1E", color: "#F1DAC4" }}
                      >
                        Send Message
                        <Send className="h-3.5 w-3.5" />
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>

            {/* Footer line */}
            <div
              className="mt-12 flex items-center justify-between border-t pt-8 lg:mt-16"
              style={{
                borderColor: "rgba(162,112,53,0.15)",
                opacity: footerOpacity,
              }}
            >
              <div className="flex items-center">
                <Image
                  src="/images/rank4-logo.svg"
                  alt="Rank4 logo"
                  width={1340}
                  height={483}
                  className="h-auto w-[72px]"
                />
              </div>

              <p
                className="font-mono text-[9px] font-semibold tracking-[0.2em]"
                style={{ color: "#A27035", opacity: 0.5 }}
              >
                &copy; {new Date().getFullYear()} Rank4
              </p>
            </div>
          </div>
        </div>

        {/* Bottom gradient for fade-out */}
        <div
          className="pointer-events-none absolute right-0 bottom-0 left-0 z-20 h-48"
          style={{
            background: `linear-gradient(to bottom, transparent, #3D1308)`,
            opacity: clamp((scrollProgress - 0.85) / 0.15, 0, 1),
          }}
          aria-hidden="true"
        />
      </div>
    </div>
  )
}
