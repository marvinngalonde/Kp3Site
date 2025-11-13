import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { RightSidebar } from "@/components/right-sidebar"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Clock, Users } from "lucide-react"

export default function EventsPage() {
  const upcomingEvents = [
    {
      title: "Sabbath Worship Service",
      date: "Every Saturday",
      time: "9:30 AM - 12:00 PM",
      location: "Main Sanctuary",
      description: "Join us for Sabbath School and divine worship service",
      recurring: true,
      category: "Worship"
    },
    {
      title: "Prayer Meeting",
      date: "Every Wednesday",
      time: "6:00 PM - 7:30 PM",
      location: "Fellowship Hall",
      description: "Midweek prayer and Bible study",
      recurring: true,
      category: "Prayer"
    },
    {
      title: "Youth Camp 2025",
      date: "March 15-17, 2025",
      time: "All Day",
      location: "Camp Site TBA",
      description: "Annual youth camp with worship, workshops, and outdoor activities",
      recurring: false,
      category: "Youth"
    },
    {
      title: "Community Health Fair",
      date: "February 22, 2025",
      time: "9:00 AM - 3:00 PM",
      location: "Church Grounds",
      description: "Free health screenings and wellness education for the community",
      recurring: false,
      category: "Health"
    },
    {
      title: "Women's Ministry Retreat",
      date: "April 5-7, 2025",
      time: "Weekend",
      location: "Retreat Center",
      description: "Spiritual renewal weekend for women",
      recurring: false,
      category: "Ministry"
    },
    {
      title: "Evangelistic Campaign",
      date: "May 10-24, 2025",
      time: "7:00 PM Nightly",
      location: "Main Sanctuary",
      description: "Two-week evangelistic series with guest speaker",
      recurring: false,
      category: "Evangelism"
    }
  ]

  const categories = ["All", "Worship", "Prayer", "Youth", "Health", "Ministry", "Evangelism"]

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="lg:pr-44">
        <div className="bg-gradient-to-br from-primary/10 to-accent/10 py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="text-4xl font-bold mb-4">Church Events</h1>
              <p className="text-xl text-muted-foreground">
                Stay connected with what's happening at Kp3 SDA Church
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
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

            <div className="grid gap-6">
              {upcomingEvents.map((event, index) => (
                <Card key={index} className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    <div className="lg:w-32 flex-shrink-0">
                      <div className="bg-primary/10 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-primary">
                          {event.recurring ? "Weekly" : event.date.split(" ")[1]?.replace(",", "") || "TBA"}
                        </div>
                        <div className="text-sm text-muted-foreground mt-1">
                          {event.recurring ? event.date : event.date.split(" ")[0]}
                        </div>
                      </div>
                    </div>

                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-2xl font-semibold mb-2">{event.title}</h3>
                          <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                            {event.category}
                          </span>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-4">{event.description}</p>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          {event.date}
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          {event.time}
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          {event.location}
                        </div>
                      </div>
                    </div>

                    <div className="lg:w-32 flex-shrink-0">
                      <Button className="w-full">Register</Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-12 bg-primary/5 p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Subscribe to Calendar</h2>
              <p className="text-muted-foreground mb-6">
                Add our church calendar to your personal calendar app and never miss an event. Get automatic
                updates when new events are added or changed.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg">Google Calendar</Button>
                <Button size="lg" variant="outline">iCal/Outlook</Button>
                <Button size="lg" variant="outline">Download PDF</Button>
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
