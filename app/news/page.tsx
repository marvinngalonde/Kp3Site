import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowRight } from "lucide-react"

export default function NewsPage() {
  const newsArticles = [
    {
      title: "New Year Brings New Opportunities for Service",
      excerpt: "As we enter 2025, our church is launching several new community outreach initiatives aimed at serving the Kuwadzan community...",
      author: "Communications Team",
      date: "January 5, 2025",
      category: "Church News",
      featured: true
    },
    {
      title: "Youth Department Plans Exciting Camp Experience",
      excerpt: "Registration is now open for the annual youth camp scheduled for March. This year's theme focuses on spiritual leadership and character development...",
      author: "Youth Ministry",
      date: "January 3, 2025",
      category: "Youth",
      featured: false
    },
    {
      title: "Health Ministry Launches Wellness Initiative",
      excerpt: "Our Health Ministry is introducing a new 8-week wellness program featuring nutrition education, fitness classes, and health screenings...",
      author: "Health Ministry",
      date: "December 28, 2024",
      category: "Health",
      featured: false
    },
    {
      title: "Christmas Program a Great Success",
      excerpt: "The annual Christmas program brought together over 300 people for an evening of worship, music, and celebration of Christ's birth...",
      author: "Events Team",
      date: "December 26, 2024",
      category: "Events",
      featured: false
    },
    {
      title: "New Sabbath School Classes Begin",
      excerpt: "We're excited to announce new Sabbath School classes for all age groups, including a special class for young adults...",
      author: "Sabbath School Department",
      date: "December 20, 2024",
      category: "Education",
      featured: false
    },
    {
      title: "Community Food Bank Serves Record Numbers",
      excerpt: "Our monthly food bank distribution served 75 families in December, the highest number in our church's history...",
      author: "Community Service",
      date: "December 18, 2024",
      category: "Community Service",
      featured: false
    }
  ]

  const categories = ["All", "Church News", "Youth", "Health", "Events", "Education", "Community Service"]

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background */}
      <div className="relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/chag.png')" }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10">
          <SiteHeader />
          <div className="container mx-auto px-4 py-24 text-center lg:mr-40">
            <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">Church News</h1>
            <p className="mx-auto max-w-2xl text-lg text-white/90">
              Latest updates and announcements from Kp3 SDA Church
            </p>
          </div>
        </div>
      </div>

      <main className="bg-gradient-to-b from-stone-50 via-white to-stone-100 py-16 lg:mr-40">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-wrap gap-3 mb-8">
              {categories.map((cat, index) => (
                <Button
                  key={index}
                  variant={index === 0 ? "default" : "outline"}
                  size="sm"
                >
                  {cat}
                </Button>
              ))}
            </div>

            {newsArticles[0] && newsArticles[0].featured && (
              <Card className="p-8 mb-8 bg-gradient-to-br from-primary/5 to-accent/5">
                <Badge className="mb-4">Featured</Badge>
                <h2 className="text-3xl font-bold mb-4">{newsArticles[0].title}</h2>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    {newsArticles[0].author}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {newsArticles[0].date}
                  </div>
                  <Badge variant="outline">{newsArticles[0].category}</Badge>
                </div>
                <p className="text-lg text-muted-foreground mb-6">{newsArticles[0].excerpt}</p>
                <Button size="lg">
                  Read Full Article
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Card>
            )}

            <div className="grid gap-6 md:grid-cols-2">
              {newsArticles.slice(1).map((article, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <Badge variant="outline" className="mb-3">{article.category}</Badge>
                  <h3 className="text-xl font-semibold mb-3">{article.title}</h3>
                  <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {article.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      {article.author}
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">{article.excerpt}</p>
                  <Button variant="outline">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button variant="outline" size="lg">Load More Articles</Button>
            </div>

            <div className="mt-12 bg-primary/5 p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Stay Updated</h2>
              <p className="text-muted-foreground mb-6">
                Subscribe to our newsletter to receive church news, event announcements, and inspirational
                content directly in your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 border rounded-lg"
                />
                <Button size="lg">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
