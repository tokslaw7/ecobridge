// import { button } from "./components/ui/button";
// import { Card, CardHeader, CardContent } from "./components/ui/card";

// import { Music, Palette, Users, Settings, BookOpen, Mic, LogOut } from "lucide-react";

export default function Dashboard ({ userEmail, onLogout }) {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b-2 border-foreground p-4 bg-card">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="placeholder-circle h-10 w-10 flex items-center justify-center">
              <div className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h1 className="text-xl font-mono font-bold">EcoBridge</h1>
              <p className="text-xs font-mono text-muted-foreground">
                Creative Platform
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden md:block text-right">
              <p className="font-mono text-sm font-medium">{userEmail}</p>
              <p className="text-xs font-mono text-muted-foreground">
                Community Member
              </p>
            </div>
            <button
              variant="wireframe"
              onClick={onLogout}
              className="flex items-center space-x-2"
            >
              <div className="h-4 w-4" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto p-6">
        <div className="space-y-8">
          {/* Welcome Section */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-mono font-bold">
              Welcome to EcoBridge
            </h2>
            <div className="accent-line w-32 mx-auto"></div>
            <p className="text-muted-foreground font-mono max-w-2xl mx-auto">
              Your creative advocacy platform where every voice matters.
              Express yourself through music, art, and storytelling while
              connecting with a supportive community.
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Music Studio */}
            <div className="lofi-card hover:shadow-lg transition-shadow">
              <div>
                <div className="placeholder-circle h-16 w-16 mx-auto mb-4 flex items-center justify-center">
                  <div className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-mono font-semibold text-center">
                  Music Studio
                </h3>
              </div>
              <div className="space-y-4">
                <p className="text-sm font-mono text-muted-foreground text-center">
                  Interactive music creation tools with sensory-friendly
                  interfaces
                </p>
                <div className="space-y-2">
                  <div className="placeholder-rect h-3 w-full flex items-center justify-center">
                    <span className="text-xs font-mono">
                      Drag & Drop Instruments
                    </span>
                  </div>
                  <div className="placeholder-rect h-3 w-3/4 flex items-center justify-center">
                    <span className="text-xs font-mono">Visual Music Blocks</span>
                  </div>
                  <div className="placeholder-rect h-3 w-1/2 flex items-center justify-center">
                    <span className="text-xs font-mono">AI Assistance</span>
                  </div>
                </div>
                <button variant="wireframe" className="w-full">
                  Create Music
                </button>
              </div>
            </div>

            {/* Creativity Zone */}
            <div className="lofi-card hover:shadow-lg transition-shadow">
              <div>
                <div className="placeholder-circle h-16 w-16 mx-auto mb-4 flex items-center justify-center">
                  <div className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-mono font-semibold text-center">
                  Art & Stories
                </h3>
              </div>
              <div className="space-y-4">
                <p className="text-sm font-mono text-muted-foreground text-center">
                  Drawing pads with music-reactive brushes
                </p>
                <div className="space-y-2">
                  <div className="placeholder-rect h-3 w-full flex items-center justify-center">
                    <span className="text-xs font-mono">Digital Canvas</span>
                  </div>
                  <div className="placeholder-rect h-3 w-2/3 flex items-center justify-center">
                    <span className="text-xs font-mono">Story Builder</span>
                  </div>
                  <div className="placeholder-rect h-3 w-4/5 flex items-center justify-center">
                    <span className="text-xs font-mono">Creative Gallery</span>
                  </div>
                </div>
                <button variant="wireframe" className="w-full">
                  Start Creating
                </button>
              </div>
            </div>

            {/* Community */}
            <div className="lofi-card hover:shadow-lg transition-shadow">
              <div>
                <div className="placeholder-circle h-16 w-16 mx-auto mb-4 flex items-center justify-center">
                  <div className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-mono font-semibold text-center">
                  Community
                </h3>
              </div>
              <div className="space-y-4">
                <p className="text-sm font-mono text-muted-foreground text-center">
                  Connect with advocates, families & supporters
                </p>
                <div className="space-y-2">
                  <div className="placeholder-rect h-3 w-full flex items-center justify-center">
                    <span className="text-xs font-mono">Support Groups</span>
                  </div>
                  <div className="placeholder-rect h-3 w-3/5 flex items-center justify-center">
                    <span className="text-xs font-mono">Forums</span>
                  </div>
                  <div className="placeholder-rect h-3 w-4/5 flex items-center justify-center">
                    <span className="text-xs font-mono">Events</span>
                  </div>
                </div>
                <button variant="wireframe" className="w-full">
                  Join Community
                </button>
              </div>
            </div>

            {/* Accessibility */}
            <div className="lofi-card hover:shadow-lg transition-shadow">
              <div>
                <div className="placeholder-circle h-16 w-16 mx-auto mb-4 flex items-center justify-center">
                  <div className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-mono font-semibold text-center">
                  Accessibility
                </h3>
              </div>
              <div className="space-y-4">
                <p className="text-sm font-mono text-muted-foreground text-center">
                  Adaptive interface & communication tools
                </p>
                <div className="space-y-2">
                  <div className="placeholder-rect h-3 w-full flex items-center justify-center">
                    <span className="text-xs font-mono">Text-to-Speech</span>
                  </div>
                  <div className="placeholder-rect h-3 w-1/2 flex items-center justify-center">
                    <span className="text-xs font-mono">AAC Support</span>
                  </div>
                  <div className="placeholder-rect h-3 w-3/4 flex items-center justify-center">
                    <span className="text-xs font-mono">Custom UI</span>
                  </div>
                </div>
                <button variant="wireframe" className="w-full">
                  Settings
                </button>
              </div>
            </div>

            {/* Resources */}
            <div className="lofi-card hover:shadow-lg transition-shadow">
              <div>
                <div className="placeholder-circle h-16 w-16 mx-auto mb-4 flex items-center justify-center">
                  <div className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-mono font-semibold text-center">
                  Resources
                </h3>
              </div>
              <div className="space-y-4">
                <p className="text-sm font-mono text-muted-foreground text-center">
                  Support guides, legal rights & therapy tools
                </p>
                <div className="space-y-2">
                  <div className="placeholder-rect h-3 w-full flex items-center justify-center">
                    <span className="text-xs font-mono">Legal Rights</span>
                  </div>
                  <div className="placeholder-rect h-3 w-5/6 flex items-center justify-center">
                    <span className="text-xs font-mono">Education Support</span>
                  </div>
                  <div className="placeholder-rect h-3 w-2/3 flex items-center justify-center">
                    <span className="text-xs font-mono">Therapy Tools</span>
                  </div>
                </div>
                <button variant="wireframe" className="w-full">
                  Browse Resources
                </button>
              </div>
            </div>

            {/* Voices */}
            <div className="lofi-card hover:shadow-lg transition-shadow">
              <div>
                <div className="placeholder-circle h-16 w-16 mx-auto mb-4 flex items-center justify-center">
                  <div className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-mono font-semibold text-center">
                  Voices
                </h3>
              </div>
              <div className="space-y-4">
                <p className="text-sm font-mono text-muted-foreground text-center">
                  Podcast platform & story sharing space
                </p>
                <div className="space-y-2">
                  <div className="placeholder-rect h-3 w-full flex items-center justify-center">
                    <span className="text-xs font-mono">Record Stories</span>
                  </div>
                  <div className="placeholder-rect h-3 w-4/5 flex items-center justify-center">
                    <span className="text-xs font-mono">Weekly Spotlight</span>
                  </div>
                  <div className="placeholder-rect h-3 w-1/2 flex items-center justify-center">
                    <span className="text-xs font-mono">
                      AI Editing/Featured Blogs
                    </span>
                  </div>
                </div>
                <button variant="wireframe" className="w-full">
                  Share Your Voice
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};