"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import Image from "next/image"
import {
  Cpu,
  Radio,
  BarChart3,
  Layers,
  Zap,
  Settings,
  Check,
} from "lucide-react"

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max)
}

const services = [
  {
    icon: Cpu,
    label: "FPGA",
    title: "FPGA Design & Implementation",
    description:
      "Custom RTL design, verification, and synthesis targeting Xilinx and Intel FPGAs. From concept through production-ready firmware.",
  },
  {
    icon: Radio,
    label: "RFSoC",
    title: "SDR & RFSoC Systems",
    description:
      "Software-defined radio architectures built on AMD/Xilinx RFSoC platforms. Multi-channel, wideband digital receivers and transmitters.",
  },
  {
    icon: BarChart3,
    label: "DSP",
    title: "DSP Algorithm Development",
    description:
      "Fixed-point algorithm design, spectral analysis, adaptive filtering, and modulation/demodulation chains optimized for real-time hardware.",
  },
  {
    icon: Layers,
    label: "Architecture",
    title: "System Architecture",
    description:
      "End-to-end signal chain architecture covering ADC/DAC selection, clocking strategy, data transport, and host-side integration.",
  },
  {
    icon: Zap,
    label: "High-Speed",
    title: "High-Speed Interface Design",
    description:
      "JESD204B/C, PCIe, Aurora, and Ethernet-based data movers. Proven experience with multi-gigabit serial links on FPGA platforms.",
  },
  {
    icon: Settings,
    label: "V&V",
    title: "Verification & Validation",
    description:
      "Comprehensive testbench development, hardware-in-the-loop testing, and bit-accurate simulation to ensure first-pass silicon success.",
  },
]

const principles = [
  {
    title: "Deterministic Latency",
    description:
      "Every processing pipeline is designed with hard real-time constraints. Cycle-accurate timing from input to output.",
  },
  {
    title: "Resource-Optimal Design",
    description:
      "Architectures balance throughput, power, and area to meet your exact system requirements without wasting FPGA fabric.",
  },
  {
    title: "Simulation-First Methodology",
    description:
      "Bit-accurate behavioral models precede any RTL. Algorithmic performance validated before a single line of HDL.",
  },
  {
    title: "Production-Grade Deliverables",
    description:
      "Full documentation, constrained timing closure reports, and regression test suites ready for your team.",
  },
]

/* ============================================ */
/* CAPABILITIES - Full viewport sticky section  */
/* ============================================ */

function Capabilities() {
  const capRef = useRef<HTMLDivElement>(null)
  const [capProgress, setCapProgress] = useState(0)

  const handleCapScroll = useCallback(() => {
    if (!capRef.current) return
    const rect = capRef.current.getBoundingClientRect()
    const totalScroll = capRef.current.scrollHeight - window.innerHeight
    const progress = clamp(-rect.top / totalScroll, 0, 1)
    setCapProgress(progress)
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleCapScroll, { passive: true })
    handleCapScroll()
    return () => window.removeEventListener("scroll", handleCapScroll)
  }, [handleCapScroll])

  const globalCapOpacity =
    capProgress < 0.7 ? 1 : clamp(1 - (capProgress - 0.7) / 0.25, 0, 1)

  const headerOpacity = clamp(capProgress / 0.08, 0, 1)
  const headerY = Math.round(Math.max(40 - capProgress * 500, 0))

  const getCardStyle = (index: number) => {
    const startAt = 0.05 + index * 0.07
    const opacity = clamp((capProgress - startAt) / 0.1, 0, 1)
    const y = Math.round(Math.max(50 - (capProgress - startAt) * 500, 0))
    return { opacity, y }
  }

  const capImageY = capProgress * -60
  const capImageScale = 1 + capProgress * 0.06

  return (
    <div
      ref={capRef}
      id="capabilities"
      className="relative scroll-mt-20"
      style={{ height: "400vh" }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0"
          style={{
            transform: `translateY(${capImageY}px) scale(${capImageScale})`,
            willChange: "transform",
          }}
        >
          <Image
            src="/images/capabilities-bg.jpg"
            alt="Close-up of circuit board with crimson solder mask and golden copper traces"
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
            opacity: 0.55 + capProgress * 0.25,
          }}
          aria-hidden="true"
        />

        {/* Noise */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
          aria-hidden="true"
        />

        {/* Content */}
        <div
          className="relative z-10 flex h-full flex-col justify-center px-6 md:px-12 lg:px-20"
          style={{ opacity: globalCapOpacity }}
        >
          <div className="mx-auto w-full max-w-[1400px]">
            <div
              className="mb-12 md:mb-16"
              style={{
                opacity: headerOpacity,
                transform: `translateY(${headerY}px)`,
              }}
            >
              <div className="mb-4 flex items-center gap-3">
                <div
                  className="h-px w-8"
                  style={{ backgroundColor: "#A27035" }}
                />
                <span
                  className="font-mono text-[10px] font-semibold uppercase tracking-[0.25em]"
                  style={{ color: "#A27035" }}
                >
                  What we do
                </span>
              </div>
              <h2
                className="text-balance text-3xl font-bold tracking-tight md:text-6xl lg:text-7xl"
                style={{ color: "#F1DAC4" }}
              >
                Engineering
                <br />
                <span style={{ color: "#7B0D1E" }}>Capabilities</span>
              </h2>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service, i) => {
                const { opacity, y } = getCardStyle(i)
                return (
                  <div
                    key={service.title}
                    className="relative rounded-sm border p-5 md:p-6"
                    style={{
                      borderColor: "rgba(162,112,53,0.2)",
                      backgroundColor: "rgba(33,17,3,0.6)",
                      opacity,
                      transform: `translateY(${y}px)`,
                    }}
                  >
                    <div className="mb-3 flex items-center gap-3">
                      <div
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm"
                        style={{ backgroundColor: "rgba(123,13,30,0.25)" }}
                      >
                        <service.icon
                          className="h-4 w-4"
                          style={{ color: "#A27035" }}
                          aria-hidden="true"
                        />
                      </div>
                      <span
                        className="font-mono text-[9px] font-semibold uppercase tracking-[0.2em]"
                        style={{ color: "#A27035" }}
                      >
                        {service.label}
                      </span>
                    </div>
                    <h3
                      className="text-sm font-semibold md:text-base"
                      style={{ color: "#F1DAC4" }}
                    >
                      {service.title}
                    </h3>
                    <p
                      className="mt-1.5 text-xs leading-relaxed md:text-sm"
                      style={{ color: "#F1DAC4", opacity: 0.5 }}
                    >
                      {service.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Bottom gradient */}
        <div
          className="pointer-events-none absolute right-0 bottom-0 left-0 z-20 h-48"
          style={{
            background: "linear-gradient(to bottom, transparent, #3D1308)",
            opacity: clamp((capProgress - 0.8) / 0.2, 0, 1),
          }}
          aria-hidden="true"
        />
      </div>
    </div>
  )
}

/* ============================================ */
/* PHILOSOPHY - Full viewport sticky section    */
/* ============================================ */

function Philosophy() {
  const philRef = useRef<HTMLDivElement>(null)
  const [philProgress, setPhilProgress] = useState(0)

  const handlePhilScroll = useCallback(() => {
    if (!philRef.current) return
    const rect = philRef.current.getBoundingClientRect()
    const totalScroll = philRef.current.scrollHeight - window.innerHeight
    const progress = clamp(-rect.top / totalScroll, 0, 1)
    setPhilProgress(progress)
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handlePhilScroll, { passive: true })
    handlePhilScroll()
    return () => window.removeEventListener("scroll", handlePhilScroll)
  }, [handlePhilScroll])

  // Global fade-out at the end
  const globalOpacity =
    philProgress < 0.75 ? 1 : clamp(1 - (philProgress - 0.75) / 0.2, 0, 1)

  // Header fades in immediately
  const headerOpacity = clamp(philProgress / 0.08, 0, 1)
  const headerY = Math.round(Math.max(40 - philProgress * 500, 0))

  // Description
  const descOpacity = clamp((philProgress - 0.06) / 0.1, 0, 1)
  const descY = Math.round(Math.max(30 - (philProgress - 0.06) * 300, 0))

  // Each principle card
  const getCardStyle = (index: number) => {
    const startAt = 0.12 + index * 0.1
    const opacity = clamp((philProgress - startAt) / 0.1, 0, 1)
    const y = Math.round(Math.max(50 - (philProgress - startAt) * 400, 0))
    return { opacity, y }
  }

  // Decorative element
  const decoOpacity = clamp((philProgress - 0.08) / 0.15, 0, 1)

  // Image parallax
  const imageY = philProgress * -60
  const imageScale = 1 + philProgress * 0.06

  return (
    <div
      ref={philRef}
      id="philosophy"
      className="relative scroll-mt-20"
      style={{ height: "400vh" }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0"
          style={{
            transform: `translateY(${imageY}px) scale(${imageScale})`,
            willChange: "transform",
          }}
        >
          <Image
            src="/images/philosophy-bg.jpg"
            alt="Layered silicon wafer cross-sections with warm amber glow"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>

        {/* Dark overlay that deepens on scroll */}
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: "#211103",
            opacity: 0.6 + philProgress * 0.2,
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

        {/* Content */}
        <div
          className="relative z-10 flex h-full flex-col justify-center px-6 md:px-12 lg:px-20"
          style={{ opacity: globalOpacity }}
        >
          <div className="mx-auto w-full max-w-[1400px]">
            <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-20">
              {/* Left column */}
              <div className="lg:col-span-5">
                <div
                  style={{
                    opacity: headerOpacity,
                    transform: `translateY(${headerY}px)`,
                  }}
                >
                  <div className="mb-4 flex items-center gap-3">
                    <div
                      className="h-px w-8"
                      style={{ backgroundColor: "#A27035" }}
                    />
                    <span
                      className="font-mono text-[10px] font-semibold uppercase tracking-[0.25em]"
                      style={{ color: "#A27035" }}
                    >
                      Our approach
                    </span>
                  </div>
                  <h2
                    className="text-balance text-3xl font-bold tracking-tight md:text-5xl lg:text-6xl"
                    style={{ color: "#F1DAC4" }}
                  >
                    Engineering
                    <br />
                    <span style={{ color: "#7B0D1E" }}>Philosophy</span>
                  </h2>
                </div>

                <div
                  style={{
                    opacity: descOpacity,
                    transform: `translateY(${descY}px)`,
                  }}
                >
                  <p
                    className="mt-6 max-w-md text-pretty text-sm leading-relaxed md:text-base"
                    style={{ color: "#F1DAC4", opacity: 0.55 }}
                  >
                    High-performance signal processing demands more than clever
                    algorithms. It requires disciplined engineering practices at
                    every layer of the design.
                  </p>
                </div>

                {/* Decorative geometry */}
                <div
                  className="mt-10 hidden lg:block"
                  aria-hidden="true"
                  style={{ opacity: decoOpacity }}
                >
                  <svg
                    width="120"
                    height="120"
                    viewBox="0 0 120 120"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="opacity-20"
                  >
                    <rect
                      x="1"
                      y="1"
                      width="118"
                      height="118"
                      stroke="#A27035"
                      strokeWidth="0.5"
                    />
                    <rect
                      x="20"
                      y="20"
                      width="80"
                      height="80"
                      stroke="#A27035"
                      strokeWidth="0.5"
                    />
                    <rect
                      x="40"
                      y="40"
                      width="40"
                      height="40"
                      stroke="#7B0D1E"
                      strokeWidth="0.5"
                    />
                    <line
                      x1="0"
                      y1="60"
                      x2="120"
                      y2="60"
                      stroke="#A27035"
                      strokeWidth="0.5"
                    />
                    <line
                      x1="60"
                      y1="0"
                      x2="60"
                      y2="120"
                      stroke="#A27035"
                      strokeWidth="0.5"
                    />
                  </svg>
                </div>
              </div>

              {/* Right column - Principle cards */}
              <div className="lg:col-span-7">
                <div className="flex flex-col gap-4">
                  {principles.map((principle, i) => {
                    const { opacity, y } = getCardStyle(i)
                    return (
                      <div
                        key={principle.title}
                        className="flex gap-5 rounded-sm border p-6 md:p-8"
                        style={{
                          borderColor: "rgba(162,112,53,0.12)",
                          backgroundColor: "rgba(33,17,3,0.55)",
                          opacity,
                          transform: `translateY(${y}px)`,
                        }}
                      >
                        <div className="shrink-0 pt-0.5">
                          <div
                            className="flex h-8 w-8 items-center justify-center rounded-full"
                            style={{
                              backgroundColor: "rgba(123,13,30,0.2)",
                            }}
                          >
                            <Check
                              className="h-4 w-4"
                              style={{ color: "#A27035" }}
                              aria-hidden="true"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="flex items-baseline gap-3">
                            <span
                              className="font-mono text-[10px] font-semibold tracking-wider"
                              style={{ color: "#A27035", opacity: 0.5 }}
                            >
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            <h3
                              className="text-base font-semibold md:text-lg"
                              style={{ color: "#F1DAC4" }}
                            >
                              {principle.title}
                            </h3>
                          </div>
                          <p
                            className="mt-2 pl-8 text-sm leading-relaxed"
                            style={{ color: "#F1DAC4", opacity: 0.45 }}
                          >
                            {principle.description}
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom gradient */}
        <div
          className="pointer-events-none absolute right-0 bottom-0 left-0 z-20 h-48"
          style={{
            background: "linear-gradient(to bottom, transparent, #3D1308)",
            opacity: clamp((philProgress - 0.8) / 0.2, 0, 1),
          }}
          aria-hidden="true"
        />
      </div>
    </div>
  )
}

/* ============================================ */
/* Combined export                              */
/* ============================================ */

export function CapabilitiesPhilosophy() {
  return (
    <>
      <Capabilities />
      <Philosophy />
    </>
  )
}
