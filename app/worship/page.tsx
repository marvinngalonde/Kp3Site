import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, MapPin, Users, Calendar, Music, BookOpen } from "lucide-react"

export default function WorshipPage() {
  const schedule = [
    {
      day: "Saturday (Sabbath)",
      events: [
        { time: "9:30 AM - 10:30 AM", activity: "Sabbath School", icon: BookOpen, description: "Bible study classes for all ages" },
        { time: "10:45 AM - 12:00 PM", activity: "Divine Worship Service", icon: Music, description: "Main worship service with sermon and music" },
        { time: "3:00 PM - 5:00 PM", activity: "Afternoon Programs", icon: Users, description: "Youth meetings, various ministries" }
      ]
    },
    {
      day: "Wednesday",
      events: [
        { time: "6:00 PM - 7:30 PM", activity: "Prayer Meeting", icon: Users, description: "Midweek prayer and Bible study" }
      ]
    },
    {
      day: "Friday",
      events: [
        { time: "Sunset", activity: "Vespers (Optional)", icon: Music, description: "Welcome the Sabbath with prayer and song" }
      ]
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background */}
      <div className="relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/chag.png')" }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10">
          <SiteHeader />
          <div className="container mx-auto px-4 py-24 text-center lg:mr-40">
            <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">Worship Times</h1>
            <p className="mx-auto max-w-2xl text-lg text-white/90">
              Join us in worshiping God together every Sabbath and throughout the week
            </p>
          </div>
        </div>
      </div>

      <main className="bg-gradient-to-b from-stone-50 via-white to-stone-100 py-16 lg:mr-40">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <Card className="p-8 mb-12 bg-primary/5">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <MapPin className="h-12 w-12 text-primary flex-shrink-0" />
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold mb-3">Visit Us</h2>
                  <p className="text-lg mb-2">Kp3 Seventh-day Adventist Church</p>
                  <p className="text-muted-foreground mb-4">Kuwadzana Phase 3, Harare, Zimbabwe</p>
                  <p className="text-muted-foreground">
                    We gather every Sabbath (Saturday) to worship God, study His Word, and fellowship together.
                    All are welcome - whether you're a long-time Adventist, new to the faith, or simply curious
                    about what we believe.
                  </p>
                </div>
              </div>
            </Card>

            <section className="mb-12">
              <h2 className="text-3xl font-semibold mb-8">Weekly Schedule</h2>
              <div className="space-y-6">
                {schedule.map((day, index) => (
                  <Card key={index} className="p-6">
                    <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                      <Calendar className="h-6 w-6 text-primary" />
                      {day.day}
                    </h3>
                    <div className="space-y-4">
                      {day.events.map((event, i) => {
                        const Icon = event.icon
                        return (
                          <div key={i} className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg">
                            <div className="p-2 bg-primary/10 rounded-lg">
                              <Icon className="h-5 w-5 text-primary" />
                            </div>
                            <div className="flex-1">
                              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                <h4 className="font-semibold text-lg">{event.activity}</h4>
                                <div className="flex items-center gap-2 text-primary font-medium">
                                  <Clock className="h-4 w-4" />
                                  {event.time}
                                </div>
                              </div>
                              <p className="text-sm text-muted-foreground">{event.description}</p>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-semibold mb-6">What to Expect</h2>
              <div className="grid gap-6 md:grid-cols-2">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Sabbath School (9:30 AM)</h3>
                  <p className="text-muted-foreground mb-4">
                    Our morning begins with Sabbath School, where we divide into age-appropriate classes for
                    interactive Bible study. It's a great time to make friends and dig deeper into God's Word.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Adult classes (various topics)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Youth class</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Children's divisions</span>
                    </li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Worship Service (10:45 AM)</h3>
                  <p className="text-muted-foreground mb-4">
                    Our main worship service features uplifting music, prayer, and a message from God's Word.
                    Services typically last about 75 minutes.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Contemporary and traditional hymns</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Biblical preaching</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Fellowship after service</span>
                    </li>
                  </ul>
                </Card>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-semibold mb-6">Plan Your Visit</h2>
              <div className="grid gap-6 md:grid-cols-3">
                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-3">What to Wear</h3>
                  <p className="text-sm text-muted-foreground">
                    Come as you are! While many dress modestly and semi-formally out of respect for God, we
                    welcome you regardless of what you're wearing. Comfort is key.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-3">Parking & Arrival</h3>
                  <p className="text-sm text-muted-foreground">
                    Free parking is available on-site. We recommend arriving 10-15 minutes early to find
                    parking and get settled before the service begins.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-3">Children's Programs</h3>
                  <p className="text-sm text-muted-foreground">
                    Age-appropriate programs are available for children during both Sabbath School and worship
                    service. Our children's ministry team provides a safe, engaging environment.
                  </p>
                </Card>
              </div>
            </section>

            <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 rounded-lg text-center">
              <h2 className="text-2xl font-semibold mb-4">We Can't Wait to Meet You!</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Whether this is your first time visiting a Seventh-day Adventist church or you're looking for
                a new church home, we'd love to welcome you. Come experience authentic worship, biblical
                teaching, and genuine community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">Get Directions</Button>
                <Button size="lg" variant="outline">Contact Us</Button>
              </div>
            </div>

            <Card className="mt-8 p-6 bg-muted/30">
              <h3 className="font-semibold mb-3">About the Sabbath</h3>
              <p className="text-sm text-muted-foreground">
                Seventh-day Adventists worship on Saturday, the seventh day of the week, in harmony with the
                fourth commandment (Exodus 20:8-11). The Sabbath runs from Friday sunset to Saturday sunset and
                is a special time set aside to rest from work, worship God, and spend time with family and
                fellow believers. <a href="/about/beliefs" className="text-primary hover:underline">Learn more about our beliefs</a>.
              </p>
            </Card>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
