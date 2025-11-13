import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Newspaper, Calendar, Users, TrendingUp, Eye, MessageSquare } from "lucide-react"

export default function AdminDashboard() {
  const stats = [
    { label: "Total News Articles", value: "24", icon: Newspaper, change: "+3 this month" },
    { label: "Upcoming Events", value: "8", icon: Calendar, change: "2 this week" },
    { label: "Active Members", value: "450", icon: Users, change: "+12 this month" },
    { label: "Site Visits", value: "1,234", icon: Eye, change: "+18% this week" },
  ]

  const recentActivity = [
    { action: "New article published", item: "Youth Camp Registration Open", time: "2 hours ago" },
    { action: "Event updated", item: "Community Health Fair", time: "5 hours ago" },
    { action: "Sermon uploaded", item: "Walking by Faith", time: "1 day ago" },
    { action: "Prayer request submitted", item: "Anonymous", time: "2 days ago" },
  ]

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back to the admin panel</p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <Card key={index} className="p-6">
              <div className="flex items-center justify-between mb-4">
                <Icon className="h-8 w-8 text-primary" />
                <TrendingUp className="h-4 w-4 text-green-500" />
              </div>
              <div className="text-3xl font-bold mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground mb-1">{stat.label}</div>
              <div className="text-xs text-green-600">{stat.change}</div>
            </Card>
          )
        })}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Recent Activity */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-start gap-4 p-3 bg-muted/50 rounded-lg">
                <MessageSquare className="h-5 w-5 text-primary mt-1" />
                <div className="flex-1">
                  <p className="font-medium text-sm">{activity.action}</p>
                  <p className="text-sm text-muted-foreground">{activity.item}</p>
                  <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Quick Actions */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <div className="space-y-3">
            <Button className="w-full justify-start" size="lg">
              <Newspaper className="mr-2 h-5 w-5" />
              Create New Article
            </Button>
            <Button className="w-full justify-start" size="lg" variant="outline">
              <Calendar className="mr-2 h-5 w-5" />
              Add New Event
            </Button>
            <Button className="w-full justify-start" size="lg" variant="outline">
              <Users className="mr-2 h-5 w-5" />
              Manage Members
            </Button>
          </div>

          <div className="mt-6 p-4 bg-primary/5 rounded-lg">
            <h3 className="font-semibold mb-2">Pending Tasks</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Review 3 new prayer requests</li>
              <li>• Approve 2 event registrations</li>
              <li>• Update church calendar</li>
            </ul>
          </div>
        </Card>
      </div>

      <Card className="mt-6 p-6 bg-muted/30">
        <p className="text-sm text-muted-foreground">
          <strong>Note:</strong> This is the admin dashboard for managing the Kp3 SDA Church website.
          All content management features are accessible from the sidebar menu.
        </p>
      </Card>
    </div>
  )
}
