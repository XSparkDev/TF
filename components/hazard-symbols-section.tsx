"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Flame } from "lucide-react"

const hazardSymbols = [
  {
    id: 1,
    label: "Environmental Hazard",
    icon: (
      <svg className="w-20 h-20" viewBox="0 0 100 100" fill="black">
        {/* Dead tree with broken branches */}
        <path
          d="M50,80 L50,40 M50,40 L35,50 M50,40 L65,50 M50,50 L40,60 M50,50 L60,60"
          stroke="black"
          strokeWidth="3"
          fill="none"
        />
        {/* Dead fish */}
        <ellipse cx="50" cy="85" rx="15" ry="8" />
      </svg>
    ),
  },
  {
    id: 2,
    label: "Flammable",
    icon: <Flame className="w-20 h-20" strokeWidth={0} fill="black" />,
  },
  {
    id: 3,
    label: "Corrosive",
    icon: (
      <svg className="w-20 h-20" viewBox="0 0 100 100" fill="black">
        {/* Test tube pouring */}
        <rect x="30" y="20" width="12" height="25" rx="2" stroke="black" strokeWidth="2" fill="none" />
        {/* Liquid drops */}
        <circle cx="36" cy="50" r="3" />
        <circle cx="36" cy="58" r="2" />
        {/* Hand being corroded */}
        <path d="M20,65 L25,80 L35,78 L32,65" />
        {/* Metal bar being corroded */}
        <rect x="50" y="70" width="30" height="8" />
        <rect x="50" y="82" width="30" height="3" opacity="0.5" />
      </svg>
    ),
  },
  {
    id: 4,
    label: "Explosive",
    icon: (
      <svg className="w-20 h-20" viewBox="0 0 100 100" fill="black">
        {/* Explosion burst */}
        <circle cx="50" cy="50" r="15" />
        {/* Explosion rays */}
        <path
          d="M50,50 L50,20 M50,50 L75,30 M50,50 L80,50 M50,50 L75,70 M50,50 L50,80 M50,50 L25,70 M50,50 L20,50 M50,50 L25,30"
          stroke="black"
          strokeWidth="4"
        />
      </svg>
    ),
  },
  {
    id: 5,
    label: "Biohazard",
    icon: (
      <svg className="w-20 h-20" viewBox="0 0 100 100" fill="black">
        {/* Biohazard trefoil symbol */}
        <circle cx="50" cy="50" r="8" />
        <circle cx="50" cy="30" r="12" fill="none" stroke="black" strokeWidth="4" />
        <circle cx="67" cy="60" r="12" fill="none" stroke="black" strokeWidth="4" />
        <circle cx="33" cy="60" r="12" fill="none" stroke="black" strokeWidth="4" />
        {/* Inner circles */}
        <circle cx="50" cy="32" r="5" fill="white" />
        <circle cx="65" cy="58" r="5" fill="white" />
        <circle cx="35" cy="58" r="5" fill="white" />
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
      delay: i * 0.1,
      duration: 0.6,
      type: "spring",
      stiffness: 150,
      damping: 12,
    },
  }),
}

const symbolHover = {
  scale: 1.1,
  boxShadow: "0 10px 30px rgba(239, 68, 68, 0.4)",
  transition: { duration: 0.3 },
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
      className="flex flex-col items-center"
      custom={index}
      initial={shouldReduceMotion ? undefined : "hidden"}
      whileInView={shouldReduceMotion ? undefined : "visible"}
      viewport={{ once: true, amount: 0.3 }}
      variants={symbolVariants}
      whileHover={shouldReduceMotion ? undefined : symbolHover}
    >
      <div className="hazard-diamond rotate-45 border-4 border-red-600 bg-white w-32 h-32 flex items-center justify-center mb-4">
        <div className="-rotate-45 flex items-center justify-center w-full h-full">
          {symbol.icon}
        </div>
      </div>
    </motion.div>
  )
}

export function HazardSymbolsSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-center items-center gap-12 mb-12 flex-wrap">
          {hazardSymbols.map((symbol, index) => (
            <HazardSymbol
              key={symbol.id}
              symbol={symbol}
              index={index}
              shouldReduceMotion={shouldReduceMotion}
            />
          ))}
        </div>

        <motion.div
          className="flex justify-center"
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={shouldReduceMotion ? undefined : { duration: 0.6, delay: 0.8 }}
        >
          <motion.button
            className="text-white px-10 py-4 text-lg font-bold uppercase transition-all duration-300"
            style={{
              backgroundColor: "#9DC13D",
            }}
            whileHover={shouldReduceMotion ? undefined : { backgroundColor: "#9DC13D" }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.95 }}
          >
            MORE ABOUT OUR SERVICES
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

