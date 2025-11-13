import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { RightSidebar } from "@/components/right-sidebar"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, FileText, Newspaper, Download } from "lucide-react"

export default function PublicationsPage() {
  const publications = [
    {
      icon: Newspaper,
      title: "Church Newsletter",
      description: "Monthly newsletter with church news, upcoming events, and inspirational articles",
      frequency: "Monthly",
      format: "PDF"
    },
    {
      icon: BookOpen,
      title: "Sabbath School Lessons",
      description: "Quarterly Bible study guides for adults, youth, and children",
      frequency: "Quarterly",
      format: "Print & Digital"
    },
    {
      icon: FileText,
      title: "Ministry Reports",
      description: "Annual reports on church activities, ministries, and financial stewardship",
      frequency: "Annually",
      format: "PDF"
    }
  ]

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="lg:pr-44">
        <div className="bg-gradient-to-br from-primary/10 to-accent/10 py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="text-4xl font-bold mb-4">Publications</h1>
              <p className="text-xl text-muted-foreground">
                Stay informed with our church publications and resources
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="mx-auto max-w-6xl">
            <section className="mb-12">
              <h2 className="text-3xl font-semibold mb-8">Our Publications</h2>
              <div className="grid gap-6 md:grid-cols-3">
                {publications.map((pub, index) => {
                  const Icon = pub.icon
                  return (
                    <Card key={index} className="p-6">
                      <Icon className="h-12 w-12 text-primary mb-4" />
                      <h3 className="text-lg font-semibold mb-2">{pub.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{pub.description}</p>
                      <div className="flex justify-between items-center text-sm mb-4">
                        <span className="text-primary">{pub.frequency}</span>
                        <span className="text-muted-foreground">{pub.format}</span>
                      </div>
                      <Button className="w-full">
                        <Download className="h-4 w-4 mr-2" />
                        Download Latest
                      </Button>
                    </Card>
                  )
                })}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-semibold mb-6">Latest Newsletter</h2>
              <Card className="p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3 bg-muted rounded-lg flex items-center justify-center p-8">
                    <Newspaper className="h-32 w-32 text-primary" />
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-2xl font-semibold mb-3">January 2025 Newsletter</h3>
                    <p className="text-muted-foreground mb-6">
                      This month's edition features New Year messages from our pastoral team, updates on our
                      community service initiatives, upcoming events calendar, and inspiring testimonies from
                      church members.
                    </p>
                    <Button size="lg">
                      <Download className="h-4 w-4 mr-2" />
                      Download PDF
                    </Button>
                  </div>
                </div>
              </Card>
            </section>

            <div className="bg-primary/5 p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Subscribe to Our Publications</h2>
              <p className="text-muted-foreground mb-6">
                Receive our newsletter and publications directly to your email. Stay connected with church
                activities, spiritual resources, and community updates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 border rounded-lg"
                />
                <Button size="lg">Subscribe</Button>
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
