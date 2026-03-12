"use client"

import Image from "next/image"
import Link from "next/link"
import { Check, ArrowRight, Gauge, TestTube, FileCheck, GraduationCap, Brain } from "lucide-react"

const principles = [
  {
    icon: GraduationCap,
    title: "Knowledge Transfer & Education",
    subtitle: "Grow your team",
    description:
      "We invest in elevating your engineering team's capabilities through structured training, hands-on workshops, and ongoing mentorship in DSP, FPGA, and RF design.",
    details: [
      "Custom training programs for your team's skill level",
      "Hands-on workshops with real hardware",
      "DSP fundamentals: filtering, FFTs, modulation",
      "FPGA architecture and design best practices",
      "RF/analog concepts for digital engineers",
    ],
    example: {
      title: "Real-World Impact",
      text: "After a 3-week embedded training program, an aerospace client's software team successfully took ownership of ongoing FPGA maintenance and minor feature development, reducing their dependency on external contractors by 60%.",
    },
  },
  {
    icon: FileCheck,
    title: "Production-Grade Deliverables",
    subtitle: "Ready for your team",
    description:
      "Full documentation, constrained timing closure reports, and regression test suites ready for your team.",
    details: [
      "Complete micro-architecture documentation",
      "Constrained timing closure with margin",
      "Automated regression test infrastructure",
      "Integration guides and example code",
      "Knowledge transfer sessions included",
    ],
    example: {
      title: "Real-World Impact",
      text: "A defense contractor was able to bring our delivered IP into their internal CI/CD pipeline within days, not weeks, because of comprehensive documentation and self-contained test infrastructure.",
    },
  },
  {
    icon: Gauge,
    title: "Resource-Optimal Design",
    subtitle: "Efficient use of silicon",
    description:
      "Architectures balance throughput, power, and area to meet your exact system requirements without wasting FPGA fabric.",
    details: [
      "Trade-off analysis: parallelism vs. time-multiplexing",
      "Memory architecture tuned to access patterns",
      "DSP slice utilization maximized before LUTs",
      "Power-aware design for thermal constraints",
      "Resource sharing across processing modes",
    ],
    example: {
      title: "Real-World Impact",
      text: "For a satellite communications modem, we reduced FPGA resource usage by 40% through careful architecture optimization, enabling the customer to move to a smaller, lower-power device without sacrificing performance.",
    },
  },
  {
    icon: TestTube,
    title: "Simulation-First Methodology",
    subtitle: "Validate before you build",
    description:
      "Bit-accurate behavioral models precede any RTL. Algorithmic performance validated before a single line of HDL.",
    details: [
      "MATLAB/Python reference models for algorithms",
      "Bit-exact comparison: model vs. RTL output",
      "Monte Carlo analysis for corner cases",
      "Fixed-point scaling derived from simulation",
      "Test vectors generated from golden models",
    ],
    example: {
      title: "Real-World Impact",
      text: "Our simulation-first approach caught a subtle numeric overflow condition that would have caused intermittent failures in a deployed 5G system. The issue was identified and resolved before any hardware was built.",
    },
  },
  {
    icon: Brain,
    title: "Cutting-Edge AI & DSP",
    subtitle: "Intelligence at the edge",
    description:
      "We implement the latest machine learning and signal processing algorithms directly in FPGA fabric for real-time inference and adaptive processing.",
    details: [
      "Neural network inference in programmable logic",
      "Adaptive beamforming and interference cancellation",
      "On-chip model quantization and optimization",
      "Real-time feature extraction pipelines",
      "Hardware-accelerated ML for RF applications",
    ],
    example: {
      title: "Real-World Impact",
      text: "We deployed a CNN-based signal classifier on RFSoC that identifies modulation schemes in under 10 microseconds, enabling cognitive radio adaptation 100x faster than GPU-based alternatives.",
    },
  },
]

const values = [
  {
    title: "Transparency",
    description:
      "You have full visibility into our progress. Regular updates, shared repositories, and open communication ensure no surprises.",
  },
  {
    title: "Partnership",
    description:
      "We succeed when you succeed. We invest in understanding your business context, not just your technical requirements.",
  },
  {
    title: "Excellence",
    description:
      "Good enough is not good enough. We pursue optimal solutions, not just functional ones.",
  },
  {
    title: "Integrity",
    description:
      "We will tell you if something cannot be done, or if there is a better approach. Honest assessment over easy agreement.",
  },
]

export function PhilosophyContent() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#211103" }}>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/philosophy-bg.jpg"
            alt="Silicon wafer background"
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
                Our approach
              </span>
            </div>
            <h1
              className="text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl"
              style={{ color: "#F1DAC4" }}
            >
              Engineering
              <br />
              <span style={{ color: "#7B0D1E" }}>Philosophy</span>
            </h1>
            <p
              className="mt-6 max-w-2xl text-base leading-relaxed md:text-lg"
              style={{ color: "#F1DAC4", opacity: 0.65 }}
            >
              High-performance signal processing demands more than clever algorithms.
              It requires disciplined engineering practices at every layer of the design.
              These principles guide everything we build.
            </p>
          </div>
        </div>
      </section>

      {/* Principles Deep Dive */}
      <section className="px-6 py-16 md:px-12 md:py-24 lg:px-20">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex flex-col gap-16 md:gap-24">
            {principles.map((principle, index) => (
              <div
                key={principle.title}
                className="grid gap-8 lg:grid-cols-2 lg:gap-16"
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-start gap-4">
                    <div
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm"
                      style={{ backgroundColor: "rgba(123,13,30,0.25)" }}
                    >
                      <principle.icon
                        className="h-5 w-5"
                        style={{ color: "#A27035" }}
                      />
                    </div>
                    <div>
                      <span
                        className="font-mono text-[9px] font-semibold uppercase tracking-[0.2em]"
                        style={{ color: "#A27035" }}
                      >
                        {principle.subtitle}
                      </span>
                      <h2
                        className="mt-1 text-2xl font-bold md:text-3xl"
                        style={{ color: "#F1DAC4" }}
                      >
                        {principle.title}
                      </h2>
                    </div>
                  </div>

                  <p
                    className="mt-6 text-base leading-relaxed"
                    style={{ color: "#F1DAC4", opacity: 0.6 }}
                  >
                    {principle.description}
                  </p>

                  <ul className="mt-6 flex flex-col gap-3">
                    {principle.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex items-start gap-3 text-sm"
                        style={{ color: "#F1DAC4", opacity: 0.75 }}
                      >
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0"
                          style={{ color: "#7B0D1E" }}
                        />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div
                    className="h-full rounded-sm border p-6 md:p-8"
                    style={{
                      borderColor: "rgba(162,112,53,0.15)",
                      backgroundColor: "rgba(123,13,30,0.1)",
                    }}
                  >
                    <span
                      className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em]"
                      style={{ color: "#A27035" }}
                    >
                      {principle.example.title}
                    </span>
                    <p
                      className="mt-4 text-sm leading-relaxed md:text-base"
                      style={{ color: "#F1DAC4", opacity: 0.7 }}
                    >
                      {principle.example.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
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
                How we operate
              </span>
            </div>
            <h2
              className="text-3xl font-bold tracking-tight md:text-5xl"
              style={{ color: "#F1DAC4" }}
            >
              Our Values
            </h2>
            <p
              className="mt-4 max-w-2xl text-base leading-relaxed"
              style={{ color: "#F1DAC4", opacity: 0.55 }}
            >
              Beyond technical excellence, these values shape how we work with
              every client.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-sm border p-6"
                style={{
                  borderColor: "rgba(162,112,53,0.15)",
                  backgroundColor: "rgba(33,17,3,0.6)",
                }}
              >
                <h3
                  className="text-lg font-semibold"
                  style={{ color: "#F1DAC4" }}
                >
                  {value.title}
                </h3>
                <p
                  className="mt-3 text-sm leading-relaxed"
                  style={{ color: "#F1DAC4", opacity: 0.5 }}
                >
                  {value.description}
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
                  Want to see these principles in action?
                </h2>
                <p
                  className="mt-3 max-w-xl text-base"
                  style={{ color: "#F1DAC4", opacity: 0.55 }}
                >
                  Explore the platforms we work with or get in touch to discuss
                  how our approach can benefit your project.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/platforms"
                  className="inline-flex items-center gap-2 rounded-sm border px-8 py-4 font-mono text-xs font-semibold uppercase tracking-[0.15em] transition-all hover:bg-[#F1DAC4]/10"
                  style={{ borderColor: "rgba(241,218,196,0.3)", color: "#F1DAC4" }}
                >
                  View Platforms
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-sm px-8 py-4 font-mono text-xs font-semibold uppercase tracking-[0.15em] transition-all hover:brightness-110"
                  style={{ backgroundColor: "#7B0D1E", color: "#F1DAC4" }}
                >
                  Start a Conversation
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
