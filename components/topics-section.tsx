import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Heart, Users, Globe, Home, Sparkles } from "lucide-react"

const topics = [
  {
    icon: BookOpen,
    title: "Beliefs",
    description: "Explore our fundamental teachings and biblical foundations",
  },
  {
    icon: Heart,
    title: "Health",
    description: "Wholistic wellness for body, mind, and spirit",
  },
  {
    icon: Users,
    title: "Family",
    description: "Strengthening relationships and building strong homes",
  },
  {
    icon: Globe,
    title: "Mission",
    description: "Global outreach and service initiatives",
  },
  {
    icon: Home,
    title: "Community",
    description: "Connect with local congregations and groups",
  },
  {
    icon: Sparkles,
    title: "Prophecy",
    description: "Understanding biblical prophecy and end times",
  },
]

export function TopicsSection() {
  return (
    <section className="py-16 md:py-24 relative bg-stone-50" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'200\' height=\'200\' viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M100 0 C150 50 150 150 100 200 M100 0 C50 50 50 150 100 200 M0 100 C50 50 150 50 200 100 M0 100 C50 150 150 150 200 100 M50 50 Q100 75 150 50 M50 150 Q100 125 150 150 M50 50 Q75 100 50 150 M150 50 Q125 100 150 150\' stroke=\'%23d4d4d8\' stroke-width=\'0.5\' fill=\'none\' opacity=\'0.2\'/%3E%3C/svg%3E")' }}>
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-balance text-3xl font-bold md:text-4xl">Explore Topics</h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Discover resources and information organized by key areas of interest
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic, index) => (
            <Card key={index} className="group cursor-pointer transition-all hover:border-primary hover:shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary">
                  <topic.icon className="h-6 w-6 text-primary transition-colors group-hover:text-primary-foreground" />
                </div>
                <h3 className="mb-2 text-lg font-bold group-hover:text-primary transition-colors">{topic.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{topic.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
