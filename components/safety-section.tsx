"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Flame, Skull } from "lucide-react"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const hazardSymbols = [
  {
    id: 1,
    label: "Compressed Gas",
    icon: (
      <svg className="hazard-icon" viewBox="0 0 24 24" fill="black">
        <rect x="8" y="4" width="8" height="16" />
        <rect x="10" y="3" width="4" height="2" />
        <rect x="10" y="20" width="4" height="1" />
      </svg>
    ),
  },
  {
    id: 2,
    label: "Oxidizing",
    icon: (
      <div className="relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[60px] h-[60px] rounded-full border-4 border-black" />
        </div>
        <Flame size={80} strokeWidth={2.5} className="relative z-10" fill="black" />
      </div>
    ),
  },
  {
    id: 3,
    label: "Toxic",
    icon: <Skull size={80} strokeWidth={3} fill="black" />,
  },
  {
    id: 4,
    label: "Health Hazard",
    icon: (
      <svg className="hazard-icon" viewBox="0 0 100 100" fill="black">
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
    label: "Harmful/ irritant",
    icon: (
      <svg className="hazard-icon" viewBox="0 0 24 24" fill="black">
        <rect x="10" y="4" width="4" height="10" rx="2" />
        <circle cx="12" cy="18" r="2" />
      </svg>
    ),
  },
]

const symbolVariants = {
  hidden: {
    scale: 0,
    rotate: -180,
    opacity: 0,
  },
  visible: (i: number) => ({
    scale: 1,
    rotate: 0,
    opacity: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
      type: "spring",
      stiffness: 200,
      damping: 15,
    },
  }),
}

const glitchAnimation = {
  hover: {
    x: [0, -2, 2, -2, 2, 0],
    y: [0, 2, -2, 2, -2, 0],
    transition: {
      duration: 0.3,
      repeat: 1,
    },
  },
}

function HazardSymbol({
  symbol,
  index,
  shouldReduceMotion,
}: {
  symbol: (typeof hazardSymbols)[0]
  index: number
  shouldReduceMotion: boolean | null
}) {
  return (
    <motion.div
      className="flex flex-col items-center gap-4"
      custom={index}
      initial={shouldReduceMotion ? undefined : "hidden"}
      whileInView={shouldReduceMotion ? undefined : "visible"}
      viewport={{ once: true, amount: 0.3 }}
      variants={symbolVariants}
      whileHover={shouldReduceMotion ? undefined : glitchAnimation}
    >
      <div className="relative w-40 h-40 md:w-[120px] md:h-[120px] sm:w-[100px] sm:h-[100px]">
        <motion.div
          className="diamond absolute inset-0 bg-white border-8 border-red-500 rotate-45 flex items-center justify-center"
          style={{
            boxShadow: "0 0 0 rgba(239, 68, 68, 0)",
          }}
        >
          <div className="-rotate-45 flex items-center justify-center w-full h-full">
            <div className="w-20 h-20 md:w-16 md:h-16 sm:w-14 sm:h-14 flex items-center justify-center">
              {symbol.icon}
            </div>
          </div>
        </motion.div>
      </div>
      <p
        className="text-white font-semibold text-lg text-center"
        style={{
          fontSize: "1.125rem",
          fontWeight: 600,
        }}
      >
        {symbol.label}
      </p>
    </motion.div>
  )
}

export function SafetySection() {
  const shouldReduceMotion = useReducedMotion()
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (shouldReduceMotion || !sectionRef.current) return

    // Pulsing danger glow on diamonds
    const diamonds = sectionRef.current.querySelectorAll(".diamond")
    diamonds.forEach((diamond) => {
      gsap.to(diamond, {
        boxShadow: "0 0 30px rgba(239, 68, 68, 0.8)",
        duration: 1.5,
        yoyo: true,
        repeat: -1,
        ease: "power2.inOut",
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [shouldReduceMotion])

  return (
    <section
      ref={sectionRef}
      className="py-20"
      style={{
        background: "linear-gradient(to bottom right, #9DC13D, #9DC13D)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-center mb-4 uppercase"
          style={{
            fontSize: "2.25rem",
            fontWeight: 800,
            color: "white",
            marginBottom: "16px",
          }}
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={shouldReduceMotion ? undefined : { duration: 0.6 }}
        >
          SAFETY IS NON – NEGOTIABLE
        </motion.h2>

        <motion.p
          className="text-center mb-[60px]"
          style={{
            fontSize: "1.5rem",
            fontWeight: 400,
            color: "white",
          }}
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={shouldReduceMotion ? undefined : { duration: 0.6, delay: 0.2 }}
        >
          because of these Hazardous Waste Characteristics:
        </motion.p>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-4 md:gap-6 lg:gap-8">
          {hazardSymbols.map((symbol, index) => (
            <HazardSymbol
              key={symbol.id}
              symbol={symbol}
              index={index}
              shouldReduceMotion={shouldReduceMotion}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

