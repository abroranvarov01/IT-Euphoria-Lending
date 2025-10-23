"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export function VideoSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8])

  return (
    <section ref={ref} className="relative py-32">
      <motion.div style={{ opacity, scale }} className="container mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl">
          {/* Video placeholder with gradient overlay */}
          <div className="relative aspect-video bg-gradient-to-br from-zinc-900 to-black">
            <div className="absolute inset-0 bg-[url('/modern-office-developers-coding.jpg')] bg-cover bg-center opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />

            {/* Overlay text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h2 className="text-balance text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                  Разработка — это искусство
                  <br />
                  <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                    точности и вдохновения
                  </span>
                </h2>
              </motion.div>
            </div>

            {/* Decorative elements */}
            <div className="absolute left-10 top-10 h-32 w-32 rounded-full bg-purple-600/20 blur-3xl" />
            <div className="absolute bottom-10 right-10 h-40 w-40 rounded-full bg-blue-600/20 blur-3xl" />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
