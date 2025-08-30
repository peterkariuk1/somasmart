import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen, Home, MessageCircle, User } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-primary">SomaSmart</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            <Button
              variant={isActive("/") ? "default" : "ghost"}
              size="sm"
              asChild
            >
              <Link to="/" className="flex items-center space-x-2">
                <Home className="h-4 w-4" />
                <span>Home</span>
              </Link>
            </Button>
            
            <Button
              variant={isActive("/topics") ? "default" : "ghost"}
              size="sm"
              asChild
            >
              <Link to="/topics" className="flex items-center space-x-2">
                <BookOpen className="h-4 w-4" />
                <span>Topics</span>
              </Link>
            </Button>
            
            <Button
              variant={isActive("/my-learning") ? "default" : "ghost"}
              size="sm"
              asChild
            >
              <Link to="/my-learning" className="flex items-center space-x-2">
                <User className="h-4 w-4" />
                <span>My Learning</span>
              </Link>
            </Button>
            
            <Button
              variant={isActive("/qa") ? "default" : "ghost"}
              size="sm"
              asChild
            >
              <Link to="/qa" className="flex items-center space-x-2">
                <MessageCircle className="h-4 w-4" />
                <span>Q&A</span>
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon">
              <BookOpen className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;