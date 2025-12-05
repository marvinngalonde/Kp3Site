"use client"

import { useState } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { BookOpen, Users, Heart, Shield, Activity, RefreshCw } from "lucide-react"

// Categories for filtering
const categories = [
  { id: "all", label: "View All", icon: null },
  { id: "God", label: "God", icon: BookOpen },
  { id: "Humanity", label: "Humanity", icon: Users },
  { id: "Salvation", label: "Salvation", icon: Heart },
  { id: "Church", label: "The Church", icon: Shield },
  { id: "Daily Living", label: "Daily Living", icon: Activity },
  { id: "Restoration", label: "Restoration", icon: RefreshCw },
]

// All 28 Fundamental Beliefs
const beliefsData = [
  // GOD
  { id: 1, category: "God", title: "Holy Scriptures", text: "The Holy Scriptures, Old and New Testaments, are the written Word of God, given by divine inspiration.", verses: "2 Tim. 3:16, 17" },
  { id: 2, category: "God", title: "The Trinity", text: "There is one God: Father, Son, and Holy Spirit, a unity of three coeternal Persons.", verses: "Matt. 28:19" },
  { id: 3, category: "God", title: "God the Father", text: "God the eternal Father is the Creator, Source, Sustainer, and Sovereign of all creation.", verses: "Gen. 1:1" },
  { id: 4, category: "God", title: "God the Son", text: "God the eternal Son became incarnate in Jesus Christ.", verses: "John 1:1-3, 14" },
  { id: 5, category: "God", title: "God the Holy Spirit", text: "God the eternal Spirit was active with the Father and the Son in Creation, incarnation, and redemption.", verses: "Gen. 1:1, 2" },
  
  // HUMANITY
  { id: 6, category: "Humanity", title: "Creation", text: "God created the universe, and in a recent six-day creation the Lord made the heavens and the earth.", verses: "Gen. 1-2" },
  { id: 7, category: "Humanity", title: "Nature of Humanity", text: "Man and woman were made in the image of God with individuality, the power and freedom to think and to do.", verses: "Gen. 1:26-28" },
  
  // SALVATION
  { id: 8, category: "Salvation", title: "The Great Controversy", text: "All humanity is now involved in a great controversy between Christ and Satan regarding the character of God.", verses: "Rev. 12:4-9" },
  { id: 9, category: "Salvation", title: "Life, Death & Resurrection", text: "In Christ's life, death, and resurrection, God provided the only means of atonement for human sin.", verses: "John 3:16" },
  { id: 10, category: "Salvation", title: "Experience of Salvation", text: "Led by the Holy Spirit we sense our need, acknowledge our sinfulness, repent, and exercise faith in Jesus.", verses: "Eph. 2:4-10" },
  { id: 11, category: "Salvation", title: "Growing in Christ", text: "By His death on the cross, Jesus triumphed over the forces of evil.", verses: "Col. 1:13, 14" },
  
  // CHURCH
  { id: 12, category: "Church", title: "The Church", text: "The church is the community of believers who confess Jesus Christ as Lord and Saviour.", verses: "Eph. 2:19-22" },
  { id: 13, category: "Church", title: "The Remnant & Its Mission", text: "In the last days, a remnant has been called out to keep the commandments of God and the faith of Jesus.", verses: "Rev. 12:17; 14:6-12" },
  { id: 14, category: "Church", title: "Unity in the Body of Christ", text: "The church is one body with many members, called from every nation, kindred, tongue, and people.", verses: "Eph. 4:3-6" },
  { id: 15, category: "Church", title: "Baptism", text: "By baptism we confess our faith in the death and resurrection of Jesus Christ.", verses: "Rom. 6:1-6" },
  { id: 16, category: "Church", title: "The Lord's Supper", text: "The Lord's Supper is a participation in the emblems of the body and blood of Jesus.", verses: "1 Cor. 11:23-30" },
  
  // DAILY LIVING
  { id: 17, category: "Daily Living", title: "Spiritual Gifts", text: "God bestows upon all members of His church spiritual gifts for loving ministry.", verses: "1 Cor. 12:7-11" },
  { id: 18, category: "Daily Living", title: "The Gift of Prophecy", text: "One of the gifts of the Holy Spirit is prophecy, manifested in the ministry of Ellen G. White.", verses: "Rev. 12:17; 19:10" },
  { id: 19, category: "Daily Living", title: "The Law of God", text: "The great principles of God's law are embodied in the Ten Commandments.", verses: "Exod. 20:1-17" },
  { id: 20, category: "Daily Living", title: "The Sabbath", text: "The seventh day of the week is the Sabbath of the Lord, a day of rest and worship.", verses: "Exod. 20:8-11" },
  { id: 21, category: "Daily Living", title: "Stewardship", text: "We are God's stewards, entrusted by Him with time, talents, and possessions.", verses: "Mal. 3:8-12" },
  { id: 22, category: "Daily Living", title: "Christian Behavior", text: "We are called to be a godly people who think, feel, and act in harmony with biblical principles.", verses: "Rom. 12:1, 2" },
  { id: 23, category: "Daily Living", title: "Marriage and the Family", text: "Marriage was divinely established in Eden as a lifelong union between a man and a woman.", verses: "Gen. 2:18-25" },
  
  // RESTORATION
  { id: 24, category: "Restoration", title: "Christ's Ministry in the Heavenly Sanctuary", text: "There is a sanctuary in heaven where Christ ministers on our behalf.", verses: "Heb. 8:1-5" },
  { id: 25, category: "Restoration", title: "Second Coming of Christ", text: "The second coming of Christ is the blessed hope of the church.", verses: "Titus 2:13" },
  { id: 26, category: "Restoration", title: "Death and Resurrection", text: "The wages of sin is death. But God will grant eternal life to His redeemed.", verses: "Rom. 6:23" },
  { id: 27, category: "Restoration", title: "The Millennium", text: "The millennium is the thousand-year reign of Christ with His saints in heaven.", verses: "Rev. 20" },
  { id: 28, category: "Restoration", title: "The New Earth", text: "On the new earth, God will provide an eternal home for the redeemed.", verses: "Rev. 21:1-7" },
]

export default function BeliefsPage() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredBeliefs = activeCategory === "all" 
    ? beliefsData 
    : beliefsData.filter(b => b.category === activeCategory)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/chag.png')" }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10">
          <SiteHeader />
          <div className="container mx-auto px-4 py-24 text-center lg:mr-40">
            <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Our Fundamental Beliefs
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-white/90">
              Seventh-day Adventists accept the Bible as their only creed and hold 28 fundamental beliefs rooted in Scripture.
            </p>
          </div>
        </div>
      </div>

      <main className="bg-gradient-to-b from-stone-50 via-white to-stone-100 py-16 lg:mr-40">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            
            {/* Category Filters */}
            <div className="mb-12">
              <ScrollArea className="w-full whitespace-nowrap pb-4">
                <div className="flex justify-center gap-2 px-4">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`
                        flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300
                        ${activeCategory === cat.id 
                          ? "bg-primary text-white shadow-lg scale-105" 
                          : "bg-white text-slate-600 hover:bg-primary/10 border border-slate-200 shadow-sm"}
                      `}
                    >
                      {cat.icon && <cat.icon className="w-4 h-4" />}
                      {cat.label}
                    </button>
                  ))}
                </div>
              </ScrollArea>
            </div>

            {/* Beliefs Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredBeliefs.map((belief) => (
                <Card key={belief.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-3xl font-bold text-primary/20">
                        {belief.id}
                      </span>
                      <Badge variant="secondary" className="bg-primary/10 text-primary">
                        {belief.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl font-bold text-primary">
                      {belief.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed text-sm mb-4">
                      {belief.text}
                    </p>
                    
                    <div className="pt-3 border-t border-border">
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                        Key Scripture
                      </p>
                      <p className="text-xs text-primary font-medium">
                        {belief.verses}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Learn More Section */}
            <div className="mt-16 p-8 bg-primary/5 rounded-lg border border-primary/20 text-center">
              <h2 className="text-2xl font-bold mb-4">Complete Statement of Beliefs</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                For the complete statement with detailed theological explanations, please visit the official 
                Seventh-day Adventist Church website or speak with one of our pastors.
              </p>
              <p className="text-sm text-muted-foreground">
                All our beliefs are founded on Scripture and centered on Jesus Christ, His life, death, 
                resurrection, and ministry in heaven.
              </p>
            </div>

          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}