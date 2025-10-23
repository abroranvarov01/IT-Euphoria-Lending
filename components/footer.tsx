"use client"

import Link from "next/link"
import { Code2, Twitter, Github, Linkedin, Mail } from "lucide-react"
import { motion } from "framer-motion"

export function Footer() {
  return (
    <footer className="relative border-t border-zinc-800 bg-black py-16">
      <div className="absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

      <div className="container mx-auto px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="mb-6 flex items-center gap-3 group">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-blue-600 transition-transform group-hover:scale-110">
                <Code2 className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-semibold">IT Outsource</span>
            </Link>
            <p className="mb-6 max-w-sm leading-relaxed text-zinc-400">
              Разработка, внедрение и сопровождение IT-систем полного цикла для вашего бизнеса
            </p>
            <div className="flex gap-3">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm transition-all hover:border-purple-500/50 hover:bg-purple-500/10 hover:shadow-lg hover:shadow-purple-500/20"
                >
                  <Twitter className="h-5 w-5" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm transition-all hover:border-purple-500/50 hover:bg-purple-500/10 hover:shadow-lg hover:shadow-purple-500/20"
                >
                  <Github className="h-5 w-5" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm transition-all hover:border-purple-500/50 hover:bg-purple-500/10 hover:shadow-lg hover:shadow-purple-500/20"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm transition-all hover:border-purple-500/50 hover:bg-purple-500/10 hover:shadow-lg hover:shadow-purple-500/20"
                >
                  <Mail className="h-5 w-5" />
                </Link>
              </motion.div>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Услуги</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#services" className="text-zinc-400 transition-colors hover:text-purple-400">
                  Внедрение ПО
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-zinc-400 transition-colors hover:text-purple-400">
                  Разработка систем
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-zinc-400 transition-colors hover:text-purple-400">
                  Консалтинг
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-zinc-400 transition-colors hover:text-purple-400">
                  Аудит
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Компания</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#" className="text-zinc-400 transition-colors hover:text-purple-400">
                  О нас
                </Link>
              </li>
              <li>
                <Link href="#cases" className="text-zinc-400 transition-colors hover:text-purple-400">
                  Кейсы
                </Link>
              </li>
              <li>
                <Link href="#why-us" className="text-zinc-400 transition-colors hover:text-purple-400">
                  Преимущества
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-zinc-400 transition-colors hover:text-purple-400">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Ресурсы</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#" className="text-zinc-400 transition-colors hover:text-purple-400">
                  Документация
                </Link>
              </li>
              <li>
                <Link href="#" className="text-zinc-400 transition-colors hover:text-purple-400">
                  Блог
                </Link>
              </li>
              <li>
                <Link href="#" className="text-zinc-400 transition-colors hover:text-purple-400">
                  Поддержка
                </Link>
              </li>
              <li>
                <Link href="#" className="text-zinc-400 transition-colors hover:text-purple-400">
                  Карьера
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-zinc-800 pt-8 text-center">
          <p className="text-sm text-zinc-500">&copy; 2025 IT Outsource. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}
