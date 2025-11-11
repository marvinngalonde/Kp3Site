import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, BookOpen, Calendar, ArrowRight } from "lucide-react"

export function FeaturedSidebar() {
  return (
    <div className="space-y-6">
      {/* Featured Video */}
      <Card className="overflow-hidden">
        <div className="relative h-48">
          <img src="/worship-service-live-stream.jpg" alt="Live Service" className="h-full w-full object-cover" />
          <div className="absolute inset-0 flex items-center justify-center bg-black/40">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary transition-transform hover:scale-110">
              <Play className="h-8 w-8 text-primary-foreground" fill="currentColor" />
            </div>
          </div>
        </div>
        <CardContent className="p-4">
          <h3 className="font-bold">Watch This Week's Service</h3>
          <p className="mt-2 text-sm text-muted-foreground">Join us for inspiring worship and meaningful messages</p>
        </CardContent>
      </Card>

      {/* Quick Links */}
      <Card>
        <CardContent className="p-4">
          <h3 className="mb-4 font-bold">Quick Links</h3>
          <div className="space-y-3">
            <Button variant="ghost" className="w-full justify-start gap-3">
              <BookOpen className="h-4 w-4" />
              Bible Study Resources
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-3">
              <Calendar className="h-4 w-4" />
              Find a Local Congregation
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-3">
              <Play className="h-4 w-4" />
              Prayer Requests
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Upcoming Event Highlight */}
      <Card className="bg-primary text-primary-foreground">
        <CardContent className="p-6">
          <div className="mb-2 text-sm font-medium opacity-90">Coming Soon</div>
          <h3 className="mb-3 text-xl font-bold">Global Day of Prayer</h3>
          <p className="mb-4 text-sm opacity-90 leading-relaxed">
            Join millions around the world in unified prayer on November 18th
          </p>
          <Button variant="secondary" className="w-full gap-2">
            Learn More <ArrowRight className="h-4 w-4" />
          </Button>
        </CardContent>
      </Card>

      {/* Featured Resource */}
      <Card>
        <CardContent className="p-4">
          <div className="mb-3 text-sm font-medium text-primary">Free Download</div>
          <h3 className="mb-2 font-bold">Daily Devotional Guide</h3>
          <p className="mb-4 text-sm text-muted-foreground">Start your day with inspiration and biblical wisdom</p>
          <Button variant="outline" size="sm" className="w-full bg-transparent">
            Download Now
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
