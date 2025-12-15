// src/components/ui/card.tsx
import * as React from "react";
import { cn } from "@/lib/utils"; // cn funksiyasi mavjud deb faraz qilinadi

// cn funksiyasi yo'q bo'lsa, uni qo'lda yaratish kerak bo'ladi (quyidagi izohga qarang)

// Card komponenti
const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    // Chiroyli, zamonaviy stil
    className={cn(
      "rounded-2xl border border-white/10 bg-zinc-900/50 shadow-xl transition-all duration-300 hover:border-purple-500/50 hover:shadow-purple-500/20",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

// CardContent komponenti
const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6", className)} {...props} />
));
CardContent.displayName = "CardContent";

export { Card, CardContent };

// 💡 Agar sizda "@/lib/utils" bo'lmasa:
// Agar sizda "cn" yordamchi funksiyasi bo'lmasa, yuqoridagi 'cn' ni olib tashlang
// va faqat bitta stringni qoldiring, masalan:
// className="rounded-2xl border border-white/10 bg-zinc-900/50 shadow-xl transition-all duration-300 hover:border-purple-500/50 hover:shadow-purple-500/20 " + className
