"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Cpu, Target, Layers, Zap, Shield, Clock, Users } from "lucide-react"

const differentiators = [
  {
    icon: Zap,
    title: "Rapid Prototyping",
    description:
      "From concept to working silicon in weeks, not months. Our modular IP library and simulation-first methodology accelerate time-to-first-signal.",
  },
  {
    icon: Shield,
    title: "Production-Grade Deliverables",
    description:
      "Every project ships with comprehensive documentation, testbenches, and deployment-ready code. No throwaway prototypes.",
  },
  {
    icon: Clock,
    title: "Deterministic Performance",
    description:
      "We guarantee latency bounds and resource utilization. Timing closure is verified across all operating conditions before delivery.",
  },
  {
    icon: Users,
    title: "Embedded Team Extension",
    description:
      "We integrate with your engineering workflow. Direct communication, shared repositories, and knowledge transfer built into every engagement.",
  },
]

const sections = [
  {
    icon: Cpu,
    label: "What we do",
    title: "Engineering Capabilities",
    description:
      "FPGA design, SDR systems, DSP algorithms, system architecture, high-speed interfaces, and comprehensive verification services.",
    href: "/capabilities",
    image: "/images/capabilities-bg.jpg",
  },
  {
    icon: Target,
    label: "Our approach",
    title: "Engineering Philosophy",
    description:
      "Deterministic latency, resource-optimal design, simulation-first methodology, and production-grade deliverables.",
    href: "/philosophy",
    image: "/images/philosophy-bg.jpg",
  },
  {
    icon: Layers,
    label: "Silicon expertise",
    title: "Development Platforms",
    description:
      "Deep expertise in AMD/Xilinx Versal ACAP and Zynq UltraScale+ RFSoC platforms for demanding signal processing applications.",
    href: "/platforms",
    image: "/images/platforms-bg.jpg",
  },
]

export function HomeSections() {
  return (
    <section
      className="px-6 py-20 md:px-12 md:py-32 lg:px-20"
      style={{ backgroundColor: "#211103" }}
    >
      <div className="mx-auto max-w-[1400px]">
        {/* Section header */}
        <div className="mb-12 md:mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8" style={{ backgroundColor: "#A27035" }} />
            <span
              className="font-mono text-[10px] font-semibold uppercase tracking-[0.25em]"
              style={{ color: "#A27035" }}
            >
              Explore
            </span>
          </div>
          <h2
            className="text-3xl font-bold tracking-tight md:text-5xl"
            style={{ color: "#F1DAC4" }}
          >
            Learn More
          </h2>
        </div>

        {/* Section cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {sections.map((section) => (
            <Link
              key={section.href}
              href={section.href}
              className="group relative overflow-hidden rounded-sm border transition-all hover:border-[#A27035]/50"
              style={{
                borderColor: "rgba(162,112,53,0.2)",
              }}
            >
              {/* Background image */}
              <div className="absolute inset-0">
                <Image
                  src={section.image}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(33,17,3,0.95) 30%, rgba(33,17,3,0.7) 100%)",
                  }}
                />
              </div>

              {/* Content */}
              <div className="relative flex flex-col p-6 md:p-8" style={{ minHeight: "320px" }}>
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-sm"
                  style={{ backgroundColor: "rgba(123,13,30,0.4)" }}
                >
                  <section.icon className="h-5 w-5" style={{ color: "#A27035" }} />
                </div>

                <div className="mt-auto">
                  <span
                    className="font-mono text-[9px] font-semibold uppercase tracking-[0.2em]"
                    style={{ color: "#A27035" }}
                  >
                    {section.label}
                  </span>
                  <h3
                    className="mt-2 text-xl font-bold md:text-2xl"
                    style={{ color: "#F1DAC4" }}
                  >
                    {section.title}
                  </h3>
                  <p
                    className="mt-3 text-sm leading-relaxed"
                    style={{ color: "#F1DAC4", opacity: 0.55 }}
                  >
                    {section.description}
                  </p>

                  <div
                    className="mt-4 inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.15em] transition-all group-hover:gap-3"
                    style={{ color: "#A27035" }}
                  >
                    Learn more
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Why Rank4 - Bento Grid Style */}
        <div className="mt-24 md:mt-32">
          <div className="mb-12 md:mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8" style={{ backgroundColor: "#A27035" }} />
              <span
                className="font-mono text-[10px] font-semibold uppercase tracking-[0.25em]"
                style={{ color: "#A27035" }}
              >
                Why Rank4
              </span>
            </div>
            <h2
              className="text-3xl font-bold tracking-tight md:text-5xl"
              style={{ color: "#F1DAC4" }}
            >
              The Rank4 Difference
            </h2>
          </div>

          {/* Bento Grid */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
            {/* Card 1 - Large featured card */}
            <div
              className="group relative col-span-1 row-span-1 overflow-hidden rounded-lg border p-6 transition-all duration-300 hover:border-[#A27035]/60 md:col-span-2 md:row-span-2 md:p-8"
              style={{
                borderColor: "rgba(162,112,53,0.2)",
                background: "linear-gradient(135deg, rgba(123,13,30,0.15) 0%, rgba(33,17,3,0.8) 100%)",
              }}
            >
              {/* Glow effect on hover */}
              <div 
                className="pointer-events-none absolute -inset-px rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background: "radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(162,112,53,0.15), transparent 40%)",
                }}
              />
              
              {/* Decorative background pattern */}
              <div 
                className="absolute top-0 right-0 h-64 w-64 opacity-10"
                style={{
                  background: "radial-gradient(circle, #7B0D1E 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
              />

              <div className="relative">
                <div className="flex items-center gap-3">
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-lg transition-all duration-300 group-hover:scale-110"
                    style={{ 
                      backgroundColor: "rgba(123,13,30,0.3)",
                      boxShadow: "0 0 0 1px rgba(162,112,53,0.2)",
                    }}
                  >
                    <Zap className="h-7 w-7" style={{ color: "#A27035" }} />
                  </div>
                  <span 
                    className="rounded-full px-3 py-1 font-mono text-[9px] font-bold uppercase tracking-wider"
                    style={{ 
                      backgroundColor: "rgba(162,112,53,0.15)", 
                      color: "#A27035",
                      border: "1px solid rgba(162,112,53,0.3)",
                    }}
                  >
                    Core Strength
                  </span>
                </div>
                <h3
                  className="mt-6 text-2xl font-bold md:text-3xl"
                  style={{ color: "#F1DAC4" }}
                >
                  {differentiators[0].title}
                </h3>
                <p
                  className="mt-4 max-w-md text-base leading-relaxed md:text-lg"
                  style={{ color: "#F1DAC4", opacity: 0.6 }}
                >
                  {differentiators[0].description}
                </p>
                
                {/* Stats row */}
                <div className="mt-8 flex gap-8">
                  <div>
                    <div className="text-3xl font-bold" style={{ color: "#7B0D1E" }}>2-4x</div>
                    <div className="text-xs uppercase tracking-wider" style={{ color: "#F1DAC4", opacity: 0.5 }}>Faster delivery</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold" style={{ color: "#7B0D1E" }}>100+</div>
                    <div className="text-xs uppercase tracking-wider" style={{ color: "#F1DAC4", opacity: 0.5 }}>IP modules</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Remaining cards - Compact style */}
            {differentiators.slice(1).map((item, index) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-lg border p-5 transition-all duration-300 hover:border-[#A27035]/60 md:p-6"
                style={{
                  borderColor: "rgba(162,112,53,0.2)",
                  backgroundColor: "rgba(33,17,3,0.6)",
                }}
              >
                {/* Subtle gradient overlay */}
                <div 
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background: "linear-gradient(135deg, rgba(123,13,30,0.1) 0%, transparent 60%)",
                  }}
                />

                <div className="relative">
                  {/* Number badge */}
                  <div className="flex items-center justify-between">
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-lg transition-all duration-300 group-hover:scale-110"
                      style={{ 
                        backgroundColor: "rgba(123,13,30,0.25)",
                        boxShadow: "0 0 0 1px rgba(162,112,53,0.15)",
                      }}
                    >
                      <item.icon className="h-5 w-5" style={{ color: "#A27035" }} />
                    </div>
                    <span 
                      className="font-mono text-4xl font-bold"
                      style={{ color: "rgba(162,112,53,0.15)" }}
                    >
                      0{index + 2}
                    </span>
                  </div>
                  
                  <h3
                    className="mt-4 text-lg font-bold"
                    style={{ color: "#F1DAC4" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="mt-2 text-sm leading-relaxed"
                    style={{ color: "#F1DAC4", opacity: 0.5 }}
                  >
                    {item.description}
                  </p>

                  {/* Hover arrow indicator */}
                  <div 
                    className="mt-4 flex items-center gap-1 text-xs font-medium opacity-0 transition-all duration-300 group-hover:opacity-100"
                    style={{ color: "#A27035" }}
                  >
                    <span className="font-mono uppercase tracking-wider">Learn more</span>
                    <ArrowRight className="h-3 w-3" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center md:mt-24">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-sm px-10 py-4 font-mono text-sm font-semibold uppercase tracking-[0.15em] transition-all hover:brightness-110"
            style={{ backgroundColor: "#7B0D1E", color: "#F1DAC4" }}
          >
            Start a Project
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
