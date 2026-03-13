import { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PhilosophyContent } from "@/components/philosophy-content"

export const metadata: Metadata = {
  title: "Philosophy | Rank4",
  description: "Our engineering philosophy: cutting-edge AI & DSP implementation, resource-optimal design, simulation-first methodology, and production-grade deliverables.",
  openGraph: {
    title: "Engineering Philosophy | Rank4",
    description: "Our engineering philosophy: cutting-edge AI & DSP implementation, resource-optimal design, simulation-first methodology, and production-grade deliverables.",
    url: "https://www.rank-4.com/philosophy",
    images: [{ url: "/images/philosophy-bg.jpg", width: 1200, height: 630, alt: "Rank4 Engineering Philosophy" }],
  },
  twitter: {
    title: "Engineering Philosophy | Rank4",
    description: "Our engineering philosophy: cutting-edge AI & DSP implementation, resource-optimal design, simulation-first methodology, and production-grade deliverables.",
    images: ["/images/philosophy-bg.jpg"],
  },
  alternates: {
    canonical: "https://www.rank-4.com/philosophy",
  },
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
