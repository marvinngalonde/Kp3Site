import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Plus, Edit, Trash2, Calendar, MapPin, Clock } from "lucide-react"

export default function AdminEventsPage() {
  const events = [
    {
      id: 1,
      title: "Youth Camp 2025",
      date: "2025-03-15",
      time: "All Day",
      location: "Camp Site TBA",
      category: "Youth",
      status: "Upcoming",
      registrations: 45
    },
    {
      id: 2,
      title: "Community Health Fair",
      date: "2025-02-22",
      time: "9:00 AM - 3:00 PM",
      location: "Church Grounds",
      category: "Health",
      status: "Upcoming",
      registrations: 12
    },
    {
      id: 3,
      title: "Prayer Meeting",
      date: "Weekly - Wednesday",
      time: "6:00 PM",
      location: "Fellowship Hall",
      category: "Prayer",
      status: "Recurring",
      registrations: null
    },
    {
      id: 4,
      title: "Sabbath Worship Service",
      date: "Weekly - Saturday",
      time: "9:30 AM",
      location: "Main Sanctuary",
      category: "Worship",
      status: "Recurring",
      registrations: null
    }
  ]

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Events Management</h1>
          <p className="text-muted-foreground">Manage church events and schedules</p>
        </div>
        <Button size="lg" className="mt-4 md:mt-0">
          <Plus className="mr-2 h-5 w-5" />
          New Event
        </Button>
      </div>

      {/* Filters */}
      <Card className="p-6 mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <select className="px-4 py-2 border rounded-lg">
            <option>All Categories</option>
            <option>Worship</option>
            <option>Youth</option>
            <option>Health</option>
            <option>Prayer</option>
            <option>Evangelism</option>
          </select>
          <select className="px-4 py-2 border rounded-lg">
            <option>All Events</option>
            <option>Upcoming</option>
            <option>Recurring</option>
            <option>Past</option>
          </select>
        </div>
      </Card>

      {/* Events List */}
      <div className="grid gap-6 md:grid-cols-2">
        {events.map((event) => (
          <Card key={event.id} className="p-6">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-xl font-semibold">{event.title}</h3>
              <Badge variant={event.status === "Recurring" ? "secondary" : "default"}>
                {event.status}
              </Badge>
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                {event.date}
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                {event.time}
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                {event.location}
              </div>
            </div>

            {event.registrations !== null && (
              <div className="mb-4 p-3 bg-primary/5 rounded-lg">
                <p className="text-sm font-medium">
                  {event.registrations} registrations
                </p>
              </div>
            )}

            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="flex-1">
                <Edit className="h-4 w-4 mr-2" />
                Edit
              </Button>
              <Button variant="destructive" size="sm">
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </Card>
        ))}
      </div>

      <Card className="mt-6 p-6 bg-muted/30">
        <h3 className="font-semibold mb-2">Event Management Tips</h3>
        <ul className="space-y-1 text-sm text-muted-foreground">
          <li>• Create recurring events for weekly/monthly activities</li>
          <li>• Enable registration to track attendance</li>
          <li>• Add event to calendar exports for members</li>
          <li>• Upload images and documents for each event</li>
        </ul>
      </Card>
    </div>
  )
}
