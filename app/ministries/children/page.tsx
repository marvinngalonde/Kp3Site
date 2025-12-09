import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Baby, School, Heart, Sparkles, BookHeart, Users2 } from "lucide-react"

export default function ChildrenMinistryPage() {
  const programs = [
    {
      icon: Baby,
      title: "Cradle Roll (0-3 years)",
      description: "A nurturing environment for our youngest members with age-appropriate Bible stories and activities.",
      ageGroup: "Birth - 3 years"
    },
    {
      icon: School,
      title: "Kindergarten (4-6 years)",
      description: "Fun, interactive Sabbath School lessons that introduce children to God's love and biblical principles.",
      ageGroup: "4-6 years"
    },
    {
      icon: BookHeart,
      title: "Primary (7-9 years)",
      description: "Engaging Bible studies and activities that help children develop a personal relationship with Jesus.",
      ageGroup: "7-9 years"
    },
    {
      icon: Users2,
      title: "Juniors (10-12 years)",
      description: "Dynamic lessons and group activities that encourage spiritual growth and Christian character development.",
      ageGroup: "10-12 years"
    },
    {
      icon: Sparkles,
      title: "Vacation Bible School",
      description: "Annual week-long program featuring Bible stories, crafts, games, and music for children of all ages.",
      ageGroup: "All ages"
    },
    {
      icon: Heart,
      title: "Children's Choir",
      description: "Weekly practice where children learn to worship God through song and perform during church services.",
      ageGroup: "5-12 years"
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
            <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">Children's Ministry</h1>
            <p className="mx-auto max-w-2xl text-lg text-white/90">
              Nurturing young hearts to know and love Jesus
            </p>
          </div>
        </div>
      </div>

      <main className="bg-gradient-to-b from-stone-50 via-white to-stone-100 py-16 lg:mr-40">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <section className="mb-12">
              <h2 className="text-3xl font-semibold mb-6">Welcome to Children's Ministry</h2>
              <p className="text-lg text-muted-foreground mb-4">
                At Kp3 SDA Church, we believe that children are a precious gift from God. Our Children's Ministry
                is committed to providing a safe, loving, and engaging environment where children can learn about
                Jesus, develop Christian values, and grow in their faith.
              </p>
              <p className="text-lg text-muted-foreground">
                Through age-appropriate programs, caring teachers, and fun activities, we help children build a
                strong foundation for a lifelong relationship with God.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-semibold mb-8">Age-Level Programs</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {programs.map((program, index) => {
                  const Icon = program.icon
                  return (
                    <Card key={index} className="p-6">
                      <div className="mb-4">
                        <Icon className="h-10 w-10 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{program.title}</h3>
                      <p className="text-xs font-medium text-primary mb-3">{program.ageGroup}</p>
                      <p className="text-sm text-muted-foreground">{program.description}</p>
                    </Card>
                  )
                })}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-semibold mb-6">Schedule</h2>
              <div className="grid gap-6 md:grid-cols-2">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Sabbath Morning</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Children's Sabbath School</span>
                      <span className="font-medium">9:30 AM - 10:30 AM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Children's Story Time</span>
                      <span className="font-medium">11:00 AM</span>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Weekly Activities</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Children's Choir Practice</span>
                      <span className="font-medium">Fridays, 4:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Bible Club</span>
                      <span className="font-medium">Sundays, 2:00 PM</span>
                    </div>
                  </div>
                </Card>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-semibold mb-6">Safety & Security</h2>
              <Card className="p-6">
                <p className="text-muted-foreground mb-4">
                  Your child's safety is our top priority. All children's ministry volunteers undergo background
                  checks and training. We maintain secure check-in/check-out procedures and maintain appropriate
                  child-to-teacher ratios for all age groups.
                </p>
                <p className="text-muted-foreground">
                  Our facilities are regularly inspected and equipped with age-appropriate toys, materials, and
                  safety features to provide a secure environment for your children.
                </p>
              </Card>
            </section>

            <div className="bg-primary/5 p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Get Your Children Involved</h2>
              <p className="text-muted-foreground mb-6">
                We invite you to bring your children to experience the love of Jesus in a fun, engaging
                environment. Whether it's Sabbath School, Vacation Bible School, or our children's choir, there's
                a place for every child to grow in faith.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg">Register Your Child</Button>
                <Button size="lg" variant="outline">Volunteer to Serve</Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
