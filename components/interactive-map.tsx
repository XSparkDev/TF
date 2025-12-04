"use client"

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion"
import { useRef, useState } from "react"
import { MapPin, Navigation, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const LOCATION = {
  address: "20 Fortuna Ave, Bedworthpark, Vereeniging, South Africa",
  companyName: "Tshegofentse Hazardous Waste & Analytical Services",
  lat: -26.6736,
  lng: 27.9269,
  googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=20+Fortuna+Ave,+Bedworthpark,+Vereeniging,+South+Africa",
  embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.5!2d27.9269!3d-26.6736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDQwJzI1LjAiUyAyN8KwNTUnMzYuOCJF!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus",
}

export function InteractiveMap() {
  const shouldReduceMotion = useReducedMotion()
  const sectionRef = useRef<HTMLElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const parallaxY = useTransform(scrollYProgress, [0, 1], [50, -50])
  const tiltX = useTransform(scrollYProgress, [0, 1], [-2, 2])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  return (
    <motion.section
      ref={sectionRef}
      className="relative w-full h-[600px] md:h-[700px] overflow-hidden bg-foreground"
      style={{
        opacity: shouldReduceMotion ? 1 : opacity,
      }}
    >
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03] z-10 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(164, 210, 51, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(164, 210, 51, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Topographic Lines Overlay */}
      <div className="absolute inset-0 opacity-[0.02] z-10 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="none">
          {[...Array(8)].map((_, i) => (
            <path
              key={i}
              d={`M 0 ${100 + i * 120} Q 500 ${80 + i * 120} 1000 ${100 + i * 120}`}
              fill="none"
              stroke="#a4d233"
              strokeWidth="1"
              opacity="0.3"
            />
          ))}
        </svg>
      </div>

      {/* Google Maps iframe */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          y: shouldReduceMotion ? 0 : parallaxY,
          rotateX: shouldReduceMotion ? 0 : tiltX,
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.iframe
          src={`https://maps.google.com/maps?q=${encodeURIComponent(LOCATION.address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
          animate={{
            scale: isHovered ? 1.05 : 1,
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </motion.div>

      {/* Dark Overlay with Company Info */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-foreground/80 via-foreground/60 to-foreground/80 z-20 pointer-events-none"
        initial={shouldReduceMotion ? undefined : { opacity: 0 }}
        whileInView={shouldReduceMotion ? undefined : { opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      />

      {/* Floating Company Info Card */}
      <motion.div
        className="absolute top-8 left-4 md:left-8 z-30 pointer-events-auto"
        initial={shouldReduceMotion ? undefined : { x: -100, opacity: 0 }}
        whileInView={shouldReduceMotion ? undefined : { x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        <div className="bg-background/95 backdrop-blur-md rounded-xl p-6 shadow-2xl border border-[#a4d233]/20 max-w-sm">
          <motion.div
            className="flex items-start gap-3 mb-4"
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="p-2 bg-[#a4d233]/20 rounded-lg">
              <MapPin className="h-6 w-6 text-[#a4d233]" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-foreground mb-1">
                {LOCATION.companyName}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {LOCATION.address}
              </p>
            </div>
          </motion.div>

          {/* Pulsing Location Pin */}
          <div className="relative flex items-center gap-2">
            <motion.div
              className="absolute left-0 w-3 h-3 bg-[#a4d233] rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [1, 0.5, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute left-0 w-3 h-3 bg-[#a4d233] rounded-full"
              animate={{
                scale: [1, 2, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            />
            <span className="ml-4 text-xs text-muted-foreground">Live Location</span>
          </div>
        </div>
      </motion.div>

      {/* Get Directions Button */}
      <motion.div
        className="absolute bottom-8 right-4 md:right-8 z-30 pointer-events-auto"
        initial={shouldReduceMotion ? undefined : { x: 100, opacity: 0 }}
        whileInView={shouldReduceMotion ? undefined : { x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
      >
        <a href={LOCATION.googleMapsUrl} target="_blank" rel="noopener noreferrer">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              className="bg-[#a4d233] hover:bg-[#a4d233]/90 text-foreground rounded-full px-6 py-6 shadow-xl border-2 border-[#a4d233]/50"
            >
              <Navigation className="mr-2 h-5 w-5" />
              Get Directions
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </a>
      </motion.div>

      {/* Animated Direction Lines */}
      <div className="absolute inset-0 z-15 pointer-events-none">
        <motion.svg
          className="w-full h-full"
          viewBox="0 0 1000 1000"
          preserveAspectRatio="none"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.3 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <motion.path
            d="M 200 300 Q 500 400 800 500"
            fill="none"
            stroke="#a4d233"
            strokeWidth="2"
            strokeDasharray="10 5"
            animate={{
              pathLength: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.path
            d="M 300 600 Q 500 500 700 400"
            fill="none"
            stroke="#a4d233"
            strokeWidth="2"
            strokeDasharray="10 5"
            animate={{
              pathLength: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
              delay: 1,
            }}
          />
        </motion.svg>
      </div>

      {/* Distance Indicators */}
      <motion.div
        className="absolute bottom-8 left-4 md:left-8 z-30 pointer-events-auto hidden md:block"
        initial={shouldReduceMotion ? undefined : { y: 50, opacity: 0 }}
        whileInView={shouldReduceMotion ? undefined : { y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
      >
        <div className="bg-background/90 backdrop-blur-md rounded-lg p-4 shadow-lg border border-[#a4d233]/20">
          <p className="text-xs text-muted-foreground mb-2">Approximate Travel Time</p>
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 bg-[#a4d233] rounded-full" />
              <span className="text-foreground">From Johannesburg: ~45 min</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 bg-[#a4d233] rounded-full" />
              <span className="text-foreground">From Pretoria: ~1h 15min</span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  )
}

