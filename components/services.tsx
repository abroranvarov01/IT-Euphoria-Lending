"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Code2, Database, Settings, BarChart3, Shield, Workflow, FileSearch } from "lucide-react"

const services = [
  {
    icon: Code2,
    title: "Внедрение и сопровождение ПО",
    description: "Полный цикл внедрения программного обеспечения с последующей технической поддержкой",
  },
  {
    icon: Settings,
    title: "Доработка и модификация",
    description: "Адаптация существующих систем под изменяющиеся бизнес-требования",
  },
  {
    icon: Database,
    title: "Создание и поддержка баз данных",
    description: "Проектирование, разработка и администрирование баз данных любой сложности",
  },
  {
    icon: BarChart3,
    title: "Обработка данных",
    description: "Автоматизация сбора, обработки и анализа больших объемов данных",
  },
  {
    icon: Workflow,
    title: "Разработка автоматизированных систем",
    description: "Создание систем автоматизации бизнес-процессов и документооборота",
  },
  {
    icon: FileSearch,
    title: "Анализ и консалтинг",
    description: "Бизнес-анализ, системный анализ и IT-консалтинг для оптимизации процессов",
  },
  {
    icon: Shield,
    title: "Аудит IT-систем и ПО",
    description: "Комплексная проверка безопасности, производительности и соответствия стандартам",
  },
]

export function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="services" ref={ref} className="relative py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">Услуги</h2>
          <p className="mx-auto max-w-2xl text-balance text-xl text-zinc-400">
            Комплексные IT-решения для вашего бизнеса
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-8 backdrop-blur-xl transition-all hover:border-purple-500/50 hover:bg-white/[0.05]"
            >
              <div className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-blue-600/10" />
              </div>

              <div className="relative">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 transition-transform group-hover:scale-110">
                  <service.icon className="h-7 w-7 text-purple-400" />
                </div>

                <h3 className="mb-3 text-xl font-semibold">{service.title}</h3>
                <p className="mb-6 text-zinc-400 leading-relaxed">{service.description}</p>

                <Button
                  variant="ghost"
                  className="h-auto p-0 text-purple-400 hover:bg-transparent hover:text-purple-300"
                >
                  Подробнее →
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
