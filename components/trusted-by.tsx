"use client";

import { useLanguage } from "@/lib/language-context";
import { motion } from "framer-motion";

const clients = [
  { name: "TechCorp", logo: "/tech-company-logo.jpg" },
  { name: "FinanceHub", logo: "/finance-company-logo.png" },
  { name: "RetailPro", logo: "/abstract-retail-logo.png" },
  { name: "HealthTech", logo: "/health-company-logo.png" },
  { name: "LogiChain", logo: "/logistics-company-logo.png" },
  { name: "EduSmart", logo: "/education-company-logo.png" },
];

export function TrustedBy() {
  const { t } = useLanguage();

  const titleText = t.trustedBy.title;

  const words = titleText.split(/\s+/).filter((word) => word.length > 0);

  const lastWord = words.length > 0 ? words[words.length - 1] : "";

  const firstPart = words.slice(0, -1).join(" ");

  return (
    <section className="relative py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-6 text-balance text-5xl font-bold md:text-6xl">
            {firstPart}
            {firstPart.length > 0 && lastWord.length > 0 && " "}

            <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
              {lastWord}
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group flex items-center justify-center"
            >
              <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 backdrop-blur-sm transition-all hover:border-zinc-700 hover:bg-zinc-800/50">
                <img
                  src={client.logo || "/placeholder.svg"}
                  alt={client.name}
                  className="h-12 w-auto opacity-50 grayscale transition-all group-hover:opacity-100 group-hover:grayscale-0"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
