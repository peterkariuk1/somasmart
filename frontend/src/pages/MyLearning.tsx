import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { BookOpen, Clock, CheckCircle, Play } from "lucide-react";

const MyLearning = () => {
  const learningProgress = [
    {
      subject: "Mathematics",
      topic: "Introduction to Algebra",
      progress: 75,
      timeSpent: "45 minutes",
      status: "In Progress"
    },
    {
      subject: "Science",
      topic: "Photosynthesis Process",
      progress: 100,
      timeSpent: "30 minutes",
      status: "Completed"
    },
    {
      subject: "English",
      topic: "Essay Writing Structure",
      progress: 40,
      timeSpent: "20 minutes",
      status: "In Progress"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-4xl font-bold text-foreground">
              My Learning Progress
            </h1>
            <p className="text-xl text-muted-foreground">
              Track your learning journey and continue where you left off
            </p>
          </div>

          {/* Progress Cards */}
          <div className="space-y-6">
            {learningProgress.map((item, index) => (
              <Card key={index} className="hover:shadow-card transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">{item.topic}</CardTitle>
                      <p className="text-muted-foreground">{item.subject}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      {item.status === "Completed" ? (
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      ) : (
                        <Play className="h-5 w-5 text-primary" />
                      )}
                      <span className={`text-sm font-medium ${
                        item.status === "Completed" ? "text-green-500" : "text-primary"
                      }`}>
                        {item.status}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span>{item.progress}%</span>
                    </div>
                    <Progress value={item.progress} className="h-2" />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{item.timeSpent}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <BookOpen className="h-4 w-4" />
                        <span>Video Lesson</span>
                      </div>
                    </div>
                    
                    <Button variant="outline" size="sm">
                      {item.status === "Completed" ? "Review" : "Continue"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Empty State */}
          {learningProgress.length === 0 && (
            <div className="text-center py-12">
              <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Start Your Learning Journey
              </h3>
              <p className="text-muted-foreground mb-6">
                Begin learning any topic and track your progress here
              </p>
              <Button onClick={() => window.location.href = '/topics'}>
                Browse Topics
              </Button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MyLearning;