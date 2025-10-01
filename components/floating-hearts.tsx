"use client"

import { Heart } from "lucide-react"

export default function FloatingHearts() {
  const hearts = [
    { size: "w-8 h-8", left: "10%", delay: "0s", duration: "3s", color: "text-primary/20" },
    { size: "w-6 h-6", left: "20%", delay: "1s", duration: "4s", color: "text-secondary/20" },
    { size: "w-10 h-10", left: "30%", delay: "2s", duration: "3.5s", color: "text-accent/20" },
    { size: "w-7 h-7", left: "50%", delay: "0.5s", duration: "4.5s", color: "text-primary/20" },
    { size: "w-9 h-9", left: "70%", delay: "1.5s", duration: "3.8s", color: "text-secondary/20" },
    { size: "w-6 h-6", left: "80%", delay: "2.5s", duration: "4.2s", color: "text-accent/20" },
    { size: "w-8 h-8", left: "90%", delay: "0.8s", duration: "3.6s", color: "text-primary/20" },
    { size: "w-5 h-5", left: "15%", delay: "1.8s", duration: "4.8s", color: "text-secondary/20" },
    { size: "w-7 h-7", left: "60%", delay: "2.2s", duration: "3.3s", color: "text-accent/20" },
    { size: "w-6 h-6", left: "40%", delay: "1.2s", duration: "4.4s", color: "text-primary/20" },
  ]

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {hearts.map((heart, i) => (
        <div
          key={i}
          className="absolute bottom-0 animate-float-slow"
          style={{
            left: heart.left,
            animationDelay: heart.delay,
            animationDuration: heart.duration,
          }}
        >
          <Heart className={`${heart.size} ${heart.color}`} fill="currentColor" />
        </div>
      ))}
    </div>
  )
}
