import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/10 lg:-mr-44 lg:pr-44">
      <div className="absolute inset-0 bg-[url('/abstract-light-pattern.png')] bg-cover bg-center opacity-5" />

      <div className="container relative mx-auto px-4 py-16 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          {/* Main Headline */}
          <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            Discover Hope, Find Purpose, Grow in Faith
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl leading-relaxed">
            Join a global community devoted to understanding the Bible and sharing the love of Christ through service,
            education, and compassionate care.
          </p>

          {/* Search Bar */}
          <div className="mx-auto mt-8 max-w-2xl">
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search for topics, resources, or locations..."
                  className="h-12 pl-10 pr-4"
                />
              </div>
              <Button size="lg" className="h-12">
                Search
              </Button>
            </div>
          </div>

          {/* Quick Action Buttons */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button variant="outline">Find a Church</Button>
            <Button variant="outline">Watch Live</Button>
            <Button variant="outline">Bible Studies</Button>
            <Button variant="outline">Get Involved</Button>
          </div>

          {/* Stats Row */}
          <div className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-6 border-t border-border pt-8 md:grid-cols-4">
            <div>
              <div className="text-3xl font-bold text-primary">215+</div>
              <div className="mt-1 text-sm text-muted-foreground">Countries</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">22M+</div>
              <div className="mt-1 text-sm text-muted-foreground">Members</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">95K+</div>
              <div className="mt-1 text-sm text-muted-foreground">Churches</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">9K+</div>
              <div className="mt-1 text-sm text-muted-foreground">Schools</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
