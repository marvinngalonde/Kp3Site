import { Heart, BookOpen, Users, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

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
];

export function MissionAreas() {
  // We generate 20 lines to create a dense, flowing texture
  const lines = Array.from({ length: 20 }, (_, i) => {
    // Determine the vertical spread for each section
    const startY = 50 + i * 12;      // Spread out on left
    
    // IMAGE 1 (Pinch Point): Tightly bundled around y=140
    const pinch1Y = 140 + (i - 10) * 1.5; 
    
    // MIDDLE (Under Images): Spreading out widely and swooping low (y=260+)
    const troughY = 280 + (i - 10) * 4; 
    
    // IMAGE 4 (Pinch Point): Tightly bundled again around y=140
    const pinch2Y = 140 + (i - 10) * 1.5;
    
    // END: Spread out on right
    const endY = 50 + i * 12;

    // Construct the Multi-Segment Bézier Path
    // M: Move to Start
    // C: Curve to Pinch 1
    // S: Smooth Curve to Trough (Under middle images)
    // S: Smooth Curve to Pinch 2
    // S: Smooth Curve to End
    return (
      <path
        key={i}
        d={`
          M 0,${startY} 
          C 100,${startY} 180,${pinch1Y} 280,${pinch1Y} 
          S 500,${troughY} 720,${troughY} 
          S 1060,${pinch2Y} 1160,${pinch2Y} 
          S 1340,${endY} 1440,${endY}
        `}
      />
    );
  });

  return (
    <section className="py-16 md:py-24 relative bg-white overflow-hidden">
      
      {/* 1. Global Subtle Texture (Optional) */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

      {/* 2. THE DYNAMIC WAVE SVG BACKGROUND */}
      {/* Positioned absolutely, behind content, visible on large screens */}
      <div className="absolute inset-0 z-0 hidden lg:block pointer-events-none">
        <svg
          viewBox="0 0 1440 400"
          className="w-full h-full text-orange-500/20"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.7"
          preserveAspectRatio="none"
        >
          {lines}
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
                
                {/* Image Container with White Halo */}
                {/* The white ring and background ensure the lines look like they go 'behind' the images */}
                <div className="relative mb-6 h-32 w-32 rounded-full overflow-hidden bg-white ring-8 ring-white shadow-sm z-20 transition-transform duration-300 group-hover:scale-105">
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