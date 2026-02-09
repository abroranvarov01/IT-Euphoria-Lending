"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { VideoSection } from "@/components/video-section"
import { Approach } from "@/components/approach"
import { WhatWeDo } from "@/components/what-we-do"
import { Showcase } from "@/components/showcase"
import { TrustedBy } from "@/components/trusted-by"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { ContactModal } from "@/components/contact-modal"

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedService, setSelectedService] = useState<string | undefined>()

  const openModal = (service?: string) => {
    setSelectedService(service)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedService(undefined)
  }

  return (
    <div className="min-h-screen bg-black">
      <Header onOpenModal={openModal} />
      <main>
        <Hero onOpenModal={openModal} />
        <VideoSection />
        <Approach />
        <WhatWeDo onOpenModal={openModal} />
        <Showcase />
        <TrustedBy />
        <ContactSection />
      </main>
      <Footer />
      <ContactModal isOpen={isModalOpen} onClose={closeModal} service={selectedService} />
    </div>
  )
}
