import { useState } from "react";
import { Button } from "@/components/ui/button";
import SpaceParticles from "@/components/SpaceParticles";
import { SatelliteCollageModal } from "@/components/SatelliteCollageModal";
import { InfoModal } from "@/components/InfoModal";
import { HowItWorksModal } from "@/components/HowItWorksModal";
import spaceBackground from "@/assets/space-background.jpg";
import satelliteDish from "@/assets/satellite-dish.png";

const Index = () => {
  const [collageModalOpen, setCollageModalOpen] = useState(false);
  const [infoModalOpen, setInfoModalOpen] = useState(false);
  const [howItWorksModalOpen, setHowItWorksModalOpen] = useState(false);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${spaceBackground})` }}
      />
      
      {/* Overlay gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background/60" />
      
      {/* Space particles animation */}
      <SpaceParticles />
      
      {/* Satellite dish decoration */}
      <img 
        src={satelliteDish} 
        alt="Satellite dish" 
        className="absolute bottom-0 left-0 w-48 h-48 opacity-80"
      />
      
      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          {/* Main title */}
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-bold text-foreground drop-shadow-2xl">
              Sat-A-Llite
            </h1>
            <p className="text-xl md:text-2xl text-foreground/90 font-medium drop-shadow-lg">
              Twoje miejsce do analizy danych satelitarnych
            </p>
          </div>
          
          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              variant="space" 
              size="lg"
              onClick={() => setCollageModalOpen(true)}
              className="w-full sm:w-auto min-w-48"
            >
              WYPRÓBUJ
            </Button>
            
            <Button 
              variant="space" 
              size="lg"
              onClick={() => setHowItWorksModalOpen(true)}
              className="w-full sm:w-auto min-w-48"
            >
              JAK TO DZIAŁA?
            </Button>
            
            <Button 
              variant="space" 
              size="lg"
              onClick={() => setInfoModalOpen(true)}
              className="w-full sm:w-auto min-w-64"
            >
              CZYM JEST ANALIZA DANYCH SATELITARNYCH?
            </Button>
          </div>
          
          {/* Incentive text for young users */}
          <div className="mt-12 space-y-4">
            <div className="bg-card/10 backdrop-blur-sm rounded-2xl p-6 border border-secondary/20">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                🚀 Zostań ekspertem kosmosu! 
              </h2>
              <p className="text-foreground/80 text-lg leading-relaxed">
                Odkryj tajemnice naszej planety widzianej z kosmosu. Twórz niesamowite kolaże satelitarne, 
                analizuj zmiany środowiska i dołącz do nowej generacji badaczy przestrzeni kosmicznej!
              </p>
            </div>
            
            <div className="grid sm:grid-cols-3 gap-4 mt-8">
              <div className="bg-secondary/10 backdrop-blur-sm rounded-xl p-4 border border-secondary/20">
                <div className="text-2xl mb-2">🌍</div>
                <h3 className="font-semibold text-foreground">Obserwuj Ziemię</h3>
                <p className="text-sm text-foreground/70">Z perspektywy satelitów</p>
              </div>
              
              <div className="bg-secondary/10 backdrop-blur-sm rounded-xl p-4 border border-secondary/20">
                <div className="text-2xl mb-2">🔬</div>
                <h3 className="font-semibold text-foreground">Analizuj zmiany</h3>
                <p className="text-sm text-foreground/70">W czasie rzeczywistym</p>
              </div>
              
              <div className="bg-secondary/10 backdrop-blur-sm rounded-xl p-4 border border-secondary/20">
                <div className="text-2xl mb-2">🎓</div>
                <h3 className="font-semibold text-foreground">Naucz się nowych rzeczy</h3>
                <p className="text-sm text-foreground/70">O naszej planecie</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Modals */}
      <SatelliteCollageModal 
        open={collageModalOpen} 
        onOpenChange={setCollageModalOpen} 
      />
      <InfoModal 
        open={infoModalOpen} 
        onOpenChange={setInfoModalOpen} 
      />
      <HowItWorksModal 
        open={howItWorksModalOpen} 
        onOpenChange={setHowItWorksModalOpen} 
      />
    </div>
  );
};

export default Index;
