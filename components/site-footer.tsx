import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-muted/30 lg:mr-40">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-1">
              <div className="relative h-32 w-42 overflow-hidden rounded-lg bg-white/10 p-1">
                <img
                  src="/images/design-mode/organge-bac-logo.png"
                  alt="Kp3 SDA Church"
                  className="h-full w-full object-contain"
                />
              </div>
              {/* <span className="text-2xl font-bold tracking-tight">Kp3 SDA Church</span> */}
            </Link>
            <p className="mt-0 max-w-sm text-sm text-muted-foreground leading-relaxed">
              A welcoming faith community in Kuwadzana Phase 3 dedicated to spiritual growth, compassionate service, and transforming lives
              through the message of hope.
            </p>
            <div className="mt-6 flex gap-4">
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-muted transition-colors hover:bg-primary hover:text-primary-foreground">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-muted transition-colors hover:bg-primary hover:text-primary-foreground">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-muted transition-colors hover:bg-primary hover:text-primary-foreground">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-muted transition-colors hover:bg-primary hover:text-primary-foreground">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-semibold">About</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about/beliefs" className="text-muted-foreground transition-colors hover:text-primary">
                  Our Beliefs
                </Link>
              </li>
              <li>
                <Link href="/about/leadership" className="text-muted-foreground transition-colors hover:text-primary">
                  Leadership
                </Link>
              </li>
              <li>
                <Link href="/about/history" className="text-muted-foreground transition-colors hover:text-primary">
                  Our History
                </Link>
              </li>
              <li>
                <Link href="/about/mission" className="text-muted-foreground transition-colors hover:text-primary">
                  Mission & Vision
                </Link>
              </li>
            </ul>
          </div>

          {/* Ministries */}
          <div>
            <h3 className="mb-4 font-semibold">Ministries</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/ministries/children" className="text-muted-foreground transition-colors hover:text-primary">
                  Children's Ministry
                </Link>
              </li>
              <li>
                <Link href="/ministries/youth" className="text-muted-foreground transition-colors hover:text-primary">
                  Youth Programs
                </Link>
              </li>
              <li>
                <Link href="/ministries/health" className="text-muted-foreground transition-colors hover:text-primary">
                  Health Ministry
                </Link>
              </li>
              <li>
                <Link href="/ministries/community" className="text-muted-foreground transition-colors hover:text-primary">
                  Community Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-4 font-semibold">Resources</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/resources/bible-study" className="text-muted-foreground transition-colors hover:text-primary">
                  Bible Studies
                </Link>
              </li>
              <li>
                <Link href="/resources/publications" className="text-muted-foreground transition-colors hover:text-primary">
                  Publications
                </Link>
              </li>
              <li>
                <Link href="/resources/media" className="text-muted-foreground transition-colors hover:text-primary">
                  Media Library
                </Link>
              </li>
              <li>
                <Link href="/give" className="text-muted-foreground transition-colors hover:text-primary">
                  Give
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
            <p>&copy; 2025 Kp3 SDA Church. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/about/mission" className="transition-colors hover:text-primary">
                Mission
              </Link>
              <Link href="/events" className="transition-colors hover:text-primary">
                Events
              </Link>
              <Link href="/contact" className="transition-colors hover:text-primary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
