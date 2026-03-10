import { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PlatformsContent } from "@/components/platforms-content"

export const metadata: Metadata = {
  title: "Platforms | Rank4",
  description: "Development expertise on Xilinx Versal ACAP and Zynq UltraScale+ RFSoC platforms for high-performance signal processing.",
}

export default function PlatformsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PlatformsContent />
      </main>
      <Footer />
    </>
  )
}
