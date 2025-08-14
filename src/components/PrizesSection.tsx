import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const prizes = [
  {
    title: "Manager of the Season",
    amount: "₦200,000",
    subtitle: "Grand Prize",
    icon: "🏆",
    color: "prize-gold"
  },
  {
    title: "Manager of the week",
    amount: "₦4,500",
    subtitle: "1st place",
    icon: "🥇",
    color: "prize-gold"
  },
  {
    title: "",
    amount: "₦2,500",
    subtitle: "2nd place",
    icon: "🥈",
    color: "prize-silver"
  },
  {
    title: "",
    amount: "₦1,000",
    subtitle: "3rd place",
    icon: "🥉",
    color: "prize-bronze"
  }
];

const PrizesSection = () => {
  return (
    <section className="py-16 px-6 lg:px-8 bg-gradient-to-br from-secondary/30 to-background">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12">
          FPL Winning Prizes
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {prizes.map((prize, index) => (
            <Card key={index} className="relative overflow-hidden group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">{prize.icon}</div>
                
                <div className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
                  {prize.amount}
                </div>
                
                <div className="text-sm text-muted-foreground mb-1">
                  {prize.subtitle}
                </div>
                
                {prize.title && (
                  <div className="text-xs font-medium text-primary">
                    {prize.title}
                  </div>
                )}
              </CardContent>
              
              {/* Decorative gradient border */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </Card>
          ))}
        </div>

        <Button 
          variant="default" 
          className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:shadow-lg transition-all duration-300"
        >
          Join League →
        </Button>
      </div>
    </section>
  );
};

export default PrizesSection;