import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Clock } from "lucide-react"

const events = [
  {
    title: "Global Prayer Week",
    date: "Nov 15-22, 2025",
    time: "Daily at 7:00 PM",
    location: "Virtual & Local Gatherings",
    description: "Join millions worldwide in a week of united prayer and spiritual renewal.",
    type: "Spiritual",
  },
  {
    title: "Community Service Day",
    date: "Nov 18, 2025",
    time: "9:00 AM - 3:00 PM",
    location: "Nationwide",
    description: "Volunteer opportunities to serve your local community through various projects.",
    type: "Service",
  },
  {
    title: "Family Life Conference",
    date: "Dec 1-3, 2025",
    time: "All Day",
    location: "Regional Centers",
    description: "Strengthen family bonds with workshops, activities, and inspiring speakers.",
    type: "Conference",
  },
  {
    title: "Youth Winter Retreat",
    date: "Dec 27-30, 2025",
    time: "Check-in 2:00 PM",
    location: "Mountain Lodge Resort",
    description: "An unforgettable experience of adventure, worship, and fellowship for teens.",
    type: "Youth",
  },
]

export function UpcomingEvents() {
  return (
    <section className="bg-accent/10 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-balance text-3xl font-bold md:text-4xl">Upcoming Events</h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground leading-relaxed">
            Connect, grow, and serve together at our upcoming gatherings and programs
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {events.map((event, index) => (
            <Card key={index} className="overflow-hidden transition-all hover:shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex items-start justify-between">
                  <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                    {event.type}
                  </div>
                </div>

                <h3 className="mb-3 text-2xl font-bold">{event.title}</h3>
                <p className="mb-4 text-muted-foreground leading-relaxed">{event.description}</p>

                <div className="space-y-2 border-t border-border pt-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>{event.location}</span>
                  </div>
                </div>

                <Button className="mt-4 w-full bg-transparent" variant="outline">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button size="lg">View All Events</Button>
        </div>
      </div>
    </section>
  )
}
