"use client"

import { motion } from "framer-motion"
import { Search, Pencil, Code, TestTube, Headphones } from "lucide-react"

const steps = [
  {
    icon: Search,
    title: "Исследуем",
    description: "Глубокий анализ бизнес-процессов и требований",
  },
  {
    icon: Pencil,
    title: "Проектируем",
    description: "Создание архитектуры и дизайна решения",
  },
  {
    icon: Code,
    title: "Разрабатываем",
    description: "Написание качественного и масштабируемого кода",
  },
  {
    icon: TestTube,
    title: "Тестируем",
    description: "Комплексное тестирование и контроль качества",
  },
  {
    icon: Headphones,
    title: "Поддерживаем",
    description: "Непрерывная поддержка и развитие системы",
  },
]

export function Approach() {
  return (
    <section className="relative overflow-hidden py-32">
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
            Наш{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">подход</span>
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-xl text-zinc-400">Системный процесс от идеи до результата</p>
        </motion.div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-purple-600/50 via-blue-600/50 to-purple-600/50 hidden lg:block" />

          <div className="space-y-32">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex items-center gap-12 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } flex-col`}
              >
                <div className="flex-1">
                  <div className={`max-w-xl ${index % 2 === 0 ? "lg:ml-auto" : "lg:mr-auto"}`}>
                    <div className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900/50 to-black/50 p-8 backdrop-blur-sm transition-all hover:border-purple-500/50">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-blue-600/5 opacity-0 transition-opacity group-hover:opacity-100" />

                      <div className="relative">
                        <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600/20 to-blue-600/20 backdrop-blur-sm">
                          <step.icon className="h-8 w-8 text-purple-400" />
                        </div>

                        <h3 className="mb-3 text-3xl font-bold">{step.title}</h3>
                        <p className="text-lg leading-relaxed text-zinc-400">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Center dot */}
                <div className="relative z-10 hidden lg:block">
                  <div className="h-6 w-6 rounded-full border-4 border-purple-600 bg-black shadow-lg shadow-purple-600/50" />
                </div>

                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
