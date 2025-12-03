"use client"

import { motion, useReducedMotion } from "framer-motion"
import { HazardDiamondTessellation } from "@/components/hazard-diamond-tessellation"

export function SafetySection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      className="py-20"
      style={{
        background: "linear-gradient(to bottom right, #8BC34A, #8BC34A)",
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

        {/* Premium Diamond Tessellation */}
        <HazardDiamondTessellation />
      </div>
    </section>
  )
}

