"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Workflow, Zap, Shield, BarChart3 } from "lucide-react";
import { Card, CardContent } from "./card";
import { useLanguage } from "@/lib/language-context";

// 🔥 Animation variantlari
const containerVariants = {
  // Ko'rinish maydoniga kirganda
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08, // Tezikroq kechiktirish
      delayChildren: 0.1,
    },
  },
  // Ko'rinish maydonidan chiqqanda (yoki boshlang'ich holat)
  hidden: { opacity: 0 },
};

const itemVariants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween", // Spring emas, oddiy silliq o'tish
      duration: 0.4,
    },
  },
  hidden: { opacity: 0, y: 50 }, // Pastga tushib g'oyib bo'lish
};

export function Features() {
  const ref = useRef(null);
  // 🔥 once: true olib tashlandi, endi har kirish/chiqishda ishlaydi
  const isInView = useInView(ref, { margin: "-100px" });
  const { t } = useLanguage();

  const titleText = t.features.mainTitle;
  const russianWord = "автоматизации";
  const uzbekWord = "avtomatlashtirish";
  const isRussian = titleText.toLowerCase().includes(russianWord.toLowerCase());
  const separator = isRussian ? russianWord : uzbekWord;
  const regex = new RegExp(`(${separator})`, "i");
  const parts = titleText.split(regex);
  const safeParts = parts.length >= 3 ? parts : [titleText, "", ""];

  const features = t.features.items;

  return (
    <section
      id="features"
      ref={ref}
      className="border-b border-border/40 bg-muted/30 py-20 md:py-32"
    >
      <div className="container mx-auto px-4">
        {/* 🔥 Sarlavha animatsiyasi: isInView === true bo'lsa kiradi, false bo'lsa chiqadi */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }} // Har doim qayta ishlaydi
          transition={{ duration: 0.5 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            {safeParts[0]}
            <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
              {safeParts[1] || separator}
            </span>
            {safeParts[2]}
          </h2>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
            {t.features.subtitle}
          </p>
        </motion.div>

        {/* 🔥 Kartochkalar container animatsiyasi: Har safar qayta ishlaydi */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"} // isInView ga bog'langan
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="border-border/50 bg-card transition-all hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    {/* Iconni tanlash logikasi */}
                    {feature.iconType === "Workflow" && (
                      <Workflow className="h-6 w-6 text-primary" />
                    )}
                    {feature.iconType === "Zap" && (
                      <Zap className="h-6 w-6 text-primary" />
                    )}
                    {feature.iconType === "Shield" && (
                      <Shield className="h-6 w-6 text-primary" />
                    )}
                    {feature.iconType === "BarChart3" && (
                      <BarChart3 className="h-6 w-6 text-primary" />
                    )}
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">
                    {feature.title}
                  </h3>
                  <p className="leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
