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
              Industry Waste Types
            </h1>

            {/* Introduction */}
            <div className="mb-16">
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                We provide simple, effective solutions applicable to a range of industries. Companies want to find greener ways of disposing of waste legally but struggle to find the right avenues. That&apos;s where we come in. We offer a wide range of services that aim to solve this problem by reducing pollution and creating employment opportunities at the same time.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Contact Tshegofentse for efficient, cost-effective Hazardous Waste management methods.
              </p>
            </div>

            {/* Industry Sections */}
            <div className="space-y-12 mb-16">
              {/* Metals & Mining */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">Metals & Mining</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Heavy metal effluent</li>
                  <li>Tailings</li>
                  <li>Slag</li>
                  <li>Filter cake</li>
                  <li>Spent acids</li>
                  <li>Millscale</li>
                  <li>Contamined fuels</li>
                </ul>
              </div>

              {/* Common hazardous waste */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">Common hazardous waste</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Sludge</li>
                  <li>Oily rags</li>
                  <li>Used oils &amp; grease</li>
                  <li>Contaminated ppe</li>
                  <li>Lead acid batteries</li>
                </ul>
              </div>

              {/* Paint, coatings & Automotive */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">Paint, coatings &amp; Automotive</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Inks, additives and pigments</li>
                  <li>Solvents</li>
                  <li>Aerosols</li>
                  <li>Used packaging</li>
                  <li>Lubricants &amp; greases</li>
                  <li>Oil filters</li>
                </ul>
              </div>

              {/* Chemicals, fertilizers & manufacturing */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">Chemicals, fertilizers &amp; manufacturing</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Expired chemicals</li>
                  <li>Acidic waste</li>
                  <li>High COD effluent</li>
                  <li>Low pH effluent</li>
                  <li>Catalyst</li>
                  <li>Pesticides</li>
                </ul>
              </div>

              {/* Textile & Leather */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">Textile &amp; Leather</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Tannery leather shavings</li>
                  <li>Wood pulp</li>
                  <li>Animal waste</li>
                  <li>Dyes &amp; pigments</li>
                  <li>Glue</li>
                </ul>
              </div>

              {/* Food, beverages & retail */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">Food, beverages &amp; retail</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Off spec produce</li>
                  <li>Abattoir waste</li>
                  <li>Fat trap waste</li>
                  <li>Pharmaceuticals</li>
                </ul>
              </div>

              {/* Other hazardous waste */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">Other hazardous waste</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Sandblasting grit</li>
                  <li>Oil filters</li>
                  <li>Ash</li>
                  <li>Asbestos</li>
                </ul>
              </div>
            </div>

            {/* Waste Exchange Section */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">WASTE EXCHANGE</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Given our knowledge of users and generators of different types of waste we can facilitate the exchange of waste. We can identify certain waste streams or by-products that have the potential to be reused or recycled by other companies. Your waste could be someone&apos;s gold. The benefits are immense; avoid landfill, save on disposal costs, job-creation &amp; environmental sustainability.Waste beneficiation is a well known practice embedded into our Waste Act. According to the waste management hierarchy: waste must first be avoided – where it cannot be avoided it must be reduced, reused, recycled or recovered and only disposed of if there is nothing else that could be done with it.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                For more information check <a href="https://www.wastebenefit.co.za" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.wastebenefit.co.za</a>
              </p>
            </div>

            {/* Waste Hierarchy Section */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">The Waste Hierarchy</h2>
              <ol className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-4">
                  <span className="font-bold text-foreground text-xl">1.</span>
                  <div>
                    <span className="font-bold text-foreground">Avoid:</span> Maximum conservation of resources
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="font-bold text-foreground text-xl">2.</span>
                  <div>
                    <span className="font-bold text-foreground">Reuse:</span> Reusing Materials
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="font-bold text-foreground text-xl">3.</span>
                  <div>
                    <span className="font-bold text-foreground">Recycle:</span> Recycling &amp; reprocessing materials
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="font-bold text-foreground text-xl">4.</span>
                  <div>
                    <span className="font-bold text-foreground">Waste to Energy:</span> Energy recovery prior to disposal
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="font-bold text-foreground text-xl">5.</span>
                  <div>
                    <span className="font-bold text-foreground">Disposal of Waste:</span> Zero conversion of resources
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
