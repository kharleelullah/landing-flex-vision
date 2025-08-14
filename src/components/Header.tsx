import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full py-4 px-6 lg:px-8 bg-background/95 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <div className="text-2xl font-bold text-primary">Rebble</div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
            Contact Us
          </a>
          <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
            FPL
          </a>
          <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
            Join Our Community
          </a>
        </nav>

        {/* Download Button */}
        <Button variant="default" className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:shadow-lg transition-all duration-300">
          📱 Download App
        </Button>
      </div>
    </header>
  );
};

export default Header;