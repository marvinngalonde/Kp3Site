import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-muted/30 lg:mr-40">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <span className="text-xl font-bold text-primary-foreground">KP</span>
              </div>
              <span className="text-xl font-bold">Kingdom Path</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground leading-relaxed">
              A global faith community dedicated to spiritual growth, compassionate service, and transforming lives
              through the message of hope.
            </p>
            <div className="mt-6 flex gap-4">
              <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-semibold">About</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/beliefs" className="text-muted-foreground transition-colors hover:text-primary">
                  Our Beliefs
                </Link>
              </li>
              <li>
                <Link href="/leadership" className="text-muted-foreground transition-colors hover:text-primary">
                  Leadership
                </Link>
              </li>
              <li>
                <Link href="/history" className="text-muted-foreground transition-colors hover:text-primary">
                  Our History
                </Link>
              </li>
              <li>
                <Link href="/mission" className="text-muted-foreground transition-colors hover:text-primary">
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
                <Link href="/children" className="text-muted-foreground transition-colors hover:text-primary">
                  Children's Ministry
                </Link>
              </li>
              <li>
                <Link href="/youth" className="text-muted-foreground transition-colors hover:text-primary">
                  Youth Programs
                </Link>
              </li>
              <li>
                <Link href="/family" className="text-muted-foreground transition-colors hover:text-primary">
                  Family Life
                </Link>
              </li>
              <li>
                <Link href="/outreach" className="text-muted-foreground transition-colors hover:text-primary">
                  Community Outreach
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-4 font-semibold">Resources</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/bible-study" className="text-muted-foreground transition-colors hover:text-primary">
                  Bible Studies
                </Link>
              </li>
              <li>
                <Link href="/publications" className="text-muted-foreground transition-colors hover:text-primary">
                  Publications
                </Link>
              </li>
              <li>
                <Link href="/media" className="text-muted-foreground transition-colors hover:text-primary">
                  Media Library
                </Link>
              </li>
              <li>
                <Link href="/donate" className="text-muted-foreground transition-colors hover:text-primary">
                  Donate
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
            <p>&copy; 2025 Kingdom Path. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="transition-colors hover:text-primary">
                Privacy Policy
              </Link>
              <Link href="/terms" className="transition-colors hover:text-primary">
                Terms of Use
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
