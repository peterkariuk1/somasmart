import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TopicCard from "@/components/TopicCard";
import { Input } from "@/components/ui/input";
import { Search, Calculator, Microscope, BookOpen, Globe } from "lucide-react";

const Topics = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const topics = [
  {
    id: 'mathematics',
    title: 'Mathematics',
    description: 'Algebra, Geometry, Statistics and more',
    icon: Calculator,
    color: 'bg-blue-100'
  },
  {
    id: 'science',
    title: 'Science',
    description: 'Biology, Chemistry, Physics fundamentals',
    icon: Microscope,
    color: 'bg-green-100'
  },
  {
    id: 'english',
    title: 'English',
    description: 'Grammar, Literature, Writing skills',
    icon: BookOpen,
    color: 'bg-purple-100'
  },
  {
    id: 'social-studies',
    title: 'Social Studies',
    description: 'History, Geography, Civics',
    icon: Globe,
    color: 'bg-orange-100'
  },
  {
    id: 'pretechnical-studies',
    title: 'Pretechnical Studies',
    description: 'Basic technical drawing, woodwork, metalwork',
    icon: Globe,
    color: 'bg-yellow-100'
  },
  {
    id: 'kiswahili',
    title: 'Kiswahili',
    description: 'Lugha ya taifa: fasihi, sarufi, na mawasiliano',
    icon: BookOpen,
    color: 'bg-red-100'
  },
  {
    id: 'integrated-science',
    title: 'Integrated Science',
    description: 'Introduction to scientific concepts across disciplines',
    icon: Microscope,
    color: 'bg-teal-100'
  },
  {
    id: 'agriculture',
    title: 'Agriculture',
    description: 'Crop production, livestock, soil science',
    icon: Globe,
    color: 'bg-green-200'
  },
  {
    id: 'religious-education',
    title: 'Religious Education',
    description: 'Christian, Islamic and moral teachings',
    icon: BookOpen,
    color: 'bg-indigo-100'
  }
];

  

  const filteredTopics = topics.filter(topic =>
    topic.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    topic.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleTopicClick = (topicId: string) => {
    navigate(`/learning/${topicId}`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-4xl font-bold text-foreground">
              Choose Your Subject
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Select a subject to start learning with video summaries and interactive Q&A
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative mb-8">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search for topics..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-12 text-lg rounded-2xl"
            />
          </div>

          {/* Topics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredTopics.map((topic) => (
              <TopicCard
                key={topic.id}
                title={topic.title}
                description={topic.description}
                icon={topic.icon}
                color={topic.color}
                onClick={() => handleTopicClick(topic.id)}
              />
            ))}
          </div>

          {filteredTopics.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">
                No topics found matching "{searchTerm}"
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Topics;