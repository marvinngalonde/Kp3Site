import { Hero } from "@/components/hero"
import { MissionAreas } from "@/components/mission-areas"
import { FeaturedArticles } from "@/components/featured-articles"
import { GlobalReach } from "@/components/global-reach"
import { UpcomingEvents } from "@/components/upcoming-events"
import { CommunityImpact } from "@/components/community-impact"
import { CallToAction } from "@/components/call-to-action"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { NewsGrid } from "@/components/news-grid"
import { FeaturedSidebar } from "@/components/featured-sidebar"
import { TopicsSection } from "@/components/topics-section"
import { GlobalPresence } from "@/components/global-presence"
import { ResourcesSection } from "@/components/resources-section"
import { RightSidebar } from "@/components/right-sidebar"

export default function Page() {
  return (
    <div className="min-h-screen">
      {/* Background Image Section - Header + Hero */}
      <div className="relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/chag.png')" }}>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10">
          <SiteHeader />
          <Hero />
        </div>
      </div>

      {/* Main Content */}
      <main className="lg:pr-40">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <NewsGrid />
            </div>
            <div className="lg:col-span-1">
              <FeaturedSidebar />
            </div>
          </div>
        </div>
        <MissionAreas />
        <FeaturedArticles />
        <GlobalReach />
        <UpcomingEvents />
        <CommunityImpact />
        <TopicsSection />
        <GlobalPresence />
        <ResourcesSection />
        <CallToAction />
      </main>
      <SiteFooter />
      <RightSidebar />
    </div>
  )
}
