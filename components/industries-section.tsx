"use client"

import { motion, useReducedMotion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { Check } from "lucide-react"
import Image from "next/image"
import { useState, useRef } from "react"

const industries = [
  "Common Hazardous Waste",
  "Chemicals, Fertilizers And Manufacturing",
  "Metals And Mining",
  "Paint, Coatings And Automotive",
  "Textile And Leather",
  "Food, Beverages And Retail",
  "Other Hazardous Waste",
]

export function IndustriesSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.section
      id="industries"
      className="py-20 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #9DC13D 0%, #9DC13D 100%)",
      }}
      initial={shouldReduceMotion ? undefined : { opacity: 0 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={shouldReduceMotion ? undefined : { duration: 0.8 }}
    >
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background: "linear-gradient(135deg, #9DC13D 0%, #9DC13D 50%, #9DC13D 100%)",
          backgroundSize: "200% 200%",
        }}
        animate={
          shouldReduceMotion
            ? undefined
            : {
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }
        }
        transition={
          shouldReduceMotion
            ? undefined
            : { duration: 8, repeat: Infinity, ease: "linear" }
        }
      />

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-10"
            style={{
              width: `${40 + i * 20}px`,
              height: `${40 + i * 20}px`,
              background: i % 2 === 0 ? "#9DC13D" : "#9DC13D",
              left: `${10 + i * 15}%`,
              top: `${20 + i * 10}%`,
            }}
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    y: [0, -30, 0],
                    x: [0, 20, 0],
                    rotate: [0, 180, 360],
                  }
            }
            transition={
              shouldReduceMotion
                ? undefined
                : {
                    duration: 4 + i,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.5,
                  }
            }
          />
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={
              shouldReduceMotion ? undefined : { opacity: 0, x: -100, filter: "blur(10px)" }
            }
            whileInView={
              shouldReduceMotion ? undefined : { opacity: 1, x: 0, filter: "blur(0px)" }
            }
            viewport={{ once: true, amount: 0.3 }}
            transition={
              shouldReduceMotion ? undefined : { duration: 1, ease: [0.4, 0, 0.2, 1] }
            }
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6 text-white uppercase tracking-tight"
              initial={shouldReduceMotion ? undefined : { opacity: 0, x: -50 }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={
                shouldReduceMotion ? undefined : { duration: 0.7, delay: 0.2 }
              }
            >
              INDUSTRIES AND WASTE TYPES
            </motion.h2>

            <motion.p
              className="text-lg text-white/90 mb-8"
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={
                shouldReduceMotion ? undefined : { duration: 0.6, delay: 0.4 }
              }
            >
              We service the following industries and waste types
            </motion.p>

            {/* Checklist */}
            <div className="space-y-4 mb-8">
              {industries.map((item, index) => (
                <ChecklistItem
                  key={index}
                  text={item}
                  index={index}
                  shouldReduceMotion={shouldReduceMotion}
                />
              ))}
            </div>

            {/* Button */}
            <MagneticButton shouldReduceMotion={shouldReduceMotion} />
          </motion.div>

          {/* Right side - Image with curtain wipe */}
          <motion.div
            className="relative"
            initial={shouldReduceMotion ? undefined : { opacity: 0, x: 100 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={
              shouldReduceMotion ? undefined : { duration: 1, delay: 0.3 }
            }
          >
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/chemical-laboratory-barrels.jpg"
                alt="Hazardous Waste Barrels"
                width={600}
                height={400}
                className="object-cover w-full h-auto"
              />
              {/* Curtain wipe overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={shouldReduceMotion ? undefined : { x: "-100%" }}
                whileInView={shouldReduceMotion ? undefined : { x: "100%" }}
                viewport={{ once: true, amount: 0.5 }}
                transition={
                  shouldReduceMotion
                    ? undefined
                    : { duration: 1.2, delay: 0.8, ease: [0.4, 0, 0.2, 1] }
                }
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

function ChecklistItem({
  text,
  index,
  shouldReduceMotion,
}: {
  text: string
  index: number
  shouldReduceMotion: boolean | null
}) {
  const [hasAnimated, setHasAnimated] = useState(false)

  return (
    <motion.div
      className="flex items-center gap-3 text-white"
      initial={shouldReduceMotion ? undefined : { opacity: 0, x: -30, scale: 0.8 }}
      whileInView={
        shouldReduceMotion
          ? undefined
          : {
              opacity: 1,
              x: 0,
              scale: 1,
            }
      }
      viewport={{ once: true, amount: 0.5 }}
      onViewportEnter={() => !hasAnimated && setHasAnimated(true)}
      transition={
        shouldReduceMotion
          ? undefined
          : {
              type: "spring",
              stiffness: 300,
              damping: 25,
              delay: index * 0.1,
            }
      }
    >
      <motion.div
        className="flex-shrink-0"
        initial={shouldReduceMotion ? undefined : { scale: 0, rotate: -180 }}
        animate={
          shouldReduceMotion || !hasAnimated
            ? undefined
            : { scale: [0, 1.3, 1], rotate: [0, 180, 360] }
        }
        transition={
          shouldReduceMotion
            ? undefined
            : {
                scale: {
                  duration: 0.6,
                  times: [0, 0.5, 1],
                  ease: [0.34, 1.56, 0.64, 1],
                },
                rotate: {
                  duration: 0.8,
                  ease: "easeOut",
                },
                delay: 0.2 + index * 0.1,
              }
        }
      >
        <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
          <Check className="w-4 h-4 text-white" />
        </div>
        {/* Particle burst effect */}
        {hasAnimated && !shouldReduceMotion && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 2, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
          >
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  left: "50%",
                  top: "50%",
                }}
                animate={{
                  x: Math.cos((i * 60 * Math.PI) / 180) * 20,
                  y: Math.sin((i * 60 * Math.PI) / 180) * 20,
                  opacity: 0,
                }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              />
            ))}
          </motion.div>
        )}
      </motion.div>
      <span className="text-lg font-medium">{text}</span>
    </motion.div>
  )
}

function MagneticButton({ shouldReduceMotion }: { shouldReduceMotion: boolean | null }) {
  const [isHovered, setIsHovered] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 300 }
  const xSpring = useSpring(x, springConfig)
  const ySpring = useSpring(y, springConfig)

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current || shouldReduceMotion) return
    const rect = buttonRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set((e.clientX - centerX) * 0.2)
    y.set((e.clientY - centerY) * 0.2)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    setIsHovered(false)
  }

  return (
    <motion.button
      ref={buttonRef}
      className="relative px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-full overflow-hidden transition-colors"
      style={{
        x: xSpring,
        y: ySpring,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      whileHover={shouldReduceMotion ? undefined : { scale: 1.05 }}
      whileTap={shouldReduceMotion ? undefined : { scale: 0.95 }}
      initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={
        shouldReduceMotion ? undefined : { duration: 0.6, delay: 1.2 }
      }
    >
      <span className="relative z-10">
        MORE ABOUT THE INDUSTRIES AND WASTE TYPES WE SERVICE
      </span>
      {/* Ripple pulse effect */}
      {isHovered && !shouldReduceMotion && (
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)",
          }}
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 2, opacity: 0 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
        />
      )}
    </motion.button>
  )
}

