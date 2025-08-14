import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FantasyBanner from "@/components/FantasyBanner";
import PrizesSection from "@/components/PrizesSection";
import StepsSection from "@/components/StepsSection";
import NotesSection from "@/components/NotesSection";
import CryptoSection from "@/components/CryptoSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FantasyBanner />
        <PrizesSection />
        <StepsSection />
        <NotesSection />
        <CryptoSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
