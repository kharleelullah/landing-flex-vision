import fantasyHero from "@/assets/fantasy-hero.jpg";

const FantasyBanner = () => {
  return (
    <section className="py-8 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-secondary to-accent/30 p-1">
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-purple-100 to-pink-50">
            <img 
              src={fantasyHero}
              alt="Fantasy Premier League Banner with Players"
              className="w-full h-64 lg:h-80 object-cover mix-blend-multiply"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20" />
            
            {/* Fantasy Logo Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="flex items-center justify-center space-x-3 mb-2">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-lg">
                    <span className="text-2xl">⚽</span>
                  </div>
                  <span className="text-3xl lg:text-4xl font-bold text-white drop-shadow-lg">
                    Fantasy
                  </span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-yellow-300 text-2xl">⭐</span>
                  <span className="text-white font-semibold drop-shadow">Premier League</span>
                  <span className="text-yellow-300 text-2xl">⭐</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FantasyBanner;