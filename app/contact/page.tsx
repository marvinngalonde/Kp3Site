import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { RightSidebar } from "@/components/right-sidebar"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="lg:pr-44">
        <div className="bg-gradient-to-br from-primary/10 to-accent/10 py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
              <p className="text-xl text-muted-foreground">
                We'd love to hear from you - get in touch with us
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-8 lg:grid-cols-2 mb-12">
              {/* Contact Form */}
              <Card className="p-8">
                <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
                <form className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-sm font-medium mb-2">First Name</label>
                      <Input placeholder="John" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Last Name</label>
                      <Input placeholder="Doe" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input type="email" placeholder="john.doe@example.com" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Phone (Optional)</label>
                    <Input type="tel" placeholder="+263..." />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Subject</label>
                    <select className="w-full px-4 py-2 border rounded-lg">
                      <option>General Inquiry</option>
                      <option>Prayer Request</option>
                      <option>Bible Study Request</option>
                      <option>Ministry Information</option>
                      <option>Event Information</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                      className="w-full px-4 py-2 border rounded-lg min-h-[150px]"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <Button size="lg" className="w-full">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </Card>

              {/* Contact Information */}
              <div className="space-y-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Address</h3>
                      <p className="text-muted-foreground">
                        Kuwadzan Phase 3<br />
                        Harare, Zimbabwe
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Phone</h3>
                      <p className="text-muted-foreground">
                        Church Office: +263 [To Be Updated]<br />
                        Pastor: +263 [To Be Updated]
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Email</h3>
                      <p className="text-muted-foreground">
                        General: info@kp3sda.org<br />
                        Pastor: pastor@kp3sda.org
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Office Hours</h3>
                      <div className="text-muted-foreground space-y-1">
                        <p>Monday - Thursday: 9:00 AM - 5:00 PM</p>
                        <p>Friday: 9:00 AM - 2:00 PM</p>
                        <p>Saturday & Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Map Section */}
            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-6">Find Us</h2>
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <MapPin className="h-16 w-16 mx-auto mb-4" />
                  <p>Map integration coming soon</p>
                  <p className="text-sm">Kuwadzan Phase 3, Harare, Zimbabwe</p>
                </div>
              </div>
              <div className="mt-6">
                <Button variant="outline" size="lg">Get Directions</Button>
              </div>
            </Card>

            <div className="mt-12 bg-primary/5 p-8 rounded-lg text-center">
              <h2 className="text-2xl font-semibold mb-4">Visit Us This Sabbath</h2>
              <p className="text-muted-foreground mb-6">
                You're warmly invited to join us for worship every Saturday. Our friendly congregation would
                love to meet you and worship together!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">View Worship Times</Button>
                <Button size="lg" variant="outline">Plan Your Visit</Button>
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
