import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const newsItems = [
  {
    category: "AY Induction",
    title: "2026 Adventist Youth Induction Night approaching",
    excerpt:
      "The 2026 Adventist Youth Induction Night is just around the corner. Join us in celebrating the spiritual journey of our young people as they step into their roles as leaders and servants of God.",
    image: "/images/induct.jpg",
    date: "November 10, 2025",
    featured: true,
  },
  {
    category: "Fostering Relationships",
    title: "Oneness In Christ ,Through His Spirit",
    excerpt: "Faithful in Christ, we are united in His Spirit, fostering relationships and unity.",
    image: "/images/relationship.jpg",
    date: "November 8, 2025",
  },
  {
    category: "Fathers,Priests of the House",
    title: "Empowering Man",
    excerpt: "Faithful in Christ, we are united in His Spirit, fostering relationships and unity.",
    image: "/images/father.jpg",
    date: "November 6, 2025",
  },
  {
    category: "Kids For Christ",
    title: "Children's Day 2025",
    excerpt: "Faithful in Christ, we are united in His Spirit, fostering relationships and unity.",
    image: "/images/kids.jpg",
    date: "November 5, 2025",
  },
  {
    category: "Involving The Youth",
    title: "The Army of God",
    excerpt: "Faithful in Christ, we are united in His Spirit, fostering relationships and unity.",
    image: "/images/ay.jpg",
    date: "November 3, 2025",
  },
]

export function NewsGrid() {
  const featuredNews = newsItems[0]
  const regularNews = newsItems.slice(1)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Latest Updates</h2>
        <Button variant="ghost" className="gap-2 text-primary">
          All News <ArrowRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Featured News */}
      <Card className="group overflow-hidden transition-shadow hover:shadow-xl">
        <div className="grid gap-6 md:grid-cols-5">
          <div className="relative h-64 overflow-hidden md:col-span-2 md:h-auto">
            <img
              src={featuredNews.image || "/placeholder.svg"}
              alt={featuredNews.title}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <Badge className="absolute left-4 top-4">{featuredNews.category}</Badge>
          </div>
          <CardContent className="flex flex-col justify-center p-6 md:col-span-3">
            <div className="mb-3 flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              {featuredNews.date}
            </div>
            <h3 className="mb-3 text-2xl font-bold leading-tight group-hover:text-primary transition-colors">
              {featuredNews.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">{featuredNews.excerpt}</p>
            <Button variant="link" className="mt-4 w-fit gap-2 p-0 text-primary">
              Read More <ArrowRight className="h-4 w-4" />
            </Button>
          </CardContent>
        </div>
      </Card>

      {/* Regular News Grid */}
      <div className="grid gap-6 sm:grid-cols-2">
        {regularNews.map((news, index) => (
          <Card key={index} className="group overflow-hidden transition-shadow hover:shadow-lg">
            <div className="relative h-48 overflow-hidden">
              <img
                src={news.image || "/placeholder.svg"}
                alt={news.title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <Badge className="absolute left-4 top-4">{news.category}</Badge>
            </div>
            <CardContent className="p-4">
              <div className="mb-2 flex items-center gap-2 text-xs text-muted-foreground">
                <Calendar className="h-3 w-3" />
                {news.date}
              </div>
              <h3 className="mb-2 font-bold leading-tight group-hover:text-primary transition-colors">{news.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{news.excerpt}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
