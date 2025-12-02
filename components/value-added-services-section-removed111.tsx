"use client"

import { motion, useReducedMotion } from "framer-motion"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const services = [
  {
    id: 1,
    title: "Waste Assessment",
    description: "Capacity to do Waste assessments and characterization to offer proper advise.",
    backgroundColor: "#9DC13D",
  },
  {
    id: 2,
    title: "In House Laboratory",
    description: "Hazardous Waste needs proper chemical assessment to identify Options in Reuse or Treatment",
    backgroundColor: "#9DC13D",
  },
  {
    id: 3,
    title: "Waste Exchange",
    description: "Access to database of potential users of waste for exchange.",
    backgroundColor: "#9DC13D",
  },
]

const cardVariants = {
  hidden: {
    y: 100,
    opacity: 0,
    rotateX: -15,
  },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    rotateX: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      type: "spring",
      stiffness: 80,
    },
  }),
}

const cardHover = {
  scale: 1.03,
  y: -15,
  rotateY: 5,
  boxShadow: "0 25px 50px rgba(0,0,0,0.3)",
  transition: {
    duration: 0.4,
    type: "spring",
  },
}

const textVariants = {
  rest: { y: 10, opacity: 0.9 },
  hover: { y: 0, opacity: 1 },
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
  return (
    <motion.div
      className="value-card flex flex-col"
      style={{
        backgroundColor: service.backgroundColor,
        borderRadius: 0,
        padding: "48px 32px",
        minHeight: "400px",
      }}
      custom={index}
      initial={shouldReduceMotion ? undefined : "hidden"}
      whileInView={shouldReduceMotion ? undefined : "visible"}
      viewport={{ once: true, amount: 0.3 }}
      variants={cardVariants}
      whileHover={shouldReduceMotion ? undefined : cardHover}
    >
      <motion.h3
        className="text-white mb-6"
        style={{
          fontSize: "1.40625rem",
          fontWeight: 700,
        }}
        initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
        whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={
          shouldReduceMotion ? undefined : { duration: 0.6, delay: 0.3 + index * 0.2 }
        }
      >
        {service.title}
      </motion.h3>

      <motion.p
        className="text-white leading-relaxed"
        style={{
          fontSize: "1.125rem",
        }}
        variants={shouldReduceMotion ? undefined : textVariants}
        initial="rest"
        whileHover={shouldReduceMotion ? undefined : "hover"}
      >
        {service.description}
      </motion.p>
    </motion.div>
  )
}

export function ValueAddedServicesSectionRemoved111() {
  const shouldReduceMotion = useReducedMotion()
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (shouldReduceMotion || !sectionRef.current) return

    // Subtle gradient animation on cards
    const cards = sectionRef.current.querySelectorAll(".value-card")
    cards.forEach((card) => {
      const bgColor = window.getComputedStyle(card).backgroundColor
      // Create a subtle gradient shift effect
      gsap.to(card, {
        filter: "brightness(1.05)",
        duration: 2,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [shouldReduceMotion])

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-center mb-6"
          style={{
            fontSize: "2.25rem",
            fontWeight: 800,
            color: "#374151",
            marginBottom: "24px",
          }}
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={shouldReduceMotion ? undefined : { duration: 0.6 }}
        >
          VALUE ADDED SERVICES
        </motion.h2>

        <motion.p
          className="text-center max-w-5xl mx-auto mb-16 leading-relaxed"
          style={{
            fontSize: "1.125rem",
            color: "#374151",
            maxWidth: "1000px",
            margin: "0 auto 64px",
          }}
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={shouldReduceMotion ? undefined : { duration: 0.6, delay: 0.2 }}
        >
          To us, waste is a resource; we call it "dirty gold" that needs to be treated and refined.
          We are willing to get our hands dirty to recover value from waste, reduce pollution, and
          create jobs. Our primary services are:
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              shouldReduceMotion={shouldReduceMotion}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

