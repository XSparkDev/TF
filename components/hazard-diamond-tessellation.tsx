"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Flame, Skull } from "lucide-react"

const hazards = [
  {
    id: 1,
    name: "Compressed Gas",
    icon: (
      <svg className="w-16 h-16" viewBox="0 0 24 24" fill="black">
        <rect x="8" y="4" width="8" height="16" />
        <rect x="10" y="3" width="4" height="2" />
        <rect x="10" y="20" width="4" height="1" />
      </svg>
    ),
  },
  {
    id: 2,
    name: "Oxidizing",
    icon: (
      <div className="relative w-16 h-16 flex items-center justify-center">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full border-4 border-black" />
        </div>
        <Flame size={48} strokeWidth={2.5} className="relative z-10" fill="black" />
      </div>
    ),
  },
  {
    id: 3,
    name: "Toxic",
    icon: <Skull size={48} strokeWidth={3} fill="black" />,
  },
  {
    id: 4,
    name: "Health Hazard",
    icon: (
      <svg className="w-16 h-16" viewBox="0 0 100 100" fill="black">
        <path d="M50,20 L60,40 L60,70 L55,90 L45,90 L40,70 L40,40 Z" />
        <circle cx="50" cy="15" r="8" />
        <path
          d="M50,45 L53,52 L60,52 L55,57 L57,64 L50,59 L43,64 L45,57 L40,52 L47,52 Z"
          fill="white"
        />
      </svg>
    ),
  },
  {
    id: 5,
    name: "Harmful/Irritant",
    icon: (
      <svg className="w-16 h-16" viewBox="0 0 24 24" fill="black">
        <rect x="10" y="4" width="4" height="10" rx="2" />
        <circle cx="12" cy="18" r="2" />
      </svg>
    ),
  },
  {
    id: 6,
    name: "Environmental Hazard",
    icon: (
      <svg className="w-16 h-16" viewBox="0 0 100 100" fill="black">
        <path
          d="M50,80 L50,40 M50,40 L35,50 M50,40 L65,50 M50,50 L40,60 M50,50 L60,60"
          stroke="black"
          strokeWidth="3"
          fill="none"
        />
        <ellipse cx="50" cy="85" rx="15" ry="8" />
      </svg>
    ),
  },
  {
    id: 7,
    name: "Flammable",
    icon: <Flame className="w-16 h-16" strokeWidth={0} fill="black" />,
  },
  {
    id: 8,
    name: "Corrosive",
    icon: (
      <svg className="w-16 h-16" viewBox="0 0 100 100" fill="black">
        <rect x="30" y="20" width="12" height="25" rx="2" stroke="black" strokeWidth="2" fill="none" />
        <circle cx="36" cy="50" r="3" />
        <circle cx="36" cy="58" r="2" />
        <path d="M20,65 L25,80 L35,78 L32,65" />
        <rect x="50" y="70" width="30" height="8" />
        <rect x="50" y="82" width="30" height="3" opacity="0.5" />
      </svg>
    ),
  },
  {
    id: 9,
    name: "Explosive",
    icon: (
      <svg className="w-16 h-16" viewBox="0 0 100 100" fill="black">
        <circle cx="50" cy="50" r="15" />
        <path
          d="M50,50 L50,20 M50,50 L75,30 M50,50 L80,50 M50,50 L75,70 M50,50 L50,80 M50,50 L25,70 M50,50 L20,50 M50,50 L25,30"
          stroke="black"
          strokeWidth="4"
        />
      </svg>
    ),
  },
  {
    id: 10,
    name: "Acute Toxicity",
    icon: (
      <svg className="w-16 h-16" viewBox="0 0 100 100" fill="black">
        <path d="M50,20 L60,40 L60,70 L55,90 L45,90 L40,70 L40,40 Z" />
        <circle cx="50" cy="15" r="8" />
        <path d="M35,50 L65,50 M50,35 L50,65" stroke="white" strokeWidth="4" />
      </svg>
    ),
  },
]

interface DiamondProps {
  hazard: typeof hazards[0]
  isHovered: boolean
  onHover: () => void
  onLeave: () => void
}

function Diamond({ hazard, isHovered, onHover, onLeave }: DiamondProps) {
  return (
    <div
      className="relative"
      style={{ width: "160px", height: "160px", zIndex: isHovered ? 50 : 1 }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <motion.div
        className="absolute inset-0 cursor-pointer"
        style={{
          transformStyle: "preserve-3d",
          perspective: "1000px",
        }}
        animate={{
          scale: isHovered ? 1.3 : 1,
          rotateY: isHovered ? 180 : 0,
        }}
        transition={{
          duration: 0.6,
          ease: "easeInOut",
          scale: { type: "spring", stiffness: 300, damping: 20 },
        }}
      >
        {/* Front Face - Icon */}
        <div
          className="absolute inset-0 bg-white border-[8px] flex items-center justify-center shadow-lg"
          style={{
            transform: "rotate(45deg)",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            borderColor: isHovered ? "#DC2626" : "#3C3F41",
          }}
        >
          <div className="flex items-center justify-center" style={{ transform: "rotate(-45deg)" }}>
            {hazard.icon}
          </div>
        </div>

        {/* Back Face - Text */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          <div
            className="w-full h-full border-[8px] flex items-center justify-center shadow-xl"
            style={{
              transform: "rotate(45deg)",
              background: "linear-gradient(135deg, #DC2626 0%, #EF4444 100%)",
              boxShadow: isHovered
                ? "0 25px 50px rgba(0,0,0,0.5)"
                : "0 10px 20px rgba(0,0,0,0.2)",
              borderColor: isHovered ? "#DC2626" : "#3C3F41",
            }}
          >
            <div
              className="text-white font-bold text-center px-4 text-base leading-tight"
              style={{
                transform: "rotate(-45deg)",
                writingMode: "horizontal-tb",
                textOrientation: "upright",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                margin: "0 auto",
              }}
            >
              {hazard.name}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export function HazardDiamondTessellation() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <>
      {/* Desktop: Tessellation Layout */}
      <div className="hidden md:block relative mx-auto" style={{ width: "fit-content", minHeight: "400px" }}>
        {/* Row 1 - Top 5 diamonds */}
        <div className="flex" style={{ marginBottom: "-80px" }}>
          {hazards.slice(0, 5).map((hazard) => (
            <Diamond
              key={hazard.id}
              hazard={hazard}
              isHovered={hoveredId === hazard.id}
              onHover={() => setHoveredId(hazard.id)}
              onLeave={() => setHoveredId(null)}
            />
          ))}
        </div>

        {/* Row 2 - Bottom 5 diamonds (offset by half width to nestle in gaps) */}
        <div className="flex" style={{ marginLeft: "80px" }}>
          {hazards.slice(5, 10).map((hazard) => (
            <Diamond
              key={hazard.id}
              hazard={hazard}
              isHovered={hoveredId === hazard.id}
              onHover={() => setHoveredId(hazard.id)}
              onLeave={() => setHoveredId(null)}
            />
          ))}
        </div>
      </div>

      {/* Mobile: Grid Layout */}
      <div className="md:hidden grid grid-cols-2 gap-4 px-4 max-w-md mx-auto">
        {hazards.map((hazard) => (
          <div key={hazard.id} className="flex justify-center">
            <div style={{ transform: "scale(0.7)", transformOrigin: "center" }}>
              <Diamond
                hazard={hazard}
                isHovered={hoveredId === hazard.id}
                onHover={() => setHoveredId(hazard.id)}
                onLeave={() => setHoveredId(null)}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
