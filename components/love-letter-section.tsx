"use client"

import { Card } from "@/components/ui/card"
import { Heart, Sparkles } from "lucide-react"

export default function LoveLetterSection() {
  const loveNotes = [
    {
      title: "I Love You",
      content:
        "Because you were there for me when I had no one to rely on emotionally. We found each other at our lowest points and now we are happy together in our small world. And I hope not to loose this ever. ",
      icon: "💝",
    },
    {
      title: "My Favorite Memories",
      content:
        "There are so many memories, from realizing a spark of love at bandstand nightout, to our first date, our (almost) breakup, the scooter ride to home, the navratri night, everything made me realize how important you are to me.",
      icon: "🌈",
    },
    {
      title: "What You Mean to Me",
      content:
        "You are my best friend, my partner, my everything. You make me want to become a better person every day. With you, I have found my safe place away from home.",
      icon: "🏠",
    },
    {
      title: "Our Future Together",
      content:
        "I hope to build a successful, financially independent and stable future with you, where both of us can share the success together.",
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
          <h3 className="text-3xl md:text-4xl font-bold text-primary">Happy Boyfriend's Day, My Kinshu!</h3>
          <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed text-balance">
            Thank you for everything you do for me. I am sorry if I might have hurt you or feel neglected or unworthy. I love you more than I can express through these texts/
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
