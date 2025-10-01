"use client"

import { Card } from "@/components/ui/card"
import { Heart, Sparkles } from "lucide-react"

export default function LoveLetterSection() {
  const loveNotes = [
    {
      title: "Why I Love You",
      content:
        "Your smile lights up my darkest days. Your laugh is my favorite sound in the world. The way you care for others shows the beautiful soul you have. Every moment with you is a gift I treasure.",
      icon: "💝",
    },
    {
      title: "My Favorite Memories",
      content:
        "Remember that rainy day when we danced in the puddles? Or that time we got lost but found the most beautiful view? Every adventure with you becomes my favorite memory.",
      icon: "🌈",
    },
    {
      title: "What You Mean to Me",
      content:
        "You are my best friend, my partner, my everything. You make me want to be a better person every day. With you, I have found my home, my peace, and my forever.",
      icon: "🏠",
    },
    {
      title: "Our Future Together",
      content:
        "I dream of all the adventures we will have, the memories we will create, and the love that will only grow stronger. With you, I am excited for every tomorrow.",
      icon: "🌟",
    },
  ]

  return (
    <div className="space-y-12">
      {/* Section Header */}
      <div className="text-center space-y-4">
        <div className="flex justify-center gap-2">
          <Sparkles className="w-8 h-8 text-accent animate-pulse" fill="currentColor" />
          <Heart className="w-10 h-10 text-primary animate-pulse-glow" fill="currentColor" />
          <Sparkles className="w-8 h-8 text-secondary animate-pulse" fill="currentColor" />
        </div>
        <h2 className="text-5xl md:text-6xl font-bold text-primary">From My Heart to Yours</h2>
        <p className="text-xl text-muted-foreground text-pretty">
          Words can never fully express how much you mean to me, but here's my attempt 💕
        </p>
      </div>

      {/* Love Notes Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {loveNotes.map((note, index) => (
          <Card
            key={index}
            className="p-8 bg-card border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
          >
            <div className="space-y-4">
              {/* Icon */}
              <div className="text-5xl group-hover:scale-110 transition-transform duration-300">{note.icon}</div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-bold text-primary">{note.title}</h3>

              {/* Content */}
              <p className="text-lg text-foreground/80 leading-relaxed text-pretty">{note.content}</p>

              {/* Decorative hearts */}
              <div className="flex gap-2 pt-2">
                {[...Array(3)].map((_, i) => (
                  <Heart key={i} className="w-4 h-4 text-primary/60" fill="currentColor" />
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Final Love Message */}
      <Card className="p-12 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border-2 border-primary/30 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="text-6xl animate-pulse-glow">💕</div>
          <h3 className="text-3xl md:text-4xl font-bold text-primary">Happy Boyfriend's Day, My Love!</h3>
          <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed text-balance">
            Thank you for being you. Thank you for loving me. Thank you for making every day feel like a fairytale. I
            love you more than words can say, today and always.
          </p>
          <div className="flex justify-center gap-3 pt-4">
            {[...Array(7)].map((_, i) => (
              <Heart
                key={i}
                className="w-6 h-6 text-primary animate-pulse"
                fill="currentColor"
                style={{ animationDelay: `${i * 0.15}s` }}
              />
            ))}
          </div>
          <p className="text-2xl font-medium text-primary pt-4">Forever and Always Yours ✨</p>
        </div>
      </Card>
    </div>
  )
}
