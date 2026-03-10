import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { HomeSections } from "@/components/home-sections"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HomeSections />
      </main>
      <Footer />
    </>
  )
}
