"use client"

import type React from "react"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Code2, Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

interface HeaderProps {
  onOpenModal: (service?: string) => void
}

export function Header({ onOpenModal }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    setMobileMenuOpen(false)
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
    setMobileMenuOpen(false)
    onOpenModal()
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 z-50 w-full border-b border-white/5 bg-black/40 backdrop-blur-xl"
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:h-20 sm:px-6">
        <Link href="/" className="flex items-center gap-2 sm:gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-blue-600 shadow-lg shadow-purple-500/50 sm:h-10 sm:w-10 sm:rounded-xl">
            <Code2 className="h-4 w-4 text-white sm:h-6 sm:w-6" />
          </div>
          <span className="text-base font-semibold tracking-tight sm:text-xl">IT Outsource</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 lg:flex lg:gap-8">
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

        <div className="flex items-center gap-2 sm:gap-4">
          <Button
            size="lg"
            className="hidden h-10 bg-gradient-to-r from-purple-600 to-blue-600 px-4 text-sm shadow-lg shadow-purple-500/30 hover:from-purple-700 hover:to-blue-700 sm:h-12 sm:px-6 sm:text-base md:inline-flex"
            onClick={handleModalOpen}
          >
            Обсудить проект
          </Button>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg bg-white/5 p-2 transition-colors hover:bg-white/10 lg:hidden"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-white/5 bg-black/95 backdrop-blur-xl lg:hidden"
          >
            <nav className="container mx-auto flex flex-col gap-1 px-4 py-4">
              <a
                href="#services"
                onClick={(e) => scrollToSection(e, "services")}
                className="rounded-lg px-4 py-3 text-sm font-medium text-zinc-400 transition-colors hover:bg-white/5 hover:text-white"
              >
                Услуги
              </a>
              <a
                href="#why-us"
                onClick={(e) => scrollToSection(e, "why-us")}
                className="rounded-lg px-4 py-3 text-sm font-medium text-zinc-400 transition-colors hover:bg-white/5 hover:text-white"
              >
                Преимущества
              </a>
              <a
                href="#cases"
                onClick={(e) => scrollToSection(e, "cases")}
                className="rounded-lg px-4 py-3 text-sm font-medium text-zinc-400 transition-colors hover:bg-white/5 hover:text-white"
              >
                Кейсы
              </a>
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, "contact")}
                className="rounded-lg px-4 py-3 text-sm font-medium text-zinc-400 transition-colors hover:bg-white/5 hover:text-white"
              >
                Контакты
              </a>
              <Button
                size="lg"
                className="mt-2 h-12 w-full bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg shadow-purple-500/30 hover:from-purple-700 hover:to-blue-700"
                onClick={handleModalOpen}
              >
                Обсудить проект
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
