 "use client"

import { CheckCircle2 } from "lucide-react"
import { motion, useReducedMotion } from "framer-motion"

const steps = [
  {
    number: "01",
    title: "Waste Assessment",
    description: "Thorough evaluation of waste streams to understand composition and volume.",
  },
  {
    number: "02",
    title: "Laboratory Analysis",
    description: "In-house analysis to classify waste accurately according to regulations.",
  },
  {
    number: "03",
    title: "Evaluate Options",
    description: "Prioritizing reuse, recycling, and recovery over disposal.",
  },
  {
    number: "04",
    title: "Beneficiation",
    description: "Waste exchange and finding value in waste materials.",
  },
  {
    number: "05",
    title: "Chemical Treatment",
    description: "Neutralizing hazardous properties to ensure safety.",
  },
  {
    number: "06",
    title: "Safe Disposal",
    description: "The last resort – compliant disposal at licensed facilities.",
  },
]

export function StepwiseProcess() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.section
      id="process"
      className="py-20 bg-background"
      initial={shouldReduceMotion ? undefined : { opacity: 0, y: 40 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={shouldReduceMotion ? undefined : { duration: 0.7, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4 text-foreground"
            initial={shouldReduceMotion ? undefined : { x: -40, opacity: 0 }}
            whileInView={shouldReduceMotion ? undefined : { x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={shouldReduceMotion ? undefined : { duration: 0.6, ease: "easeOut" }}
          >
            OUR UNIQUE APPROACH TO WASTE MANAGEMENT
          </motion.h2>
          <motion.p
            className="text-base uppercase tracking-[0.2em] text-primary mb-3"
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 8 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={shouldReduceMotion ? undefined : { duration: 0.5, ease: "easeOut", delay: 0.05 }}
          >
            WASTE MANAGEMENT: A STEPWISE APPROACH
          </motion.p>
          <motion.p
            className="text-lg text-muted-foreground"
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 16 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={shouldReduceMotion ? undefined : { duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            By taking a step-by-step approach to waste management, we ensure efficient, effective, and consistent
            services. Our strategy leaves waste disposal as the last option.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="group bg-card p-8 rounded-lg border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg step-card"
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 30, scale: 0.98 }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={
                shouldReduceMotion
                  ? undefined
                  : { duration: 0.5, ease: "easeOut", delay: 0.1 + index * 0.1 }
              }
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : { y: -8, boxShadow: "0 20px 45px rgba(0,0,0,0.15)", scale: 1.02 }
              }
            >
              <div className="flex justify-between items-start mb-6">
                <span className="text-5xl font-bold text-primary/30 group-hover:text-primary transition-colors">
                  {step.number}
                </span>
                <motion.span
                  initial={shouldReduceMotion ? undefined : { scale: 0, rotate: -45, opacity: 0 }}
                  whileInView={shouldReduceMotion ? undefined : { scale: 1, rotate: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={
                    shouldReduceMotion
                      ? undefined
                      : { duration: 0.4, type: "spring", stiffness: 260, damping: 18, delay: 0.15 + index * 0.08 }
                  }
                >
                  <CheckCircle2 className="h-6 w-6 text-primary opacity-80 group-hover:opacity-100 transition-opacity" />
                </motion.span>
              </div>
              <div className="relative step-card__content">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
