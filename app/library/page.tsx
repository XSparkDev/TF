import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function LibraryPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            {/* Main Title */}
            <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground uppercase tracking-tight">
              Library
            </h1>

            {/* Intro Text */}
            <div className="mb-16">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Our Library is where we share knowledge, insights, and practical guidance around hazardous waste
                management, legal compliance, and sustainable practices. This section will grow over time as we add
                more resources to support our customers and partners.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Check back soon for downloadable guides, case studies, regulatory summaries, and technical notes that
                reflect the same commitment to safety, innovation, and sustainability that you see across Tshegofentse.
              </p>
            </div>

            {/* Placeholder Resource Blocks */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border border-border/60 rounded-xl p-6 bg-muted/30">
                <h2 className="text-xl font-bold mb-3 text-foreground">
                  Compliance &amp; Legislation Guides
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Future space for simplified summaries of key hazardous waste regulations, permit requirements, and
                  compliance checklists tailored for South African industry.
                </p>
              </div>

              <div className="border border-border/60 rounded-xl p-6 bg-muted/30">
                <h2 className="text-xl font-bold mb-3 text-foreground">
                  Want to know more about us?
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If you&apos;d like a deeper overview of who we are, what we do, and how we work, you can download our
                  full company profile below.
                </p>
                <a
                  href="/tshegofentse-hazardous-waste-profile-0622.pdf"
                  download
                  className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  Download Tshegofentse Hazardous Waste Profile (PDF)
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}


