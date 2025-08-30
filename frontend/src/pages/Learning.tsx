import { useParams, Link, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoPlayer from "@/components/VideoPlayer";
import QAPanel from "@/components/QAPanel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, BookOpen } from "lucide-react";

const Learning = () => {
  const { topicId, subtopicId } = useParams();
  const navigate = useNavigate();

  // Mock data
  const topicData = {
    mathematics: {
      title: "Mathematics",
      subtopics: [
        {
          id: "algebra",
          title: "Introduction to Algebra",
          description: "Learn the basics of algebraic expressions and equations",
          duration: "10 minutes",
          keyPoints: [
            "Variables represent unknown values",
            "Coefficients are numbers multiplied by variables",
            "Like terms can be combined together",
            "Equations show equality between expressions",
          ],
        },
        {
          id: "geometry",
          title: "Basics of Geometry",
          description: "Shapes, angles, and theorems explained",
          duration: "12 minutes",
          keyPoints: [
            "Lines and angles",
            "Triangles and circles",
            "Pythagoras theorem",
            "Real-life applications",
          ],
        },
      ],
    },
    science: {
      title: "Science",
      subtopics: [
        {
          id: "photosynthesis",
          title: "Photosynthesis Process",
          description: "Understand how plants make their own food",
          duration: "8 minutes",
          keyPoints: [
            "Plants use sunlight, water, and CO2",
            "Chlorophyll captures light energy",
            "Glucose and oxygen are produced",
            "Process occurs in chloroplasts",
          ],
        },
        {
          id: "cells",
          title: "Cell Structure",
          description: "The building blocks of life",
          duration: "10 minutes",
          keyPoints: [
            "Cell membrane controls entry/exit",
            "Nucleus contains DNA",
            "Mitochondria produce energy",
            "Different cells for different functions",
          ],
        },
      ],
    },
  };

  const currentTopic = topicData[topicId as keyof typeof topicData];

  if (!currentTopic) {
    return <div className="p-8">Topic not found</div>;
  }

  // If no subtopic selected, show subtopic list
  if (!subtopicId) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Navbar />
        <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold mb-6">{currentTopic.title}</h1>
          <div className="grid gap-4">
            {currentTopic.subtopics.map((sub) => (
              <Card
                key={sub.id}
                className="cursor-pointer hover:shadow-lg transition"
                onClick={() => navigate(`/learning/${topicId}/${sub.id}`)}
              >
                <CardHeader>
                  <CardTitle>{sub.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{sub.description}</p>
                  <p className="text-sm mt-2 flex items-center gap-2">
                    <Clock className="h-4 w-4" /> {sub.duration}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Show subtopic details
  const currentSubtopic = currentTopic.subtopics.find((s) => s.id === subtopicId);

  if (!currentSubtopic) {
    return <div className="p-8">Subtopic not found</div>;
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold mb-2">{currentSubtopic.title}</h1>
            <p className="text-lg text-muted-foreground mb-4">
              {currentSubtopic.description}
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{currentSubtopic.duration}</span>
              </div>
              <div className="flex items-center gap-1">
                <BookOpen className="h-4 w-4" />
                <span>Beginner Level</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-6">
              <VideoPlayer title={currentSubtopic.title} />

              <Card className="animate-fade-in">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Key Learning Points</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {currentSubtopic.keyPoints.map((point, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mt-0.5">
                          <span className="text-xs font-medium text-primary">
                            {index + 1}
                          </span>
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
