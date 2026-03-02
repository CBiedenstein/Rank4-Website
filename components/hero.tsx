"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import Image from "next/image"
import { scrollToSection } from "@/lib/scroll-to-section"

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

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

  // Derive animation values from scroll progress
  // Phase 1: 0-0.25 = title reveal
  // Phase 2: 0.25-0.5 = tagline + description
  // Phase 3: 0.5-0.75 = metrics
  // Phase 4: 0.75-1.0 = fade out to next section

  // Title is fully visible immediately, no individual fade-out
  const titleOpacity = 1
  const titleY = 0

  // Each layer fades IN on scroll but never fades out individually
  const taglineOpacity = clamp((scrollProgress - 0.08) / 0.12, 0, 1)
  const taglineY = Math.max(30 - (scrollProgress - 0.08) * 250, 0)

  const descOpacity = clamp((scrollProgress - 0.2) / 0.12, 0, 1)
  const descY = Math.max(30 - (scrollProgress - 0.2) * 250, 0)

  const metricsOpacity = clamp((scrollProgress - 0.35) / 0.13, 0, 1)
  const metricsY = Math.max(40 - (scrollProgress - 0.35) * 300, 0)

  const ctaOpacity = clamp((scrollProgress - 0.48) / 0.1, 0, 1)

  // Fade everything out at the end
  const fadeOut = clamp(1 - (scrollProgress - 0.75) / 0.2, 0, 1)
  const globalOpacity = scrollProgress < 0.75 ? 1 : fadeOut

  // Image parallax - slight upward drift
  const imageY = scrollProgress * -80
  const imageScale = 1 + scrollProgress * 0.08

  return (
    <div ref={containerRef} className="relative" style={{ height: "450vh" }}>
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
            src="/images/hero-3d.png"
            alt="FPGA chip with golden circuit traces rendered as a dramatic 3D object"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>

        {/* Dark overlay - deepens as you scroll to improve text readability */}
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: "#211103",
            opacity: 0.4 + scrollProgress * 0.3,
          }}
          aria-hidden="true"
        />

        {/* Noise texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
          aria-hidden="true"
        />

        {/* Floating content layers */}
        <div
          className="relative z-10 flex h-full flex-col justify-center px-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-[max(5rem,calc(4rem+env(safe-area-inset-top)))] md:px-12 lg:px-20"
          style={{ opacity: globalOpacity }}
        >
          <div className="mx-auto w-full max-w-[1400px]">

            {/* Status bar - always visible */}
            <div
              className="mb-8 flex items-center gap-3 md:mb-12"
              style={{
                opacity: titleOpacity,
                transform: `translateY(${titleY * 0.4}px)`,
                willChange: "transform, opacity",
              }}
            >
              <span
                className="inline-block h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: "#A27035" }}
              />
              <span
                className="font-mono text-[10px] font-semibold uppercase tracking-[0.25em]"
                style={{ color: "#A27035" }}
              >
                Accepting new projects
              </span>
            </div>

            {/* Main logo */}
            <div
              style={{
                opacity: titleOpacity,
                transform: `translateY(${titleY}px)`,
              }}
            >
              <h1 className="sr-only">Rank4</h1>
              <Image
                src="/images/rank4-logo.svg"
                alt="Rank4 logo"
                width={1340}
                height={486}
                className="h-auto w-[clamp(240px,55vw,720px)]"
                priority
              />
            </div>

            {/* Tagline with horizontal rules */}
            <div
              className="mt-6 flex items-center gap-4 md:mt-10 md:gap-6"
              style={{
                opacity: taglineOpacity,
                transform: `translateY(${taglineY}px)`,
                willChange: "transform, opacity",
              }}
            >
              <div
                className="h-px w-12 md:w-24"
                style={{ backgroundColor: "#A27035" }}
              />
              <span
                className="shrink-0 font-mono text-[10px] uppercase tracking-[0.3em] md:text-xs"
                style={{ color: "#F1DAC4", opacity: 0.7 }}
              >
                Post-Modern Technology Solutions
              </span>
              <div
                className="h-px flex-1"
                style={{ backgroundColor: "#A27035", opacity: 0.3 }}
              />
            </div>

            {/* Description text */}
            <div
              className="mt-6 max-w-lg md:mt-8"
              style={{
                opacity: descOpacity,
                transform: `translateY(${descY}px)`,
                willChange: "transform, opacity",
              }}
            >
              <p
                className="text-sm leading-relaxed md:text-base"
                style={{ color: "#F1DAC4", opacity: 0.65 }}
              >
                Expert engineering consultancy specializing in high-performance
                FPGA, RFSoC, and Digital Signal Processing design. Precision-engineered
                solutions for the most demanding applications.
              </p>
            </div>

            {/* Metrics row */}
            <div
              className="mt-10 flex gap-10 md:mt-14 md:gap-16"
              style={{
                opacity: metricsOpacity,
                transform: `translateY(${metricsY}px)`,
                willChange: "transform, opacity",
              }}
            >
              {[
                { value: "15+", label: "Years experience" },
                { value: "200+", label: "Designs delivered" },
                { value: "99.9%", label: "System uptime" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p
                    className="font-mono text-2xl font-bold tracking-tight md:text-4xl"
                    style={{ color: "#F1DAC4" }}
                  >
                    {stat.value}
                  </p>
                  <p
                    className="mt-1 font-mono text-[9px] font-semibold uppercase tracking-[0.2em] md:text-[10px]"
                    style={{ color: "#A27035" }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div
              className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center md:mt-14"
              style={{
                opacity: ctaOpacity,
                willChange: "opacity",
              }}
            >
              <button
                onClick={() => scrollToSection("contact", 0.35)}
                className="inline-flex cursor-pointer items-center justify-center rounded-sm px-8 py-3.5 font-mono text-xs font-semibold uppercase tracking-[0.15em] transition-all hover:brightness-110"
                style={{ backgroundColor: "#7B0D1E", color: "#F1DAC4" }}
              >
                Start a project
              </button>
              <a
                href="#capabilities"
                className="inline-flex items-center justify-center rounded-sm border px-8 py-3.5 font-mono text-xs font-semibold uppercase tracking-[0.15em] transition-all hover:bg-[#F1DAC4]/10"
                style={{ borderColor: "rgba(241,218,196,0.3)", color: "#F1DAC4" }}
              >
                Our capabilities
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator - only visible at the start */}
        <div
          className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
          style={{
            opacity: clamp(1 - scrollProgress * 8, 0, 0.6),
          }}
        >
          <div className="flex flex-col items-center gap-2">
            <div
              className="h-10 w-px animate-pulse"
              style={{ backgroundColor: "#A27035" }}
            />
            <span
              className="font-mono text-[9px] font-semibold uppercase tracking-[0.3em]"
              style={{ color: "#A27035" }}
            >
              Scroll
            </span>
          </div>
        </div>

        {/* Bottom gradient transition to next section */}
        <div
          className="pointer-events-none absolute right-0 bottom-0 left-0 z-20 h-48"
          style={{
            background: `linear-gradient(to bottom, transparent, #3D1308)`,
            opacity: clamp((scrollProgress - 0.8) / 0.2, 0, 1),
          }}
          aria-hidden="true"
        />
      </div>
    </div>
  )
}

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max)
}
