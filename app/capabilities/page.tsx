import { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CapabilitiesContent } from "@/components/capabilities-content"

export const metadata: Metadata = {
  title: "Capabilities | Rank4",
  description: "Expert FPGA design, SDR systems, DSP algorithms, system architecture, high-speed interfaces, and verification services.",
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
