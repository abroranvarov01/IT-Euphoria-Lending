"use client"

import { motion } from "framer-motion"

const services = [
  {
    title: "Внедрение и сопровождение ПО",
    description: "Комплексное внедрение программных решений с полным циклом поддержки и обучения персонала",
    image: "/software-implementation-modern-office.jpg",
  },
  {
    title: "Создание и поддержка баз данных",
    description: "Проектирование, оптимизация и администрирование баз данных любой сложности",
    image: "/database-servers-data-center.jpg",
  },
  {
    title: "Автоматизация бизнес-процессов",
    description: "Разработка систем автоматизации для повышения эффективности и снижения издержек",
    image: "/business-automation-workflow.png",
  },
  {
    title: "IT-аудит и консалтинг",
    description: "Экспертная оценка IT-инфраструктуры и рекомендации по оптимизации",
    image: "/it-consulting-meeting.png",
  },
  {
    title: "Анализ и реинжиниринг бизнес-систем",
    description: "Модернизация существующих систем и процессов для достижения новых бизнес-целей",
    image: "/business-analysis-charts.png",
  },
]

export function WhatWeDo() {
  return (
    <section className="relative py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="mb-6 text-balance text-5xl font-bold md:text-6xl lg:text-7xl">
            Что мы{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">делаем</span>
          </h2>
        </motion.div>

        <div className="space-y-0">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="group relative overflow-hidden"
            >
              <div className="relative flex min-h-[600px] items-center">
                {/* Background image */}
                <div className="absolute inset-0">
                  <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="h-full w-full object-cover opacity-30 transition-all duration-700 group-hover:scale-105 group-hover:opacity-40"
                  />
                </div>

                {/* Content */}
                <div className="container relative z-20 mx-auto px-6">
                  <div className="max-w-2xl">
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <div className="mb-4 inline-block rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1 text-sm font-medium text-purple-300 backdrop-blur-sm">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                      <h3 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">{service.title}</h3>
                      <p className="text-xl leading-relaxed text-zinc-300">{service.description}</p>
                    </motion.div>
                  </div>
                </div>

                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 to-blue-600/0 opacity-0 transition-opacity duration-700 group-hover:from-purple-600/10 group-hover:to-blue-600/10 group-hover:opacity-100" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
