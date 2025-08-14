import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const notes = [
  "You can join only one Gameweek 1 to Gameweek 38 of the official Premier League season",
  "Players will be able to transfer out and transfer in one player. Players are fined 4 points when they transfer and 4 points when they use auto captain, so their captain gets x2 points. Only one transfer is allowed per week",
  "Once you sign up for this game, a pop-up box will show to set-up your account",
  "We start on Gameweek 1 and on the eve of Gameweek 38 based on the PL 100 point system starts while rewarding to the players who make the best gw play strategy"
];

const NotesSection = () => {
  return (
    <section className="py-16 px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl lg:text-3xl font-bold text-center text-foreground">
              Key things to note
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {notes.map((note, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-foreground leading-relaxed">{note}</p>
              </div>
            ))}
            
            <div className="pt-6 text-center">
              <Button 
                variant="default" 
                className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:shadow-lg transition-all duration-300"
              >
                Join League →
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default NotesSection;