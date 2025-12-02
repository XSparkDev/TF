"use client"

import { motion, useReducedMotion } from "framer-motion"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export function WasteStrategy() {
  const shouldReduceMotion = useReducedMotion()

  const baseTransition = {
    duration: shouldReduceMotion ? 0 : 0.8,
    ease: [0.4, 0, 0.2, 1],
  }

  return (
    <section
      id="waste-strategy"
      className="py-20 bg-background strategy-section"
      aria-labelledby="waste-strategy-heading"
    >
      <motion.div
        className="container mx-auto px-4 md:px-6 max-w-6xl"
        variants={containerVariants}
        initial={shouldReduceMotion ? undefined : "hidden"}
        whileInView={shouldReduceMotion ? undefined : "visible"}
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2
          id="waste-strategy-heading"
          className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-foreground"
          variants={itemVariants}
          transition={baseTransition}
        >
          OUR WASTE MANAGEMENT STRATEGY
        </motion.h2>

        <motion.p
          className="text-muted-foreground text-base md:text-lg max-w-3xl mb-10 leading-relaxed"
          variants={itemVariants}
          transition={{ ...baseTransition, delay: shouldReduceMotion ? 0 : 0.6 }}
        >
          Tshegofentse&apos;s integrated waste management strategy focuses on environmental sustainability, circular
          economy principles, zero waste to landfill, and zero liquid discharge. We design solutions that minimize
          environmental impact while maximizing resource recovery and long-term compliance for our clients.
        </motion.p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* 1. Environmental Sustainability */}
          <motion.div
            className="strategy-card strategy-card--shine text-white"
            style={{ backgroundColor: "#9DC13D" }}
            variants={itemVariants}
            initial={shouldReduceMotion ? undefined : "hidden"}
            whileInView={shouldReduceMotion ? undefined : "visible"}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ ...baseTransition, delay: shouldReduceMotion ? 0 : 0.2 }}
          >
            <div className="strategy-card__body">
              <h3 className="text-lg font-semibold mb-2">Environmental Sustainability</h3>
              <p className="text-sm md:text-base text-white/90">
              Prioritising solutions that protect natural ecosystems, reduce emissions, and support long-term
              environmental health.
              </p>
            </div>
          </motion.div>

          {/* 2. Circular Economy */}
          <motion.div
            className="strategy-card strategy-card--shine text-white"
            style={{ backgroundColor: "#9DC13D" }}
            variants={itemVariants}
            initial={shouldReduceMotion ? undefined : "hidden"}
            whileInView={shouldReduceMotion ? undefined : "visible"}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ ...baseTransition, delay: shouldReduceMotion ? 0 : 0.4 }}
          >
            <div className="strategy-card__body">
              <h3 className="text-lg font-semibold mb-2">Circular Economy</h3>
              <p className="text-sm md:text-base text-white/90">
              Keeping materials in use for as long as possible through reuse, recycling, and beneficiation.
              </p>
            </div>
          </motion.div>

          {/* 3. Zero Waste to Landfill */}
          <motion.div
            className="strategy-card strategy-card--shine strategy-card--ripple text-white"
            style={{ backgroundColor: "#9DC13D" }}
            variants={itemVariants}
            initial={shouldReduceMotion ? undefined : "hidden"}
            whileInView={shouldReduceMotion ? undefined : "visible"}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ ...baseTransition, delay: shouldReduceMotion ? 0 : 0.6 }}
          >
            <div className="strategy-card__body">
              <h3 className="text-lg font-semibold mb-2">Zero Waste to Landfill</h3>
              <p className="text-sm md:text-base text-white/90">
              Designing processes so that landfill becomes the very last resort, after all recovery options are
              exhausted.
              </p>
            </div>
          </motion.div>

          {/* 4. Zero Liquid Discharge */}
          <motion.div
            className="strategy-card strategy-card--shine text-white"
            style={{ backgroundColor: "#9DC13D" }}
            variants={itemVariants}
            initial={shouldReduceMotion ? undefined : "hidden"}
            whileInView={shouldReduceMotion ? undefined : "visible"}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ ...baseTransition, delay: shouldReduceMotion ? 0 : 0.8 }}
          >
            <div className="strategy-card__body">
              <h3 className="text-lg font-semibold mb-2">Zero Liquid Discharge</h3>
              <p className="text-sm md:text-base text-white/90">
              Advanced treatment systems that minimise or eliminate liquid effluent release to the environment.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}


