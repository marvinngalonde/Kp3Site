import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { RightSidebar } from "@/components/right-sidebar"

export default function HistoryPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="lg:pr-44">
        <div className="container mx-auto px-4 py-12">
          <div className="mx-auto max-w-4xl">
            <h1 className="text-4xl font-bold mb-6">Our History</h1>

            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">The Beginning of Kp3 SDA Church</h2>
                <p className="text-muted-foreground mb-4">
                  Kp3 Seventh-day Adventist Church, located in the Kuwadzan Phase 3 area of Harare, Zimbabwe,
                  was established as part of the global Seventh-day Adventist movement's mission to spread the
                  gospel and serve communities across Africa.
                </p>
                <p className="text-muted-foreground mb-4">
                  Our church was founded with a vision to create a spiritual home for families in the Kuwadzan
                  community, providing a place where believers could worship together, grow in faith, and serve
                  their neighbors with the love of Christ.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Growth and Development</h2>
                <p className="text-muted-foreground mb-4">
                  Over the years, Kp3 SDA Church has grown from a small gathering of faithful members to a
                  vibrant community of believers. Our church has become a cornerstone of spiritual life in
                  Kuwadzan Phase 3, offering various ministries and programs that address the spiritual,
                  physical, and social needs of our members and the broader community.
                </p>
                <p className="text-muted-foreground mb-4">
                  Through dedication and God's grace, we have established youth programs, health ministries,
                  educational initiatives, and community outreach efforts that reflect the Adventist commitment
                  to holistic ministry.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">The Seventh-day Adventist Heritage</h2>
                <p className="text-muted-foreground mb-4">
                  As part of the worldwide Seventh-day Adventist Church, we share in a rich heritage that dates
                  back to the mid-1800s. The Adventist movement came to Africa in the late 19th century and has
                  since grown to become one of the largest Protestant denominations on the continent.
                </p>
                <p className="text-muted-foreground mb-4">
                  In Zimbabwe, the Seventh-day Adventist Church has been instrumental in education, healthcare,
                  and spiritual development, operating schools, hospitals, and churches throughout the nation.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Our Mission Today</h2>
                <p className="text-muted-foreground mb-4">
                  Today, Kp3 SDA Church continues to fulfill the Great Commission by proclaiming the everlasting
                  gospel, nurturing believers, and serving our community in Harare. We remain committed to our
                  Adventist heritage while adapting to meet the needs of our contemporary society.
                </p>
                <p className="text-muted-foreground">
                  As we look to the future, we are excited about the opportunities God has placed before us to
                  impact more lives for His kingdom and to prepare people for the soon return of Jesus Christ.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
      <RightSidebar />
    </div>
  )
}
