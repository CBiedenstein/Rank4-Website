"use client"

import { useState, type FormEvent } from "react"
import Image from "next/image"
import { Send, ArrowUpRight, Clock, CheckCircle } from "lucide-react"

export function ContactContent() {
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error("Failed to send message")
      }

      setSubmitted(true)
    } catch {
      setError("Failed to send message. Please try again or email us directly.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#211103" }}>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/contact-bg.jpg"
            alt="Engineer workstation background"
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

        <div className="relative px-6 pb-16 pt-32 md:px-12 md:pb-24 md:pt-40 lg:px-20">
          <div className="mx-auto max-w-[1400px]">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8" style={{ backgroundColor: "#A27035" }} />
              <span
                className="font-mono text-[10px] font-semibold uppercase tracking-[0.25em]"
                style={{ color: "#A27035" }}
              >
                Get in touch
              </span>
            </div>
            <h1
              className="text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl"
              style={{ color: "#F1DAC4" }}
            >
              {"Let's"} Build
              <br />
              <span style={{ color: "#7B0D1E" }}>Something.</span>
            </h1>
            <p
              className="mt-6 max-w-2xl text-base leading-relaxed md:text-lg"
              style={{ color: "#F1DAC4", opacity: 0.65 }}
            >
              Whether you have a specific FPGA challenge or need help architecting
              a full signal processing pipeline, we are ready to talk.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="px-6 pb-16 md:px-12 md:pb-24 lg:px-20">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            {/* Left - Contact Info */}
            <div className="lg:col-span-2">
              <h2
                className="text-xl font-semibold md:text-2xl"
                style={{ color: "#F1DAC4" }}
              >
                Contact Information
              </h2>
              <p
                className="mt-4 text-sm leading-relaxed md:text-base"
                style={{ color: "#F1DAC4", opacity: 0.55 }}
              >
                Fill out the form and we will get back to you within one
                business day. For urgent inquiries, email us directly.
              </p>

              <div className="mt-10 flex flex-col gap-6">
                <a
                  href="mailto:contact@rank4.io"
                  className="group flex items-center gap-4 transition-opacity hover:opacity-100"
                  style={{ opacity: 0.8 }}
                >
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm"
                    style={{ backgroundColor: "rgba(123,13,30,0.4)" }}
                  >
                    <Send className="h-5 w-5" style={{ color: "#F1DAC4" }} />
                  </div>
                  <div>
                    <p
                      className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em]"
                      style={{ color: "#A27035" }}
                    >
                      Email
                    </p>
                    <p
                      className="text-base font-medium"
                      style={{ color: "#F1DAC4" }}
                    >
                      contact@rank4.io
                    </p>
                  </div>
                  <ArrowUpRight
                    className="ml-auto h-5 w-5 opacity-0 transition-opacity group-hover:opacity-100"
                    style={{ color: "#A27035" }}
                  />
                </a>

                <div className="flex items-center gap-4" style={{ opacity: 0.8 }}>
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm"
                    style={{ backgroundColor: "rgba(123,13,30,0.4)" }}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#F1DAC4"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
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
                      className="text-base font-medium"
                      style={{ color: "#F1DAC4" }}
                    >
                      United States &middot; Remote-First
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4" style={{ opacity: 0.8 }}>
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm"
                    style={{ backgroundColor: "rgba(123,13,30,0.4)" }}
                  >
                    <Clock className="h-5 w-5" style={{ color: "#F1DAC4" }} />
                  </div>
                  <div>
                    <p
                      className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em]"
                      style={{ color: "#A27035" }}
                    >
                      Response Time
                    </p>
                    <p
                      className="text-base font-medium"
                      style={{ color: "#F1DAC4" }}
                    >
                      Within 24 hours
                    </p>
                  </div>
                </div>
              </div>

              {/* What to expect */}
              <div className="mt-12">
                <h3
                  className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em]"
                  style={{ color: "#A27035" }}
                >
                  What happens next
                </h3>
                <ul className="mt-4 flex flex-col gap-3">
                  {[
                    "We review your inquiry within 24 hours",
                    "Schedule a discovery call at your convenience",
                    "Provide a preliminary assessment and proposal",
                    "Begin work once scope and terms are agreed",
                  ].map((step, i) => (
                    <li
                      key={step}
                      className="flex items-start gap-3 text-sm"
                      style={{ color: "#F1DAC4", opacity: 0.6 }}
                    >
                      <span
                        className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full font-mono text-[10px] font-bold"
                        style={{ backgroundColor: "rgba(123,13,30,0.3)", color: "#A27035" }}
                      >
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right - Form */}
            <div className="lg:col-span-3">
              <div
                className="rounded-sm border p-6 md:p-10"
                style={{
                  borderColor: "rgba(162,112,53,0.2)",
                  backgroundColor: "rgba(33,17,3,0.6)",
                }}
              >
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div
                      className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full"
                      style={{ backgroundColor: "rgba(123,13,30,0.4)" }}
                    >
                      <CheckCircle className="h-8 w-8" style={{ color: "#A27035" }} />
                    </div>
                    <h3
                      className="text-2xl font-semibold"
                      style={{ color: "#F1DAC4" }}
                    >
                      Message Received
                    </h3>
                    <p
                      className="mt-3 max-w-md text-base"
                      style={{ color: "#F1DAC4", opacity: 0.55 }}
                    >
                      Thank you for reaching out. We will review your inquiry and
                      respond within one business day.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <div className="grid gap-6 sm:grid-cols-2">
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
                          className="w-full rounded-sm border bg-transparent px-4 py-3 text-base transition-colors focus:outline-none focus:ring-1"
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
                          className="w-full rounded-sm border bg-transparent px-4 py-3 text-base transition-colors focus:outline-none focus:ring-1"
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
                        htmlFor="contact-company"
                        className="mb-2 block font-mono text-[10px] font-semibold uppercase tracking-[0.2em]"
                        style={{ color: "#A27035" }}
                      >
                        Company (optional)
                      </label>
                      <input
                        id="contact-company"
                        name="company"
                        type="text"
                        className="w-full rounded-sm border bg-transparent px-4 py-3 text-base transition-colors focus:outline-none focus:ring-1"
                        style={{
                          borderColor: "rgba(162,112,53,0.25)",
                          color: "#F1DAC4",
                        }}
                        placeholder="Your company"
                      />
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
                        className="w-full rounded-sm border bg-transparent px-4 py-3 text-base transition-colors focus:outline-none focus:ring-1"
                        style={{
                          borderColor: "rgba(162,112,53,0.25)",
                          color: "#F1DAC4",
                        }}
                        placeholder="e.g., RFSoC Design Consultation"
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
                        rows={6}
                        className="w-full resize-none rounded-sm border bg-transparent px-4 py-3 text-base transition-colors focus:outline-none focus:ring-1"
                        style={{
                          borderColor: "rgba(162,112,53,0.25)",
                          color: "#F1DAC4",
                        }}
                        placeholder="Tell us about your project requirements, timeline, and any specific challenges you're facing..."
                      />
                    </div>

                    {error && (
                      <p className="text-sm" style={{ color: "#ef4444" }}>
                        {error}
                      </p>
                    )}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="mt-2 inline-flex items-center justify-center gap-3 rounded-sm px-8 py-4 font-mono text-sm font-semibold uppercase tracking-[0.15em] transition-all hover:brightness-110 disabled:opacity-50"
                      style={{ backgroundColor: "#7B0D1E", color: "#F1DAC4" }}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                      {!isSubmitting && <Send className="h-4 w-4" />}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
