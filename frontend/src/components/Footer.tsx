import { Link } from "react-router-dom";
import { BookOpen } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo and Copyright */}
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <BookOpen className="h-6 w-6 text-primary" />
            <span className="text-lg font-semibold text-primary">SomaSmart</span>
          </div>
          
          <div className="text-center md:text-left">
            <p className="text-muted-foreground text-sm">
              © 2025 SomaSmart. Empowering learners across Kenya.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/topics" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Topics
            </Link>
            <Link to="/qa" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Q&A
            </Link>
            <Link to="/my-learning" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              My Learning
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;