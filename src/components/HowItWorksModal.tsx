import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { CheckCircle, Upload, Settings, Image, Download } from "lucide-react";

interface HowItWorksModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const HowItWorksModal = ({ open, onOpenChange }: HowItWorksModalProps) => {
  const steps = [
    {
      icon: <Upload className="w-8 h-8 text-secondary" />,
      title: "Krok 1: Wybierz obrazy satelitarne",
      description: "Wybierz 2-4 obrazy satelitarne z twojego komputera. Upewnij się, że nazwy plików zawierają datę i czas w formacie yyyy-mm-dd hhmmss (np. '2024-03-15 143052.jpg').",
      tips: [
        "Wybieraj obrazy z tego samego obszaru geograficznego",
        "Najlepsze rezultaty uzyskasz z obrazami z różnych okresów czasowych",
        "Obsługiwane formaty: JPG, PNG, GIF"
      ]
    },
    {
      icon: <Settings className="w-8 h-8 text-secondary" />,
      title: "Krok 2: Wprowadź informacje o satelicie",
      description: "Podaj źródło danych satelitarnych (np. SENTINEL 2, Landsat 8) oraz typ orbity (np. GEOSTACJONARNA, POLARNA). Te informacje będą wyświetlone na twoim kolażu.",
      tips: [
        "Popularne satelity: SENTINEL 2, Landsat 8, MODIS",
        "Główne typy orbit: GEOSTACJONARNA, POLARNA, SŁONECZNO-SYNCHRONICZNA",
        "Informacje te pomogą innym zrozumieć źródło danych"
      ]
    },
    {
      icon: <Image className="w-8 h-8 text-secondary" />,
      title: "Krok 3: Generuj kolaż",
      description: "Kliknij przycisk 'Utwórz kolaż', aby automatycznie połączyć wybrane obrazy w jedną kompozycję. Program automatycznie wyciągnie daty z nazw plików i utworzy siatę porównawczą.",
      tips: [
        "Algorytm automatycznie układa obrazy w logicznej siatce",
        "Każdy obraz będzie podpisany datą i czasem",
        "Tytuł kolaży będzie zawierał informacje o satelicie"
      ]
    },
    {
      icon: <Download className="w-8 h-8 text-secondary" />,
      title: "Krok 4: Pobierz i analizuj",
      description: "Po utworzeniu kolaży możesz go pobrać i używać do analizy zmian zachodzących w czasie. Porównaj różne okresy i odkryj fascynujące zmiany!",
      tips: [
        "Kolaż jest zapisywany w wysokiej rozdzielczości",
        "Możesz używać kolaży do prezentacji i raportów",
        "Dziel się swoimi odkryciami z innymi!"
      ]
    }
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center">🛠️ Jak to działa?</DialogTitle>
          <DialogDescription className="text-center text-lg">
            Przewodnik krok po kroku do tworzenia kolaży satelitarnych
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-8">
          {/* Introduction */}
          <div className="bg-gradient-to-r from-secondary/20 to-accent/20 p-6 rounded-lg border">
            <h3 className="text-xl font-bold mb-4">📋 Przegląd procesu</h3>
            <p className="text-muted-foreground">
              Tworzenie kolaży satelitarnych to prosty proces, który pozwala porównać zmiany zachodzące 
              w określonym obszarze geograficznym w różnych okresach czasu. Dzięki temu możesz obserwować 
              zmiany środowiska, rozwój miast, czy sezonowe transformacje krajobrazu.
            </p>
          </div>

          {/* Steps */}
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div key={index} className="bg-card p-6 rounded-lg border">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    {step.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground mb-4">{step.description}</p>
                    
                    <div className="bg-secondary/10 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-secondary" />
                        Wskazówki:
                      </h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {step.tips.map((tip, tipIndex) => (
                          <li key={tipIndex} className="flex items-start gap-2">
                            <span className="text-secondary mt-1">•</span>
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* File naming convention */}
          <div className="bg-card p-6 rounded-lg border">
            <h3 className="text-xl font-bold mb-4">📝 Konwencja nazewnictwa plików</h3>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Aby program mógł automatycznie wyciągnąć informacje o czasie z nazw plików, 
                upewnij się, że są one nazwane zgodnie z poniższą konwencją:
              </p>
              
              <div className="bg-primary/10 p-4 rounded-lg font-mono text-center">
                <strong>yyyy-mm-dd hhmmss.rozszerzenie</strong>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-secondary/10 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-secondary">✅ Poprawne przykłady:</h4>
                  <ul className="text-sm space-y-1 font-mono">
                    <li>2024-03-15 143052.jpg</li>
                    <li>2024-01-10 090000.png</li>
                    <li>2023-12-25 235959.tiff</li>
                  </ul>
                </div>
                
                <div className="bg-destructive/10 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-destructive">❌ Niepoprawne przykłady:</h4>
                  <ul className="text-sm space-y-1 font-mono">
                    <li>obraz1.jpg</li>
                    <li>satelita_marzec.png</li>
                    <li>15-03-2024.jpg</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Best practices */}
          <div className="bg-gradient-to-r from-accent/20 to-primary/20 p-6 rounded-lg border">
            <h3 className="text-xl font-bold mb-4">🌟 Najlepsze praktyki</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                  Używaj obrazów o podobnej rozdzielczości
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                  Wybieraj obrazy z regularnych odstępów czasowych
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                  Upewnij się, że obrazy pokazują ten sam obszar
                </li>
              </ul>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                  Dokumentuj źródło i parametry obrazów
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                  Zapisuj metadata dla przyszłej analizy
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                  Dziel się wynikami z społecznością
                </li>
              </ul>
            </div>
          </div>

          {/* Call to action */}
          <div className="text-center p-6 bg-secondary/10 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Gotowy do rozpoczęcia? 🚀</h3>
            <p className="text-muted-foreground">
              Teraz, gdy znasz już proces, możesz przejść do zakładki "WYPRÓBUJ" 
              i utworzyć swój pierwszy kolaż satelitarny!
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};