"use client"

import { useState } from "react"
import { Menu, X, Search, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 lg:mr-40">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/design-mode/orange-logo.png"
              alt="Seventh-day Adventist Church Logo"
              width={40}
              height={40}
              className="h-10 w-10"
            />
            <div className="flex flex-col">
              <span className="text-lg font-bold leading-tight">Kp3 SDA Church</span>
              <span className="text-xs text-muted-foreground">Harare, Zimbabwe</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-6 lg:flex">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
              Home
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("about")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary">
                About Us <ChevronDown className="h-4 w-4" />
              </button>
              {activeDropdown === "about" && (
                <div className="absolute left-0 top-full pt-2">
                  <div className="w-56 rounded-lg border border-border bg-background p-4 shadow-lg">
                    <Link href="/about/history" className="block py-2 text-sm hover:text-primary">
                      Our History
                    </Link>
                    <Link href="/about/beliefs" className="block py-2 text-sm hover:text-primary">
                      What We Believe
                    </Link>
                    <Link href="/about/leadership" className="block py-2 text-sm hover:text-primary">
                      Leadership Team
                    </Link>
                    <Link href="/about/mission" className="block py-2 text-sm hover:text-primary">
                      Our Mission
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("ministries")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary">
                Ministries <ChevronDown className="h-4 w-4" />
              </button>
              {activeDropdown === "ministries" && (
                <div className="absolute left-0 top-full pt-2">
                  <div className="w-56 rounded-lg border border-border bg-background p-4 shadow-lg">
                    <Link href="/ministries/youth" className="block py-2 text-sm hover:text-primary">
                      Youth Ministry
                    </Link>
                    <Link href="/ministries/children" className="block py-2 text-sm hover:text-primary">
                      Children's Ministry
                    </Link>
                    <Link href="/ministries/music" className="block py-2 text-sm hover:text-primary">
                      Music Ministry
                    </Link>
                    <Link href="/ministries/health" className="block py-2 text-sm hover:text-primary">
                      Health Ministry
                    </Link>
                    <Link href="/ministries/community" className="block py-2 text-sm hover:text-primary">
                      Community Service
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("resources")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary">
                Resources <ChevronDown className="h-4 w-4" />
              </button>
              {activeDropdown === "resources" && (
                <div className="absolute left-0 top-full pt-2">
                  <div className="w-56 rounded-lg border border-border bg-background p-4 shadow-lg">
                    <Link href="/resources/bible-study" className="block py-2 text-sm hover:text-primary">
                      Bible Study Materials
                    </Link>
                    <Link href="/resources/sermons" className="block py-2 text-sm hover:text-primary">
                      Sermon Archives
                    </Link>
                    <Link href="/resources/publications" className="block py-2 text-sm hover:text-primary">
                      Publications
                    </Link>
                    <Link href="/resources/media" className="block py-2 text-sm hover:text-primary">
                      Media Library
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/events" className="text-sm font-medium transition-colors hover:text-primary">
              Events
            </Link>
            <Link href="/news" className="text-sm font-medium transition-colors hover:text-primary">
              News
            </Link>
            <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary">
              Contact
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="hidden md:inline-flex">
              <Search className="h-5 w-5" />
            </Button>
            <Button className="hidden md:inline-flex">Get Involved</Button>
            <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-border lg:hidden">
          <nav className="container mx-auto flex flex-col gap-4 px-4 py-6">
            <Link href="/" className="text-sm font-medium">
              Home
            </Link>
            <Link href="/about/history" className="text-sm font-medium">
              About Us
            </Link>
            <Link href="/ministries/youth" className="text-sm font-medium">
              Ministries
            </Link>
            <Link href="/resources/bible-study" className="text-sm font-medium">
              Resources
            </Link>
            <Link href="/events" className="text-sm font-medium">
              Events
            </Link>
            <Link href="/news" className="text-sm font-medium">
              News
            </Link>
            <Link href="/contact" className="text-sm font-medium">
              Contact
            </Link>
            <Button className="w-full">Get Involved</Button>
          </nav>
        </div>
      )}
    </header>
  )
}
