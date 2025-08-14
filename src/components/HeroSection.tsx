import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative py-16 lg:py-24 px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
          Win up to{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            ₦500,000
          </span>{" "}
          in the Rebble<br />
          Fantasy Premier League!
        </h1>
        
        <p className="text-lg lg:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Stand a chance to win exciting prizes every game week during the 2024/2025 Premier League season!
        </p>

        <Button 
          size="lg" 
          className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 px-8 py-6 text-lg font-semibold"
        >
          Join League →
        </Button>
      </div>

      {/* Decorative gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
    </section>
  );
};

export default HeroSection;