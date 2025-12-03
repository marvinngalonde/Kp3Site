import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative overflow-hidden h-[calc(100vh-64px)] flex items-center">
      <div className="container relative mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-full items-center">
          {/* Empty left column to push content to the right */}
          <div className="hidden lg:block lg:col-span-7 xl:col-span-7" />

          {/* Content column - positioned slightly to the right and vertically centered */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col justify-center text-center lg:text-left pt-20 lg:pt-32">
            {/* Main Headline */}
            <h1 className="text-balance text-md font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-3xl mb-6 drop-shadow-lg">
              More than just a building—<br></br>we're building lives.
            </h1>

            <p className="text-pretty text-lg text-white/90 md:text-xl leading-relaxed mb-8 drop-shadow-md max-w-2xl mx-auto lg:mx-0">
              Life can be overwhelming, but you<br></br> don't have to face it alone.Share your<br></br> burden with us, and together we’ll <br></br>bring it before the King of kings.<br></br>Experience the life-changing power <br></br>of prayer today.
            </p>

            <div className="flex justify-center lg:justify-start">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6 text-lg shadow-lg transition-all hover:scale-105">
                Let's Pray
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
