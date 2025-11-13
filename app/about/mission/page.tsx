import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { RightSidebar } from "@/components/right-sidebar"
import { Card } from "@/components/ui/card"
import { Heart, BookOpen, Users, Globe, HandHeart, Sparkles } from "lucide-react"

export default function MissionPage() {
  const values = [
    {
      icon: Heart,
      title: "Love and Compassion",
      description: "We demonstrate Christ's love through compassionate service to our members and community, showing care for physical, emotional, and spiritual needs."
    },
    {
      icon: BookOpen,
      title: "Biblical Truth",
      description: "We uphold the Bible as our foundation, teaching sound doctrine and helping people understand God's Word for their daily lives."
    },
    {
      icon: Users,
      title: "Community",
      description: "We foster a warm, welcoming community where every person is valued, supported, and encouraged to grow in their faith journey."
    },
    {
      icon: Globe,
      title: "Global Mission",
      description: "We participate in the worldwide Adventist mission, supporting evangelism and humanitarian work across Zimbabwe and beyond."
    },
    {
      icon: HandHeart,
      title: "Holistic Ministry",
      description: "We care for the whole person - body, mind, and spirit - through health education, community service, and spiritual nurture."
    },
    {
      icon: Sparkles,
      title: "Excellence",
      description: "We strive for excellence in all we do, offering our best to God and serving our community with integrity and quality."
    }
  ]

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="lg:pr-44">
        <div className="container mx-auto px-4 py-12">
          <div className="mx-auto max-w-6xl">
            <h1 className="text-4xl font-bold mb-6">Our Mission & Vision</h1>

            <section className="mb-12">
              <div className="bg-primary/5 p-8 rounded-lg mb-8">
                <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To make disciples of Jesus Christ who live as His loving witnesses and proclaim to all people
                  the everlasting gospel of the three angels' messages in preparation for His soon return, while
                  serving our community in Kuwadzan Phase 3 and Harare with compassion and excellence.
                </p>
              </div>

              <div className="bg-accent/10 p-8 rounded-lg">
                <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To be a vibrant, Christ-centered church that transforms lives, strengthens families, and impacts
                  our community through biblical teaching, compassionate service, and authentic worship, preparing
                  believers for eternal life with Jesus.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-semibold mb-8">Our Core Values</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {values.map((value, index) => {
                  const Icon = value.icon
                  return (
                    <Card key={index} className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                          <p className="text-sm text-muted-foreground">{value.description}</p>
                        </div>
                      </div>
                    </Card>
                  )
                })}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-semibold mb-6">Our Strategic Focus</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-xl font-semibold mb-2">Spiritual Growth</h3>
                  <p className="text-muted-foreground">
                    Helping members develop a deep, personal relationship with Jesus Christ through Bible study,
                    prayer, worship, and small group fellowship.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-xl font-semibold mb-2">Family Ministry</h3>
                  <p className="text-muted-foreground">
                    Strengthening families through biblical teaching, counseling, and support programs that help
                    parents raise children with strong Christian values.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-xl font-semibold mb-2">Youth Empowerment</h3>
                  <p className="text-muted-foreground">
                    Investing in the next generation through dynamic youth programs, mentorship, education support,
                    and opportunities for service and leadership.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-xl font-semibold mb-2">Community Impact</h3>
                  <p className="text-muted-foreground">
                    Serving our neighborhood through health education, community development projects, relief work,
                    and addressing social needs in Kuwadzan and greater Harare.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-xl font-semibold mb-2">Evangelism and Outreach</h3>
                  <p className="text-muted-foreground">
                    Actively sharing the gospel through public evangelism, personal witnessing, literature
                    distribution, and digital media to reach people for Christ.
                  </p>
                </div>
              </div>
            </section>

            <div className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Join Us in Our Mission</h2>
              <p className="text-muted-foreground mb-4">
                We believe that every member has a role to play in fulfilling our mission. Whether through
                teaching, serving, giving, or praying, you can make a difference in advancing God's kingdom
                in Harare and beyond.
              </p>
              <p className="text-muted-foreground">
                Together, we are working to share hope, restore lives, and prepare people for the glorious
                return of our Lord and Savior, Jesus Christ.
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
