import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { VideoSection } from "@/components/video-section"
import { Approach } from "@/components/approach"
import { WhatWeDo } from "@/components/what-we-do"
import { Showcase } from "@/components/showcase"
import { TrustedBy } from "@/components/trusted-by"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <Hero />
        <VideoSection />
        <Approach />
        <WhatWeDo />
        <Showcase />
        <TrustedBy />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
