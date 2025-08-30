import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QAPanel from "@/components/QAPanel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, TrendingUp, Clock } from "lucide-react";

const QA = () => {
  const popularQuestions = [
    {
      question: "What is the difference between speed and velocity?",
      subject: "Physics",
      answers: 12,
      timeAgo: "2 hours ago"
    },
    {
      question: "How do you solve quadratic equations?",
      subject: "Mathematics",
      answers: 8,
      timeAgo: "4 hours ago"
    },
    {
      question: "What are the main causes of the Mau Mau uprising?",
      subject: "Social Studies",
      answers: 15,
      timeAgo: "6 hours ago"
    },
    {
      question: "How does photosynthesis work in plants?",
      subject: "Biology",
      answers: 10,
      timeAgo: "1 day ago"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-4xl font-bold text-foreground">
              Q&A Hub
            </h1>
            <p className="text-xl text-muted-foreground">
              Ask questions, get instant answers, and help fellow learners
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Q&A Panel */}
            <div className="lg:col-span-2">
              <QAPanel />
            </div>

            {/* Popular Questions Sidebar */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    <span>Popular Questions</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {popularQuestions.map((item, index) => (
                    <div key={index} className="p-4 bg-secondary rounded-xl hover:bg-secondary/80 transition-colors cursor-pointer">
                      <h4 className="font-medium text-foreground mb-2 text-sm leading-relaxed">
                        {item.question}
                      </h4>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span className="bg-primary/10 text-primary px-2 py-1 rounded-lg">
                          {item.subject}
                        </span>
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center space-x-1">
                            <MessageCircle className="h-3 w-3" />
                            <span>{item.answers}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-3 w-3" />
                            <span>{item.timeAgo}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default QA;