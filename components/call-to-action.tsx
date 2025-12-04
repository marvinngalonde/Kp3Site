import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CallToAction() {
  return (
    <section className="bg-primary py-16 text-primary-foreground md:py-24 relative overflow-hidden">
      {/* Hexagonal pattern overlay */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M30 0 L45 15 L45 30 L30 45 L15 30 L15 15 Z\' fill=\'%23c2410c\' /%3E%3C/svg%3E")' }}></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">Be Part of Something Greater</h2>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed opacity-90">
            Whether you're seeking spiritual growth, want to serve your community, or looking for a welcoming place to
            belong, we invite you to join our global family.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" variant="secondary" className="gap-2">
              Find Your Local Community <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              Start Your Journey
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
