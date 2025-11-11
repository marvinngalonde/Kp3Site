import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const regions = [
  {
    region: "North America",
    countries: 48,
    members: "1.2M",
    congregations: "5,800",
    image: "/north-america-skyline.png",
  },
  {
    region: "South America",
    countries: 42,
    members: "3.8M",
    congregations: "15,200",
    image: "/south-america-landscape.jpg",
  },
  {
    region: "Europe",
    countries: 55,
    members: "2.1M",
    congregations: "8,400",
    image: "/europe-architecture.jpg",
  },
  {
    region: "Africa",
    countries: 58,
    members: "12.5M",
    congregations: "45,600",
    image: "/africa-savanna-landscape.jpg",
  },
  {
    region: "Asia-Pacific",
    countries: 65,
    members: "5.4M",
    congregations: "19,800",
    image: "/asia-pacific-modern-city.jpg",
  },
]

export function GlobalPresence() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-balance text-3xl font-bold md:text-4xl">Our Global Presence</h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            A worldwide community united in faith and service across every continent
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {regions.map((region, index) => (
            <Card key={index} className="group overflow-hidden transition-shadow hover:shadow-xl">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={region.image || "/placeholder.svg"}
                  alt={region.region}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <Badge className="absolute left-4 top-4 bg-background/90 text-foreground">
                  {region.countries} Countries
                </Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="mb-4 text-xl font-bold group-hover:text-primary transition-colors">{region.region}</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-2xl font-bold text-primary">{region.members}</div>
                    <div className="text-sm text-muted-foreground">Members</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">{region.congregations}</div>
                    <div className="text-sm text-muted-foreground">Congregations</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
