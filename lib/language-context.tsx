"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { translations, type Language, type TranslationKey } from "./i18n"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: TranslationKey
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("ru")

  useEffect(() => {
    const savedLang = localStorage.getItem("language") as Language
    if (savedLang && (savedLang === "ru" || savedLang === "uz")) {
      setLanguageState(savedLang)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem("language", lang)
  }

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t: translations[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
