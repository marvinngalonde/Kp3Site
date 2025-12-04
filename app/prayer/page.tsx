import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Heart, Users, Clock, Send } from "lucide-react"

export default function PrayerPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Background */}
      <div className="relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/kidwork.png')" }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10">
          <SiteHeader />
          <div className="container mx-auto px-4 py-24 text-center lg:mr-40">
            <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">Prayer Requests</h1>
            <p className="mx-auto max-w-2xl text-lg text-white/90">
              We believe in the power of prayer and are here to pray with you
            </p>
          </div>
        </div>
      </div>

      <main className="bg-gradient-to-b from-stone-50 via-white to-stone-100 py-16 lg:mr-40">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <Card className="p-8 mb-12 bg-primary/5">
              <h2 className="text-2xl font-semibold mb-4">The Power of Prayer</h2>
              <p className="text-lg text-muted-foreground mb-4">
                "The prayer of a righteous person is powerful and effective." - James 5:16
              </p>
              <p className="text-muted-foreground">
                At Kp3 SDA Church, we believe that prayer changes things. Our prayer team is committed to
                lifting up your requests to God. Whether you're facing challenges, celebrating victories, or
                simply need someone to pray with you, we're here for you.
              </p>
            </Card>

            <div className="grid gap-8 lg:grid-cols-2 mb-12">
              {/* Prayer Request Form */}
              <Card className="p-8">
                <h2 className="text-2xl font-semibold mb-6">Submit a Prayer Request</h2>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Your Name</label>
                    <Input placeholder="Your name (optional)" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input type="email" placeholder="your.email@example.com (optional)" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Prayer Request Type</label>
                    <select className="w-full px-4 py-2 border rounded-lg">
                      <option>Personal Health</option>
                      <option>Family</option>
                      <option>Financial</option>
                      <option>Spiritual Growth</option>
                      <option>Guidance/Decision</option>
                      <option>Praise/Thanksgiving</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Your Prayer Request</label>
                    <textarea
                      className="w-full px-4 py-2 border rounded-lg min-h-[150px]"
                      placeholder="Share your prayer request..."
                    />
                  </div>

                  <div className="flex items-start gap-2">
                    <input type="checkbox" id="confidential" className="mt-1" />
                    <label htmlFor="confidential" className="text-sm text-muted-foreground">
                      Keep this request confidential (only pastoral team will see it)
                    </label>
                  </div>

                  <Button size="lg" className="w-full">
                    <Send className="mr-2 h-4 w-4" />
                    Submit Prayer Request
                  </Button>
                </form>

                <p className="text-xs text-muted-foreground mt-4">
                  By submitting this request, you agree to allow our prayer team to pray for your need.
                  Confidential requests will only be shared with pastoral staff.
                </p>
              </Card>

              {/* Prayer Ministry Info */}
              <div className="space-y-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Heart className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Prayer Team</h3>
                      <p className="text-sm text-muted-foreground">
                        Our dedicated prayer team meets regularly to pray for all submitted requests. Your
                        needs are important to us and to God.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Prayer Meeting</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Join us for our weekly prayer meeting where we pray together for church members,
                        community needs, and global concerns.
                      </p>
                      <p className="text-sm font-medium text-primary">Wednesdays, 6:00 PM</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">24/7 Prayer Line</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        For urgent prayer needs, you can call our prayer line anytime, day or night. Leave a
                        message and someone will pray with you.
                      </p>
                      <p className="text-sm font-medium text-primary">+263 [To Be Updated]</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-primary/5">
                  <h3 className="font-semibold mb-3">Answered Prayers</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    We love celebrating how God answers prayer! If you've experienced an answer to prayer,
                    we'd love to hear your testimony.
                  </p>
                  <Button variant="outline" className="w-full">Share Your Testimony</Button>
                </Card>
              </div>
            </div>

            <section className="mb-12">
              <h2 className="text-3xl font-semibold mb-6">Prayer Resources</h2>
              <div className="grid gap-6 md:grid-cols-3">
                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-3">Prayer Guide</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Download our prayer guide with biblical prayers and devotional thoughts
                  </p>
                  <Button variant="outline" size="sm">Download PDF</Button>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-3">Prayer Chain</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Join our prayer chain to receive and pray for urgent requests
                  </p>
                  <Button variant="outline" size="sm">Join Prayer Chain</Button>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-3">Prayer Ministry</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Become part of our prayer team and serve others through intercessory prayer
                  </p>
                  <Button variant="outline" size="sm">Get Involved</Button>
                </Card>
              </div>
            </section>

            <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 rounded-lg text-center">
              <h2 className="text-2xl font-semibold mb-4">Let Us Pray for You</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                "Do not be anxious about anything, but in every situation, by prayer and petition, with
                thanksgiving, present your requests to God." - Philippians 4:6
              </p>
              <p className="text-muted-foreground">
                No request is too big or too small for God. We're honored to pray with you.
              </p>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
