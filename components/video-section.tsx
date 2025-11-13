"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { useLanguage } from "@/lib/language-context"

export function VideoSection() {
  const { t } = useLanguage()
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8])

  return (
    <section ref={ref} className="relative py-16 sm:py-24 lg:py-32">
      <motion.div style={{ opacity, scale }} className="container mx-auto px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl">
          {/* Video placeholder with gradient overlay */}
          <div className="relative aspect-video bg-gradient-to-br from-zinc-900 to-black">
            <div className="absolute inset-0 bg-[url('/modern-office-developers-coding.jpg')] bg-cover bg-center opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />

            {/* Overlay text */}
            <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h2 className="text-balance text-2xl font-bold leading-tight sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                  {t.videoSection.title.split("искусство")[0] || t.videoSection.title.split("san'ati")[0]}
                  <br />
                  <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                    {t.videoSection.title.split("искусство")[1] || t.videoSection.title.split("san'ati")[1]}
                  </span>
                </h2>
              </motion.div>
            </div>

            {/* Decorative elements */}
            <div className="absolute left-4 top-4 h-16 w-16 rounded-full bg-purple-600/20 blur-2xl sm:left-10 sm:top-10 sm:h-24 sm:w-24 sm:blur-3xl lg:h-32 lg:w-32" />
            <div className="absolute bottom-4 right-4 h-20 w-20 rounded-full bg-blue-600/20 blur-2xl sm:bottom-10 sm:right-10 sm:h-28 sm:w-28 sm:blur-3xl lg:h-40 lg:w-40" />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
