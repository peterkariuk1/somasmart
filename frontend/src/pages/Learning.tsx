import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoPlayer from "@/components/VideoPlayer";
import QAPanel from "@/components/QAPanel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, BookOpen } from "lucide-react";

const Learning = () => {
  const { topicId } = useParams();

  // Mock data - would come from API in real app
  const topicData = {
    mathematics: {
      title: 'Introduction to Algebra',
      description: 'Learn the basics of algebraic expressions and equations',
      duration: '10 minutes',
      keyPoints: [
        'Variables represent unknown values',
        'Coefficients are numbers multiplied by variables',
        'Like terms can be combined together',
        'Equations show equality between expressions'
      ]
    },
    science: {
      title: 'Photosynthesis Process',
      description: 'Understand how plants make their own food',
      duration: '8 minutes',
      keyPoints: [
        'Plants use sunlight, water, and CO2',
        'Chlorophyll captures light energy',
        'Glucose and oxygen are produced',
        'Process occurs in chloroplasts'
      ]
    },
    english: {
      title: 'Essay Writing Structure',
      description: 'Master the fundamentals of essay composition',
      duration: '12 minutes',
      keyPoints: [
        'Introduction with clear thesis statement',
        'Body paragraphs with supporting evidence',
        'Transitions connect ideas smoothly',
        'Conclusion summarizes main points'
      ]
    },
    'social-studies': {
      title: 'Kenya\'s Independence',
      description: 'The journey to independence in 1963',
      duration: '15 minutes',
      keyPoints: [
        'Colonial period under British rule',
        'Rise of independence movements',
        'Key leaders like Jomo Kenyatta',
        'December 12, 1963 - Independence Day'
      ]
    }
  };

  const currentTopic = topicData[topicId as keyof typeof topicData] || topicData.mathematics;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Topic Header */}
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-foreground mb-2">
              {currentTopic.title}
            </h1>
            <p className="text-lg text-muted-foreground mb-4">
              {currentTopic.description}
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>{currentTopic.duration}</span>
              </div>
              <div className="flex items-center space-x-1">
                <BookOpen className="h-4 w-4" />
                <span>Beginner Level</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content Area */}
            <div className="lg:col-span-2 space-y-6">
              {/* Video Player */}
              <VideoPlayer title={currentTopic.title} />
              
              {/* Summary Card */}
              <Card className="animate-fade-in">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Key Learning Points</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {currentTopic.keyPoints.map((point, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mt-0.5">
                          <span className="text-xs font-medium text-primary">{index + 1}</span>
                        </div>
                        <p className="text-sm text-foreground">{point}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <QAPanel />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Learning;