import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BookOpen, Video, MessageCircle, Users, ArrowRight, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-illustration.jpg";

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Video,
      title: "Video Summaries",
      description: "Quick, engaging video content that breaks down complex topics into digestible lessons."
    },
    {
      icon: MessageCircle,
      title: "Interactive Q&A",
      description: "Get instant answers to your questions with our AI-powered learning assistant."
    },
    {
      icon: BookOpen,
      title: "Comprehensive Subjects",
      description: "Cover all your Junior Secondary subjects from Math to Social Studies."
    },
    {
      icon: Users,
      title: "Built for Kenya",
      description: "Curriculum-aligned content specifically designed for Kenyan learners."
    }
  ];

  const handleStartLearning = () => {
    navigate("/topics");
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Learn Smarter with{" "}
                  <span className="text-primary">SomaSmart</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-xl">
                  Master any Junior Secondary topic in minutes with our video summaries 
                  and interactive Q&A. Built for Kenyan learners, by educators.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="hero" 
                  size="xl" 
                  onClick={handleStartLearning}
                  className="flex items-center space-x-2"
                >
                  <span>Start Learning</span>
                  <ArrowRight className="h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="xl"
                  className="flex items-center space-x-2"
                >
                  <Video className="h-5 w-5" />
                  <span>Watch Demo</span>
                </Button>
              </div>
              
              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Free to use</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Curriculum aligned</span>
                </div>
              </div>
            </div>
            
            <div className="relative animate-scale-in">
              <div className="relative">
                <img 
                  src={heroImage} 
                  alt="Students learning with SomaSmart"
                  className="w-full h-auto rounded-2xl shadow-hover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-secondary py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Why Choose SomaSmart?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                We've designed the perfect learning experience for Kenyan students
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="text-center group hover:shadow-card transition-all duration-300">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex justify-center">
                      <div className="p-3 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-colors">
                        <feature.icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="bg-gradient-to-r from-primary to-primary-hover rounded-2xl p-8 lg:p-16 text-center text-white">
            <div className="max-w-3xl mx-auto space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Ready to Transform Your Learning?
              </h2>
              <p className="text-xl opacity-90">
                Join thousands of Kenyan students who are already learning smarter with SomaSmart
              </p>
              <Button 
                variant="secondary" 
                size="xl" 
                onClick={handleStartLearning}
                className="bg-white text-primary hover:bg-white/90"
              >
                Get Started Now
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
