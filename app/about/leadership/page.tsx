import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const leadership2026 = {
  elders: [
    { name: "Elder Mukorera", role: "Head Elder" },
    { name: "Elder Zinhanga", role: "Vice Head Elder" },
    { name: "Elder Tinarwo", role: "Elder" },
    { name: "Elder Chikata", role: "Elder" },
    { name: "Elder Muriritirwa", role: "Elder" },
    { name: "Elder Muti", role: "Elder" },
    { name: "Obvious Samson", role: "Elder" },
    { name: "Mr Chizura", role: "Elder" },
  ],
  deacons: [
    { name: "Elder Nyanduko", role: "Head Deacon" },
    { name: "Ronald Mushongi", role: "Vice Head Deacon" },
    { name: "Elder Fotsho", role: "Deacon" },
    { name: "Emmanuel Chikomba", role: "Deacon" },
    { name: "Tafadzwa Nhamburo", role: "Deacon" },
    { name: "Mr Gunyando", role: "Deacon" },
    { name: "Munashe Muti", role: "Deacon" },
  ],
  deaconesses: [
    { name: "Mrs Mukamba", role: "Head Deaconess" },
    { name: "Mrs Muza", role: "Vice Head Deaconess" },
    { name: "Purpose Msipa", role: "Deaconess" },
    { name: "Mrs Godobi", role: "Deaconess" },
    { name: "Mrs Makara", role: "Deaconess" },
    { name: "Liliosa Ndhlovhu", role: "Deaconess" },
    { name: "Mrs Kapungu", role: "Deaconess" },
    { name: "Ruth Kagoro", role: "Deaconess" },
  ],
  departments: [
    { role: "Treasury", name: "Elder Chagwinya (Head), Tete Chizura, Christine Chinowaita" },
    { role: "Personal Ministries", name: "Mrs Raymond (Director), Sandra Tshuma (Secretary), Bright Choga" },
    { role: "Clerks", name: "Tariro Nyamadzawo (Head), Mai Manando" },
    { role: "Possibilities Ministry", name: "Mrs Muti snr" },
    { role: "Interest Coordinator", name: "Mrs Chagwinya" },
    { role: "Stewardship Director", name: "Elder Ndhlovhu" },
    { role: "Young Adults", name: "Purpose Msipa (Leader), Liliosa Ndhlovhu (Vice)" },
    { role: "Ambassadors", name: "Grace Ndhlovhu (Director)" },
    { role: "Pathfinder", name: "Pauline Chinowaita (Director)" },
    { role: "Adventurer", name: "Mrs Ndhlovhu (Director), Tete Chizura (Vice)" },
    { role: "Sabbath School", name: "Mrs Tendere (Leader), Shepherd Raymond (Secretary)" },
    { role: "Children Ministries", name: "Mrs Mukorera (Director), Pauline Chinowaita (Vice)" },
    { role: "Dorcas", name: "Mrs Maseure" },
    { role: "Woman Ministries", name: "Mrs Gunyando" },
    { role: "AMO", name: "Mr Muzvagwa" },
    { role: "PCM", name: "Bright Choga" },
    { role: "Communication Secretary", name: "Marvin Ngalonde" },
    { role: "Education Secretary", name: "Mrs Muriritirwa" },
    { role: "Church Music Coordinator", name: "Bruce Magosha" },
    { role: "Family Life", name: "Elder & Mrs Chinowaita" },
    { role: "PARL", name: "Christine Chinowaita" },
    { role: "Health", name: "Mrs Fotsho" },
    { role: "Adventist Mission Leader", name: "Mrs Chiwi" },
    { role: "Publishing", name: "Brian Choga" },
  ],
  nominatingCommittee: [
    { name: "Elder Zinhanga", role: "Chairperson" },
    { name: "Pauline Chinowaita", role: "Secretary" },
    { name: "Mrs Mukorera", role: "Member" },
    { name: "Mrs Chiwi", role: "Member" },
    { name: "Mrs Maseure", role: "Member" },
    { name: "Elder Muti", role: "Member" },
    { name: "Ronald Mushongi", role: "Member" },
    { name: "Grace Ndhlovhu", role: "Member" },
    { name: "Elder Tinarwo", role: "Member" },
    { name: "Mr Muzvagwa", role: "Member" },
    { name: "Purpose Msipa", role: "Member" },
  ]
}

export default function LeadershipPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section with Background */}
      <div className="relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/chag.png')" }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10">
          <SiteHeader />
          <div className="container mx-auto px-4 py-24 text-center lg:mr-40">
            <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">Leadership Team</h1>
            <p className="mx-auto max-w-2xl text-lg text-white/90">
              Meet the dedicated leaders who guide and serve our church community with passion and commitment.
            </p>
          </div>
        </div>
      </div>

      <main className="flex-1 bg-gradient-to-b from-stone-50 via-white to-stone-100 py-16 lg:mr-40">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-primary mb-2">Kuwadzana Phase 3 SDA Church</h2>
            <h3 className="text-2xl font-semibold text-muted-foreground">Church Leaders Nominations 2026</h3>
          </div>

          {/* Elders, Deacons, Deaconesses Grid */}
          <div className="grid gap-8 md:grid-cols-3 mb-16">
            {/* Elders */}
            <Card className="border-t-4 border-t-primary shadow-md">
              <CardHeader className="bg-muted/30 pb-4">
                <CardTitle className="text-center text-xl text-primary">Elders</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {leadership2026.elders.map((person, i) => (
                    <li key={i} className="flex flex-col items-center text-center border-b border-border/50 last:border-0 pb-2 last:pb-0">
                      <span className="font-semibold">{person.name}</span>
                      <span className="text-xs text-muted-foreground uppercase tracking-wider">{person.role}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Deacons */}
            <Card className="border-t-4 border-t-primary shadow-md">
              <CardHeader className="bg-muted/30 pb-4">
                <CardTitle className="text-center text-xl text-primary">Deacons</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {leadership2026.deacons.map((person, i) => (
                    <li key={i} className="flex flex-col items-center text-center border-b border-border/50 last:border-0 pb-2 last:pb-0">
                      <span className="font-semibold">{person.name}</span>
                      <span className="text-xs text-muted-foreground uppercase tracking-wider">{person.role}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Deaconesses */}
            <Card className="border-t-4 border-t-primary shadow-md">
              <CardHeader className="bg-muted/30 pb-4">
                <CardTitle className="text-center text-xl text-primary">Deaconesses</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {leadership2026.deaconesses.map((person, i) => (
                    <li key={i} className="flex flex-col items-center text-center border-b border-border/50 last:border-0 pb-2 last:pb-0">
                      <span className="font-semibold">{person.name}</span>
                      <span className="text-xs text-muted-foreground uppercase tracking-wider">{person.role}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Departmental Leaders */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-primary">Departmental Leaders</h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {leadership2026.departments.map((dept, i) => (
                <Card key={i} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-primary mb-2">{dept.role}</h4>
                    <p className="text-sm text-muted-foreground">{dept.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Nominating Committee */}
          <div className="max-w-4xl mx-auto">
            <Card className="bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="text-center text-2xl text-primary">Nominating Committee Members</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                  {leadership2026.nominatingCommittee.map((member, i) => (
                    <div key={i} className="text-center p-2 bg-background rounded-lg shadow-sm">
                      <div className="font-semibold">{member.name}</div>
                      <div className="text-xs text-muted-foreground">{member.role}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
