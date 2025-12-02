import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { WasteStrategy } from "@/components/waste-strategy"
import { ServicesSectionNew } from "@/components/services-section-new"
import { IndustriesSectionNew } from "@/components/industries-section-new"
import { StepwiseApproachSection } from "@/components/stepwise-approach-section"
import { SafetySection } from "@/components/safety-section"
import { HazardSymbolsSection } from "@/components/hazard-symbols-section"
import { ComplianceSection } from "@/components/compliance-section"
import { SafetyEmphasisSection } from "@/components/safety-emphasis-section"
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
      <StepwiseApproachSection />
      <SafetySection />
      <HazardSymbolsSection />
      <ComplianceSection />
      <SafetyEmphasisSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
