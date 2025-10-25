"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
  service?: string
}

export function ContactModal({ isOpen, onClose, service }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", { ...formData, service })
    // Here you would typically send the form data to your backend
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
              className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/90 backdrop-blur-xl shadow-2xl"
            >
              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-blue-600/10" />

              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute right-6 top-6 z-10 rounded-full bg-white/5 p-2 transition-colors hover:bg-white/10"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="relative p-8 md:p-12">
                <div className="mb-8">
                  <h2 className="mb-3 text-3xl font-bold md:text-4xl">
                    Обсудим ваш{" "}
                    <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                      проект
                    </span>
                  </h2>
                  <p className="text-lg text-zinc-400">Оставьте заявку, и мы свяжемся с вами в ближайшее время</p>
                  {service && (
                    <div className="mt-4 inline-block rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-300">
                      Услуга: {service}
                    </div>
                  )}
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-2 block text-sm font-medium text-zinc-300">
                        Имя *
                      </label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="h-12 border-white/10 bg-white/5 backdrop-blur-sm transition-colors focus:border-purple-500/50 focus:bg-white/10"
                        placeholder="Ваше имя"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="mb-2 block text-sm font-medium text-zinc-300">
                        Телефон *
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="h-12 border-white/10 bg-white/5 backdrop-blur-sm transition-colors focus:border-purple-500/50 focus:bg-white/10"
                        placeholder="+998 90 123 45 67"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-zinc-300">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="h-12 border-white/10 bg-white/5 backdrop-blur-sm transition-colors focus:border-purple-500/50 focus:bg-white/10"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-medium text-zinc-300">
                      Описание проекта
                    </label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="min-h-[120px] border-white/10 bg-white/5 backdrop-blur-sm transition-colors focus:border-purple-500/50 focus:bg-white/10"
                      placeholder="Расскажите о вашем проекте..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="group h-14 w-full gap-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-lg font-semibold shadow-2xl shadow-purple-500/50 transition-all hover:scale-[1.02] hover:shadow-purple-500/70"
                  >
                    Отправить заявку
                    <Send className="h-5 w-5 transition-transform group-hover:translate-x-1" />
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
