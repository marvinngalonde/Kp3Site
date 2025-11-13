import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { RightSidebar } from "@/components/right-sidebar"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, Download, Calendar, User } from "lucide-react"

export default function SermonsPage() {
  const recentSermons = [
    {
      title: "Walking by Faith",
      speaker: "Pastor [Name]",
      date: "January 6, 2025",
      series: "Living Victoriously",
      duration: "45 min"
    },
    {
      title: "The Power of Prayer",
      speaker: "Elder [Name]",
      date: "December 30, 2024",
      series: "Spiritual Disciplines",
      duration: "38 min"
    },
    {
      title: "Hope in Christ's Return",
      speaker: "Pastor [Name]",
      date: "December 23, 2024",
      series: "Advent Hope",
      duration: "42 min"
    },
    {
      title: "Stewardship and Faithfulness",
      speaker: "Guest Speaker",
      date: "December 16, 2024",
      series: "Kingdom Living",
      duration: "50 min"
    }
  ]

  const series = [
    "Living Victoriously",
    "Spiritual Disciplines",
    "Advent Hope",
    "Kingdom Living",
    "The Gospel of John",
    "End Time Events"
  ]

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="lg:pr-44">
        <div className="bg-gradient-to-br from-primary/10 to-accent/10 py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="text-4xl font-bold mb-4">Sermon Archives</h1>
              <p className="text-xl text-muted-foreground">
                Listen to past messages and grow in your faith
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="mx-auto max-w-6xl">
            <section className="mb-12">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
                <h2 className="text-3xl font-semibold mb-4 md:mb-0">Recent Sermons</h2>
                <div className="flex gap-3">
                  <select className="px-4 py-2 border rounded-lg">
                    <option>All Series</option>
                    {series.map((s, i) => (
                      <option key={i}>{s}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-4">
                {recentSermons.map((sermon, index) => (
                  <Card key={index} className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2">{sermon.title}</h3>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                          <div className="flex items-center gap-2">
                            <User className="h-4 w-4" />
                            {sermon.speaker}
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            {sermon.date}
                          </div>
                          <div>Duration: {sermon.duration}</div>
                        </div>
                        <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                          {sermon.series}
                        </span>
                      </div>
                      <div className="flex gap-3">
                        <Button>
                          <Play className="h-4 w-4 mr-2" />
                          Listen
                        </Button>
                        <Button variant="outline">
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <div className="mt-8 text-center">
                <Button variant="outline" size="lg">Load More Sermons</Button>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-semibold mb-6">Sermon Series</h2>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {series.map((s, index) => (
                  <Card key={index} className="p-4 hover:bg-primary/5 transition-colors cursor-pointer">
                    <h3 className="font-semibold mb-2">{s}</h3>
                    <p className="text-sm text-muted-foreground">View all messages in this series</p>
                  </Card>
                ))}
              </div>
            </section>

            <div className="bg-primary/5 p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Subscribe to Podcast</h2>
              <p className="text-muted-foreground mb-6">
                Never miss a sermon! Subscribe to our podcast on your favorite platform and get new messages
                delivered automatically.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg">Apple Podcasts</Button>
                <Button size="lg" variant="outline">Spotify</Button>
                <Button size="lg" variant="outline">Google Podcasts</Button>
                <Button size="lg" variant="outline">RSS Feed</Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
      <RightSidebar />
    </div>
  )
}
