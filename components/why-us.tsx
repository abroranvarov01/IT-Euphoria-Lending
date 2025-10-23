"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Award, Headphones, Users, Zap } from "lucide-react"

const benefits = [
  {
    icon: Award,
    title: "Опыт и экспертиза",
    description: "Более 10 лет успешной реализации проектов различной сложности",
  },
  {
    icon: Headphones,
    title: "Надежная поддержка",
    description: "Круглосуточная техническая поддержка и оперативное решение проблем",
  },
  {
    icon: Users,
    title: "Индивидуальный подход",
    description: "Персонализированные решения, учитывающие специфику вашего бизнеса",
  },
  {
    icon: Zap,
    title: "Инновационные технологии",
    description: "Используем передовые технологии и лучшие практики разработки",
  },
]

export function WhyUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="why-us" ref={ref} className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent" />

      <div className="container relative mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">Почему выбирают нас</h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-8 text-center backdrop-blur-xl transition-all hover:border-purple-500/50"
            >
              <div className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 blur-xl" />
              </div>

              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 transition-transform group-hover:scale-110">
                <benefit.icon className="h-8 w-8 text-purple-400" />
              </div>

              <h3 className="mb-3 text-xl font-semibold">{benefit.title}</h3>
              <p className="text-zinc-400 leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
