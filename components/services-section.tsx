"use client"

import { motion, useReducedMotion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { Trash2, HeartPulse, Droplet, FileText, Users, Gauge } from "lucide-react"
import { useState, useRef } from "react"

const services = [
  { icon: Trash2, title: "General waste", color: "#9DC13D" },
  { icon: HeartPulse, title: "Medical waste", color: "#9DC13D" },
  { icon: Gauge, title: "Fat/grease trap waste", color: "#9DC13D" },
  { icon: FileText, title: "Waste legal compliance", color: "#9DC13D" },
  { icon: Users, title: "Waste & wastewater training", color: "#9DC13D" },
]

export function ServicesSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.section
      id="services"
      className="py-20 bg-muted/30 relative overflow-hidden"
      initial={shouldReduceMotion ? undefined : { opacity: 0 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={shouldReduceMotion ? undefined : { duration: 0.8 }}
    >
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-16 text-center text-foreground uppercase tracking-tight"
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 30 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={shouldReduceMotion ? undefined : { duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
        >
          SERVICES
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} shouldReduceMotion={shouldReduceMotion} />
          ))}
        </div>
      </div>
    </motion.section>
  )
}

function ServiceCard({
  service,
  index,
  shouldReduceMotion,
}: {
  service: (typeof services)[0]
  index: number
  shouldReduceMotion: boolean | null
}) {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 300 }
  const xSpring = useSpring(x, springConfig)
  const ySpring = useSpring(y, springConfig)

  const rotateX = useTransform(ySpring, [-0.5, 0.5], [8, -8])
  const rotateY = useTransform(xSpring, [-0.5, 0.5], [-8, 8])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || shouldReduceMotion) return
    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set((e.clientX - centerX) / (rect.width / 2))
    y.set((e.clientY - centerY) / (rect.height / 2))
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    setIsHovered(false)
  }

  return (
    <motion.div
      ref={cardRef}
      className="perspective-1000"
      style={{ perspective: "1000px" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      initial={
        shouldReduceMotion
          ? undefined
          : { opacity: 0, rotateY: 90, scale: 0.9 }
      }
      whileInView={
        shouldReduceMotion
          ? undefined
          : { opacity: 1, rotateY: 0, scale: 1 }
      }
      viewport={{ once: true, amount: 0.3 }}
      transition={
        shouldReduceMotion
          ? undefined
          : {
              rotateY: { duration: 0.8, ease: [0.34, 1.56, 0.64, 1] },
              opacity: { duration: 0.6 },
              scale: { duration: 0.6, type: "spring", stiffness: 200, damping: 15 },
              delay: index * 0.15,
            }
      }
      whileHover={
        shouldReduceMotion
          ? undefined
          : {
              scale: 1.05,
              z: 50,
            }
      }
      style={
        shouldReduceMotion
          ? undefined
          : {
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }
      }
    >
      <motion.div
        className="service-card-3d bg-background border-2 border-border/50 rounded-xl p-8 h-full flex flex-col items-center justify-center text-center relative overflow-hidden group cursor-pointer"
        style={{
          transformStyle: "preserve-3d",
          backfaceVisibility: "hidden",
        }}
        whileHover={
          shouldReduceMotion
            ? undefined
            : {
                boxShadow: "0 25px 60px rgba(45, 155, 129, 0.4)",
              }
        }
      >
        {/* Glowing border on hover */}
        <motion.div
          className="absolute inset-0 rounded-xl pointer-events-none"
          style={{
            background: `linear-gradient(135deg, ${service.color}20, transparent)`,
            opacity: isHovered ? 1 : 0,
            transition: "opacity 0.3s",
          }}
        />

        {/* Icon with draw animation */}
        <motion.div
          className="relative mb-6"
          initial={shouldReduceMotion ? undefined : { scale: 0, rotate: -180 }}
          whileInView={
            shouldReduceMotion ? undefined : { scale: 1, rotate: 0 }
          }
          viewport={{ once: true, amount: 0.5 }}
          transition={
            shouldReduceMotion
              ? undefined
              : {
                  type: "spring",
                  stiffness: 200,
                  damping: 20,
                  delay: 0.3 + index * 0.15,
                }
          }
          whileHover={
            shouldReduceMotion
              ? undefined
              : { scale: 1.2, rotate: 5, z: 20 }
          }
        >
          <div
            className="p-4 rounded-full"
            style={{
              backgroundColor: `${service.color}20`,
            }}
          >
            <service.icon
              className="w-12 h-12"
              style={{ color: service.color }}
            />
          </div>
        </motion.div>

        <motion.h3
          className="text-xl font-bold text-foreground mb-2"
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={
            shouldReduceMotion
              ? undefined
              : { delay: 0.5 + index * 0.15, duration: 0.5 }
          }
        >
          {service.title}
        </motion.h3>
      </motion.div>
    </motion.div>
  )
}

