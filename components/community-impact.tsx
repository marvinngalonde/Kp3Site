import { Card, CardContent } from "@/components/ui/card"

export function CommunityImpact() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image Side */}
          <div className="relative">
            <div className="relative h-[400px] overflow-hidden rounded-2xl lg:h-[500px]">
              <img 
                src="/images/ay.jpg" 
                alt="Community impact" 
                className="h-full w-full object-cover" 
              />
            </div>

            {/* Stats Overlay */}
            <Card className="absolute -bottom-6 -right-6 w-64 shadow-xl border-none">
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="text-4xl font-bold text-orange-600">12.5M</div>
                  <div className="text-sm text-muted-foreground">People Served Annually</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-orange-600">$450M</div>
                  <div className="text-sm text-muted-foreground">In Aid & Resources</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Content Side */}
          {/* Changed bg-[#f5f5dc] to bg-orange-50 for a cleaner, warm look */}
          <div className="flex flex-col justify-center space-y-6 bg-orange-50 p-8 rounded-2xl">
            <div>
              <div className="mb-2 text-sm font-semibold uppercase tracking-wider text-orange-600">
                Making a Difference
              </div>
              <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl text-slate-900">
                Transforming Communities Through Action
              </h2>
            </div>

            <p className="text-pretty text-lg text-slate-700 leading-relaxed">
              Our commitment to service extends beyond words. Through dedicated humanitarian programs, disaster relief
              efforts, and sustainable development initiatives, we're creating lasting change in communities worldwide.
            </p>

            <div className="space-y-4">
              {/* Feature 1 */}
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-orange-600 shadow-sm">
                  <span className="text-xl">🏥</span>
                </div>
                <div>
                  <h3 className="mb-1 font-bold text-slate-900">Healthcare Access</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Providing medical care to underserved populations through clinics and mobile health units
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-orange-600 shadow-sm">
                  <span className="text-xl">🍎</span>
                </div>
                <div>
                  <h3 className="mb-1 font-bold text-slate-900">Food Security</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Addressing hunger through food banks, meal programs, and agricultural training
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-orange-600 shadow-sm">
                  <span className="text-xl">🌍</span>
                </div>
                <div>
                  <h3 className="mb-1 font-bold text-slate-900">Disaster Response</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Rapid deployment teams providing emergency relief and long-term recovery support
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}