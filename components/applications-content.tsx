"use client"

import { useState } from "react"
import Image from "next/image"
import { FileText, Download, ArrowRight, Check } from "lucide-react"

const whitepapers = [
  {
    id: "sparc",
    title: "SPARC",
    subtitle: "Synchronized Phased Array RFSoC Cluster",
    description:
      "A scalable digital beamforming architecture leveraging RFSoC 4x2 platforms, White Rabbit precision timing, and PPS synchronization for 48+ element coherent phased array systems.",
    highlights: [
      "<1 ns inter-node synchronization",
      "48+ simultaneous antenna elements",
      "<100 ps jitter on sampling clocks",
      "Modular scaling architecture",
    ],
    pages: 8,
    documentId: "R4-SPARC-WP-001",
    pdfUrl: "/whitepapers/sparc-whitepaper.pdf",
  },
]

export function ApplicationsContent() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#211103" }}>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="/images/applications-bg.jpg"
            alt="Phased array antenna field"
            fill
            className="object-cover"
            priority
          />
          <div
            className="absolute inset-0"
            style={{ backgroundColor: "#211103", opacity: 0.75 }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 flex min-h-[60vh] flex-col justify-end px-6 pb-16 pt-32 md:px-12 lg:px-20">
          <div className="mx-auto w-full max-w-[1400px]">
            <div className="mb-4 flex items-center gap-3">
              <div className="h-px w-8" style={{ backgroundColor: "#A27035" }} />
              <span
                className="font-mono text-[10px] font-semibold uppercase tracking-[0.25em]"
                style={{ color: "#A27035" }}
              >
                Technical Resources
              </span>
            </div>
            <h1
              className="text-3xl font-bold tracking-tight md:text-5xl lg:text-6xl"
              style={{ color: "#F1DAC4" }}
            >
              Applications &<br />
              <span style={{ color: "#7B0D1E" }}>Whitepapers</span>
            </h1>
            <p
              className="mt-6 max-w-xl text-base leading-relaxed md:text-lg"
              style={{ color: "#F1DAC4", opacity: 0.6 }}
            >
              Access our technical whitepapers and application notes. Each document
              represents proven architectures and methodologies deployed in
              mission-critical systems.
            </p>
          </div>
        </div>
      </section>

      {/* Whitepapers Grid */}
      <section className="px-6 py-16 md:px-12 md:py-24 lg:px-20">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-8">
            {whitepapers.map((paper) => (
              <WhitepaperCard key={paper.id} paper={paper} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

interface WhitepaperCardProps {
  paper: (typeof whitepapers)[0]
}

function WhitepaperCard({ paper }: WhitepaperCardProps) {
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission delay
    await new Promise((resolve) => setTimeout(resolve, 800))

    // In production, you would send this data to your backend/CRM
    console.log("Whitepaper download request:", {
      ...formData,
      whitepaperId: paper.id,
      timestamp: new Date().toISOString(),
    })

    setIsSubmitting(false)
    setSubmitted(true)
  }

  const handleDownload = () => {
    // Trigger the PDF download
    const link = document.createElement("a")
    link.href = paper.pdfUrl
    link.download = `${paper.id}-whitepaper.pdf`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div
      className="rounded-sm border p-6 md:p-10"
      style={{
        borderColor: "rgba(162,112,53,0.2)",
        backgroundColor: "rgba(33,17,3,0.5)",
      }}
    >
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        {/* Left: Info */}
        <div>
          <div className="mb-4 flex items-center gap-3">
            <div
              className="flex h-10 w-10 items-center justify-center rounded-sm"
              style={{ backgroundColor: "rgba(123,13,30,0.3)" }}
            >
              <FileText className="h-5 w-5" style={{ color: "#7B0D1E" }} />
            </div>
            <span
              className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em]"
              style={{ color: "#A27035" }}
            >
              {paper.documentId}
            </span>
          </div>

          <h2
            className="text-2xl font-bold tracking-tight md:text-3xl"
            style={{ color: "#F1DAC4" }}
          >
            {paper.title}
          </h2>
          <p
            className="mt-1 font-mono text-sm"
            style={{ color: "#A27035" }}
          >
            {paper.subtitle}
          </p>

          <p
            className="mt-6 text-sm leading-relaxed md:text-base"
            style={{ color: "#F1DAC4", opacity: 0.6 }}
          >
            {paper.description}
          </p>

          {/* Highlights */}
          <div className="mt-6 grid gap-2 sm:grid-cols-2">
            {paper.highlights.map((highlight) => (
              <div
                key={highlight}
                className="flex items-center gap-2 text-xs md:text-sm"
                style={{ color: "#F1DAC4", opacity: 0.7 }}
              >
                <div
                  className="h-1 w-1 shrink-0 rounded-full"
                  style={{ backgroundColor: "#7B0D1E" }}
                />
                {highlight}
              </div>
            ))}
          </div>

          <div
            className="mt-6 flex items-center gap-4 border-t pt-6"
            style={{ borderColor: "rgba(162,112,53,0.15)" }}
          >
            <span
              className="text-xs"
              style={{ color: "#F1DAC4", opacity: 0.4 }}
            >
              {paper.pages} pages
            </span>
            <span style={{ color: "#F1DAC4", opacity: 0.2 }}>|</span>
            <span
              className="text-xs"
              style={{ color: "#F1DAC4", opacity: 0.4 }}
            >
              PDF format
            </span>
          </div>
        </div>

        {/* Right: Form or Download */}
        <div>
          {!showForm && !submitted && (
            <div
              className="flex h-full flex-col items-center justify-center rounded-sm border border-dashed p-8 text-center"
              style={{ borderColor: "rgba(162,112,53,0.3)" }}
            >
              <div
                className="mb-4 flex h-16 w-16 items-center justify-center rounded-full"
                style={{ backgroundColor: "rgba(123,13,30,0.2)" }}
              >
                <Download className="h-7 w-7" style={{ color: "#7B0D1E" }} />
              </div>
              <h3
                className="text-lg font-semibold"
                style={{ color: "#F1DAC4" }}
              >
                Download Whitepaper
              </h3>
              <p
                className="mt-2 max-w-xs text-sm"
                style={{ color: "#F1DAC4", opacity: 0.5 }}
              >
                Complete the form to access this technical document.
              </p>
              <button
                onClick={() => setShowForm(true)}
                className="mt-6 inline-flex items-center gap-2 rounded-sm px-6 py-3 font-mono text-xs font-semibold uppercase tracking-[0.1em] transition-all hover:brightness-110"
                style={{ backgroundColor: "#7B0D1E", color: "#F1DAC4" }}
              >
                Request Access
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          )}

          {showForm && !submitted && (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label
                  className="mb-1 block font-mono text-[10px] font-semibold uppercase tracking-[0.2em] md:mb-2"
                  style={{ color: "#A27035" }}
                >
                  Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full rounded-sm border bg-transparent px-3 py-2 text-sm transition-colors focus:outline-none focus:ring-1 md:px-4 md:py-3"
                  style={{
                    borderColor: "rgba(162,112,53,0.3)",
                    color: "#F1DAC4",
                  }}
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  className="mb-1 block font-mono text-[10px] font-semibold uppercase tracking-[0.2em] md:mb-2"
                  style={{ color: "#A27035" }}
                >
                  Work Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full rounded-sm border bg-transparent px-3 py-2 text-sm transition-colors focus:outline-none focus:ring-1 md:px-4 md:py-3"
                  style={{
                    borderColor: "rgba(162,112,53,0.3)",
                    color: "#F1DAC4",
                  }}
                  placeholder="you@company.com"
                />
              </div>

              <div>
                <label
                  className="mb-1 block font-mono text-[10px] font-semibold uppercase tracking-[0.2em] md:mb-2"
                  style={{ color: "#A27035" }}
                >
                  Company *
                </label>
                <input
                  type="text"
                  required
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  className="w-full rounded-sm border bg-transparent px-3 py-2 text-sm transition-colors focus:outline-none focus:ring-1 md:px-4 md:py-3"
                  style={{
                    borderColor: "rgba(162,112,53,0.3)",
                    color: "#F1DAC4",
                  }}
                  placeholder="Company name"
                />
              </div>

              <div>
                <label
                  className="mb-1 block font-mono text-[10px] font-semibold uppercase tracking-[0.2em] md:mb-2"
                  style={{ color: "#A27035" }}
                >
                  Role
                </label>
                <input
                  type="text"
                  value={formData.role}
                  onChange={(e) =>
                    setFormData({ ...formData, role: e.target.value })
                  }
                  className="w-full rounded-sm border bg-transparent px-3 py-2 text-sm transition-colors focus:outline-none focus:ring-1 md:px-4 md:py-3"
                  style={{
                    borderColor: "rgba(162,112,53,0.3)",
                    color: "#F1DAC4",
                  }}
                  placeholder="Your role (optional)"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3 font-mono text-xs font-semibold uppercase tracking-[0.1em] transition-all hover:brightness-110 disabled:opacity-50"
                style={{ backgroundColor: "#7B0D1E", color: "#F1DAC4" }}
              >
                {isSubmitting ? "Processing..." : "Download Whitepaper"}
                {!isSubmitting && <Download className="h-4 w-4" />}
              </button>

              <p
                className="mt-2 text-xs"
                style={{ color: "#F1DAC4", opacity: 0.4 }}
              >
                By downloading, you agree to receive occasional technical updates
                from Rank4. You can unsubscribe at any time.
              </p>
            </form>
          )}

          {submitted && (
            <div
              className="flex h-full flex-col items-center justify-center rounded-sm border p-8 text-center"
              style={{
                borderColor: "rgba(162,112,53,0.3)",
                backgroundColor: "rgba(123,13,30,0.1)",
              }}
            >
              <div
                className="mb-4 flex h-16 w-16 items-center justify-center rounded-full"
                style={{ backgroundColor: "rgba(162,112,53,0.2)" }}
              >
                <Check className="h-7 w-7" style={{ color: "#A27035" }} />
              </div>
              <h3
                className="text-lg font-semibold"
                style={{ color: "#F1DAC4" }}
              >
                Access Granted
              </h3>
              <p
                className="mt-2 max-w-xs text-sm"
                style={{ color: "#F1DAC4", opacity: 0.5 }}
              >
                Thank you, {formData.name.split(" ")[0]}. Your download is ready.
              </p>
              <button
                onClick={handleDownload}
                className="mt-6 inline-flex items-center gap-2 rounded-sm px-6 py-3 font-mono text-xs font-semibold uppercase tracking-[0.1em] transition-all hover:brightness-110"
                style={{ backgroundColor: "#7B0D1E", color: "#F1DAC4" }}
              >
                <Download className="h-4 w-4" />
                Download PDF
              </button>
              <p
                className="mt-4 text-xs"
                style={{ color: "#F1DAC4", opacity: 0.4 }}
              >
                A copy has also been sent to {formData.email}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
