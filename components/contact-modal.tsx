"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useLanguage } from "@/lib/language-context"

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
  service?: string
}

export function ContactModal({ isOpen, onClose, service }: ContactModalProps) {
  const { t } = useLanguage()

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", { ...formData, service })
    onClose()
    setFormData({ name: "", phone: "", email: "", message: "" })
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/90 backdrop-blur-xl shadow-2xl sm:rounded-3xl"
            >
              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-blue-600/10" />

              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute right-4 top-4 z-10 rounded-full bg-white/5 p-2 transition-colors hover:bg-white/10 sm:right-6 sm:top-6"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="relative p-6 sm:p-8 lg:p-12">
                <div className="mb-6 sm:mb-8">
                  <h2 className="mb-2 text-2xl font-bold sm:mb-3 sm:text-3xl lg:text-4xl">
                    {t.contactModal.title.split(" ")[0]}{" "}
                    <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                      {t.contactModal.title.split(" ").slice(1).join(" ")}
                    </span>
                  </h2>
                  <p className="text-base text-zinc-400 sm:text-lg">{t.contactModal.subtitle}</p>
                  {service && (
                    <div className="mt-3 inline-block rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1.5 text-xs font-medium text-purple-300 sm:mt-4 sm:px-4 sm:py-2 sm:text-sm">
                      {t.contactModal.service}: {service}
                    </div>
                  )}
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                    <div>
                      <label htmlFor="name" className="mb-2 block text-sm font-medium text-zinc-300">
                        {t.contactModal.form.name} {t.contactModal.form.required}
                      </label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="h-11 border-white/10 bg-white/5 backdrop-blur-sm transition-colors focus:border-purple-500/50 focus:bg-white/10 sm:h-12"
                        placeholder={t.contactModal.form.namePlaceholder}
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="mb-2 block text-sm font-medium text-zinc-300">
                        {t.contactModal.form.phone} {t.contactModal.form.required}
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="h-11 border-white/10 bg-white/5 backdrop-blur-sm transition-colors focus:border-purple-500/50 focus:bg-white/10 sm:h-12"
                        placeholder={t.contactModal.form.phonePlaceholder}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-zinc-300">
                      {t.contactModal.form.email}
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="h-11 border-white/10 bg-white/5 backdrop-blur-sm transition-colors focus:border-purple-500/50 focus:bg-white/10 sm:h-12"
                      placeholder={t.contactModal.form.emailPlaceholder}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-medium text-zinc-300">
                      {t.contactModal.form.message}
                    </label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="min-h-[100px] border-white/10 bg-white/5 backdrop-blur-sm transition-colors focus:border-purple-500/50 focus:bg-white/10 sm:min-h-[120px]"
                      placeholder={t.contactModal.form.messagePlaceholder}
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="group h-12 w-full gap-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-base font-semibold shadow-2xl shadow-purple-500/50 transition-all hover:scale-[1.02] hover:shadow-purple-500/70 sm:h-14 sm:text-lg"
                  >
                    {t.buttons.send}
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-1 sm:h-5 sm:w-5" />
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
