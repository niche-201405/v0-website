"use client"

export default function AnimatedStickers() {
  const stickers = [
    { emoji: "🧸", top: "15%", left: "5%", rotation: "-15deg", delay: "0s" },
    { emoji: "🕊️", top: "25%", right: "8%", rotation: "12deg", delay: "0.5s" },
    { emoji: "🌸", top: "45%", left: "3%", rotation: "-8deg", delay: "1s" },
    { emoji: "⭐", top: "60%", right: "5%", rotation: "20deg", delay: "1.5s" },
    { emoji: "🦋", top: "75%", left: "7%", rotation: "-12deg", delay: "2s" },
    { emoji: "🌹", top: "35%", right: "12%", rotation: "8deg", delay: "0.8s" },
    { emoji: "✨", top: "55%", left: "10%", rotation: "-20deg", delay: "1.2s" },
    { emoji: "💫", top: "20%", right: "15%", rotation: "15deg", delay: "1.8s" },
  ]

  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      {stickers.map((sticker, i) => (
        <div
          key={i}
          className="absolute animate-float text-4xl md:text-5xl opacity-40 hover:opacity-80 transition-opacity"
          style={{
            top: sticker.top,
            left: sticker.left,
            right: sticker.right,
            transform: `rotate(${sticker.rotation})`,
            animationDelay: sticker.delay,
          }}
        >
          {sticker.emoji}
        </div>
      ))}
    </div>
  )
}
