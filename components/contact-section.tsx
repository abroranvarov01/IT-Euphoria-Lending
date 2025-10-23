"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function ContactSection() {
  return (
    <section className="relative overflow-hidden py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />

      <div className="container relative mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6 text-balance text-5xl font-bold md:text-6xl">
              Начнем{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                работать
              </span>{" "}
              вместе
            </h2>
            <p className="mb-8 text-xl text-zinc-400">
              Расскажите о вашем проекте, и мы свяжемся с вами в ближайшее время
            </p>

            <form className="space-y-6">
              <div className="space-y-4">
                <Input
                  placeholder="Ваше имя"
                  className="h-14 rounded-xl border-zinc-800 bg-zinc-900/50 backdrop-blur-sm transition-all focus:border-purple-500"
                />
                <Input
                  type="email"
                  placeholder="Email"
                  className="h-14 rounded-xl border-zinc-800 bg-zinc-900/50 backdrop-blur-sm transition-all focus:border-purple-500"
                />
                <Textarea
                  placeholder="Расскажите о вашем проекте"
                  rows={6}
                  className="rounded-xl border-zinc-800 bg-zinc-900/50 backdrop-blur-sm transition-all focus:border-purple-500"
                />
              </div>

              <Button
                size="lg"
                className="group h-14 w-full gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-lg font-semibold shadow-2xl shadow-purple-500/30 transition-all hover:scale-[1.02] hover:shadow-purple-500/50"
              >
                Отправить заявку
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl">
              <img src="/modern-office-collaboration.png" alt="Contact" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent" />

              {/* Glassmorphism overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-blue-600/10 backdrop-blur-[2px]" />

              {/* Glow effects */}
              <div className="absolute -bottom-20 left-1/2 h-40 w-3/4 -translate-x-1/2 rounded-full bg-purple-600/30 blur-3xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
