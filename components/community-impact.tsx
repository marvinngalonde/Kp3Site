import { Card, CardContent } from "@/components/ui/card"

export function CommunityImpact() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <div className="relative">
            <div className="relative h-[400px] overflow-hidden rounded-2xl lg:h-[500px]">
              <img src="/volunteers-helping-community-food-distribution-hum.jpg" alt="Community impact" className="h-full w-full object-cover" />
            </div>

            {/* Stats Overlay */}
            <Card className="absolute -bottom-6 -right-6 w-64 shadow-xl">
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="text-4xl font-bold text-primary">12.5M</div>
                  <div className="text-sm text-muted-foreground">People Served Annually</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary">$450M</div>
                  <div className="text-sm text-muted-foreground">In Aid & Resources</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center space-y-6 bg-[#f5f5dc] p-8 rounded-2xl">
            <div>
              <div className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
                Making a Difference
              </div>
              <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">
                Transforming Communities Through Action
              </h2>
            </div>

            <p className="text-pretty text-lg text-muted-foreground leading-relaxed">
              Our commitment to service extends beyond words. Through dedicated humanitarian programs, disaster relief
              efforts, and sustainable development initiatives, we're creating lasting change in communities worldwide.
            </p>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <span className="text-xl">🏥</span>
                </div>
                <div>
                  <h3 className="mb-1 font-semibold">Healthcare Access</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Providing medical care to underserved populations through clinics and mobile health units
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <span className="text-xl">🍎</span>
                </div>
                <div>
                  <h3 className="mb-1 font-semibold">Food Security</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Addressing hunger through food banks, meal programs, and agricultural training
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <span className="text-xl">🌍</span>
                </div>
                <div>
                  <h3 className="mb-1 font-semibold">Disaster Response</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
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
