import { Card, CardContent } from "@/components/ui/card"

const regions = [
  {
    name: "North America",
    members: "1.3M",
    congregations: "5,800",
    image: "/modern-church-building-north-america-skyline.jpg",
  },
  {
    name: "South America",
    members: "2.8M",
    congregations: "12,400",
    image: "/church-community-south-america-mountains.jpg",
  },
  {
    name: "Europe",
    members: "1.1M",
    congregations: "4,200",
    image: "/historic-church-europe-city.jpg",
  },
  {
    name: "Africa",
    members: "9.2M",
    congregations: "38,600",
    image: "/african-church-community-worship.jpg",
  },
  {
    name: "Asia-Pacific",
    members: "8.5M",
    congregations: "28,100",
    image: "/asian-church-gathering-modern-building.jpg",
  },
  {
    name: "Middle East",
    members: "2.4M",
    congregations: "5,900",
    image: "/middle-east-church-community-desert.jpg",
  },
]

export function GlobalReach() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">A Truly Global Community</h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground leading-relaxed">
            Our presence spans every continent, uniting diverse cultures in faith and service
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {regions.map((region, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-2 transition-all hover:border-primary hover:shadow-xl"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={region.image || "/placeholder.svg"}
                  alt={region.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">{region.name}</h3>
              </div>
              <CardContent className="p-6">
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
