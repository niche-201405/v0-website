"use client"

import { useState, useEffect } from "react"
import { Heart, Sparkles, Volume2, VolumeX } from "lucide-react"
import { Button } from "@/components/ui/button"
import FloatingHearts from "@/components/floating-hearts"
import PhotoGallery from "@/components/photo-gallery"
import LoveLetterSection from "@/components/love-letter-section"
import AnimatedStickers from "@/components/animated-stickers"

export default function BoyfriendsDayPage() {
  const [musicPlaying, setMusicPlaying] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)

  useEffect(() => {
    // Trigger confetti on load
    setShowConfetti(true)
    const timer = setTimeout(() => setShowConfetti(false), 5000)
    return () => clearTimeout(timer)
  }, [])

  const toggleMusic = () => {
    setMusicPlaying(!musicPlaying)
    // In a real implementation, you would control an audio element here
  }

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Floating Hearts Background */}
      <FloatingHearts />

      {/* Animated Stickers */}
      <AnimatedStickers />

      {/* Confetti Effect */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-confetti"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            >
              <Heart
                className="w-4 h-4"
                fill={`hsl(${Math.random() * 60 + 320}, 70%, 70%)`}
                color={`hsl(${Math.random() * 60 + 320}, 70%, 70%)`}
              />
            </div>
          ))}
        </div>
      )}

      {/* Music Control Button */}
      <Button
        onClick={toggleMusic}
        size="icon"
        className="fixed top-6 right-6 z-50 rounded-full w-14 h-14 bg-primary/90 hover:bg-primary shadow-lg backdrop-blur-sm"
      >
        {musicPlaying ? <Volume2 className="w-6 h-6" /> : <VolumeX className="w-6 h-6" />}
      </Button>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Sparkle decorations */}
          <div className="absolute top-20 left-10 animate-sparkle">
            <Sparkles className="w-8 h-8 text-accent" fill="currentColor" />
          </div>
          <div className="absolute top-40 right-20 animate-sparkle" style={{ animationDelay: "1s" }}>
            <Sparkles className="w-6 h-6 text-secondary" fill="currentColor" />
          </div>
          <div className="absolute bottom-40 left-20 animate-sparkle" style={{ animationDelay: "0.5s" }}>
            <Sparkles className="w-7 h-7 text-primary" fill="currentColor" />
          </div>

          {/* Main Headline */}
          <div className="space-y-4 animate-fade-in">
            <div className="inline-block animate-pulse-glow">
              <Heart className="w-20 h-20 mx-auto text-primary" fill="currentColor" />
            </div>
            <h1 className="text-6xl md:text-8xl font-bold text-balance leading-tight">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Happy Boyfriend's Day
              </span>
            </h1>
            <p className="text-4xl md:text-5xl font-light text-primary">My Love 💕</p>
          </div>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Today is all about celebrating you and the incredible love we share. Every moment with you is a treasure I
            hold close to my heart.
          </p>

          {/* Decorative hearts */}
          <div className="flex justify-center gap-4 pt-8">
            {[...Array(5)].map((_, i) => (
              <Heart
                key={i}
                className="w-6 h-6 animate-pulse-glow text-primary"
                fill="currentColor"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-5xl md:text-6xl font-bold text-primary">Our Beautiful Moments</h2>
            <p className="text-xl text-muted-foreground text-pretty">Every photo tells a story of our love</p>
          </div>
          <PhotoGallery />
        </div>
      </section>

      {/* Love Letter Section */}
      <section className="py-20 px-4 bg-card/50">
        <div className="max-w-4xl mx-auto">
          <LoveLetterSection />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="flex justify-center gap-2">
            <Heart className="w-5 h-5 text-primary animate-pulse" fill="currentColor" />
            <Heart
              className="w-5 h-5 text-secondary animate-pulse"
              fill="currentColor"
              style={{ animationDelay: "0.3s" }}
            />
            <Heart
              className="w-5 h-5 text-accent animate-pulse"
              fill="currentColor"
              style={{ animationDelay: "0.6s" }}
            />
          </div>
          <p className="text-lg text-muted-foreground">Forever yours, always and forever 💕</p>
          <p className="text-sm text-muted-foreground/70">Made with endless love on Boyfriend's Day 2025</p>
        </div>
      </footer>
    </div>
  )
}
