import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Rocket, Satellite, Globe, Zap, Camera, TrendingUp } from "lucide-react";

interface InfoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const InfoModal = ({ open, onOpenChange }: InfoModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center">🌍 Czym jest analiza danych satelitarnych?</DialogTitle>
          <DialogDescription className="text-center text-lg">
            Odkryj fascynujący świat kosmosu i technologii satelitarnej!
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-8">
          {/* Introduction */}
          <div className="bg-card p-6 rounded-lg border">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Rocket className="w-6 h-6 text-secondary" />
              Co to jest analiza danych satelitarnych?
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Analiza danych satelitarnych to proces badania obrazów i informacji przesyłanych przez satelity 
              krążące wokół Ziemi. Te kosmiczne "oczy" pozwalają nam obserwować naszą planetę z unikalnej perspektywy 
              i zrozumieć zachodzące na niej zmiany!
            </p>
          </div>

          {/* How satellites work */}
          <div className="bg-card p-6 rounded-lg border">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Satellite className="w-6 h-6 text-secondary" />
              Jak działają satelity?
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-muted-foreground mb-4">
                  Satelity to zaawansowane urządzenia wyposażone w kamery i sensory, które krążą wokół Ziemi 
                  na różnych wysokościach. Dzięki nim możemy:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Camera className="w-4 h-4 text-secondary mt-1" />
                    Robić zdjęcia powierzchni Ziemi
                  </li>
                  <li className="flex items-start gap-2">
                    <Globe className="w-4 h-4 text-secondary mt-1" />
                    Monitorować zmiany klimatu
                  </li>
                  <li className="flex items-start gap-2">
                    <TrendingUp className="w-4 h-4 text-secondary mt-1" />
                    Śledzić rozwój miast
                  </li>
                  <li className="flex items-start gap-2">
                    <Zap className="w-4 h-4 text-secondary mt-1" />
                    Przewidywać pogodę
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Ciekawostka! 🌟</h4>
                <p className="text-sm text-muted-foreground">
                  Satelita Landsat 1, uruchomiony w 1972 roku, był pierwszym satelitą Ziemi przeznaczonym 
                  do cywilnego monitorowania zasobów naturalnych. Od tego czasu technologia satelitarna 
                  rozwinęła się niesamowicie!
                </p>
              </div>
            </div>
          </div>

          {/* Why it matters */}
          <div className="bg-card p-6 rounded-lg border">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Globe className="w-6 h-6 text-secondary" />
              Dlaczego to ważne?
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 bg-secondary/10 rounded-lg">
                <h4 className="font-semibold mb-2">🌱 Ochrona środowiska</h4>
                <p className="text-sm text-muted-foreground">
                  Monitorowanie lasów, oceanów i dzikiej przyrody
                </p>
              </div>
              <div className="p-4 bg-secondary/10 rounded-lg">
                <h4 className="font-semibold mb-2">🌾 Rolnictwo</h4>
                <p className="text-sm text-muted-foreground">
                  Optymalizacja upraw i zarządzanie zasobami
                </p>
              </div>
              <div className="p-4 bg-secondary/10 rounded-lg">
                <h4 className="font-semibold mb-2">🏙️ Planowanie miast</h4>
                <p className="text-sm text-muted-foreground">
                  Projektowanie inteligentnych i zrównoważonych miast
                </p>
              </div>
              <div className="p-4 bg-secondary/10 rounded-lg">
                <h4 className="font-semibold mb-2">🌪️ Klęski żywiołowe</h4>
                <p className="text-sm text-muted-foreground">
                  Przewidywanie i reagowanie na katastrofy naturalne
                </p>
              </div>
              <div className="p-4 bg-secondary/10 rounded-lg">
                <h4 className="font-semibold mb-2">🧊 Zmiany klimatu</h4>
                <p className="text-sm text-muted-foreground">
                  Badanie globalnego ocieplenia i jego wpływu
                </p>
              </div>
              <div className="p-4 bg-secondary/10 rounded-lg">
                <h4 className="font-semibold mb-2">🔬 Badania naukowe</h4>
                <p className="text-sm text-muted-foreground">
                  Odkrywanie tajemnic naszej planety
                </p>
              </div>
            </div>
          </div>

          {/* Future perspectives */}
          <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-6 rounded-lg border">
            <h3 className="text-xl font-bold mb-4">🚀 Przyszłość technologii satelitarnej</h3>
            <p className="text-muted-foreground mb-4">
              Dzięki rozwojowi sztucznej inteligencji i machine learning, analiza danych satelitarnych 
              staje się coraz bardziej precyzyjna i automatyczna. W przyszłości będziemy mogli:
            </p>
            <ul className="grid sm:grid-cols-2 gap-2 text-muted-foreground">
              <li>• Przewidywać zmiany środowiska w czasie rzeczywistym</li>
              <li>• Automatycznie wykrywać problemy ekologiczne</li>
              <li>• Zarządzać zasobami na globalną skalę</li>
              <li>• Wspierać misje kosmiczne na inne planety</li>
            </ul>
          </div>

          {/* Call to action */}
          <div className="text-center p-6 bg-secondary/10 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Zostań ekspertem od danych satelitarnych! 🎯</h3>
            <p className="text-muted-foreground">
              Rozpocznij swoją przygodę z analizą danych satelitarnych już dziś. 
              Każdy obraz satelitarny to kawałek układanki pomagającej zrozumieć naszą planetę!
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};