import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar } from "lucide-react"

const articles = [
  {
    category: "Ministry",
    title: "Youth Leadership Summit Inspires Next Generation",
    excerpt: "Hundreds of young leaders gathered for three days of training, worship, and community building.",
    image: "/youth-leadership-conference-diverse-participants.jpg",
    date: "Nov 8, 2025",
  },
  {
    category: "Health",
    title: "New Medical Center Opens in Southeast Asia",
    excerpt: "State-of-the-art facility will serve 500,000 people with compassionate healthcare.",
    image: "/modern-medical-center-exterior-tropical-setting.jpg",
    date: "Nov 5, 2025",
  },
  {
    category: "Education",
    title: "Scholarship Program Reaches 10,000 Students",
    excerpt: "Milestone achievement helps deserving students access quality education worldwide.",
    image: "/diverse-students-celebrating-graduation-ceremony.jpg",
    date: "Nov 2, 2025",
  },
]

export function FeaturedArticles() {
  return (
    <section className="bg-muted/30 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex items-center justify-between">
          <div>
            <h2 className="text-balance text-3xl font-bold md:text-4xl">Latest News & Stories</h2>
            <p className="mt-2 text-muted-foreground">Stay updated with our global community</p>
          </div>
          <Button variant="outline" className="hidden gap-2 md:inline-flex bg-transparent">
            View All <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, index) => (
            <Card key={index} className="group overflow-hidden transition-all hover:shadow-xl">
              <div className="relative h-56 overflow-hidden">
                <img
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <Badge className="absolute left-4 top-4">{article.category}</Badge>
              </div>
              <CardContent className="p-6">
                <div className="mb-3 flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  {article.date}
                </div>
                <h3 className="mb-2 text-xl font-bold leading-tight group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{article.excerpt}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Button variant="outline" className="gap-2 bg-transparent">
            View All Articles <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
