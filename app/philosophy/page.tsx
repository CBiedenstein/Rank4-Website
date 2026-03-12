import { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PhilosophyContent } from "@/components/philosophy-content"

export const metadata: Metadata = {
  title: "Philosophy | Rank4",
  description: "Our engineering philosophy: cutting-edge AI & DSP implementation, resource-optimal design, simulation-first methodology, and production-grade deliverables.",
}

export default function PhilosophyPage() {
  return (
    <>
      <Navbar />
      <main>
        <PhilosophyContent />
      </main>
      <Footer />
    </>
  )
}
