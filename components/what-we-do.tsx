"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

const serviceImages = [
  "/software-implementation-modern-office.jpg",
  "/database-servers-data-center.jpg",
  "/business-automation-workflow.png",
  "/it-consulting-meeting.png",
  "/business-analysis-charts.png",
  "/software-implementation-modern-office.jpg",
  "/database-servers-data-center.jpg",
  "/business-automation-workflow.png",
  "/it-consulting-meeting.png",
];

interface WhatWeDoProps {
  onOpenModal: (service: string) => void;
}

export function WhatWeDo({ onOpenModal }: WhatWeDoProps) {
  const { t } = useLanguage();

  return (
    <section id="services" className="relative py-16 sm:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 text-center sm:mb-16 lg:mb-20"
        >
          <h2 className="mb-4 text-balance text-3xl font-bold sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            {(() => {
              const russian = "делаем";
              const uzbek = "qilamiz";

              const separator = t.whatWeDo.title.includes(russian)
                ? russian
                : uzbek;

              const parts = t.whatWeDo.title.split(separator);

              return (
                <>
                  {parts[0]}
                  <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                    {separator}
                  </span>
                </>
              );
            })()}
          </h2>
        </motion.div>

        <div className="space-y-0">
          {t.whatWeDo.services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="group relative overflow-hidden"
            >
              <div className="relative flex min-h-[400px] items-center sm:min-h-[500px] lg:min-h-[600px]">
                <div className="absolute inset-0">
                  <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/50 z-10 sm:via-black/80 sm:to-transparent" />
                  <img
                    src={serviceImages[index] || "/placeholder.svg"}
                    alt={service.title}
                    className="h-full w-full object-cover opacity-30 transition-all duration-700 group-hover:scale-105 group-hover:opacity-40"
                  />
                </div>

                <div className="container relative z-20 mx-auto px-4 sm:px-6">
                  <div className="max-w-2xl">
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <div className="mb-3 inline-block rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-300 backdrop-blur-sm sm:mb-4 sm:px-4 sm:text-sm">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                      <h3 className="mb-4 text-2xl font-bold leading-tight sm:mb-6 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                        {service.title}
                      </h3>
                      <p className="mb-6 text-base leading-relaxed text-zinc-300 sm:mb-8 sm:text-lg lg:text-xl">
                        {service.description}
                      </p>
                      <Button
                        onClick={() => onOpenModal(service.title)}
                        className="group h-10 gap-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-5 text-sm font-semibold shadow-lg shadow-purple-500/30 transition-all hover:scale-105 hover:shadow-purple-500/50 sm:h-12 sm:px-6 sm:text-base"
                      >
                        {t.buttons.contact}
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1 sm:h-4 sm:w-4" />
                      </Button>
                    </motion.div>
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 to-blue-600/0 opacity-0 transition-opacity duration-700 group-hover:from-purple-600/10 group-hover:to-blue-600/10 group-hover:opacity-100" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
