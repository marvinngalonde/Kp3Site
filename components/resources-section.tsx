import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Headphones, Video, FileText, Download, ArrowRight } from "lucide-react"

const resources = [
  {
    icon: BookOpen,
    title: "Bible Study Guides",
    description: "Comprehensive study materials for personal and group exploration",
    count: "500+ Guides",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    icon: Headphones,
    title: "Podcasts & Audio",
    description: "Sermons, interviews, and inspirational messages on the go",
    count: "1,200+ Episodes",
    color: "bg-purple-500/10 text-purple-600",
  },
  {
    icon: Video,
    title: "Video Library",
    description: "Educational content, testimonies, and documentary series",
    count: "800+ Videos",
    color: "bg-red-500/10 text-red-600",
  },
  {
    icon: FileText,
    title: "Publications",
    description: "Magazines, journals, and digital books for deeper learning",
    count: "300+ Publications",
    color: "bg-green-500/10 text-green-600",
  },
]

export function ResourcesSection() {
  return (
    <section className="bg-muted/30 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex flex-col items-center justify-between gap-4 md:flex-row">
          <div>
            <h2 className="text-balance text-3xl font-bold md:text-4xl">Free Resources</h2>
            <p className="mt-2 text-muted-foreground">Access thousands of materials to grow your faith</p>
          </div>
          <Button className="gap-2">
            View All Resources <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {resources.map((resource, index) => (
            <Card key={index} className="group transition-all hover:border-primary hover:shadow-lg">
              <CardContent className="p-6">
                <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-xl ${resource.color}`}>
                  <resource.icon className="h-7 w-7" />
                </div>
                <div className="mb-2 text-sm font-semibold text-primary">{resource.count}</div>
                <h3 className="mb-2 text-lg font-bold">{resource.title}</h3>
                <p className="mb-4 text-sm text-muted-foreground leading-relaxed">{resource.description}</p>
                <Button variant="ghost" size="sm" className="gap-2 p-0 text-primary">
                  Explore <Download className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
