import { Button } from "@/components/ui/button";
import cryptoMockup from "@/assets/crypto-app-mockup.jpg";

const CryptoSection = () => {
  return (
    <section className="py-16 px-6 lg:px-8 bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Start your Crypto Trading Journey with Ease
            </h2>
            
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Enjoy seamless buy, sell and trade services alongside digital wallet options to enrich your crypto journey.
            </p>

            <Button 
              variant="secondary" 
              className="bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              Join Our Community →
            </Button>
          </div>

          {/* App Mockups */}
          <div className="relative">
            <div className="relative">
              <img 
                src={cryptoMockup}
                alt="Crypto Trading App Mockup"
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              />
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-2xl">📱</span>
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-xl">💎</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CryptoSection;