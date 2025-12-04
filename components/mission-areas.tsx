import { Heart, BookOpen, Users, Globe } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const missions = [
  {
    icon: Heart,
    title: "Community Health",
    description: "Promoting healthy living through health expos, cooking classes, and wellness seminars.",
    stat: "Weekly Health Programs",
  },
  {
    icon: BookOpen,
    title: "Bible Study",
    description: "Deepening faith through Sabbath School, mid-week prayer meetings, and small groups.",
    stat: "Daily Study Guides",
  },
  {
    icon: Users,
    title: "Community Service",
    description: "Serving our neighbors through food distribution, clothing drives, and support for the vulnerable.",
    stat: "Monthly Outreach",
  },
  {
    icon: Globe,
    title: "Evangelism",
    description: "Sharing the good news of Jesus Christ with our local community and beyond.",
    stat: "Annual Campaigns",
  },
]

export function MissionAreas() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">Our Mission in Action</h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground leading-relaxed">
            Making a tangible difference through dedicated service across four core areas
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {missions.map((mission, index) => (
            <Card key={index} className="group border-2 transition-all hover:border-primary hover:shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary">
                  <mission.icon className="h-7 w-7 text-primary transition-colors group-hover:text-primary-foreground" />
                </div>
                <h3 className="mb-2 text-xl font-bold">{mission.title}</h3>
                <p className="mb-4 text-sm text-muted-foreground leading-relaxed">{mission.description}</p>
                <div className="text-sm font-semibold text-primary">{mission.stat}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
