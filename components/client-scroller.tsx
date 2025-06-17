"use client"

import Image from "next/image"
import { useState } from "react"

interface ClientScrollerProps {
  direction?: "left" | "right"
  speed?: "slow" | "normal" | "fast"
  className?: string
}

export function ClientScroller({
  direction = "left",
  speed = "normal",
  className,
}: ClientScrollerProps) {
  const [clients] = useState([
    "/clients/client_1.png",
    "/clients/client_2.png",
    "/clients/client_3.png",
    "/clients/client_4.png",
    "/clients/client_5.png",
    "/clients/client_6.png",
    "/clients/client_7.png",
    "/clients/client_8.png",
    "/clients/client_9.png",
    "/clients/client_10.png",
    "/clients/client_11.png",
    "/clients/client_12.png",
    "/clients/client_13.png",
    "/clients/client_14.png",
    "/clients/client_15.png",
    "/clients/client_16.png",
    "/clients/client_17.png",
  ])

  // Speed mapping in seconds (adjusted for smoother animation)
  const speedMap = {
    slow: "60s",
    normal: "45s",
    fast: "30s"
  }

  // Calculate the width needed for perfect looping
  const containerWidth = clients.length * (192 + 64) // 192px (w-48) + 64px (gap-16)

  return (
    <div 
      className={`relative flex overflow-hidden group ${className}`}
      style={{ 
        maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
      }}
    >
      <div className="flex animate-scroll" style={{
        width: `${containerWidth}px`,
        animationDirection: direction === "left" ? "normal" : "reverse",
        animationDuration: speedMap[speed],
        animationPlayState: "running",
      }}>
        {clients.map((client, index) => (
          <div
            key={index}
            className="relative w-fit h-32 mx-4 flex-shrink-0 rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-xl"
            style={{ aspectRatio: '3/2' }}
          >
            <div className="absolute inset-4 flex items-center justify-center">
              <Image
                src={client}
                alt={`Client Logo ${index + 1}`}
                fill
                className="object-contain p-4 transition-opacity duration-300 group-hover:opacity-100 opacity-70"
                sizes="192px"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="flex animate-scroll" style={{
        width: `${containerWidth}px`,
        animationDirection: direction === "left" ? "normal" : "reverse",
        animationDuration: speedMap[speed],
        animationPlayState: "running",
      }}>
        {clients.map((client, index) => (
          <div
            key={index}
            className="relative w-48 h-32 mx-8 flex-shrink-0 rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-xl"
            style={{ aspectRatio: '3/2' }}
          >
            <div className="absolute inset-4 flex items-center justify-center">
              <Image
                src={client}
                alt={`Client Logo ${index + 1}`}
                fill
                className="object-contain p-4 transition-opacity duration-300 group-hover:opacity-100 opacity-70"
                sizes="192px"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 