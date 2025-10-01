"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PhotoGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Placeholder photos - replace with your actual photos
  const photos = [
    {
      url: "/romantic-couple-at-sunset-beach.jpg",
      caption: "Our first beach sunset together 🌅",
    },
    {
      url: "/happy-couple-laughing-in-park.jpg",
      caption: "That day you made me laugh until I cried 😂",
    },
    {
      url: "/couple-holding-hands-walking.jpg",
      caption: "Every step with you feels like home 🏡",
    },
    {
      url: "/romantic-dinner-date-couple.jpg",
      caption: "Our anniversary dinner - unforgettable 💕",
    },
    {
      url: "/couple-adventure-hiking-mountains.jpg",
      caption: "Adventures are better with you 🏔️",
    },
  ]

  const nextPhoto = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length)
  }

  const prevPhoto = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length)
  }

  return (
    <div className="space-y-8">
      {/* Main Photo Display */}
      <Card className="relative overflow-hidden bg-card border-2 border-primary/20 shadow-2xl">
        <div className="relative aspect-[4/3] md:aspect-[16/10]">
          <img
            src={photos[currentIndex].url || "/placeholder.svg"}
            alt={photos[currentIndex].caption}
            className="w-full h-full object-cover transition-all duration-700 ease-in-out"
          />

          {/* Navigation Buttons */}
          <Button
            onClick={prevPhoto}
            size="icon"
            variant="secondary"
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full w-12 h-12 bg-background/80 hover:bg-background backdrop-blur-sm"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <Button
            onClick={nextPhoto}
            size="icon"
            variant="secondary"
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full w-12 h-12 bg-background/80 hover:bg-background backdrop-blur-sm"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>

          {/* Caption Overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/95 to-transparent p-6">
            <p className="text-xl md:text-2xl font-medium text-center text-foreground text-pretty">
              {photos[currentIndex].caption}
            </p>
          </div>
        </div>
      </Card>

      {/* Thumbnail Navigation */}
      <div className="flex gap-4 justify-center overflow-x-auto pb-4">
        {photos.map((photo, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`relative flex-shrink-0 w-24 h-24 rounded-xl overflow-hidden transition-all duration-300 ${
              index === currentIndex
                ? "ring-4 ring-primary scale-110"
                : "ring-2 ring-border opacity-60 hover:opacity-100"
            }`}
          >
            <img
              src={photo.url || "/placeholder.svg"}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Photo Counter */}
      <p className="text-center text-muted-foreground">
        Photo {currentIndex + 1} of {photos.length}
      </p>
    </div>
  )
}
