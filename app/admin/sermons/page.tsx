import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Plus, Edit, Trash2, Play, Download, Upload } from "lucide-react"

export default function AdminSermonsPage() {
  const sermons = [
    {
      id: 1,
      title: "Walking by Faith",
      speaker: "Pastor [Name]",
      date: "2025-01-06",
      series: "Living Victoriously",
      duration: "45 min",
      audioFile: "sermon_001.mp3",
      downloads: 23
    },
    {
      id: 2,
      title: "The Power of Prayer",
      speaker: "Elder [Name]",
      date: "2024-12-30",
      series: "Spiritual Disciplines",
      duration: "38 min",
      audioFile: "sermon_002.mp3",
      downloads: 18
    },
    {
      id: 3,
      title: "Hope in Christ's Return",
      speaker: "Pastor [Name]",
      date: "2024-12-23",
      series: "Advent Hope",
      duration: "42 min",
      audioFile: "sermon_003.mp3",
      downloads: 31
    }
  ]

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Sermons Management</h1>
          <p className="text-muted-foreground">Upload and manage sermon recordings</p>
        </div>
        <Button size="lg" className="mt-4 md:mt-0">
          <Upload className="mr-2 h-5 w-5" />
          Upload Sermon
        </Button>
      </div>

      {/* Filters */}
      <Card className="p-6 mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <select className="px-4 py-2 border rounded-lg">
            <option>All Series</option>
            <option>Living Victoriously</option>
            <option>Spiritual Disciplines</option>
            <option>Advent Hope</option>
            <option>Kingdom Living</option>
          </select>
          <select className="px-4 py-2 border rounded-lg">
            <option>All Speakers</option>
            <option>Pastor [Name]</option>
            <option>Elder [Name]</option>
            <option>Guest Speakers</option>
          </select>
        </div>
      </Card>

      {/* Sermons List */}
      <div className="space-y-4">
        {sermons.map((sermon) => (
          <Card key={sermon.id} className="p-6">
            <div className="flex flex-col lg:flex-row lg:items-center gap-4">
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">{sermon.title}</h3>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                  <span>Speaker: <span className="text-foreground">{sermon.speaker}</span></span>
                  <span>Date: <span className="text-foreground">{sermon.date}</span></span>
                  <span>Duration: <span className="text-foreground">{sermon.duration}</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge>{sermon.series}</Badge>
                  <span className="text-xs text-muted-foreground">
                    <Download className="h-3 w-3 inline mr-1" />
                    {sermon.downloads} downloads
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <Button variant="outline" size="sm">
                  <Play className="h-4 w-4 mr-2" />
                  Listen
                </Button>
                <Button variant="outline" size="sm">
                  <Edit className="h-4 w-4 mr-2" />
                  Edit
                </Button>
                <Button variant="destructive" size="sm">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Card className="mt-6 p-6 bg-muted/30">
        <h3 className="font-semibold mb-2">Sermon Upload Guidelines</h3>
        <ul className="space-y-1 text-sm text-muted-foreground">
          <li>• Supported formats: MP3, WAV, M4A (MP3 recommended)</li>
          <li>• Maximum file size: 100 MB</li>
          <li>• Add sermon title, speaker, date, and series information</li>
          <li>• Sermons are automatically added to the podcast feed</li>
          <li>• Add sermon notes or transcript as PDF (optional)</li>
        </ul>
      </Card>
    </div>
  )
}
