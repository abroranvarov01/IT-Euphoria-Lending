"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function ContactSection() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="relative overflow-hidden py-16 sm:py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />

      <div className="container relative mx-auto px-4 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4 text-balance text-3xl font-bold sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl">
              {t.contactSection.title.split(" ")[0]}{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                {t.contactSection.title.split(" ").slice(1, -1).join(" ")}
              </span>{" "}
              {t.contactSection.title.split(" ").slice(-1)}
            </h2>
            <p className="mb-6 text-base text-zinc-400 sm:mb-8 sm:text-lg lg:text-xl">{t.contactSection.subtitle}</p>

            <form className="space-y-4 sm:space-y-6">
              <div className="space-y-4">
                <Input
                  placeholder={t.contactSection.form.name}
                  className="h-12 rounded-xl border-zinc-800 bg-zinc-900/50 backdrop-blur-sm transition-all focus:border-purple-500 sm:h-14"
                />
                <Input
                  type="email"
                  placeholder={t.contactSection.form.email}
                  className="h-12 rounded-xl border-zinc-800 bg-zinc-900/50 backdrop-blur-sm transition-all focus:border-purple-500 sm:h-14"
                />
                <Textarea
                  placeholder={t.contactSection.form.message}
                  rows={5}
                  className="rounded-xl border-zinc-800 bg-zinc-900/50 backdrop-blur-sm transition-all focus:border-purple-500 sm:rows-6"
                />
              </div>

              <Button
                size="lg"
                className="group h-12 w-full gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-base font-semibold shadow-2xl shadow-purple-500/30 transition-all hover:scale-[1.02] hover:shadow-purple-500/50 sm:h-14 sm:text-lg"
              >
                {t.contactSection.form.submit}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 sm:h-5 sm:w-5" />
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative hidden lg:block"
          >
            <div className="relative overflow-hidden rounded-2xl lg:rounded-3xl">
              <img src="/modern-office-collaboration.png" alt="Contact" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-blue-600/10 backdrop-blur-[2px]" />
              <div className="absolute -bottom-20 left-1/2 h-40 w-3/4 -translate-x-1/2 rounded-full bg-purple-600/30 blur-3xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
