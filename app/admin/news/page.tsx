import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Plus, Search, Edit, Trash2, Eye } from "lucide-react"

export default function AdminNewsPage() {
  const articles = [
    {
      id: 1,
      title: "New Year Brings New Opportunities for Service",
      category: "Church News",
      author: "Communications Team",
      date: "2025-01-05",
      status: "Published",
      views: 234
    },
    {
      id: 2,
      title: "Youth Department Plans Exciting Camp Experience",
      category: "Youth",
      author: "Youth Ministry",
      date: "2025-01-03",
      status: "Published",
      views: 189
    },
    {
      id: 3,
      title: "Health Ministry Launches Wellness Initiative",
      category: "Health",
      author: "Health Ministry",
      date: "2024-12-28",
      status: "Published",
      views: 156
    },
    {
      id: 4,
      title: "Upcoming Evangelistic Campaign",
      category: "Events",
      author: "Admin",
      date: "2025-01-06",
      status: "Draft",
      views: 0
    }
  ]

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">News & Articles</h1>
          <p className="text-muted-foreground">Manage church news and announcements</p>
        </div>
        <Button size="lg" className="mt-4 md:mt-0">
          <Plus className="mr-2 h-5 w-5" />
          New Article
        </Button>
      </div>

      {/* Filters */}
      <Card className="p-6 mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <Input placeholder="Search articles..." />
          </div>
          <select className="px-4 py-2 border rounded-lg">
            <option>All Categories</option>
            <option>Church News</option>
            <option>Youth</option>
            <option>Health</option>
            <option>Events</option>
          </select>
          <select className="px-4 py-2 border rounded-lg">
            <option>All Status</option>
            <option>Published</option>
            <option>Draft</option>
          </select>
        </div>
      </Card>

      {/* Articles List */}
      <div className="space-y-4">
        {articles.map((article) => (
          <Card key={article.id} className="p-6">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-start gap-3 mb-3">
                  <h3 className="text-lg font-semibold flex-1">{article.title}</h3>
                  <Badge variant={article.status === "Published" ? "default" : "outline"}>
                    {article.status}
                  </Badge>
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span>Category: <span className="text-foreground">{article.category}</span></span>
                  <span>Author: <span className="text-foreground">{article.author}</span></span>
                  <span>Date: <span className="text-foreground">{article.date}</span></span>
                  <span className="flex items-center gap-1">
                    <Eye className="h-4 w-4" />
                    {article.views} views
                  </span>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Edit className="h-4 w-4 mr-2" />
                  Edit
                </Button>
                <Button variant="outline" size="sm">
                  <Eye className="h-4 w-4 mr-2" />
                  Preview
                </Button>
                <Button variant="destructive" size="sm">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-6 flex justify-center gap-2">
        <Button variant="outline" size="sm">Previous</Button>
        <Button variant="outline" size="sm">1</Button>
        <Button variant="outline" size="sm">2</Button>
        <Button variant="outline" size="sm">3</Button>
        <Button variant="outline" size="sm">Next</Button>
      </div>

      <Card className="mt-6 p-6 bg-muted/30">
        <h3 className="font-semibold mb-2">Quick Tips</h3>
        <ul className="space-y-1 text-sm text-muted-foreground">
          <li>• Click "New Article" to create a new news post</li>
          <li>• Use categories to organize content</li>
          <li>• Save as draft to work on articles before publishing</li>
          <li>• Featured articles appear on the homepage</li>
        </ul>
      </Card>
    </div>
  )
}
