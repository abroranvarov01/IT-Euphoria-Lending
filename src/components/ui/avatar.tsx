// src/components/ui/avatar.tsx
import * as React from "react";
// cn funksiyasi mavjud deb faraz qilinadi
import { cn } from "@/lib/utils";

// Avatar uchun bazaviy komponent (zamonaviy, yumaloq va kichik soya)
const Avatar = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full shadow-md",
      className
    )}
    {...props}
  />
));
Avatar.displayName = "Avatar";

// Avatar rasmi
const AvatarImage = React.forwardRef<
  HTMLImageElement,
  React.ImgHTMLAttributes<HTMLImageElement>
>(({ className, ...props }, ref) => (
  <img
    ref={ref}
    className={cn("aspect-square h-full w-full", className)}
    {...props}
  />
));
AvatarImage.displayName = "AvatarImage";

// Avatar rasm yuklanmaganda chiqadigan matn/rang
const AvatarFallback = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    // Chiroyli gradyent fon, matnni markazga joylash
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-blue-500/80 text-sm font-medium text-white shadow-inner",
      className
    )}
    {...props}
  />
));
AvatarFallback.displayName = "AvatarFallback";

export { Avatar, AvatarImage, AvatarFallback };
