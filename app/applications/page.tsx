import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { ApplicationsContent } from "@/components/applications-content"

export const metadata: Metadata = {
  title: "Applications & Whitepapers | Rank4",
  description:
    "Access technical whitepapers and application notes from Rank4. Download our SPARC whitepaper on scalable phased array RFSoC architectures.",
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
