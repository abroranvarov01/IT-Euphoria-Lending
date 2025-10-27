"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Award, Headphones, Users, Zap } from "lucide-react"

const benefits = [
  {
    icon: Award,
    title: "Комплексный подход",
    description: "От идеи до внедрения — полный цикл разработки и поддержки",
  },
  {
    icon: Users,
    title: "Работаем с любым масштабом",
    description: "От стартапов до производственных предприятий",
  },
  {
    icon: Zap,
    title: "Гибкая модель сотрудничества",
    description: "Проектно, абонентски или по SLA — выбирайте удобный формат",
  },
  {
    icon: Headphones,
    title: "Собственная команда",
    description: "Опытные разработчики и инженеры в штате компании",
  },
  {
    icon: Award,
    title: "Гарантия качества",
    description: "Безопасность данных и прозрачная отчётность на всех этапах",
  },
]

export function WhyUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="why-us" ref={ref} className="relative py-16 sm:py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent" />

      <div className="container relative mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center sm:mb-16"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl">
            Почему выбирают нас
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 xl:grid-cols-5">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl border border-white/5 bg-white/[0.02] p-6 text-center backdrop-blur-xl transition-all hover:border-purple-500/50 sm:rounded-2xl sm:p-8"
            >
              <div className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 blur-xl" />
              </div>

              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 transition-transform group-hover:scale-110 sm:mb-6 sm:h-16 sm:w-16 sm:rounded-2xl">
                <benefit.icon className="h-7 w-7 text-purple-400 sm:h-8 sm:w-8" />
              </div>

              <h3 className="mb-2 text-lg font-semibold sm:mb-3 sm:text-xl">{benefit.title}</h3>
              <p className="text-sm leading-relaxed text-zinc-400 sm:text-base">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
