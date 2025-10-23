"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent" />

      <div className="container relative mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl text-center"
        >
          <h2 className="mb-8 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">О компании</h2>
          <p className="text-balance text-xl leading-relaxed text-zinc-400 md:text-2xl">
            Мы объединяем экспертизу в программной инженерии, аналитике и автоматизации, чтобы создавать продукты,
            ускоряющие рост бизнеса
          </p>
        </motion.div>
      </div>
    </section>
  )
}
