import { Heart, BookOpen, Users, Globe } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const missions = [
  {
    icon: Heart,
    title: "Community Health",
    description: "Promoting healthy living through health expos, cooking classes, and wellness seminars.",
    stat: "Weekly Health Programs",
    image: "/images/chag.png",
  },
  {
    icon: BookOpen,
    title: "Bible Study",
    description: "Deepening faith through Sabbath School, mid-week prayer meetings, and small groups.",
    stat: "Daily Study Guides",
    image: "/images/kidwork.png",
  },
  {
    icon: Users,
    title: "Community Service",
    description: "Serving our neighbors through food distribution, clothing drives, and support for the vulnerable.",
    stat: "Monthly Outreach",
    image: "/images/chag.png",
  },
  {
    icon: Globe,
    title: "Evangelism",
    description: "Sharing the good news of Jesus Christ with our local community and beyond.",
    stat: "Annual Campaigns",
    image: "/images/kidwork.png",
  },
]

export function MissionAreas() {
  return (
    <section className="py-16 md:py-24 relative bg-white overflow-hidden">
      
      {/* 1. Subtle Global Background Pattern (Wireframe/Globe) */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M50 10 Q70 30 50 50 Q30 70 50 90 M50 10 Q30 30 50 50 Q70 70 50 90 M10 50 Q30 30 50 50 Q70 30 90 50 M10 50 Q30 70 50 50 Q70 70 90 50\' stroke=\'%23000\' stroke-width=\'0.5\' fill=\'none\'/%3E%3Ccircle cx=\'50\' cy=\'50\' r=\'40\' stroke=\'%23000\' stroke-width=\'0.5\' fill=\'none\'/%3E%3C/svg%3E")' }}
      ></div>

      {/* 2. THE WAVE SVG LAYER (Visible only on Large Screens) */}
      {/* This sits behind the cards but on top of the global background */}
      <div className="absolute top-[38%] left-0 w-full -translate-y-1/2 z-0 hidden lg:block pointer-events-none opacity-40">
        <svg 
            viewBox="0 0 1440 320" 
            className="w-full h-auto text-orange-500/20" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Main flowing wave */}
            <path 
                d="M0,160 C320,300 420,0 720,160 C1020,320 1120,20 1440,160" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeDasharray="12 12"
            />
            {/* Secondary faint wave for depth */}
            <path 
                d="M0,160 C320,280 420,40 720,160 C1020,280 1120,40 1440,160" 
                stroke="currentColor" 
                strokeWidth="1" 
                className="opacity-50"
            />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-12 text-center">
          <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">Our Mission in Action</h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground leading-relaxed">
            Making a tangible difference through dedicated service across four core areas
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 relative">
          {missions.map((mission, index) => (
            <Card key={index} className="border-none shadow-none bg-transparent group">
              <CardContent className="p-6 flex flex-col items-center text-center">
                
                {/* Round Image Container */}
                {/* Added 'bg-white' and 'ring' to help it pop off the wave line */}
                <div className="relative mb-6 h-32 w-32 rounded-full overflow-hidden ring-4 ring-white shadow-lg transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src={mission.image}
                    alt={mission.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <h3 className="mb-2 text-xl font-bold">{mission.title}</h3>
                <p className="mb-4 text-sm text-muted-foreground leading-relaxed">{mission.description}</p>
                <div className="text-sm font-semibold text-primary">{mission.stat}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}