import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Headphones, Video, FileText, ArrowRight, ArrowUpRight } from "lucide-react"

const resources = [
  {
    icon: BookOpen,
    title: "Bible Study Guides",
    description: "Comprehensive study materials for personal and group exploration.",
    count: "500+ Guides",
  },
  {
    icon: Headphones,
    title: "Podcasts & Audio",
    description: "Sermons, interviews, and inspirational messages on the go.",
    count: "1,200+ Episodes",
  },
  {
    icon: Video,
    title: "Video Library",
    description: "Educational content, testimonies, and documentary series.",
    count: "800+ Videos",
  },
  {
    icon: FileText,
    title: "Publications",
    description: "Magazines, journals, and digital books for deeper learning.",
    count: "300+ Publications",
  },
]

export function ResourcesSection() {
  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="mb-16 flex flex-col items-end justify-between gap-6 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">Free Resources</h2>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              We have curated a vast library of materials to help you grow. Access thousands of study guides, videos, and books at no cost.
            </p>
          </div>
          <Button className="shrink-0 bg-slate-900 text-white hover:bg-slate-800 gap-2 h-12 px-6 rounded-full">
            View All Library <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Resources Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {resources.map((resource, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-orange-300 hover:shadow-xl hover:shadow-orange-500/5"
            >
              <CardContent className="flex flex-col items-start p-8 h-full">
                
                {/* Header: Icon & Count */}
                <div className="mb-6 flex w-full items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-100 bg-slate-50 text-slate-900 transition-colors group-hover:bg-orange-600 group-hover:text-white">
                    <resource.icon className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600 group-hover:bg-orange-50 group-hover:text-orange-700">
                    {resource.count}
                  </span>
                </div>

                {/* Content */}
                <h3 className="mb-3 text-xl font-bold text-slate-900">{resource.title}</h3>
                <p className="mb-8 text-sm text-slate-500 leading-relaxed">
                    {resource.description}
                </p>

                {/* Bottom Action Link */}
                <div className="mt-auto flex items-center gap-2 text-sm font-semibold text-slate-900 transition-colors group-hover:text-orange-600">
                  <span>Start Learning</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>

              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}