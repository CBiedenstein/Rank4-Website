import { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContactContent } from "@/components/contact-content"

export const metadata: Metadata = {
  title: "Contact | Rank4",
  description: "Get in touch with Rank4 for FPGA design, RFSoC systems, and signal processing consulting services.",
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
