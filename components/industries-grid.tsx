 "use client"

import { FlaskConical, Pickaxe, Car, Shirt, ShoppingCart, AlertTriangle } from "lucide-react"
import { motion, useReducedMotion } from "framer-motion"

const industries = [
  { icon: FlaskConical, name: "Chemicals & Fertilizers" },
  { icon: Pickaxe, name: "Metals & Mining" },
  { icon: Car, name: "Automotive & Coatings" },
  { icon: Shirt, name: "Textile & Leather" },
  { icon: ShoppingCart, name: "Food, Bev & Retail" },
  { icon: AlertTriangle, name: "Other Hazardous Waste" },
]

export function IndustriesGrid() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.section
      id="industries"
      className="py-20 bg-muted/30"
      initial={shouldReduceMotion ? undefined : { opacity: 0, y: 40 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={
        shouldReduceMotion ? undefined : { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
      }
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4 text-foreground"
            initial={shouldReduceMotion ? undefined : { x: -40, opacity: 0 }}
            whileInView={shouldReduceMotion ? undefined : { x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={
              shouldReduceMotion ? undefined : { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
            }
          >
            Industries and Waste Types
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground"
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 16 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={
              shouldReduceMotion
                ? undefined
                : { duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: 0.1 }
            }
          >
            We provide specialized waste management solutions across a diverse range of sectors, ensuring compliance and
            safety for every industry.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {industries.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center p-6 bg-background border border-border/50 rounded-lg hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 group cursor-default aspect-square text-center"
              initial={
                shouldReduceMotion
                  ? undefined
                  : { opacity: 0, y: 30, scale: 0.96 }
              }
              whileInView={
                shouldReduceMotion
                  ? undefined
                  : { opacity: 1, y: 0, scale: 1 }
              }
              viewport={{ once: true, amount: 0.3 }}
              transition={
                shouldReduceMotion
                  ? undefined
                  : {
                      duration: 0.6,
                      ease: [0.4, 0, 0.2, 1],
                      delay: 0.1 + index * 0.08,
                    }
              }
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : {
                      y: -8,
                      scale: 1.04,
                      boxShadow: "0 18px 40px rgba(45,155,129,0.35)",
                    }
              }
            >
              <motion.div
                className="industry-icon-wrapper"
                style={
                  shouldReduceMotion
                    ? undefined
                    : { animationDelay: `${index * 0.4}s` }
                }
              >
                <motion.span
                  className="industry-icon-glow"
                  aria-hidden="true"
                />
                <motion.span
                  className="inline-flex items-center justify-center"
                  initial={
                    shouldReduceMotion
                      ? undefined
                      : { opacity: 0, y: 16, scale: 0.9 }
                  }
                  whileInView={
                    shouldReduceMotion
                      ? undefined
                      : { opacity: 1, y: 0, scale: 1 }
                  }
                  viewport={{ once: true, amount: 0.5 }}
                  transition={
                    shouldReduceMotion
                      ? undefined
                      : {
                          duration: 0.6,
                          ease: [0.34, 1.56, 0.64, 1],
                          delay: 0.15 + index * 0.08,
                        }
                  }
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : { scale: 1.15, rotate: 4 }
                  }
                >
                  <item.icon className="h-10 w-10 mb-4 text-primary group-hover:text-primary-foreground transition-colors" />
                </motion.span>
              </motion.div>
              <span className="font-medium text-sm md:text-base">{item.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
