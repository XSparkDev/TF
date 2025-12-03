import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            {/* Main Title */}
            <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground uppercase tracking-tight">
              Gallery
            </h1>
            {/* Placeholder content for future gallery */}
            <p className="text-lg text-muted-foreground leading-relaxed text-center">
              Gallery
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
