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
      <div className="relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/kidwork.png')" }}>
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
        {/* Latest Updates Section with subtle texture */}
        <div className="bg-stone-100/50 py-12" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23d4d4d8\' fill-opacity=\'0.15\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <NewsGrid />
              </div>
              <div className="lg:col-span-1">
                <FeaturedSidebar />
              </div>
            </div>
          </div>
        </div>
        <MissionAreas />
        {/* <FeaturedArticles /> */}
        <UpcomingEvents />
        <CommunityImpact />
        <TopicsSection />
        <ResourcesSection />
        <CallToAction />
      </main>
      <SiteFooter />
    </div>
  )
}
