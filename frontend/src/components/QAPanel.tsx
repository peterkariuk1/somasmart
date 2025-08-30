import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, MessageCircle, Bot } from "lucide-react";

interface QAMessage {
  id: number;
  type: 'question' | 'answer';
  content: string;
  timestamp: Date;
}

const QAPanel = () => {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState<QAMessage[]>([
    {
      id: 1,
      type: 'question',
      content: 'What is photosynthesis?',
      timestamp: new Date(Date.now() - 300000)
    },
    {
      id: 2,
      type: 'answer',
      content: 'Photosynthesis is the process by which plants use sunlight, water, and carbon dioxide to produce glucose and oxygen. This process occurs in the chloroplasts of plant cells.',
      timestamp: new Date(Date.now() - 295000)
    }
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;

    const newQuestion: QAMessage = {
      id: messages.length + 1,
      type: 'question',
      content: question,
      timestamp: new Date()
    };

    const newAnswer: QAMessage = {
      id: messages.length + 2,
      type: 'answer',
      content: `Thank you for your question: "${question}". This is a sample answer. In a real implementation, this would connect to an AI service to provide accurate educational responses.`,
      timestamp: new Date(Date.now() + 2000)
    };

    setMessages(prev => [...prev, newQuestion]);
    setQuestion("");

    // Simulate AI response delay
    setTimeout(() => {
      setMessages(prev => [...prev, newAnswer]);
    }, 2000);
  };

  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center space-x-2">
          <MessageCircle className="h-5 w-5 text-primary" />
          <span>Q&A Assistant</span>
        </CardTitle>
      </CardHeader>
      
      <CardContent className="flex-1 flex flex-col space-y-4 p-4">
        {/* Messages */}
        <ScrollArea className="flex-1 h-64">
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === 'question' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl ${
                    message.type === 'question'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary text-secondary-foreground'
                  }`}
                >
                  {message.type === 'answer' && (
                    <div className="flex items-center space-x-2 mb-2">
                      <Bot className="h-4 w-4 text-primary" />
                      <span className="text-xs font-medium text-primary">AI Assistant</span>
                    </div>
                  )}
                  <p className="text-sm">{message.content}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        {/* Input Form */}
        <form onSubmit={handleSubmit} className="flex space-x-2">
          <Input
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ask a question about this topic..."
            className="flex-1 rounded-2xl"
          />
          <Button type="submit" size="icon" className="rounded-2xl">
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default QAPanel;