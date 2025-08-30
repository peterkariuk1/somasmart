import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface TopicCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  onClick: () => void;
}

const TopicCard = ({ title, description, icon: Icon, color, onClick }: TopicCardProps) => {
  return (
    <Card className="group cursor-pointer transition-all duration-300 hover:shadow-hover hover:scale-105 border-2 hover:border-primary">
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className={`p-4 rounded-2xl ${color} transition-all duration-300 group-hover:scale-110`}>
            <Icon className="h-8 w-8 text-primary" />
          </div>
          
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-foreground">{title}</h3>
            <p className="text-muted-foreground text-sm">{description}</p>
          </div>
          
          <Button 
            variant="outline" 
            size="sm" 
            onClick={onClick}
            className="mt-4 group-hover:bg-primary group-hover:text-primary-foreground"
          >
            Start Learning
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default TopicCard;