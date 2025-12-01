 "use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion, useReducedMotion } from "framer-motion"

export function Hero() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.section
      className="relative min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden"
      initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
      animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={shouldReduceMotion ? undefined : { duration: 0.8, ease: "easeOut" }}
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/nature-landscape-forest-clean-water.jpg"
          alt="Sustainable Environment"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-foreground/60 hero-gradient-overlay" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center md:items-center gap-8 md:gap-12">
          <div className="max-w-5xl text-left space-y-6 flex-1">
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight text-background"
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={
                shouldReduceMotion
                  ? undefined
                  : { duration: 0.8, ease: "easeOut", staggerChildren: 0.15 }
              }
            >
              <motion.span
                className="block text-lg md:text-2xl font-normal mb-2"
                initial={shouldReduceMotion ? undefined : { opacity: 0, y: 10 }}
                animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={shouldReduceMotion ? undefined : { duration: 0.5, ease: "easeOut" }}
              >
                Hazardous Waste
              </motion.span>
              <motion.span
                initial={shouldReduceMotion ? undefined : { opacity: 0, y: 10 }}
                animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={
                  shouldReduceMotion ? undefined : { duration: 0.6, ease: "easeOut", delay: 0.15 }
                }
              >
                Management
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-background/90 max-w-2xl leading-relaxed"
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 24 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={shouldReduceMotion ? undefined : { duration: 0.7, ease: "easeOut", delay: 0.3 }}
            >
              We can solve your waste management needs quickly and professionally.
              <br className="hidden md:block" />
              Save Your Community, Save Your Planet
            </motion.p>

            <div className="flex items-center gap-4 pt-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 h-12 text-base font-medium animated-btn"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          <motion.div
            className="relative md:flex-shrink-0"
            initial={shouldReduceMotion ? undefined : { opacity: 0, x: 40 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
            transition={shouldReduceMotion ? undefined : { duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto md:mx-0">
              <Image
                src="/111pic2.jpg"
                alt="Tshegofentse Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>

      <button className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-background/20 hover:bg-background/30 backdrop-blur-sm text-background p-3 rounded-full transition-all">
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-background/20 hover:bg-background/30 backdrop-blur-sm text-background p-3 rounded-full transition-all">
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </motion.section>
  )
}
