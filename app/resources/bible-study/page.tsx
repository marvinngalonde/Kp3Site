import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Download, Users, Video } from "lucide-react"

export default function BibleStudyPage() {
  const studies = [
    {
      title: "Sabbath School Quarterly",
      description: "Current quarterly Bible study guide covering systematic doctrinal topics",
      format: "PDF Download",
      level: "All Ages"
    },
    {
      title: "Discover Bible Guides",
      description: "26-lesson correspondence course covering fundamental Bible teachings",
      format: "Online & Print",
      level: "Beginners"
    },
    {
      title: "Prophecy Series",
      description: "In-depth study of Daniel and Revelation prophetic books",
      format: "Video & Study Guide",
      level: "Intermediate"
    },
    {
      title: "Family Worship Resources",
      description: "Daily devotional materials and Bible study guides for families",
      format: "PDF & Audio",
      level: "Families"
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
            <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">Bible Study Materials</h1>
            <p className="mx-auto max-w-2xl text-lg text-white/90">
              Resources to help you grow in your understanding of God's Word
            </p>
          </div>
        </div>
      </div>

      <main className="bg-gradient-to-b from-stone-50 via-white to-stone-100 py-16 lg:mr-40">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <section className="mb-12">
              <h2 className="text-3xl font-semibold mb-8">Available Study Materials</h2>
              <div className="grid gap-6 md:grid-cols-2">
                {studies.map((study, index) => (
                  <Card key={index} className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{study.title}</h3>
                    <p className="text-muted-foreground mb-4">{study.description}</p>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-primary">{study.format}</span>
                      <span className="text-sm text-muted-foreground">{study.level}</span>
                    </div>
                    <Button className="w-full">
                      <Download className="h-4 w-4 mr-2" />
                      Access Study
                    </Button>
                  </Card>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-semibold mb-6">Bible Study Groups</h2>
              <div className="grid gap-6 md:grid-cols-3">
                <Card className="p-6 text-center">
                  <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Sabbath School</h3>
                  <p className="text-sm text-muted-foreground mb-4">Weekly group study every Sabbath morning</p>
                  <p className="text-primary font-medium">Saturdays, 9:30 AM</p>
                </Card>

                <Card className="p-6 text-center">
                  <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Midweek Study</h3>
                  <p className="text-sm text-muted-foreground mb-4">In-depth Bible study and prayer meeting</p>
                  <p className="text-primary font-medium">Wednesdays, 6:00 PM</p>
                </Card>

                <Card className="p-6 text-center">
                  <Video className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Online Studies</h3>
                  <p className="text-sm text-muted-foreground mb-4">Virtual Bible study via Zoom</p>
                  <p className="text-primary font-medium">Flexible times</p>
                </Card>
              </div>
            </section>

            <div className="bg-primary/5 p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Request a Free Bible Study</h2>
              <p className="text-muted-foreground mb-6">
                Would you like to study the Bible with a trained instructor? We offer free, personalized Bible
                studies in your home, online, or at the church. No obligation - just an opportunity to explore
                God's Word.
              </p>
              <Button size="lg">Request Bible Study</Button>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
