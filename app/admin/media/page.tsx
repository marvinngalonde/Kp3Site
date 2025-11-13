import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Upload, Image as ImageIcon, Video, Music, File, Trash2, Download } from "lucide-react"

export default function AdminMediaPage() {
  const mediaItems = [
    { id: 1, name: "christmas_program_2024.jpg", type: "image", size: "2.3 MB", date: "2024-12-26" },
    { id: 2, name: "youth_camp_video.mp4", type: "video", size: "45.6 MB", date: "2024-12-20" },
    { id: 3, name: "church_newsletter_jan.pdf", type: "document", size: "1.2 MB", date: "2025-01-01" },
    { id: 4, name: "worship_service_audio.mp3", type: "audio", size: "15.4 MB", date: "2025-01-06" },
  ]

  const getIcon = (type: string) => {
    switch (type) {
      case "image": return <ImageIcon className="h-8 w-8 text-primary" />
      case "video": return <Video className="h-8 w-8 text-primary" />
      case "audio": return <Music className="h-8 w-8 text-primary" />
      default: return <File className="h-8 w-8 text-primary" />
    }
  }

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Media Library</h1>
          <p className="text-muted-foreground">Manage images, videos, and documents</p>
        </div>
        <Button size="lg" className="mt-4 md:mt-0">
          <Upload className="mr-2 h-5 w-5" />
          Upload Files
        </Button>
      </div>

      {/* Upload Area */}
      <Card className="p-8 mb-6 border-dashed border-2 hover:bg-muted/50 transition-colors cursor-pointer">
        <div className="text-center">
          <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="font-semibold mb-2">Drag and drop files here</h3>
          <p className="text-sm text-muted-foreground mb-4">or click to browse</p>
          <Button>Choose Files</Button>
        </div>
      </Card>

      {/* Media Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {mediaItems.map((item) => (
          <Card key={item.id} className="p-4">
            <div className="flex flex-col items-center text-center mb-4">
              <div className="p-4 bg-muted rounded-lg mb-3">
                {getIcon(item.type)}
              </div>
              <h3 className="font-medium text-sm mb-1 truncate w-full">{item.name}</h3>
              <p className="text-xs text-muted-foreground">{item.size}</p>
              <p className="text-xs text-muted-foreground">{item.date}</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="flex-1">
                <Download className="h-4 w-4" />
              </Button>
              <Button variant="destructive" size="sm">
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </Card>
        ))}
      </div>

      <Card className="mt-6 p-6 bg-muted/30">
        <h3 className="font-semibold mb-2">Media Library Guidelines</h3>
        <ul className="space-y-1 text-sm text-muted-foreground">
          <li>• Supported formats: JPG, PNG, GIF, MP4, MP3, PDF, DOCX</li>
          <li>• Maximum file size: 100 MB per file</li>
          <li>• Organize files with clear, descriptive names</li>
          <li>• Compress images before upload for faster loading</li>
        </ul>
      </Card>
    </div>
  )
}
