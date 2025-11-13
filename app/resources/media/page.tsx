import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { RightSidebar } from "@/components/right-sidebar"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Video, Music, Image as ImageIcon, Play, Download } from "lucide-react"

export default function MediaLibraryPage() {
  const categories = [
    {
      icon: Video,
      title: "Video Library",
      count: "50+ videos",
      description: "Sermons, special presentations, and church events"
    },
    {
      icon: Music,
      title: "Audio Recordings",
      count: "100+ recordings",
      description: "Sermons, music performances, and Bible studies"
    },
    {
      icon: ImageIcon,
      title: "Photo Gallery",
      count: "500+ photos",
      description: "Church events, ministries, and community activities"
    }
  ]

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="lg:pr-44">
        <div className="bg-gradient-to-br from-primary/10 to-accent/10 py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="text-4xl font-bold mb-4">Media Library</h1>
              <p className="text-xl text-muted-foreground">
                Videos, audio, and photos from Kp3 SDA Church
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="mx-auto max-w-6xl">
            <section className="mb-12">
              <div className="grid gap-6 md:grid-cols-3">
                {categories.map((category, index) => {
                  const Icon = category.icon
                  return (
                    <Card key={index} className="p-6 text-center hover:bg-primary/5 transition-colors cursor-pointer">
                      <Icon className="h-16 w-16 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                      <p className="text-sm text-primary mb-3">{category.count}</p>
                      <p className="text-sm text-muted-foreground">{category.description}</p>
                    </Card>
                  )
                })}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-semibold mb-6">Featured Videos</h2>
              <div className="grid gap-6 md:grid-cols-2">
                {[1, 2, 3, 4].map((item) => (
                  <Card key={item} className="overflow-hidden">
                    <div className="aspect-video bg-muted flex items-center justify-center">
                      <Play className="h-16 w-16 text-primary" />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold mb-2">Video Title {item}</h3>
                      <p className="text-sm text-muted-foreground mb-3">Description of the video content</p>
                      <div className="flex gap-2">
                        <Button size="sm" className="flex-1">
                          <Play className="h-4 w-4 mr-2" />
                          Watch
                        </Button>
                        <Button size="sm" variant="outline">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            <div className="bg-primary/5 p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Connect with Us Online</h2>
              <p className="text-muted-foreground mb-6">
                Follow us on social media and YouTube for regular updates, live streams, and inspirational content.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg">YouTube Channel</Button>
                <Button size="lg" variant="outline">Facebook</Button>
                <Button size="lg" variant="outline">Instagram</Button>
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
