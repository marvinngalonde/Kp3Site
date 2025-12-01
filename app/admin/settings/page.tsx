import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Save } from "lucide-react"

export default function AdminSettingsPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Settings</h1>
        <p className="text-muted-foreground">Manage website settings and configuration</p>
      </div>

      <div className="space-y-6">
        {/* General Settings */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-6">General Settings</h2>
          <div className="space-y-4 max-w-2xl">
            <div>
              <label className="block text-sm font-medium mb-2">Church Name</label>
              <Input defaultValue="Kp3 SDA Church" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Tagline</label>
              <Input defaultValue="Harare, Zimbabwe" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <Input type="email" defaultValue="info@kp3sda.org" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Phone</label>
              <Input type="tel" defaultValue="+263 [To Be Updated]" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Address</label>
              <textarea
                className="w-full px-4 py-2 border rounded-lg"
                rows={3}
                defaultValue="Kuwadzan Phase 3, Harare, Zimbabwe"
              />
            </div>
          </div>
        </Card>

        {/* Social Media */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-6">Social Media</h2>
          <div className="space-y-4 max-w-2xl">
            <div>
              <label className="block text-sm font-medium mb-2">Facebook</label>
              <Input placeholder="https://facebook.com/kp3sda" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Instagram</label>
              <Input placeholder="https://instagram.com/kp3sda" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">YouTube</label>
              <Input placeholder="https://youtube.com/@kp3sda" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Twitter</label>
              <Input placeholder="https://twitter.com/kp3sda" />
            </div>
          </div>
        </Card>

        {/* Worship Times */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-6">Worship Schedule</h2>
          <div className="space-y-4 max-w-2xl">
            <div>
              <label className="block text-sm font-medium mb-2">Sabbath School Time</label>
              <Input defaultValue="9:30 AM - 10:30 AM" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Worship Service Time</label>
              <Input defaultValue="10:45 AM - 12:00 PM" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Prayer Meeting (Wednesday)</label>
              <Input defaultValue="6:00 PM - 7:30 PM" />
            </div>
          </div>
        </Card>

        <div className="flex gap-4">
          <Button size="lg">
            <Save className="mr-2 h-5 w-5" />
            Save Changes
          </Button>
          <Button size="lg" variant="outline">Cancel</Button>
        </div>
      </div>
    </div>
  )
}
