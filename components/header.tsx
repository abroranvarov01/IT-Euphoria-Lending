"use client"

import type React from "react"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Code2 } from "lucide-react"
import { motion } from "framer-motion"

interface HeaderProps {
  onOpenModal: (service?: string) => void
}

export function Header({ onOpenModal }: HeaderProps) {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  const handleModalOpen = () => {
    onOpenModal()
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 z-50 w-full border-b border-white/5 bg-black/40 backdrop-blur-xl"
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-blue-600 shadow-lg shadow-purple-500/50">
            <Code2 className="h-6 w-6 text-white" />
          </div>
          <span className="text-xl font-semibold tracking-tight">IT Outsource</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#services"
            onClick={(e) => scrollToSection(e, "services")}
            className="text-sm font-medium text-zinc-400 transition-colors hover:text-white"
          >
            Услуги
          </a>
          <a
            href="#why-us"
            onClick={(e) => scrollToSection(e, "why-us")}
            className="text-sm font-medium text-zinc-400 transition-colors hover:text-white"
          >
            Преимущества
          </a>
          <a
            href="#cases"
            onClick={(e) => scrollToSection(e, "cases")}
            className="text-sm font-medium text-zinc-400 transition-colors hover:text-white"
          >
            Кейсы
          </a>
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, "contact")}
            className="text-sm font-medium text-zinc-400 transition-colors hover:text-white"
          >
            Контакты
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-lg shadow-purple-500/30"
            onClick={handleModalOpen}
          >
            Обсудить проект
          </Button>
        </div>
      </div>
    </motion.header>
  )
}
