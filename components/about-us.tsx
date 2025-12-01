 "use client"

import { Shield, Users, Award, Target } from "lucide-react"
import { motion, useReducedMotion } from "framer-motion"

export function AboutUs() {
  const shouldReduceMotion = useReducedMotion()

  const values = [
    {
      icon: Shield,
      title: "Safety First",
      description:
        "We prioritize safety in every aspect of our operations, ensuring compliance with all regulatory standards.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Our team of certified professionals brings decades of combined experience in waste management.",
    },
    {
      icon: Award,
      title: "Quality Assured",
      description: "ISO certified processes and rigorous quality control ensure the highest standards of service.",
    },
    {
      icon: Target,
      title: "Environmental Focus",
      description: "Committed to sustainable practices that protect our environment for future generations.",
    },
  ]

  return (
    <motion.section
      id="about"
      className="py-20 bg-background"
      initial={shouldReduceMotion ? undefined : { opacity: 0, y: 40 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={shouldReduceMotion ? undefined : { duration: 0.7, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6 text-foreground"
              initial={shouldReduceMotion ? undefined : { x: -40, opacity: 0 }}
              whileInView={shouldReduceMotion ? undefined : { x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={shouldReduceMotion ? undefined : { duration: 0.6, ease: "easeOut" }}
            >
              About <span className="text-primary">Tshegofentse</span>
            </motion.h2>
            <motion.p
              className="text-lg text-muted-foreground mb-4 leading-relaxed"
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 16 }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={shouldReduceMotion ? undefined : { duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
              Tshegofentse is a leading provider of hazardous waste management and analytical services in South Africa.
              With years of experience in the industry, we have established ourselves as a trusted partner for
              businesses seeking comprehensive environmental solutions.
            </motion.p>
            <motion.p
              className="text-lg text-muted-foreground mb-4 leading-relaxed"
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 16 }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={shouldReduceMotion ? undefined : { duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              Our state-of-the-art facilities and advanced analytical laboratory enable us to handle a wide range of
              waste streams safely and efficiently. We are committed to environmental stewardship and helping our
              clients achieve their sustainability goals.
            </motion.p>
            <motion.p
              className="text-lg text-muted-foreground leading-relaxed"
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 16 }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={shouldReduceMotion ? undefined : { duration: 0.6, ease: "easeOut", delay: 0.3 }}
            >
              From collection and transportation to treatment and disposal, we provide end-to-end waste management
              solutions tailored to your specific needs. Our team of certified professionals ensures compliance with all
              relevant regulations while delivering exceptional service.
            </motion.p>
          </div>

          <motion.div
            className="relative"
            initial={shouldReduceMotion ? undefined : { opacity: 0, x: 40 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={shouldReduceMotion ? undefined : { duration: 0.7, ease: "easeOut" }}
          >
            <img
              src="/modern-waste-management-facility-with-safety-equip.jpg"
              alt="Tshegofentse Facility"
              className="rounded-lg shadow-xl w-full h-auto transition-transform duration-500 ease-out hover:scale-[1.03]"
            />
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-8 rounded-lg shadow-lg transition-transform duration-500 ease-out group-hover:-translate-y-1">
              <div className="text-5xl font-bold mb-2">15+</div>
              <div className="text-sm uppercase tracking-wider">Years of Excellence</div>
            </div>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 24 }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={
                shouldReduceMotion
                  ? undefined
                  : { duration: 0.5, ease: "easeOut", delay: index * 0.12 }
              }
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : { y: -8, boxShadow: "0 24px 60px rgba(0,0,0,0.18)", scale: 1.02 }
              }
            >
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <value.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
