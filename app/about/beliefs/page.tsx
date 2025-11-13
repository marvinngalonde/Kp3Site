import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { RightSidebar } from "@/components/right-sidebar"
import { Card } from "@/components/ui/card"

export default function BeliefsPage() {
  const beliefs = [
    {
      title: "The Holy Scriptures",
      description: "We believe the Bible is the inspired Word of God, the infallible revelation of His will, and the standard of character, the test of experience, the authoritative revealer of doctrines."
    },
    {
      title: "The Trinity",
      description: "There is one God: Father, Son, and Holy Spirit, a unity of three co-eternal Persons. God is immortal, all-powerful, all-knowing, above all, and ever present."
    },
    {
      title: "The Sabbath",
      description: "The seventh day of the week is the Sabbath, a day of rest and worship instituted at creation and reaffirmed in the Ten Commandments. From Friday sunset to Saturday sunset, we gather for worship and fellowship."
    },
    {
      title: "Second Coming of Christ",
      description: "We believe in the personal, visible, and glorious return of Jesus Christ. This blessed hope is the grand climax of the gospel and a source of comfort and inspiration for believers."
    },
    {
      title: "Salvation",
      description: "Salvation is by grace through faith in Jesus Christ alone. Through Christ's life, death, and resurrection, all who believe can be saved and have eternal life."
    },
    {
      title: "Stewardship",
      description: "We are God's stewards, entrusted by Him with time, talents, and possessions. We acknowledge God's ownership through faithful service and by returning tithes and giving offerings."
    },
    {
      title: "Christian Lifestyle",
      description: "We are called to be a godly people who think, feel, and act in harmony with biblical principles. This includes caring for our bodies through healthful living and abstaining from harmful substances."
    },
    {
      title: "Baptism",
      description: "By baptism we confess our faith in the death and resurrection of Jesus Christ and testify of our death to sin and of our purpose to walk in newness of life through immersion in water."
    },
    {
      title: "The Great Commission",
      description: "We are called to share the everlasting gospel with all people, making disciples of all nations, and proclaiming God's love and the hope of salvation through Jesus Christ."
    }
  ]

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="lg:pr-44">
        <div className="container mx-auto px-4 py-12">
          <div className="mx-auto max-w-6xl">
            <h1 className="text-4xl font-bold mb-6">What We Believe</h1>
            <p className="text-xl text-muted-foreground mb-12">
              The Seventh-day Adventist Church has 28 fundamental beliefs. Here are some of the core principles
              that guide our faith and practice:
            </p>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {beliefs.map((belief, index) => (
                <Card key={index} className="p-6">
                  <h3 className="text-lg font-semibold mb-3">{belief.title}</h3>
                  <p className="text-sm text-muted-foreground">{belief.description}</p>
                </Card>
              ))}
            </div>

            <div className="mt-12 p-6 bg-primary/5 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Learn More</h2>
              <p className="text-muted-foreground mb-4">
                These represent just a portion of our 28 fundamental beliefs. For a complete statement of our
                doctrinal beliefs, we invite you to visit the official Seventh-day Adventist Church website or
                speak with one of our pastors.
              </p>
              <p className="text-muted-foreground">
                All our beliefs are founded on Scripture and centered on Jesus Christ, His life, death,
                resurrection, and ministry in heaven.
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
