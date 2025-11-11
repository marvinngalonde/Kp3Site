import Image from "next/image"

export function RightSidebar() {
  return (
    <aside className="fixed right-0 top-0 hidden h-screen w-40 flex-col lg:flex" style={{ backgroundColor: "#e36520" }}>
      {/* Logo at the top */}
      <div className="flex items-center justify-center p-8">
        <Image
          src="/images/design-mode/logo-transparent.png"
          alt="KP3 SDA Church Logo"
          width={120}
          height={120}
          className="h-auto w-full"
        />
      </div>
    </aside>
  )
}
