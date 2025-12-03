import type React from "react"
import type { Metadata } from "next"
import { Lora, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

// Serif font for body text - traditional feel
const lora = Lora({
  subsets: ["latin"],
  variable: "--font-serif",
})

// Sans-serif font for headlines - modern contrast
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "KP3 SDA Church - Kuwadzan Phase 3 Seventh-day Adventist Church",
  description:
    "Welcome to Kuwadzan Phase 3 Seventh-day Adventist Church. A community dedicated to worship, spiritual growth, and service. Join us as we grow in faith together.",
  generator: "Ngaloseh",
  icons: {
    icon: [
      {
        url: "/images/design-mode/orange-logo.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/images/design-mode/orange-logo.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/images/design-mode/orange-logo.png",
        type: "image/svg+xml",
      },
    ],
    apple: "/images/design-mode/orange-logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${lora.variable} ${inter.variable} font-serif antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
