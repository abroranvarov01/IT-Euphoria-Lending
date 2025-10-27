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
    <section className="relative overflow-hidden py-16 sm:py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />

      <div className="container relative mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 text-center sm:mb-16 lg:mb-20"
        >
          <h2 className="mb-4 text-balance text-3xl font-bold sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            Наш{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">подход</span>
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-base text-zinc-400 sm:text-lg lg:text-xl">
            Системный процесс от идеи до результата
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-purple-600/50 via-blue-600/50 to-purple-600/50 lg:block" />

          <div className="space-y-16 sm:space-y-24 lg:space-y-32">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex items-center gap-8 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } flex-col sm:gap-12`}
              >
                <div className="flex-1 w-full">
                  <div className={`max-w-xl ${index % 2 === 0 ? "lg:ml-auto" : "lg:mr-auto"}`}>
                    <div className="group relative overflow-hidden rounded-xl border border-zinc-800 bg-gradient-to-br from-zinc-900/50 to-black/50 p-6 backdrop-blur-sm transition-all hover:border-purple-500/50 sm:rounded-2xl sm:p-8">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-blue-600/5 opacity-0 transition-opacity group-hover:opacity-100" />

                      <div className="relative">
                        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600/20 to-blue-600/20 backdrop-blur-sm sm:mb-6 sm:h-16 sm:w-16 sm:rounded-2xl">
                          <step.icon className="h-6 w-6 text-purple-400 sm:h-8 sm:w-8" />
                        </div>

                        <h3 className="mb-2 text-2xl font-bold sm:mb-3 sm:text-3xl">{step.title}</h3>
                        <p className="text-base leading-relaxed text-zinc-400 sm:text-lg">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative z-10 hidden lg:block">
                  <div className="h-6 w-6 rounded-full border-4 border-purple-600 bg-black shadow-lg shadow-purple-600/50" />
                </div>

                <div className="hidden flex-1 lg:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
