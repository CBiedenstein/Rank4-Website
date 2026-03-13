import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { ApplicationsContent } from "@/components/applications-content"

export const metadata: Metadata = {
  title: "Applications & Whitepapers | Rank4",
  description:
    "Access technical whitepapers and application notes from Rank4. Download our SPARC whitepaper on scalable phased array RFSoC architectures.",
  openGraph: {
    title: "Applications & Whitepapers | Rank4",
    description: "Access technical whitepapers and application notes from Rank4. Download our SPARC whitepaper on scalable phased array RFSoC architectures.",
    url: "https://www.rank-4.com/applications",
    images: [{ url: "/images/applications-bg.jpg", width: 1200, height: 630, alt: "Rank4 Technical Resources" }],
  },
  twitter: {
    title: "Applications & Whitepapers | Rank4",
    description: "Access technical whitepapers and application notes from Rank4. Download our SPARC whitepaper on scalable phased array RFSoC architectures.",
    images: ["/images/applications-bg.jpg"],
  },
  alternates: {
    canonical: "https://www.rank-4.com/applications",
  },
}

export default function ApplicationsPage() {
  return (
    <>
      <Navbar />
      <main>
        <ApplicationsContent />
      </main>
    </>
  )
}
