"use client"

import Image from "next/image"
import Link from "next/link"
import {
  Cpu,
  Radio,
  BarChart3,
  Layers,
  Zap,
  Settings,
  ArrowRight,
  CheckCircle2,
} from "lucide-react"

const services = [
  {
    icon: Cpu,
    label: "FPGA",
    title: "FPGA Design & Implementation",
    description:
      "Custom RTL design, verification, and synthesis targeting Xilinx and Intel FPGAs. From concept through production-ready firmware.",
    details: [
      "Verilog/VHDL RTL design from specification",
      "High-level synthesis (HLS) for algorithm acceleration",
      "Clock domain crossing analysis and implementation",
      "Timing closure on complex multi-clock designs",
      "Resource optimization for area-constrained applications",
      "IP core integration and customization",
    ],
  },
  {
    icon: Radio,
    label: "RFSoC",
    title: "SDR & RFSoC Systems",
    description:
      "Software-defined radio architectures built on AMD/Xilinx RFSoC platforms. Multi-channel, wideband digital receivers and transmitters.",
    details: [
      "Direct RF sampling system design",
      "Multi-channel DDC/DUC implementations",
      "Channelizer architectures for wideband capture",
      "Digital beamforming and array processing",
      "RF calibration and self-test subsystems",
      "Real-time spectrum analysis pipelines",
    ],
  },
  {
    icon: BarChart3,
    label: "DSP",
    title: "DSP Algorithm Development",
    description:
      "Fixed-point algorithm design, spectral analysis, adaptive filtering, and modulation/demodulation chains optimized for real-time hardware.",
    details: [
      "Fixed-point algorithm conversion and optimization",
      "Filter design: FIR, IIR, polyphase, CIC",
      "FFT/IFFT implementations with custom radix",
      "Adaptive algorithms: LMS, RLS, Kalman",
      "Modulation: QAM, OFDM, spread spectrum",
      "Synchronization: timing, carrier, frame",
    ],
  },
  {
    icon: Layers,
    label: "Architecture",
    title: "System Architecture",
    description:
      "End-to-end signal chain architecture covering ADC/DAC selection, clocking strategy, data transport, and host-side integration.",
    details: [
      "ADC/DAC selection and characterization",
      "Clock tree design and jitter analysis",
      "Memory subsystem architecture (DDR4/HBM)",
      "Data flow optimization and buffering",
      "Power budget and thermal analysis",
      "Host interface specification (PCIe, Ethernet)",
    ],
  },
  {
    icon: Zap,
    label: "High-Speed",
    title: "High-Speed Interface Design",
    description:
      "JESD204B/C, PCIe, Aurora, and Ethernet-based data movers. Proven experience with multi-gigabit serial links on FPGA platforms.",
    details: [
      "JESD204B/C transmit and receive cores",
      "PCIe Gen3/Gen4/Gen5 endpoint design",
      "100G Ethernet MAC and PHY integration",
      "Aurora 64B/66B for chip-to-chip links",
      "GTH/GTY transceiver configuration",
      "Signal integrity analysis and debug",
    ],
  },
  {
    icon: Settings,
    label: "V&V",
    title: "Verification & Validation",
    description:
      "Comprehensive testbench development, hardware-in-the-loop testing, and bit-accurate simulation to ensure first-pass silicon success.",
    details: [
      "SystemVerilog/UVM testbench development",
      "Constrained random verification",
      "Functional coverage planning and closure",
      "Bit-accurate C++/Python reference models",
      "Hardware-in-the-loop test automation",
      "Regression infrastructure and CI/CD",
    ],
  },
]

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We begin with a deep dive into your requirements, constraints, and success criteria. Understanding the full system context ensures our solution integrates seamlessly.",
  },
  {
    number: "02",
    title: "Architecture",
    description:
      "Before writing any RTL, we develop a comprehensive architecture document covering data flow, resource estimates, timing budgets, and interface specifications.",
  },
  {
    number: "03",
    title: "Implementation",
    description:
      "Disciplined development with continuous integration, automated testing, and regular design reviews. You have visibility into progress at every stage.",
  },
  {
    number: "04",
    title: "Validation",
    description:
      "Rigorous verification against requirements, hardware testing, and documentation handoff. We ensure your team can maintain and extend the delivered solution.",
  },
]

export function CapabilitiesContent() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#211103" }}>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/capabilities-bg.jpg"
            alt="Circuit board background"
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
                What we do
              </span>
            </div>
            <h1
              className="text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl"
              style={{ color: "#F1DAC4" }}
            >
              Engineering
              <br />
              <span style={{ color: "#7B0D1E" }}>Capabilities</span>
            </h1>
            <p
              className="mt-6 max-w-2xl text-base leading-relaxed md:text-lg"
              style={{ color: "#F1DAC4", opacity: 0.65 }}
            >
              From algorithm development through production firmware, we deliver
              complete FPGA and signal processing solutions. Our expertise spans
              the full development lifecycle.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-6 py-16 md:px-12 md:py-24 lg:px-20">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-6 lg:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-sm border p-6 transition-all hover:border-[#A27035]/40 md:p-8"
                style={{
                  borderColor: "rgba(162,112,53,0.2)",
                  backgroundColor: "rgba(33,17,3,0.5)",
                }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm"
                    style={{ backgroundColor: "rgba(123,13,30,0.25)" }}
                  >
                    <service.icon
                      className="h-5 w-5"
                      style={{ color: "#A27035" }}
                    />
                  </div>
                  <div className="flex-1">
                    <span
                      className="font-mono text-[9px] font-semibold uppercase tracking-[0.2em]"
                      style={{ color: "#A27035" }}
                    >
                      {service.label}
                    </span>
                    <h2
                      className="mt-1 text-xl font-semibold md:text-2xl"
                      style={{ color: "#F1DAC4" }}
                    >
                      {service.title}
                    </h2>
                    <p
                      className="mt-3 text-sm leading-relaxed md:text-base"
                      style={{ color: "#F1DAC4", opacity: 0.55 }}
                    >
                      {service.description}
                    </p>
                  </div>
                </div>

                <ul className="mt-6 grid gap-2 border-t pt-6 sm:grid-cols-2" style={{ borderColor: "rgba(162,112,53,0.1)" }}>
                  {service.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex items-start gap-2 text-xs md:text-sm"
                      style={{ color: "#F1DAC4", opacity: 0.7 }}
                    >
                      <CheckCircle2
                        className="mt-0.5 h-3.5 w-3.5 shrink-0"
                        style={{ color: "#7B0D1E" }}
                      />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section
        className="px-6 py-16 md:px-12 md:py-24 lg:px-20"
        style={{ backgroundColor: "rgba(123,13,30,0.08)" }}
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-12 md:mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8" style={{ backgroundColor: "#A27035" }} />
              <span
                className="font-mono text-[10px] font-semibold uppercase tracking-[0.25em]"
                style={{ color: "#A27035" }}
              >
                How we work
              </span>
            </div>
            <h2
              className="text-3xl font-bold tracking-tight md:text-5xl"
              style={{ color: "#F1DAC4" }}
            >
              Our Process
            </h2>
            <p
              className="mt-4 max-w-2xl text-base leading-relaxed"
              style={{ color: "#F1DAC4", opacity: 0.55 }}
            >
              A structured approach ensures predictable outcomes. Every project
              follows our proven methodology, adapted to your specific needs.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <div
                key={step.number}
                className="rounded-sm border p-6"
                style={{
                  borderColor: "rgba(162,112,53,0.15)",
                  backgroundColor: "rgba(33,17,3,0.6)",
                }}
              >
                <span
                  className="font-mono text-3xl font-bold"
                  style={{ color: "#7B0D1E" }}
                >
                  {step.number}
                </span>
                <h3
                  className="mt-3 text-lg font-semibold"
                  style={{ color: "#F1DAC4" }}
                >
                  {step.title}
                </h3>
                <p
                  className="mt-2 text-sm leading-relaxed"
                  style={{ color: "#F1DAC4", opacity: 0.5 }}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
                  Ready to discuss your project?
                </h2>
                <p
                  className="mt-3 max-w-xl text-base"
                  style={{ color: "#F1DAC4", opacity: 0.55 }}
                >
                  Whether you need a complete system or targeted expertise on a
                  specific challenge, we are ready to help.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex shrink-0 items-center gap-2 rounded-sm px-8 py-4 font-mono text-xs font-semibold uppercase tracking-[0.15em] transition-all hover:brightness-110"
                style={{ backgroundColor: "#7B0D1E", color: "#F1DAC4" }}
              >
                Start a Conversation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
