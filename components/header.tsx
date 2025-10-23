"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Code2 } from "lucide-react"
import { motion } from "framer-motion"

export function Header() {
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
          <Link href="#services" className="text-sm font-medium text-zinc-400 transition-colors hover:text-white">
            Услуги
          </Link>
          <Link href="#why-us" className="text-sm font-medium text-zinc-400 transition-colors hover:text-white">
            Преимущества
          </Link>
          <Link href="#cases" className="text-sm font-medium text-zinc-400 transition-colors hover:text-white">
            Кейсы
          </Link>
          <Link href="#contact" className="text-sm font-medium text-zinc-400 transition-colors hover:text-white">
            Контакты
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-lg shadow-purple-500/30"
          >
            Обсудить проект
          </Button>
        </div>
      </div>
    </motion.header>
  )
}
