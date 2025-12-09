import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Music, Mic2, Piano, Users, Calendar, Heart } from "lucide-react"

export default function MusicMinistryPage() {
  const groups = [
    {
      icon: Users,
      title: "Adult Choir",
      description: "Our main church choir that leads worship during Sabbath services with traditional hymns and contemporary Christian music.",
      schedule: "Thursdays, 6:00 PM"
    },
    {
      icon: Music,
      title: "Youth Choir",
      description: "A vibrant group of young voices singing contemporary worship and gospel music.",
      schedule: "Wednesdays, 5:00 PM"
    },
    {
      icon: Heart,
      title: "Children's Choir",
      description: "Teaching children to worship through song with age-appropriate Christian music.",
      schedule: "Fridays, 4:00 PM"
    },
    {
      icon: Mic2,
      title: "Praise Team",
      description: "Contemporary worship team leading opening songs and special music for church services.",
      schedule: "Tuesdays, 5:30 PM"
    },
    {
      icon: Piano,
      title: "Instrumentalists",
      description: "Musicians playing piano, guitar, drums, and other instruments to enhance our worship experience.",
      schedule: "By arrangement"
    },
    {
      icon: Calendar,
      title: "Special Performances",
      description: "Quarterly concerts, musical programs, and special presentations for church and community events.",
      schedule: "Quarterly events"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background */}
      <div className="relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/kidwork.png')" }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10">
          <SiteHeader />
          <div className="container mx-auto px-4 py-24 text-center lg:mr-40">
            <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">Music Ministry</h1>
            <p className="mx-auto max-w-2xl text-lg text-white/90">
              Making melody in our hearts to the Lord
            </p>
          </div>
        </div>
      </div>

      <main className="bg-gradient-to-b from-stone-50 via-white to-stone-100 py-16 lg:mr-40">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <section className="mb-12">
              <h2 className="text-3xl font-semibold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-4">
                The Music Ministry at Kp3 SDA Church exists to glorify God through song and instrumental music,
                enhance the worship experience, and use our musical gifts to minister to the congregation and
                community.
              </p>
              <p className="text-lg text-muted-foreground">
                We believe that music is a powerful tool for worship, evangelism, and spiritual encouragement.
                Our ministry welcomes singers and musicians of all skill levels who have a heart for worship.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-semibold mb-8">Our Music Groups</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {groups.map((group, index) => {
                  const Icon = group.icon
                  return (
                    <Card key={index} className="p-6">
                      <div className="mb-4">
                        <Icon className="h-10 w-10 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{group.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{group.description}</p>
                      <p className="text-xs font-medium text-primary">{group.schedule}</p>
                    </Card>
                  )
                })}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-semibold mb-6">Join Our Music Ministry</h2>
              <div className="grid gap-6 md:grid-cols-2">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-4">For Singers</h3>
                  <p className="text-muted-foreground mb-4">
                    Whether you're a soprano, alto, tenor, or bass, we have a place for you in one of our choirs.
                    No audition required - just a heart for worship!
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                    <li>• Weekly rehearsals</li>
                    <li>• Voice training opportunities</li>
                    <li>• Performance opportunities</li>
                    <li>• Fellowship and spiritual growth</li>
                  </ul>
                  <Button>Join a Choir</Button>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-4">For Musicians</h3>
                  <p className="text-muted-foreground mb-4">
                    If you play an instrument, we'd love to have you participate in our worship services and
                    special programs. All instruments are welcome!
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                    <li>• Piano/Keyboard</li>
                    <li>• Guitar (acoustic/electric)</li>
                    <li>• Drums and percussion</li>
                    <li>• Brass, woodwind, strings</li>
                  </ul>
                  <Button>Become a Musician</Button>
                </Card>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-semibold mb-6">Upcoming Performances</h2>
              <div className="space-y-4">
                <Card className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Christmas Cantata</h3>
                      <p className="text-muted-foreground">Annual Christmas musical presentation featuring all choirs</p>
                      <p className="text-sm text-primary mt-2">Date: December 2025</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Spring Concert</h3>
                      <p className="text-muted-foreground">An evening of praise featuring diverse musical styles</p>
                      <p className="text-sm text-primary mt-2">Date: To be announced</p>
                    </div>
                  </div>
                </Card>
              </div>
            </section>

            <div className="bg-primary/5 p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Share Your Musical Gifts</h2>
              <p className="text-muted-foreground mb-4">
                "Sing to the Lord a new song; sing to the Lord, all the earth." - Psalm 96:1
              </p>
              <p className="text-muted-foreground mb-6">
                Whether you're an experienced musician or just beginning, we invite you to use your musical
                talents to glorify God and bless our congregation. Contact our Music Director to get started!
              </p>
              <Button size="lg">Contact Music Director</Button>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
