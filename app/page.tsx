import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { CapabilitiesPhilosophy } from "@/components/capabilities-philosophy"
import { Contact } from "@/components/contact"


export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CapabilitiesPhilosophy />
        <Contact />
      </main>
    </>
  )
}
