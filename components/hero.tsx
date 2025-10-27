"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

interface HeroProps {
  onOpenModal: (service?: string) => void
}

export function Hero({ onOpenModal }: HeroProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])

  const handleStartProject = () => {
    onOpenModal()
  }

  const handleContactUs = () => {
    onOpenModal()
  }

  return (
    <section ref={ref} className="relative h-dvh overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black z-10" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:6rem_6rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] animate-pulse-slow" />

        {/* Animated gradient orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute left-1/4 top-1/4 h-[300px] w-[300px] rounded-full bg-purple-600/30 blur-[100px] sm:h-[400px] sm:w-[400px] sm:blur-[120px] lg:h-[600px] lg:w-[600px] lg:blur-[150px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute right-1/4 top-1/3 h-[250px] w-[250px] rounded-full bg-blue-600/30 blur-[90px] sm:h-[350px] sm:w-[350px] sm:blur-[110px] lg:h-[500px] lg:w-[500px] lg:blur-[140px]"
        />
      </div>

      <motion.div
        style={{ opacity, scale }}
        className="container relative z-20 mx-auto flex h-full items-center px-4 sm:px-6"
      >
        <div className="mx-auto max-w-6xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-4 sm:mb-6"
          >
            <span className="inline-block rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 text-xs font-medium text-purple-300 backdrop-blur-sm sm:px-6 sm:py-2 sm:text-sm">
              Технологии будущего
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mb-6 text-balance text-3xl font-bold leading-[1.1] tracking-tight sm:mb-8 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
          >
            Мы создаем{" "}
            <span className="bg-gradient-to-r from-purple-400 via-purple-600 to-blue-500 bg-clip-text text-transparent">
              цифровые решения
            </span>
            ,<br />
            которые вдохновляют
            <br />и масштабируют бизнес
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mx-auto mb-8 max-w-3xl text-pretty text-base leading-relaxed text-zinc-400 sm:mb-12 sm:text-lg md:text-xl lg:text-2xl"
          >
            Команда IT-специалистов, предоставляющих комплексные услуги в сфере разработки, автоматизации и цифровизации
            бизнеса
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
          >
            <Button
              size="lg"
              onClick={handleStartProject}
              className="group h-12 w-full gap-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-6 text-base font-semibold shadow-2xl shadow-purple-500/50 transition-all hover:scale-105 hover:shadow-purple-500/70 sm:h-14 sm:w-auto sm:px-8 sm:text-lg"
            >
              Начать проект
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 sm:h-5 sm:w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={handleContactUs}
              className="h-12 w-full rounded-full border-zinc-700 bg-zinc-900/50 px-6 text-base font-semibold backdrop-blur-sm transition-all hover:border-zinc-600 hover:bg-zinc-800/50 sm:h-14 sm:w-auto sm:px-8 sm:text-lg"
            >
              Связаться с нами
            </Button>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-4 left-1/2 z-20 hidden -translate-x-1/2 sm:bottom-8 sm:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="h-10 w-6 rounded-full border-2 border-zinc-700 p-1.5 sm:h-12 sm:w-8 sm:p-2"
        >
          <div className="h-1.5 w-1.5 rounded-full bg-purple-500 sm:h-2 sm:w-2" />
        </motion.div>
      </motion.div>
    </section>
  )
}
