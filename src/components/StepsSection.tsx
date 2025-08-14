import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: 1,
    title: "Download the app on your mobile and sign up",
    color: "bg-purple-500"
  },
  {
    number: 2,
    title: "Fill out this form to receive the code for the Rebble Fantasy Premier League",
    color: "bg-purple-600"
  },
  {
    number: 3,
    title: "Prepare your team, join the league, start winning!",
    color: "bg-purple-700"
  }
];

const StepsSection = () => {
  return (
    <section className="py-16 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Steps Content */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8">
              Join Rebble FPL in 3 steps
            </h2>

            <div className="space-y-6">
              {steps.map((step) => (
                <div key={step.number} className="flex items-start space-x-4">
                  <div className={`w-8 h-8 ${step.color} text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0`}>
                    {step.number}
                  </div>
                  <p className="text-foreground leading-relaxed pt-1">
                    {step.title}
                  </p>
                </div>
              ))}
            </div>

            <Button 
              variant="default" 
              className="mt-8 bg-gradient-to-r from-primary to-accent text-primary-foreground hover:shadow-lg transition-all duration-300"
            >
              Get Started
            </Button>
          </div>

          {/* Player Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-purple-100 to-pink-50 p-8">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center">
                <div className="text-6xl">⚽</div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 text-yellow-400 text-2xl animate-pulse">⭐</div>
              <div className="absolute bottom-4 left-4 text-yellow-400 text-xl animate-pulse">✨</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepsSection;