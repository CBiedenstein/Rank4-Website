"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Cpu, Radio, Layers, Zap, Server, Wifi } from "lucide-react"

const platforms = [
  {
    name: "Xilinx Versal",
    tagline: "Adaptive Compute Acceleration Platform",
    hero: "The Versal architecture represents a paradigm shift in programmable devices, combining scalar processing engines, adaptable hardware, and intelligent engines in a single platform.",
    description:
      "We leverage the Versal ACAP for applications requiring heterogeneous compute: AI inference alongside traditional DSP, high-speed networking with custom packet processing, or any workload demanding the combination of software flexibility and hardware performance.",
    families: [
      {
        name: "Versal AI Core",
        description: "Maximum AI Engine density for ML inference and advanced DSP",
      },
      {
        name: "Versal Prime",
        description: "Balanced architecture for general-purpose acceleration",
      },
      {
        name: "Versal Premium",
        description: "Highest I/O bandwidth for networking and data center",
      },
    ],
    features: [
      {
        icon: Cpu,
        title: "AI Engine Array",
        description:
          "VLIW/SIMD vector processors optimized for matrix math, FIR filtering, and FFT operations. Up to 400 AI Engines delivering 100+ INT8 TOPS.",
      },
      {
        icon: Layers,
        title: "Programmable Network-on-Chip",
        description:
          "Deterministic, high-bandwidth interconnect between processing elements. QoS guarantees for real-time data movement.",
      },
      {
        icon: Server,
        title: "Hardened Memory Controllers",
        description:
          "Integrated DDR4/LPDDR4 and HBM controllers with ECC. Bandwidth exceeding 400 GB/s with HBM configurations.",
      },
      {
        icon: Zap,
        title: "PCIe Gen5 & CCIX",
        description:
          "Native support for the latest high-speed interfaces. Cache-coherent interconnect for tight CPU-FPGA integration.",
      },
    ],
    useCases: [
      "5G massive MIMO baseband processing",
      "Real-time AI inference at the edge",
      "High-frequency trading acceleration",
      "Video transcoding and analytics",
      "Genomics sequence alignment",
      "Radar and electronic warfare",
    ],
  },
  {
    name: "Zynq UltraScale+ RFSoC",
    tagline: "Direct RF Integration",
    hero: "Purpose-built for software-defined radio, the RFSoC integrates RF-class data converters directly into programmable logic, eliminating the need for external ADC/DAC chips and their associated complexity.",
    description:
      "We specialize in RFSoC-based systems for defense, telecommunications, and scientific instrumentation. The integrated RF sampling architecture enables system designs that were previously impossible or impractical with discrete components.",
    families: [
      {
        name: "RFSoC Gen 3",
        description: "Latest generation with up to 16 ADC/DAC channels at 5+ GSPS",
      },
      {
        name: "RFSoC DFE",
        description: "Digital Front-End optimized for 5G radio units",
      },
      {
        name: "RFSoC Gen 1/2",
        description: "Proven platforms for cost-sensitive applications",
      },
    ],
    features: [
      {
        icon: Radio,
        title: "Integrated RF-ADC/DAC",
        description:
          "Up to 14-bit ADCs sampling at 5 GSPS and 14-bit DACs at 10 GSPS. Direct RF sampling eliminates mixing stages.",
      },
      {
        icon: Wifi,
        title: "SD-FEC Cores",
        description:
          "Hardened LDPC and Turbo encoders/decoders for 5G NR and LTE. Line-rate processing without consuming PL resources.",
      },
      {
        icon: Cpu,
        title: "Arm MPSoC Subsystem",
        description:
          "Quad-core Cortex-A53 application processor plus dual Cortex-R5F real-time cores. Full Linux support with PYNQ compatibility.",
      },
      {
        icon: Layers,
        title: "Programmable Logic",
        description:
          "UltraScale+ architecture PL with DSP48E2 slices, UltraRAM, and high-speed transceivers for custom signal processing.",
      },
    ],
    useCases: [
      "Software-defined radio platforms",
      "Phased array radar systems",
      "5G/LTE small cells and radio units",
      "Spectrum monitoring and SIGINT",
      "Test and measurement equipment",
      "Quantum computing control systems",
    ],
  },
]

const experience = [
  {
    metric: "50+",
    label: "Versal & RFSoC projects delivered",
  },
  {
    metric: "Gen 1-3",
    label: "RFSoC generations supported",
  },
  {
    metric: "10,000+",
    label: "Hours MTBF achieved",
  },
  {
    metric: "24/7",
    label: "Mission-critical deployments",
  },
]

export function PlatformsContent() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#211103" }}>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/platforms-bg.jpg"
            alt="FPGA chip background"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(33,17,3,0.7) 0%, rgba(33,17,3,1) 100%)",
            }}
          />
        </div>

        <div className="relative px-6 pb-20 pt-32 md:px-12 md:pb-32 md:pt-40 lg:px-20">
          <div className="mx-auto max-w-[1400px]">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8" style={{ backgroundColor: "#A27035" }} />
              <span
                className="font-mono text-[10px] font-semibold uppercase tracking-[0.25em]"
                style={{ color: "#A27035" }}
              >
                Development platforms
              </span>
            </div>
            <h1
              className="text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl"
              style={{ color: "#F1DAC4" }}
            >
              Silicon
              <br />
              <span style={{ color: "#7B0D1E" }}>Expertise</span>
            </h1>
            <p
              className="mt-6 max-w-2xl text-base leading-relaxed md:text-lg"
              style={{ color: "#F1DAC4", opacity: 0.65 }}
            >
              We focus on AMD/Xilinx{"'"}s most advanced programmable platforms.
              Deep expertise in these architectures enables us to extract
              maximum performance for your application.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Stats */}
      <section
        className="px-6 py-12 md:px-12 md:py-16 lg:px-20"
        style={{ backgroundColor: "rgba(123,13,30,0.1)" }}
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {experience.map((stat) => (
              <div key={stat.label} className="text-center">
                <p
                  className="font-mono text-3xl font-bold md:text-4xl"
                  style={{ color: "#F1DAC4" }}
                >
                  {stat.metric}
                </p>
                <p
                  className="mt-2 font-mono text-[10px] font-semibold uppercase tracking-[0.15em]"
                  style={{ color: "#A27035" }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Deep Dives */}
      {platforms.map((platform, platformIndex) => (
        <section
          key={platform.name}
          className="px-6 py-16 md:px-12 md:py-24 lg:px-20"
          style={{
            backgroundColor:
              platformIndex % 2 === 1 ? "rgba(123,13,30,0.05)" : "transparent",
          }}
        >
          <div className="mx-auto max-w-[1400px]">
            {/* Platform Header */}
            <div className="mb-12 md:mb-16">
              <span
                className="font-mono text-[10px] font-semibold uppercase tracking-[0.25em]"
                style={{ color: "#A27035" }}
              >
                {platform.tagline}
              </span>
              <h2
                className="mt-2 text-3xl font-bold tracking-tight md:text-5xl"
                style={{ color: "#F1DAC4" }}
              >
                {platform.name}
              </h2>
              <p
                className="mt-4 max-w-3xl text-base leading-relaxed md:text-lg"
                style={{ color: "#F1DAC4", opacity: 0.7 }}
              >
                {platform.hero}
              </p>
              <p
                className="mt-4 max-w-3xl text-sm leading-relaxed md:text-base"
                style={{ color: "#F1DAC4", opacity: 0.5 }}
              >
                {platform.description}
              </p>
            </div>

            {/* Device Families */}
            <div className="mb-12 md:mb-16">
              <h3
                className="mb-6 font-mono text-[11px] font-semibold uppercase tracking-[0.2em]"
                style={{ color: "#A27035" }}
              >
                Device Families We Support
              </h3>
              <div className="grid gap-4 sm:grid-cols-3">
                {platform.families.map((family) => (
                  <div
                    key={family.name}
                    className="rounded-sm border p-5"
                    style={{
                      borderColor: "rgba(162,112,53,0.2)",
                      backgroundColor: "rgba(33,17,3,0.5)",
                    }}
                  >
                    <h4
                      className="font-semibold"
                      style={{ color: "#F1DAC4" }}
                    >
                      {family.name}
                    </h4>
                    <p
                      className="mt-2 text-sm"
                      style={{ color: "#F1DAC4", opacity: 0.5 }}
                    >
                      {family.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div className="mb-12 md:mb-16">
              <h3
                className="mb-6 font-mono text-[11px] font-semibold uppercase tracking-[0.2em]"
                style={{ color: "#A27035" }}
              >
                Key Architecture Features
              </h3>
              <div className="grid gap-6 md:grid-cols-2">
                {platform.features.map((feature) => (
                  <div
                    key={feature.title}
                    className="flex gap-4 rounded-sm border p-6"
                    style={{
                      borderColor: "rgba(162,112,53,0.15)",
                      backgroundColor: "rgba(33,17,3,0.4)",
                    }}
                  >
                    <div
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm"
                      style={{ backgroundColor: "rgba(123,13,30,0.25)" }}
                    >
                      <feature.icon
                        className="h-5 w-5"
                        style={{ color: "#A27035" }}
                      />
                    </div>
                    <div>
                      <h4
                        className="font-semibold"
                        style={{ color: "#F1DAC4" }}
                      >
                        {feature.title}
                      </h4>
                      <p
                        className="mt-2 text-sm leading-relaxed"
                        style={{ color: "#F1DAC4", opacity: 0.55 }}
                      >
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Use Cases */}
            <div>
              <h3
                className="mb-6 font-mono text-[11px] font-semibold uppercase tracking-[0.2em]"
                style={{ color: "#A27035" }}
              >
                Common Applications
              </h3>
              <div className="flex flex-wrap gap-3">
                {platform.useCases.map((useCase) => (
                  <span
                    key={useCase}
                    className="rounded-sm border px-4 py-2 text-sm"
                    style={{
                      borderColor: "rgba(162,112,53,0.2)",
                      color: "#F1DAC4",
                      opacity: 0.75,
                    }}
                  >
                    {useCase}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="px-6 py-16 md:px-12 md:py-24 lg:px-20">
        <div className="mx-auto max-w-[1400px]">
          <div
            className="rounded-sm border p-8 md:p-12 lg:p-16"
            style={{
              borderColor: "rgba(162,112,53,0.2)",
              backgroundColor: "rgba(123,13,30,0.15)",
            }}
          >
            <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
              <div>
                <h2
                  className="text-2xl font-bold md:text-3xl"
                  style={{ color: "#F1DAC4" }}
                >
                  Have a Versal or RFSoC project in mind?
                </h2>
                <p
                  className="mt-3 max-w-xl text-base"
                  style={{ color: "#F1DAC4", opacity: 0.55 }}
                >
                  Whether you are starting fresh or need help optimizing an
                  existing design, our deep platform expertise can accelerate
                  your development.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex shrink-0 items-center gap-2 rounded-sm px-8 py-4 font-mono text-xs font-semibold uppercase tracking-[0.15em] transition-all hover:brightness-110"
                style={{ backgroundColor: "#7B0D1E", color: "#F1DAC4" }}
              >
                Discuss Your Project
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
