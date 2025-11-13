import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { RightSidebar } from "@/components/right-sidebar"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Users, Trophy, BookOpen, Music, MessageCircle } from "lucide-react"

export default function YouthMinistryPage() {
  const programs = [
    {
      icon: Calendar,
      title: "Weekly Youth Meetings",
      description: "Every Sabbath afternoon, we gather for engaging Bible studies, worship, and fellowship designed specifically for young people.",
      time: "Saturdays, 3:00 PM"
    },
    {
      icon: Users,
      title: "Pathfinders Club",
      description: "Our Pathfinder club teaches outdoor skills, community service, and spiritual development for ages 10-15.",
      time: "Sundays, 10:00 AM"
    },
    {
      icon: Trophy,
      title: "Sports & Recreation",
      description: "Regular sports activities, tournaments, and outdoor adventures that build character and Christian fellowship.",
      time: "Monthly Events"
    },
    {
      icon: BookOpen,
      title: "Leadership Training",
      description: "Equipping young people with leadership skills for church and community service through workshops and mentorship.",
      time: "Quarterly Programs"
    },
    {
      icon: Music,
      title: "Youth Choir & Band",
      description: "Express your worship through music! Join our youth choir or band and use your talents for God's glory.",
      time: "Wednesdays, 5:00 PM"
    },
    {
      icon: MessageCircle,
      title: "Prayer & Share Groups",
      description: "Small groups for deeper spiritual connection, prayer support, and discussing life's challenges in a safe environment.",
      time: "Flexible Schedule"
    }
  ]

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="lg:pr-44">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-primary/10 to-accent/10 py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="text-4xl font-bold mb-4">Youth Ministry</h1>
              <p className="text-xl text-muted-foreground">
                Empowering the next generation to live boldly for Christ
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="mx-auto max-w-6xl">
            <section className="mb-12">
              <h2 className="text-3xl font-semibold mb-6">About Our Youth Ministry</h2>
              <p className="text-lg text-muted-foreground mb-4">
                The Youth Ministry at Kp3 SDA Church is dedicated to helping young people develop a strong,
                personal relationship with Jesus Christ while building lasting friendships and discovering
                their unique purpose in God's plan.
              </p>
              <p className="text-lg text-muted-foreground">
                We provide a safe, supportive environment where teenagers and young adults can ask questions,
                explore their faith, and grow spiritually while having fun and making meaningful connections.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-semibold mb-8">Our Programs</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {programs.map((program, index) => {
                  const Icon = program.icon
                  return (
                    <Card key={index} className="p-6">
                      <div className="mb-4">
                        <Icon className="h-10 w-10 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{program.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{program.description}</p>
                      <p className="text-xs font-medium text-primary">{program.time}</p>
                    </Card>
                  )
                })}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-semibold mb-6">Upcoming Events</h2>
              <div className="space-y-4">
                <Card className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Youth Camp 2025</h3>
                      <p className="text-muted-foreground">Annual youth camp with worship, workshops, and outdoor activities</p>
                      <p className="text-sm text-primary mt-2">Date: To be announced</p>
                    </div>
                    <Button className="mt-4 md:mt-0">Register Now</Button>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Youth Evangelism Weekend</h3>
                      <p className="text-muted-foreground">Join us for a weekend of community outreach and sharing God's love</p>
                      <p className="text-sm text-primary mt-2">Date: To be announced</p>
                    </div>
                    <Button className="mt-4 md:mt-0">Learn More</Button>
                  </div>
                </Card>
              </div>
            </section>

            <div className="bg-primary/5 p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Get Involved</h2>
              <p className="text-muted-foreground mb-6">
                Whether you're a teenager, young adult, or interested in serving as a youth leader, there's a
                place for you in our Youth Ministry. We welcome everyone who wants to grow in faith and make a
                difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg">Join Youth Group</Button>
                <Button size="lg" variant="outline">Become a Leader</Button>
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
