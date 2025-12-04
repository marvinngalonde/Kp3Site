import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const topics = [
  {
    title: "Beliefs",
    image: "/images/kidwork.png",
  },
  {
    title: "Health",
    image: "/images/chag.png",
  },
  {
    title: "Family",
    image: "/images/kidwork.png",
  },
  {
    title: "Mission",
    image: "/images/chag.png",
  },
  {
    title: "Community",
    image: "/images/kidwork.png",
  },
  {
    title: "Prophecy",
    image: "/images/chag.png",
  },
]

export function TopicsSection() {
  return (
    <section className="py-16 md:py-20 relative bg-stone-50" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'200\' height=\'200\' viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M100 0 C150 50 150 150 100 200 M100 0 C50 50 50 150 100 200 M0 100 C50 50 150 50 200 100 M0 100 C50 150 150 150 200 100 M50 50 Q100 75 150 50 M50 150 Q100 125 150 150 M50 50 Q75 100 50 150 M150 50 Q125 100 150 150\' stroke=\'%23d4d4d8\' stroke-width=\'0.5\' fill=\'none\' opacity=\'0.2\'/%3E%3C/svg%3E")' }}>
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="text-balance text-3xl font-bold md:text-4xl">Explore Topics</h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Discover resources and information organized by key areas of interest
          </p>
        </div>

        {/* Container constrained to max-w-5xl to make cards physically smaller 
            while maintaining the 3-column layout 
        */}
        <div className="mx-auto max-w-5xl grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic, index) => (
            <Card key={index} className="group relative overflow-hidden rounded-2xl border-none shadow-lg aspect-square cursor-pointer">
              {/* Background Image Layer */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${topic.image})` }}
              >
                {/* Darker Overlay (bg-black/50) to ensure white text pops 
                   exactly like the reference image 
                */}
                <div className="absolute inset-0 bg-black/50 transition-colors group-hover:bg-black/60" />
              </div>

              {/* Content Layer */}
              <CardContent className="mt-28 relative flex h-full flex-col items-center justify-center p-6 text-center">
                {/* Text Styling:
                    - text-3xl: Large size matching the image
                    - leading-tight: Tighter line height for multi-line headings
                    - font-bold: Heavy weight matching the reference
                */}
                <h3 className="mb-6 text-balance text-2xl md:text-3xl font-bold text-white drop-shadow-lg leading-tight">
                  {topic.title}
                </h3>

                {/* Button Styling:
                    - rounded-full: Pill shape
                    - px-8: Wide horizontal padding
                    - font-bold: Matches the weight of the button text in image
                */}
                <Button className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-4 py-3 text-md shadow-md transition-transform active:scale-95">
                  Read More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}