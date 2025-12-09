import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, HandHeart, GraduationCap, ShoppingBag, Home, Users } from "lucide-react"

export default function CommunityServicePage() {
  const programs = [
    {
      icon: ShoppingBag,
      title: "Food Bank",
      description: "Providing food assistance to families in need within our community through regular food distributions.",
      impact: "50+ families served monthly"
    },
    {
      icon: GraduationCap,
      title: "Education Support",
      description: "School supplies, tutoring programs, and scholarships to help children and youth succeed academically.",
      impact: "100+ students supported"
    },
    {
      icon: Home,
      title: "Community Care",
      description: "Visiting the sick, elderly, and homebound members of our community, providing companionship and practical help.",
      impact: "Regular home visits"
    },
    {
      icon: Heart,
      title: "Disaster Relief",
      description: "Emergency assistance and support for community members affected by natural disasters or crises.",
      impact: "Rapid response team"
    },
    {
      icon: HandHeart,
      title: "Skills Training",
      description: "Vocational training workshops, job readiness programs, and life skills development for community empowerment.",
      impact: "Quarterly workshops"
    },
    {
      icon: Users,
      title: "Community Events",
      description: "Organizing community gatherings, health fairs, and family events to strengthen neighborhood bonds.",
      impact: "Monthly activities"
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
            <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">Community Service</h1>
            <p className="mx-auto max-w-2xl text-lg text-white/90">
              Serving our neighbors with Christ's love
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
                The Community Service Ministry at Kp3 SDA Church is committed to following Christ's example of
                compassionate service. We believe that faith without works is dead (James 2:26), and we actively
                demonstrate God's love through practical help to those in need.
              </p>
              <p className="text-lg text-muted-foreground">
                Our ministry reaches beyond church walls to serve the Kuwadzan Phase 3 community and greater
                Harare area, addressing physical, educational, and social needs while sharing the hope of the gospel.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-semibold mb-8">Our Service Programs</h2>
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
                      <p className="text-xs font-medium text-primary">{program.impact}</p>
                    </Card>
                  )
                })}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-semibold mb-6">Our Impact</h2>
              <div className="grid gap-6 md:grid-cols-3 mb-8">
                <Card className="p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">500+</div>
                  <p className="text-muted-foreground">People served monthly</p>
                </Card>
                <Card className="p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">1,200+</div>
                  <p className="text-muted-foreground">Volunteer hours annually</p>
                </Card>
                <Card className="p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">50+</div>
                  <p className="text-muted-foreground">Active volunteers</p>
                </Card>
              </div>
              <Card className="p-6 bg-primary/5">
                <p className="text-muted-foreground">
                  Through our community service programs, we've been able to make a tangible difference in the
                  lives of hundreds of families in Kuwadzan and surrounding areas. Our volunteers work tirelessly
                  to show Christ's love through practical action, building bridges of hope and demonstrating that
                  the church cares about both eternal and present needs.
                </p>
              </Card>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-semibold mb-6">Get Involved</h2>
              <div className="grid gap-6 md:grid-cols-2">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Volunteer Opportunities</h3>
                  <ul className="space-y-3 text-muted-foreground mb-6">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Help distribute food at our monthly food bank</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Tutor children in reading, math, or other subjects</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Visit homebound members and provide companionship</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Assist with community events and health fairs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Teach job skills or life skills workshops</span>
                    </li>
                  </ul>
                  <Button size="lg">Become a Volunteer</Button>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Ways to Give</h3>
                  <ul className="space-y-3 text-muted-foreground mb-6">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Donate non-perishable food items</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Provide school supplies and educational materials</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Contribute clothing and household items</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Financial donations for program support</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Sponsor a child's education</span>
                    </li>
                  </ul>
                  <Button size="lg" variant="outline">Make a Donation</Button>
                </Card>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-semibold mb-6">Request Assistance</h2>
              <Card className="p-6">
                <p className="text-muted-foreground mb-4">
                  If you or someone you know needs assistance, we're here to help. Our Community Service Ministry
                  provides support based on available resources and assessed needs. All requests are handled with
                  confidentiality and dignity.
                </p>
                <p className="text-muted-foreground mb-6">
                  Services are available to community members regardless of religious affiliation. We serve because
                  we believe every person is created in God's image and deserves compassion and support.
                </p>
                <Button size="lg">Request Help</Button>
              </Card>
            </section>

            <div className="bg-primary/5 p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Be the Hands and Feet of Jesus</h2>
              <p className="text-muted-foreground mb-4">
                "For I was hungry and you gave me something to eat, I was thirsty and you gave me something to
                drink, I was a stranger and you invited me in." - Matthew 25:35
              </p>
              <p className="text-muted-foreground mb-6">
                Join us in making a difference in our community. Whether you can give your time, resources, or
                talents, every contribution helps us serve those in need and demonstrate Christ's love in practical
                ways.
              </p>
              <Button size="lg">Contact Community Service</Button>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
