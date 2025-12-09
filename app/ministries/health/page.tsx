import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Apple, Activity, Brain, Utensils, Stethoscope } from "lucide-react"

export default function HealthMinistryPage() {
  const programs = [
    {
      icon: Apple,
      title: "Nutrition Education",
      description: "Workshops on plant-based nutrition, healthy cooking demonstrations, and dietary counseling based on Adventist health principles.",
      frequency: "Monthly workshops"
    },
    {
      icon: Activity,
      title: "Fitness Programs",
      description: "Group exercise classes, walking clubs, and physical activity programs to promote active, healthy lifestyles.",
      frequency: "Weekly sessions"
    },
    {
      icon: Stethoscope,
      title: "Health Screenings",
      description: "Free health screenings including blood pressure checks, diabetes screening, and basic health assessments.",
      frequency: "Quarterly events"
    },
    {
      icon: Brain,
      title: "Mental Health Support",
      description: "Resources for stress management, emotional wellness, and counseling referrals in a faith-based context.",
      frequency: "Ongoing support"
    },
    {
      icon: Utensils,
      title: "Cooking Classes",
      description: "Hands-on vegetarian and vegan cooking classes teaching delicious, nutritious meal preparation.",
      frequency: "Bi-monthly classes"
    },
    {
      icon: Heart,
      title: "Lifestyle Medicine",
      description: "Education on the eight natural remedies: nutrition, exercise, water, sunshine, temperance, fresh air, rest, and trust in God.",
      frequency: "Regular seminars"
    }
  ]

  const principles = [
    {
      title: "Whole Person Wellness",
      description: "We believe in caring for the whole person - body, mind, and spirit - recognizing that physical health and spiritual health are interconnected."
    },
    {
      title: "Prevention Focus",
      description: "Emphasis on disease prevention through healthy lifestyle choices rather than just treating illness."
    },
    {
      title: "Plant-Based Nutrition",
      description: "Promoting the health benefits of a plant-based diet as outlined in Genesis 1:29 and supported by modern science."
    },
    {
      title: "Community Impact",
      description: "Extending health education and services beyond our church to benefit the entire Kuwadzan community."
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
            <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">Health Ministry</h1>
            <p className="mx-auto max-w-2xl text-lg text-white/90">
              Honoring God through healthy living
            </p>
          </div>
        </div>
      </div>

      <main className="bg-gradient-to-b from-stone-50 via-white to-stone-100 py-16 lg:mr-40">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <section className="mb-12">
              <h2 className="text-3xl font-semibold mb-6">Our Approach to Health</h2>
              <p className="text-lg text-muted-foreground mb-4">
                At Kp3 SDA Church, we believe that our bodies are temples of the Holy Spirit (1 Corinthians 6:19-20).
                Our Health Ministry is dedicated to helping people achieve optimal health through education,
                prevention, and lifestyle changes based on biblical principles and modern health science.
              </p>
              <p className="text-lg text-muted-foreground">
                The Seventh-day Adventist Church has a long heritage of health ministry, and Adventists worldwide
                are recognized for their longevity and quality of life due to healthy lifestyle practices.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-semibold mb-8">Our Programs & Services</h2>
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
                      <p className="text-xs font-medium text-primary">{program.frequency}</p>
                    </Card>
                  )
                })}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-semibold mb-6">Our Health Principles</h2>
              <div className="grid gap-6 md:grid-cols-2">
                {principles.map((principle, index) => (
                  <Card key={index} className="p-6">
                    <h3 className="text-lg font-semibold mb-3">{principle.title}</h3>
                    <p className="text-sm text-muted-foreground">{principle.description}</p>
                  </Card>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-semibold mb-6">The Eight Natural Remedies</h2>
              <Card className="p-6">
                <p className="text-muted-foreground mb-4">
                  The Adventist health message emphasizes eight natural remedies for optimal health, which can
                  be remembered by the acronym NEWSTART:
                </p>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  <div className="p-4 bg-primary/5 rounded-lg">
                    <h4 className="font-semibold mb-2">Nutrition</h4>
                    <p className="text-sm text-muted-foreground">Wholesome, plant-based diet</p>
                  </div>
                  <div className="p-4 bg-primary/5 rounded-lg">
                    <h4 className="font-semibold mb-2">Exercise</h4>
                    <p className="text-sm text-muted-foreground">Regular physical activity</p>
                  </div>
                  <div className="p-4 bg-primary/5 rounded-lg">
                    <h4 className="font-semibold mb-2">Water</h4>
                    <p className="text-sm text-muted-foreground">Adequate hydration</p>
                  </div>
                  <div className="p-4 bg-primary/5 rounded-lg">
                    <h4 className="font-semibold mb-2">Sunshine</h4>
                    <p className="text-sm text-muted-foreground">Moderate sun exposure</p>
                  </div>
                  <div className="p-4 bg-primary/5 rounded-lg">
                    <h4 className="font-semibold mb-2">Temperance</h4>
                    <p className="text-sm text-muted-foreground">Balance and moderation</p>
                  </div>
                  <div className="p-4 bg-primary/5 rounded-lg">
                    <h4 className="font-semibold mb-2">Air</h4>
                    <p className="text-sm text-muted-foreground">Fresh, clean air</p>
                  </div>
                  <div className="p-4 bg-primary/5 rounded-lg">
                    <h4 className="font-semibold mb-2">Rest</h4>
                    <p className="text-sm text-muted-foreground">Adequate sleep and rest</p>
                  </div>
                  <div className="p-4 bg-primary/5 rounded-lg">
                    <h4 className="font-semibold mb-2">Trust in God</h4>
                    <p className="text-sm text-muted-foreground">Spiritual foundation</p>
                  </div>
                </div>
              </Card>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-semibold mb-6">Upcoming Health Events</h2>
              <div className="space-y-4">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Community Health Fair</h3>
                  <p className="text-muted-foreground mb-2">
                    Free health screenings, educational booths, and healthy cooking demonstrations for the community
                  </p>
                  <p className="text-sm text-primary">Date: To be announced</p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-2">NEWSTART Lifestyle Program</h3>
                  <p className="text-muted-foreground mb-2">
                    8-week intensive program on implementing the eight natural remedies for better health
                  </p>
                  <p className="text-sm text-primary">Date: Quarterly sessions</p>
                </Card>
              </div>
            </section>

            <div className="bg-primary/5 p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Start Your Health Journey</h2>
              <p className="text-muted-foreground mb-6">
                Whether you want to improve your diet, start exercising, or learn about natural health remedies,
                our Health Ministry is here to support you. Join us in honoring God through healthy living!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg">Register for Programs</Button>
                <Button size="lg" variant="outline">Contact Health Ministry</Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
