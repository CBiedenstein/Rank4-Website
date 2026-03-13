import { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PlatformsContent } from "@/components/platforms-content"

export const metadata: Metadata = {
  title: "Platforms | Rank4",
  description: "Development expertise on Xilinx Versal ACAP and Zynq UltraScale+ RFSoC platforms for high-performance signal processing.",
  openGraph: {
    title: "Silicon Expertise | Rank4",
    description: "Development expertise on Xilinx Versal ACAP and Zynq UltraScale+ RFSoC platforms for high-performance signal processing.",
    url: "https://www.rank-4.com/platforms",
    images: [{ url: "/images/platforms-bg.jpg", width: 1200, height: 630, alt: "Rank4 Silicon Platform Expertise" }],
  },
  twitter: {
    title: "Silicon Expertise | Rank4",
    description: "Development expertise on Xilinx Versal ACAP and Zynq UltraScale+ RFSoC platforms for high-performance signal processing.",
    images: ["/images/platforms-bg.jpg"],
  },
  alternates: {
    canonical: "https://www.rank-4.com/platforms",
  },
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
