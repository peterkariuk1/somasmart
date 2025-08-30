import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Play, Pause, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface VideoPlayerProps {
  title: string;
  videoUrl?: string;
}

const VideoPlayer = ({ title, videoUrl }: VideoPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <Card className="w-full animate-fade-in">
      <CardHeader>
        <CardTitle className="text-xl text-center">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="relative aspect-video bg-navy-light rounded-b-2xl overflow-hidden">
          {/* Video Placeholder */}
          <div className="absolute inset-0 bg-gradient-to-br from-navy-light to-navy/20 flex items-center justify-center">
            <div className="text-center space-y-4">
              <div className="text-6xl text-navy/30">📹</div>
              <p className="text-navy font-medium">Video content will be displayed here</p>
            </div>
          </div>
          
          {/* Video Controls */}
          <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={togglePlay}
                  className="text-white hover:bg-white/20"
                >
                  {isPlaying ? (
                    <Pause className="h-5 w-5" />
                  ) : (
                    <Play className="h-5 w-5" />
                  )}
                </Button>
                
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="text-white hover:bg-white/20"
                >
                  <Volume2 className="h-5 w-5" />
                </Button>
              </div>
              
              <div className="text-white text-sm">
                0:00 / 10:30
              </div>
            </div>
            
            {/* Progress Bar */}
            <div className="mt-2 h-1 bg-white/30 rounded-full overflow-hidden">
              <div className="h-full bg-primary w-1/3 rounded-full"></div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default VideoPlayer;