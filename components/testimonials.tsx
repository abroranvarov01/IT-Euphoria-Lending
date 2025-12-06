"use client";

import { motion, useInView } from "framer-motion";
import { Star } from "lucide-react";
import { useRef } from "react";
import { Card, CardContent } from "./card";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/src/components/ui/avatar";
import { useLanguage } from "@/lib/language-context";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08, // Tezikroq ketma-ketlik
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    rotateX: -90, // X o'qi bo'yicha sal aylanib kirish
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 18,
    },
  },
};

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });
  const { t } = useLanguage();

  // Matnni rangli qilish uchun ajratish logikasi
  const titleText = t.testimonials.title;
  const russianWord = "команд";
  const uzbekWord = "jamoalari";
  const isRussian = titleText.toLowerCase().includes(russianWord.toLowerCase());
  const separator = isRussian ? russianWord : uzbekWord;

  const regex = new RegExp(`(${separator})`, "i");
  const parts = titleText.split(regex);
  const safeParts = parts.length >= 3 ? parts : [titleText, "", ""];

  const testimonials = t.testimonials.items;

  return (
    <section
      id="testimonials"
      ref={ref}
      className="border-b border-border/40 bg-background py-20 md:py-32"
    >
      <div className="container mx-auto px-4">
        {/* Sarlavha animatsiyasi: Har doim qayta ishlaydi */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            {/* 1. Matnning birinchi qismi */}
            {safeParts[0]}

            {/* 2. Rangli qism */}
            <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
              {safeParts[1] || separator}
            </span>

            {/* 3. Matnning oxirgi qismi */}
            {safeParts[2]}
          </h2>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
            {t.testimonials.subtitle}
          </p>
        </motion.div>

        {/* Kartochkalar container animatsiyasi: Har doim qayta ishlaydi */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 [perspective:1000px]" // 🔥 3D effekt uchun perspektiv qo'shildi
        >
          {testimonials.map((testimonial, index) => (
            // Har bir Card uchun item animatsiyasi
            <motion.div key={index} variants={itemVariants}>
              <Card className="border-border/50 bg-card">
                <CardContent className="p-6">
                  <div className="mb-4 flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-primary text-primary"
                      />
                    ))}
                  </div>
                  <blockquote className="mb-6 leading-relaxed text-card-foreground">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.author}
                      />
                      <AvatarFallback>{testimonial.initials}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role} {t.testimonials.atText}{" "}
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
