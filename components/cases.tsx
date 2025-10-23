"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Building2, FlaskConical, ShoppingCart } from "lucide-react"

const cases = [
  {
    icon: FlaskConical,
    client: "Сеть медицинских лабораторий",
    title: "Система автоматизации документооборота",
    description: "Разработали комплексную систему управления документами и результатами анализов",
    result: "Снижение ручных процессов на 40%",
    tags: ["Автоматизация", "Документооборот", "Интеграция"],
  },
  {
    icon: Building2,
    client: "Производственное предприятие",
    title: "ERP-система управления производством",
    description: "Внедрили систему планирования ресурсов и контроля производственных процессов",
    result: "Увеличение эффективности на 35%",
    tags: ["ERP", "Производство", "Аналитика"],
  },
  {
    icon: ShoppingCart,
    client: "Ритейл компания",
    title: "Платформа электронной коммерции",
    description: "Создали масштабируемую платформу для онлайн-продаж с интеграцией складской системы",
    result: "Рост продаж на 60%",
    tags: ["E-commerce", "Интеграция", "Масштабирование"],
  },
]

export function Cases() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="cases" ref={ref} className="relative py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">Кейсы</h2>
          <p className="mx-auto max-w-2xl text-balance text-xl text-zinc-400">Успешные проекты наших клиентов</p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cases.map((caseItem, index) => (
            <motion.div
              key={caseItem.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-xl transition-all hover:border-purple-500/50"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-blue-600/5 opacity-0 transition-opacity group-hover:opacity-100" />

              <div className="relative p-8">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20">
                  <caseItem.icon className="h-7 w-7 text-purple-400" />
                </div>

                <p className="mb-2 text-sm font-medium text-purple-400">{caseItem.client}</p>
                <h3 className="mb-3 text-xl font-semibold">{caseItem.title}</h3>
                <p className="mb-4 text-zinc-400 leading-relaxed">{caseItem.description}</p>

                <div className="mb-6 rounded-lg border border-purple-500/20 bg-purple-500/5 p-4">
                  <p className="text-sm font-semibold text-purple-300">{caseItem.result}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {caseItem.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
