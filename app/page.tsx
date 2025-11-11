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
      <SiteHeader />
      <main className="pr-10">
        <Hero />
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
