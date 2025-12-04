import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Calendar, MapPin } from "lucide-react"

const events = [
  {
    title: "Global Prayer Week",
    date: "Nov 15-22, 2025",
    time: "7:00 PM",
    location: "Virtual",
    description: "Join millions worldwide in a week of united prayer.",
    type: "Spiritual",
    image: "/images/kidwork.png", 
  },
  {
    title: "Community Service",
    date: "Nov 18, 2025",
    time: "9:00 AM",
    location: "Nationwide",
    description: "Volunteer opportunities to serve your local community.",
    type: "Service",
    image: "/images/kidwork.png", 
  },
  {
    title: "Family Conference",
    date: "Dec 1-3, 2025",
    time: "All Day",
    location: "Regional",
    description: "Strengthen family bonds with workshops and activities.",
    type: "Conference",
    image: "/images/kidwork.png", 
  },
  {
    title: "Youth Winter Retreat",
    date: "Dec 27-30, 2025",
    time: "2:00 PM",
    location: "Mountain Lodge",
    description: "Adventure, worship, and fellowship for teens.",
    type: "Youth",
    image: "/images/kidwork.png", 
  },
]

export function UpcomingEvents() {
  return (
    <section className="py-16 md:py-24 relative" style={{ background: 'radial-gradient(at 20% 30%, #f97316 0%, transparent 50%), radial-gradient(at 80% 70%, #fdba74 0%, transparent 50%), radial-gradient(at 50% 50%, #fef3c7 0%, transparent 50%), linear-gradient(135deg, #fed7aa 0%, #fef3c7 100%)' }}>
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-balance text-3xl font-bold md:text-4xl text-slate-900">Upcoming Events</h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-slate-700 leading-relaxed">
            Connect, grow, and serve together at our upcoming gatherings and programs
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {events.map((event, index) => (
            <Card key={index} className="group relative overflow-hidden rounded-2xl border-none shadow-lg h-[420px]">
              
              {/* 1. Background Image & Overlay */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
              </div>

              {/* 2. Content Layer */}
              <CardContent className="relative z-10 flex h-full flex-col items-center justify-end p-6 text-center text-white">
                
                {/* Optional Type Badge */}
                <div className="absolute top-4 right-4">
                   <span className="rounded-full bg-white/20 backdrop-blur-md px-3 py-1 text-xs font-medium text-white tracking-wide">
                    {event.type}
                  </span>
                </div>

                {/* Main Text Content */}
                <div className="mb-6 space-y-3">
                  <h3 className="text-2xl font-bold leading-tight drop-shadow-sm">{event.title}</h3>
                  
                  {/* Metadata Row */}
                  <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-medium text-orange-200">
                     <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5"/> {event.date}</span>
                     <span className="hidden md:inline">•</span>
                     <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5"/> {event.location}</span>
                  </div>

                  <p className="text-sm text-slate-100 line-clamp-2 px-2">
                    {event.description}
                  </p>
                </div>

                {/* THEME BUTTON: Changed from Blue to Orange */}
                <Button className="w-full rounded-full bg-orange-600 hover:bg-orange-700 text-white font-bold h-11 border-none shadow-md tracking-wide">
                  View Details
                </Button>

              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button size="lg" className="bg-slate-900 text-white hover:bg-slate-800">View All Events</Button>
        </div>
      </div>
    </section>
  )
}