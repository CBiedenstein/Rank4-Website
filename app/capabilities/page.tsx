import { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CapabilitiesContent } from "@/components/capabilities-content"

export const metadata: Metadata = {
  title: "Capabilities | Rank4",
  description: "Expert FPGA design, SDR systems, DSP algorithms, system architecture, high-speed interfaces, and verification services.",
  openGraph: {
    title: "Engineering Capabilities | Rank4",
    description: "Expert FPGA design, SDR systems, DSP algorithms, system architecture, high-speed interfaces, and verification services.",
    url: "https://www.rank-4.com/capabilities",
    images: [{ url: "/images/capabilities-bg.jpg", width: 1200, height: 630, alt: "Rank4 Engineering Capabilities" }],
  },
  twitter: {
    title: "Engineering Capabilities | Rank4",
    description: "Expert FPGA design, SDR systems, DSP algorithms, system architecture, high-speed interfaces, and verification services.",
    images: ["/images/capabilities-bg.jpg"],
  },
  alternates: {
    canonical: "https://www.rank-4.com/capabilities",
  },
}

export default function CapabilitiesPage() {
  return (
    <>
      <Navbar />
      <main>
        <CapabilitiesContent />
      </main>
      <Footer />
    </>
  )
}
