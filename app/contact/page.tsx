import { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContactContent } from "@/components/contact-content"

export const metadata: Metadata = {
  title: "Contact | Rank4",
  description: "Get in touch with Rank4 for FPGA design, RFSoC systems, and signal processing consulting services.",
  openGraph: {
    title: "Contact | Rank4",
    description: "Get in touch with Rank4 for FPGA design, RFSoC systems, and signal processing consulting services.",
    url: "https://www.rank-4.com/contact",
    images: [{ url: "/images/contact-bg.jpg", width: 1200, height: 630, alt: "Contact Rank4" }],
  },
  twitter: {
    title: "Contact | Rank4",
    description: "Get in touch with Rank4 for FPGA design, RFSoC systems, and signal processing consulting services.",
    images: ["/images/contact-bg.jpg"],
  },
  alternates: {
    canonical: "https://www.rank-4.com/contact",
  },
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <ContactContent />
      </main>
      <Footer />
    </>
  )
}
