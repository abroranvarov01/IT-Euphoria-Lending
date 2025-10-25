"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const cases = [
  {
    title: "Платформа для финтех-стартапа",
    category: "Финансовые технологии",
    description: "Разработка масштабируемой платформы для обработки платежей с высокой нагрузкой",
    image: "/fintech-platform-dashboard.jpg",
    metrics: ["500K+ транзакций/день", "99.99% uptime", "50% рост конверсии"],
  },
  {
    title: "ERP-система для производства",
    category: "Автоматизация",
    description: "Комплексная система управления производством и логистикой",
    image: "/erp-manufacturing-system.jpg",
    metrics: ["40% снижение издержек", "3x ускорение процессов", "Интеграция с 15+ системами"],
  },
  {
    title: "Мобильное приложение для ритейла",
    category: "E-commerce",
    description: "Кросс-платформенное приложение с AI-рекомендациями",
    image: "/retail-mobile-app-shopping.jpg",
    metrics: ["1M+ установок", "4.8★ рейтинг", "60% повторных покупок"],
  },
]

export function Showcase() {
  return (
    <section id="cases" className="relative overflow-hidden py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />

      <div className="container relative mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="mb-6 text-balance text-5xl font-bold md:text-6xl lg:text-7xl">
            Наши{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">проекты</span>
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-xl text-zinc-400">
            Реальные результаты для реального бизнеса
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {cases.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group relative overflow-hidden rounded-3xl ${index === 0 ? "lg:col-span-2" : ""}`}
            >
              <div className={`relative ${index === 0 ? "aspect-[21/9]" : "aspect-[4/3]"}`}>
                {/* Image */}
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
                  <div className="mb-4">
                    <span className="inline-block rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1 text-sm font-medium text-purple-300 backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">{project.title}</h3>

                  <p className="mb-6 max-w-2xl text-lg text-zinc-300">{project.description}</p>

                  <div className="mb-6 flex flex-wrap gap-4">
                    {project.metrics.map((metric) => (
                      <div
                        key={metric}
                        className="rounded-lg border border-zinc-800 bg-black/50 px-4 py-2 text-sm font-medium backdrop-blur-sm"
                      >
                        {metric}
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-purple-400 transition-all group-hover:gap-4">
                    <span className="font-semibold">Подробнее</span>
                    <ArrowRight className="h-5 w-5" />
                  </div>
                </div>

                {/* Glow effect on hover */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
                  <div className="absolute -bottom-20 left-1/2 h-40 w-3/4 -translate-x-1/2 rounded-full bg-purple-600/30 blur-3xl" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
