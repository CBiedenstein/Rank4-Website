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

  // Header visible immediately
  const headerOpacity = 1
  const headerY = 0

  const getCardStyle = (index: number) => {
    const startAt = index * 0.06
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
      <div className="sticky top-0 h-dvh w-full overflow-hidden">
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
          className="relative z-10 flex h-full flex-col justify-start px-6 pb-[max(1rem,env(safe-area-inset-bottom))] pt-[max(4.5rem,calc(3.5rem+env(safe-area-inset-top)))] md:justify-center md:px-12 lg:px-20"
          style={{ opacity: globalCapOpacity }}
        >
          <div className="mx-auto w-full max-w-[1400px]">
            <div
              className="mb-4 md:mb-12"
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
                className="text-balance text-2xl font-bold tracking-tight md:text-6xl lg:text-7xl"
                style={{ color: "#F1DAC4" }}
              >
                Engineering
                <br />
                <span style={{ color: "#7B0D1E" }}>Capabilities</span>
              </h2>
            </div>

            <div className="grid gap-2 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3">
              {services.map((service, i) => {
                const { opacity, y } = getCardStyle(i)
                return (
                  <div
                    key={service.title}
                    className="relative rounded-sm border p-3 md:p-6"
                    style={{
                      borderColor: "rgba(162,112,53,0.2)",
                      backgroundColor: "rgba(33,17,3,0.85)",
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
                      className="mt-1.5 hidden text-xs leading-relaxed sm:block md:text-sm"
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

  // Header and description visible immediately
  const headerOpacity = 1
  const headerY = 0

  const descOpacity = 1
  const descY = 0

  // Each principle card reveals as you scroll
  const getCardStyle = (index: number) => {
    const startAt = index * 0.08
    const opacity = clamp((philProgress - startAt) / 0.1, 0, 1)
    const y = Math.round(Math.max(50 - (philProgress - startAt) * 400, 0))
    return { opacity, y }
  }

  // Decorative element visible immediately
  const decoOpacity = 1

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
          className="relative z-10 flex h-full flex-col justify-start px-6 pb-[max(1rem,env(safe-area-inset-bottom))] pt-[max(4.5rem,calc(3.5rem+env(safe-area-inset-top)))] md:justify-center md:px-12 lg:px-20"
          style={{ opacity: globalOpacity }}
        >
          <div className="mx-auto w-full max-w-[1400px]">
            <div className="grid items-start gap-4 lg:grid-cols-12 lg:gap-16">
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
                    className="text-balance text-2xl font-bold tracking-tight md:text-5xl lg:text-6xl"
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
                    className="mt-4 hidden max-w-md text-pretty text-sm leading-relaxed sm:block md:mt-6 md:text-base"
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
                <div className="flex flex-col gap-2 md:gap-4">
                  {principles.map((principle, i) => {
                    const { opacity, y } = getCardStyle(i)
                    return (
                      <div
                        key={principle.title}
                        className="flex gap-3 rounded-sm border p-3 md:gap-5 md:p-8"
                        style={{
                          borderColor: "rgba(162,112,53,0.12)",
                          backgroundColor: "rgba(33,17,3,0.85)",
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
                            className="mt-1 hidden pl-8 text-sm leading-relaxed sm:block md:mt-2"
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
/* PLATFORMS - Full viewport sticky section     */
/* ============================================ */

const platforms = [
  {
    name: "Xilinx Versal",
    tagline: "Adaptive Compute Acceleration",
    description:
      "The Versal ACAP architecture combines scalar processing, adaptable hardware, and intelligent engines for heterogeneous acceleration. We leverage Versal AI Core and Prime series for demanding signal processing and machine learning inference workloads.",
    features: [
      "AI Engine array for vector DSP",
      "Programmable Network-on-Chip",
      "Hardened memory controllers",
      "Integrated PCIe Gen5",
    ],
  },
  {
    name: "Zynq UltraScale+ RFSoC",
    tagline: "Direct RF Integration",
    description:
      "Purpose-built for software-defined radio applications, RFSoC integrates RF-class ADCs and DACs directly into the FPGA fabric. We specialize in multi-channel wideband systems using the RFSoC Gen3 family with up to 16 channels at 5+ GSPS.",
    features: [
      "Integrated RF-ADC/DAC tiles",
      "SD-FEC for 5G/LTE",
      "Arm Cortex-A53 + R5F MPSoC",
      "Direct RF sampling to 6GHz",
    ],
  },
]

function Platforms() {
  const platformsRef = useRef<HTMLDivElement>(null)
  const [platformsProgress, setPlatformsProgress] = useState(0)

  const handlePlatformsScroll = useCallback(() => {
    if (!platformsRef.current) return
    const rect = platformsRef.current.getBoundingClientRect()
    const totalScroll = platformsRef.current.scrollHeight - window.innerHeight
    const progress = clamp(-rect.top / totalScroll, 0, 1)
    setPlatformsProgress(progress)
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handlePlatformsScroll, { passive: true })
    handlePlatformsScroll()
    return () => window.removeEventListener("scroll", handlePlatformsScroll)
  }, [handlePlatformsScroll])

  // Global fade-out at the end
  const globalOpacity =
    platformsProgress < 0.75
      ? 1
      : clamp(1 - (platformsProgress - 0.75) / 0.2, 0, 1)

  // Header visible immediately
  const headerOpacity = 1
  const headerY = 0

  // Cards reveal sequentially
  const getCardStyle = (index: number) => {
    const startAt = index * 0.15
    const opacity = clamp((platformsProgress - startAt) / 0.15, 0, 1)
    const y = Math.round(Math.max(60 - (platformsProgress - startAt) * 400, 0))
    return { opacity, y }
  }

  // Image parallax
  const imageY = platformsProgress * -60
  const imageScale = 1 + platformsProgress * 0.06

  return (
    <div
      ref={platformsRef}
      id="platforms"
      className="relative scroll-mt-20"
      style={{ height: "350vh" }}
    >
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
            src="/images/platforms-bg.jpg"
            alt="AMD Xilinx FPGA chip with exposed silicon die and gold bond wires"
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
            opacity: 0.6 + platformsProgress * 0.2,
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
          className="relative z-10 flex h-full flex-col justify-start px-6 pb-[max(1rem,env(safe-area-inset-bottom))] pt-[max(4.5rem,calc(3.5rem+env(safe-area-inset-top)))] md:justify-center md:px-12 lg:px-20"
          style={{ opacity: globalOpacity }}
        >
          <div className="mx-auto w-full max-w-[1400px]">
            {/* Header */}
            <div
              className="mb-6 md:mb-12"
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
                  Development Platforms
                </span>
              </div>
              <h2
                className="text-balance text-2xl font-bold tracking-tight md:text-6xl lg:text-7xl"
                style={{ color: "#F1DAC4" }}
              >
                Silicon
                <br />
                <span style={{ color: "#7B0D1E" }}>Expertise</span>
              </h2>
            </div>

            {/* Platform cards */}
            <div className="grid gap-4 lg:grid-cols-2 lg:gap-6">
              {platforms.map((platform, i) => {
                const { opacity, y } = getCardStyle(i)
                return (
                  <div
                    key={platform.name}
                    className="rounded-sm border p-4 md:p-8"
                    style={{
                      borderColor: "rgba(162,112,53,0.2)",
                      backgroundColor: "rgba(33,17,3,0.85)",
                      opacity,
                      transform: `translateY(${y}px)`,
                    }}
                  >
                    <div className="mb-4">
                      <span
                        className="font-mono text-[9px] font-semibold uppercase tracking-[0.2em]"
                        style={{ color: "#A27035" }}
                      >
                        {platform.tagline}
                      </span>
                      <h3
                        className="mt-1 text-xl font-bold md:text-2xl"
                        style={{ color: "#F1DAC4" }}
                      >
                        {platform.name}
                      </h3>
                    </div>
                    <p
                      className="hidden text-sm leading-relaxed sm:block md:text-base"
                      style={{ color: "#F1DAC4", opacity: 0.55 }}
                    >
                      {platform.description}
                    </p>
                    <ul className="mt-4 grid gap-2 sm:grid-cols-2 md:mt-6">
                      {platform.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-xs md:text-sm"
                          style={{ color: "#F1DAC4", opacity: 0.7 }}
                        >
                          <div
                            className="h-1 w-1 shrink-0 rounded-full"
                            style={{ backgroundColor: "#7B0D1E" }}
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
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
            opacity: clamp((platformsProgress - 0.8) / 0.2, 0, 1),
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
      <Platforms />
    </>
  )
}
