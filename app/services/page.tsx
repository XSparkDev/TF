"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion, useReducedMotion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

export default function ServicesPage() {
  const shouldReduceMotion = useReducedMotion()

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const baseTransition = {
    duration: shouldReduceMotion ? 0 : 0.8,
    ease: "easeOut",
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            {/* Main Title */}
            <motion.h1
              className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground uppercase tracking-tight"
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={baseTransition}
            >
              SERVICES
            </motion.h1>

            {/* Current Challenge Section */}
            <motion.section
              className="mb-16"
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ ...baseTransition, delay: shouldReduceMotion ? 0 : 0.1 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">Current Challenge</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Non – Compliance in Hazardous Waste Disposal. Evident in Hazardous Waste found in General Waste
                Landfill sites and the persistent illegal dumping detrimental to humans, animals, and the ecosystem.
              </p>
            </motion.section>

            {/* Hazardous Waste Specialists Section */}
            <motion.section
              className="mb-16"
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ ...baseTransition, delay: shouldReduceMotion ? 0 : 0.2 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">Hazardous Waste Specialists</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our team understands the nature and characteristics of hazardous waste. We often find that poor
                decisions are made about waste disposal due to businesses lacking the appropriate information,
                resulting in excessive amounts of waste being disposed of at landfills and wastewater treatment plants.
              </p>
            </motion.section>

            {/* Practical Solutions Section */}
            <motion.section
              className="mb-16"
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ ...baseTransition, delay: shouldReduceMotion ? 0 : 0.3 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">PRACTICAL SOLUTIONS:</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-primary-foreground p-3 rounded-full flex-shrink-0">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2 text-foreground">Waste Assessment</h3>
                    <p className="text-muted-foreground">
                      Free assessment and characterization of Hazardous Waste.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary text-primary-foreground p-3 rounded-full flex-shrink-0">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2 text-foreground">Compliance Assist</h3>
                    <p className="text-muted-foreground">
                      Assisting waste generators with compliance through Training.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary text-primary-foreground p-3 rounded-full flex-shrink-0">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2 text-foreground">Waste Exchange</h3>
                    <p className="text-muted-foreground">
                      A platform to exchange waste by linking generators to processors.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary text-primary-foreground p-3 rounded-full flex-shrink-0">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2 text-foreground">Waste Advisory</h3>
                    <p className="text-muted-foreground">
                      Advisory service on treatment options, reducing disposal fees and exploring reuse.
                    </p>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Speedy Waste Collection Section */}
            <motion.section
              className="mb-16"
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ ...baseTransition, delay: shouldReduceMotion ? 0 : 0.4 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">Speedy Waste Collection</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We promise our customers speedy collections with no delays. With Tshegofentse Hazardous Waste &amp;
                Analytical Services, you will never be kept waiting in an unsafe, unhygienic workplace while waste
                accumulates. Our turnaround time on waste collection after quote acceptance is unbeatable, and we go
                above and beyond to ensure no delays after you have called for a collection. We value communication,
                using a CRM system to keep records on a collection schedule.
              </p>
            </motion.section>

            {/* Waste Management CRM System Section */}
            <motion.section
              className="mb-16"
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ ...baseTransition, delay: shouldReduceMotion ? 0 : 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">WASTE MANAGEMENT CRM SYSTEM</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                By using CRM software, we keep our client waste records up to date, allowing us to efficiently plan
                and schedule timeous collections and proper route planning.
              </p>
            </motion.section>

            {/* Safety Emphasis Section */}
            <motion.section
              className="mb-16"
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ ...baseTransition, delay: shouldReduceMotion ? 0 : 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">Safety Emphasis</h2>
              <div className="space-y-3 mb-6">
                <div className="border-l-4 border-primary pl-6 py-2">
                  <p className="text-muted-foreground">Waste Generator Record Management</p>
                </div>
                <div className="border-l-4 border-primary pl-6 py-2">
                  <p className="text-muted-foreground">CRM System</p>
                </div>
                <div className="border-l-4 border-primary pl-6 py-2">
                  <p className="text-muted-foreground">Plan &amp; SCHEDULE</p>
                </div>
                <div className="border-l-4 border-primary pl-6 py-2">
                  <p className="text-muted-foreground">COMPLIANCE ASSISTANCE</p>
                </div>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                As part of our objective, we seek to repurpose waste and dispose of it safely and in an
                environmentally friendly way. We also assist our customers by evaluating their operations for safety
                and environmental hazards. We provide tailored assessments and training to increase employees&apos; knowledge
                of safety, risk, health and hygiene.
              </p>
            </motion.section>

            {/* Wash Bay Effluent Section */}
            <motion.section
              className="mb-16"
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ ...baseTransition, delay: shouldReduceMotion ? 0 : 0.7 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">WASH BAY EFFLUENT</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                If you are having persistent problems with your wash bay, such as clogged sludge pits, difficulty
                removing solids from oily water or excessive sludge removal costs, Tshegofentse Hazardous Waste &amp;
                Analytical Services has the solution for you. Is your sludge pit constantly clogged? Are you struggling
                to maintain your wash bay area or remove solids from oily water? Are you paying excessive amounts for
                Sludge disposal? With our comprehensive effluent treatment services, we assist your company in achieving
                Zero Liquid Discharge by reusing your wastewater. Moreover, you will save on disposal fees, potable water
                costs, as well as penalties paid to the municipality for off-spec discharge of effluent.
              </p>
            </motion.section>

            {/* Fat and Grease Traps Section */}
            <motion.section
              className="mb-16"
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ ...baseTransition, delay: shouldReduceMotion ? 0 : 0.8 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">FAT AND GREASE TRAPS</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Poor management and maintenance of fat and grease traps can lead to problems including sewer line
                blockages, bad odours, high COD load to local wastewater treatment plants, unhygienic workplaces and
                more. The services we provide lessen the impact of FOG, easing the burden on the wastewater infrastructure
                in big cities.
              </p>
            </motion.section>

            {/* Onsite Waste Sorting Section */}
            <motion.section
              className="mb-16"
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ ...baseTransition, delay: shouldReduceMotion ? 0 : 0.9 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">ONSITE WASTE SORTING</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Many industries face the daily challenge of waste buildup and are uncertain how to dispose of it in an
                environmentally friendly way. By implementing a site plan and improving your site layout for waste
                sorting, we can help you create a safer, cleaner workplace waste collection system. Waste disposal
                containers of various types and sizes suitable for the workplace and type of waste generated allow you to
                save on disposal fees by sorting mixed waste.
              </p>
            </motion.section>

            {/* Training Section */}
            <motion.section
              className="mb-16"
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ ...baseTransition, delay: shouldReduceMotion ? 0 : 1.0 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">Training</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Students at the Tshegofentse Training Academy are trained for practical jobs that have a significant
                positive effect on the environment. With this initiative, we can share our knowledge and skills so
                trainees can become proficient at managing waste challenges and securing the environment. At Tshegofentse
                Hazardous Waste &amp; Analytical Services, we believe that the advancement of knowledge and practical
                skills is what allows us as a society to grow. Visit{" "}
                <a
                  href="https://www.tshegofentse-academy.co.za"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  www.tshegofentse-academy.co.za
                </a>{" "}
                or email{" "}
                <a
                  href="mailto:admin@tshegofentse.co.za"
                  className="text-primary hover:underline"
                >
                  admin@tshegofentse.co.za
                </a>{" "}
                to learn more.
              </p>
            </motion.section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
