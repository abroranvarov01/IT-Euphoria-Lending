"use client";

import type React from "react";
import { createContext, useContext, useState, useEffect } from "react";
import { translations, type Language, type TranslationKey } from "./i18n";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationKey;
  isChangingLanguage: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("ru");
  const [isChangingLanguage, setIsChangingLanguage] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem("language") as Language;
    if (savedLang && (savedLang === "ru" || savedLang === "uz")) {
      setLanguageState(savedLang);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setIsChangingLanguage(true);

    localStorage.setItem("language", lang);

    setTimeout(() => {
      setLanguageState(lang);
    }, 250);

    setTimeout(() => {
      setIsChangingLanguage(false);
    }, 500);
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t: translations[language],
        isChangingLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
