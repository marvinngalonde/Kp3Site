import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, DollarSign, Building, Users, Gift, BookOpen } from "lucide-react"

export default function GivePage() {
  const givingOptions = [
    {
      icon: Heart,
      title: "Tithes",
      description: "Return a faithful tenth of your income to God's storehouse",
      verse: "Malachi 3:10"
    },
    {
      icon: Gift,
      title: "Offerings",
      description: "Free-will offerings to support church ministries and mission work",
      verse: "2 Corinthians 9:7"
    },
    {
      icon: Building,
      title: "Building Fund",
      description: "Support our church facilities and infrastructure projects",
      verse: "1 Chronicles 29:14"
    },
    {
      icon: Users,
      title: "Community Service",
      description: "Help us serve those in need through our outreach programs",
      verse: "Matthew 25:40"
    }
  ]

  const methods = [
    {
      title: "In-Person",
      description: "Give during Sabbath services using offering envelopes",
      instructions: ["Fill out an offering envelope", "Place your gift in the offering plate", "Keep the receipt for your records"]
    },
    {
      title: "Bank Transfer",
      description: "Direct bank deposit or electronic transfer",
      instructions: [
        "Bank: [Bank Name]",
        "Account Name: Kp3 SDA Church",
        "Account Number: [To Be Updated]",
        "Reference: Your name + purpose"
      ]
    },
    {
      title: "Mobile Money",
      description: "Give using EcoCash, OneMoney, or Telecash",
      instructions: [
        "EcoCash: [Number TBA]",
        "OneMoney: [Number TBA]",
        "Telecash: [Number TBA]",
        "Reference: Your name"
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
            <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">Give</h1>
            <p className="mx-auto max-w-2xl text-lg text-white/90">
              Support God's work through faithful stewardship
            </p>
          </div>
        </div>
      </div>

      <main className="bg-gradient-to-b from-stone-50 via-white to-stone-100 py-16 lg:mr-40">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <section className="mb-12">
              <Card className="p-8 bg-primary/5">
                <h2 className="text-2xl font-semibold mb-4">Why We Give</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Giving is an act of worship and a response to God's blessings. Through tithes and offerings,
                  we acknowledge that everything we have comes from God, and we return a portion to support His
                  work on earth.
                </p>
                <p className="text-muted-foreground">
                  "Bring the whole tithe into the storehouse, that there may be food in my house. Test me in
                  this," says the LORD Almighty, "and see if I will not throw open the floodgates of heaven and
                  pour out so much blessing that there will not be room enough to store it." - Malachi 3:10
                </p>
              </Card>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-semibold mb-8">Ways to Give</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {givingOptions.map((option, index) => {
                  const Icon = option.icon
                  return (
                    <Card key={index} className="p-6 text-center">
                      <Icon className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-2">{option.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{option.description}</p>
                      <p className="text-xs text-primary italic">{option.verse}</p>
                    </Card>
                  )
                })}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-semibold mb-8">How to Give</h2>
              <div className="grid gap-6 md:grid-cols-3">
                {methods.map((method, index) => (
                  <Card key={index} className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{method.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{method.description}</p>
                    <ul className="space-y-2">
                      {method.instructions.map((instruction, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{instruction}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <Card className="p-8">
                <div className="flex items-start gap-6">
                  <BookOpen className="h-12 w-12 text-primary flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-semibold mb-4">Understanding Tithes and Offerings</h2>
                    <div className="space-y-4 text-muted-foreground">
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Tithe (10%)</h3>
                        <p>
                          The tithe is one-tenth of your income returned to God. It's used to support pastoral
                          ministry, evangelism, and the spreading of the gospel worldwide. Tithe is holy and
                          belongs to God (Leviticus 27:30).
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Offerings</h3>
                        <p>
                          Offerings are freewill gifts given over and above tithe. They support local church
                          operations, community service, building projects, and special mission initiatives.
                          God loves a cheerful giver (2 Corinthians 9:7).
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-semibold mb-6">Where Your Gifts Go</h2>
              <div className="grid gap-6 md:grid-cols-2">
                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Local Church Ministry</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Worship services and programs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Children and youth ministries</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Church maintenance and utilities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Community outreach programs</span>
                    </li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Global Mission</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Evangelism and church planting</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Adventist education and schools</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Healthcare and humanitarian aid</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Global church administration</span>
                    </li>
                  </ul>
                </Card>
              </div>
            </section>

            <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 rounded-lg text-center">
              <h2 className="text-2xl font-semibold mb-4">Have Questions About Giving?</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Our church treasurer and pastoral team are happy to answer any questions you have about
                stewardship, tithes, offerings, or financial planning from a biblical perspective.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">Contact Treasurer</Button>
                <Button size="lg" variant="outline">Learn More About Stewardship</Button>
              </div>
            </div>

            <div className="mt-8 p-4 bg-muted/50 rounded-lg border border-border">
              <p className="text-sm text-muted-foreground italic">
                Note: Payment details are placeholder information. Please contact the church office for current
                banking and mobile money details.
              </p>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
