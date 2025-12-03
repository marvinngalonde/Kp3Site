import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative overflow-hidden h-[calc(100vh-64px)] flex items-center">
      <div className="container relative mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-full items-center">
          {/* Empty left column to push content to the right */}
          <div className="hidden lg:block lg:col-span-5 xl:col-span-6" />

          {/* Content column - positioned slightly to the right and vertically centered */}
          <div className="lg:col-span-7 xl:col-span-6 flex flex-col justify-center text-center lg:text-left pt-20 lg:pt-32">
            {/* Main Headline */}
            <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl mb-6 drop-shadow-lg">
              Discover Hope, Find Purpose, Grow in Faith
            </h1>

            <p className="text-pretty text-lg text-white/90 md:text-xl leading-relaxed mb-8 drop-shadow-md max-w-2xl mx-auto lg:mx-0">
              Join a global community devoted to understanding the Bible and sharing the love of Christ through service,
              education, and compassionate care.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
