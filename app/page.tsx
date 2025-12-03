import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { WasteStrategy } from "@/components/waste-strategy"
import { ServicesSectionNew } from "@/components/services-section-new"
import { IndustriesSectionNew } from "@/components/industries-section-new"
import { CircularProcessFlow } from "@/components/circular-process-flow"
import { SafetySection } from "@/components/safety-section"
import { ValueAddedServices } from "@/components/value-added-services"
import { ComplianceSection } from "@/components/compliance-section"
import { StepwiseProcess } from "@/components/stepwise-process"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      <Hero />
      <WasteStrategy />
      <StepwiseProcess />
      <ServicesSectionNew />
      <IndustriesSectionNew />
      <CircularProcessFlow />
      <SafetySection />
      <ValueAddedServices />
      <ComplianceSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
