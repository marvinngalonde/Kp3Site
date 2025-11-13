import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { RightSidebar } from "@/components/right-sidebar"
import { Card } from "@/components/ui/card"
import { Mail, Phone } from "lucide-react"

export default function LeadershipPage() {
  const leaders = [
    {
      name: "Pastor [To Be Updated]",
      role: "Senior Pastor",
      description: "Our Senior Pastor provides spiritual leadership and guidance to our congregation, overseeing the spiritual health and direction of our church.",
      email: "pastor@kp3sda.org",
      phone: "+263 [To Be Updated]"
    },
    {
      name: "[To Be Updated]",
      role: "Associate Pastor",
      description: "Supporting the senior pastor in ministry, our Associate Pastor focuses on youth ministry, evangelism, and community outreach programs.",
      email: "associate@kp3sda.org"
    },
    {
      name: "[To Be Updated]",
      role: "Head Elder",
      description: "The Head Elder assists in spiritual leadership, coordinates worship services, and provides pastoral care to church members.",
      email: "elders@kp3sda.org"
    },
    {
      name: "[To Be Updated]",
      role: "Church Clerk",
      description: "Responsible for maintaining church records, membership records, and official church documentation.",
      email: "clerk@kp3sda.org"
    },
    {
      name: "[To Be Updated]",
      role: "Treasurer",
      description: "Manages church finances, ensures proper stewardship of tithes and offerings, and maintains financial records.",
      email: "treasurer@kp3sda.org"
    },
    {
      name: "[To Be Updated]",
      role: "Deaconess Leader",
      description: "Coordinates the deaconess team in serving the church through hospitality, care for the sick, and support for church services.",
      email: "deaconess@kp3sda.org"
    }
  ]

  const departments = [
    "Youth Ministry",
    "Children's Ministry",
    "Music Ministry",
    "Health Ministry",
    "Community Service",
    "Sabbath School",
    "Personal Ministries",
    "Women's Ministries",
    "Men's Ministry",
    "Education Department"
  ]

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="lg:pr-44">
        <div className="container mx-auto px-4 py-12">
          <div className="mx-auto max-w-6xl">
            <h1 className="text-4xl font-bold mb-6">Leadership Team</h1>
            <p className="text-xl text-muted-foreground mb-12">
              Meet the dedicated leaders who guide and serve our church community with passion and commitment.
            </p>

            <section className="mb-16">
              <h2 className="text-3xl font-semibold mb-8">Church Officers</h2>
              <div className="grid gap-6 md:grid-cols-2">
                {leaders.map((leader, index) => (
                  <Card key={index} className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{leader.name}</h3>
                    <p className="text-primary font-medium mb-4">{leader.role}</p>
                    <p className="text-sm text-muted-foreground mb-4">{leader.description}</p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Mail className="h-4 w-4" />
                        <a href={`mailto:${leader.email}`} className="hover:text-primary transition-colors">
                          {leader.email}
                        </a>
                      </div>
                      {leader.phone && (
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Phone className="h-4 w-4" />
                          <a href={`tel:${leader.phone}`} className="hover:text-primary transition-colors">
                            {leader.phone}
                          </a>
                        </div>
                      )}
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-semibold mb-8">Ministry Departments</h2>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {departments.map((dept, index) => (
                  <div key={index} className="p-4 bg-muted rounded-lg">
                    <p className="font-medium">{dept}</p>
                  </div>
                ))}
              </div>
            </section>

            <div className="p-6 bg-primary/5 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Serve with Us</h2>
              <p className="text-muted-foreground mb-4">
                At Kp3 SDA Church, we believe that every member has been gifted by God for service. If you feel
                called to serve in any capacity, we encourage you to speak with our pastoral team or department
                leaders.
              </p>
              <p className="text-muted-foreground">
                Together, we work to fulfill our mission of sharing God's love and preparing people for the
                soon return of Jesus Christ.
              </p>
            </div>

            <div className="mt-8 p-4 bg-muted/50 rounded-lg border border-border">
              <p className="text-sm text-muted-foreground italic">
                Note: This page is currently displaying placeholder information. Please contact the church
                administrator to update leadership details with current information.
              </p>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
      <RightSidebar />
    </div>
  )
}
