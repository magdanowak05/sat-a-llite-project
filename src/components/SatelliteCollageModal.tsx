import { useState, useRef } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload, Download, RotateCcw } from "lucide-react";
import { toast } from "sonner";

interface SatelliteCollageModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

interface ImageFile {
  file: File;
  url: string;
  timestamp: string;
}

export const SatelliteCollageModal = ({ open, onOpenChange }: SatelliteCollageModalProps) => {
  const [selectedImages, setSelectedImages] = useState<ImageFile[]>([]);
  const [satelliteSource, setSatelliteSource] = useState("");
  const [orbitType, setOrbitType] = useState("");
  const [collageUrl, setCollageUrl] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const extractTimestamp = (filename: string): string => {
    // Extract timestamp from yyyy-mm-dd hhmmss format
    const match = filename.match(/(\d{4}-\d{2}-\d{2})\s*(\d{6})/);
    if (match) {
      const [, date, time] = match;
      const formattedTime = `${time.substring(0, 2)}:${time.substring(2, 4)}:${time.substring(4, 6)}`;
      return `${date} ${formattedTime}`;
    }
    return "Unknown timestamp";
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    
    if (files.length > 4) {
      toast.error("Możesz wybrać maksymalnie 4 obrazy");
      return;
    }

    const imageFiles: ImageFile[] = files.map(file => ({
      file,
      url: URL.createObjectURL(file),
      timestamp: extractTimestamp(file.name)
    }));

    setSelectedImages(imageFiles);
    toast.success(`Wybrano ${files.length} obrazów satelitarnych`);
  };

  const createCollage = async () => {
    if (selectedImages.length < 2) {
      toast.error("Wybierz co najmniej 2 obrazy do utworzenia kolaży");
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const collageSize = 800;
    canvas.width = collageSize;
    canvas.height = collageSize;

    // Clear canvas with dark background
    ctx.fillStyle = "#1a1a2e";
    ctx.fillRect(0, 0, collageSize, collageSize);

    // Calculate grid layout
    const gridSize = Math.ceil(Math.sqrt(selectedImages.length));
    const cellSize = collageSize / gridSize;

    // Load and draw images
    const loadPromises = selectedImages.map((imageFile, index) => {
      return new Promise<void>((resolve) => {
        const img = new Image();
        img.onload = () => {
          const row = Math.floor(index / gridSize);
          const col = index % gridSize;
          const x = col * cellSize;
          const y = row * cellSize;

          // Draw image
          ctx.drawImage(img, x, y, cellSize, cellSize);

          // Add timestamp overlay
          ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
          ctx.fillRect(x, y + cellSize - 40, cellSize, 40);
          
          ctx.fillStyle = "#ffffff";
          ctx.font = "12px Arial";
          ctx.textAlign = "center";
          ctx.fillText(imageFile.timestamp, x + cellSize / 2, y + cellSize - 15);

          resolve();
        };
        img.src = imageFile.url;
      });
    });

    await Promise.all(loadPromises);

    // Add title
    ctx.fillStyle = "rgba(0, 0, 0, 0.8)";
    ctx.fillRect(0, 0, collageSize, 60);
    
    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 16px Arial";
    ctx.textAlign = "center";
    ctx.fillText(`Satelita: ${satelliteSource || "SENTINEL 2"} | Orbita: ${orbitType || "GEOSTACJONARNA"}`, collageSize / 2, 35);

    // Convert to blob and create URL
    canvas.toBlob((blob) => {
      if (blob) {
        const url = URL.createObjectURL(blob);
        setCollageUrl(url);
        toast.success("Kolaż został utworzony!");
      }
    });
  };

  const downloadCollage = () => {
    if (!collageUrl) return;
    
    const link = document.createElement("a");
    link.href = collageUrl;
    link.download = `satellite-collage-${Date.now()}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success("Kolaż został pobrany!");
  };

  const resetCollage = () => {
    setSelectedImages([]);
    setCollageUrl("");
    setSatelliteSource("");
    setOrbitType("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    toast.info("Wyczyszczono formularz");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center">🛰️ Kreator Kolaży Satelitarnych</DialogTitle>
          <DialogDescription className="text-center">
            Wybierz do 4 obrazów satelitarnych w formacie yyyy-mm-dd hhmmss i utwórz porównawczy kolaż
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* File upload section */}
          <div className="space-y-4">
            <Label htmlFor="imageFiles" className="text-lg font-semibold">
              Wybierz obrazy satelitarne
            </Label>
            <div className="flex gap-4">
              <Input
                ref={fileInputRef}
                id="imageFiles"
                type="file"
                multiple
                accept="image/*"
                onChange={handleFileSelect}
                className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:bg-secondary file:text-secondary-foreground"
              />
              <Button 
                onClick={() => fileInputRef.current?.click()} 
                variant="outline"
                className="shrink-0"
              >
                <Upload className="w-4 h-4 mr-2" />
                Wybierz pliki
              </Button>
            </div>
          </div>

          {/* Satellite info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="satellite">Źródło danych satelitarnych</Label>
              <Input
                id="satellite"
                value={satelliteSource}
                onChange={(e) => setSatelliteSource(e.target.value)}
                placeholder="np. SENTINEL 2, Landsat 8"
              />
            </div>
            <div>
              <Label htmlFor="orbit">Typ orbity</Label>
              <Input
                id="orbit"
                value={orbitType}
                onChange={(e) => setOrbitType(e.target.value)}
                placeholder="np. GEOSTACJONARNA, POLARNA"
              />
            </div>
          </div>

          {/* Selected images preview */}
          {selectedImages.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Wybrane obrazy ({selectedImages.length}/4)</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {selectedImages.map((imageFile, index) => (
                  <div key={index} className="space-y-2">
                    <img
                      src={imageFile.url}
                      alt={`Satellite image ${index + 1}`}
                      className="w-full h-32 object-cover rounded-lg border"
                    />
                    <p className="text-xs text-center text-muted-foreground">
                      {imageFile.timestamp}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action buttons */}
          <div className="flex gap-4 justify-center">
            <Button 
              onClick={createCollage} 
              disabled={selectedImages.length < 2}
              className="bg-secondary hover:bg-secondary/80"
            >
              Utwórz kolaż
            </Button>
            <Button onClick={resetCollage} variant="outline">
              <RotateCcw className="w-4 h-4 mr-2" />
              Wyczyść
            </Button>
          </div>

          {/* Canvas for collage creation */}
          <canvas ref={canvasRef} className="hidden" />

          {/* Collage result */}
          {collageUrl && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-center">Twój kolaż satelitarny</h3>
              <div className="flex justify-center">
                <img
                  src={collageUrl}
                  alt="Satellite collage"
                  className="max-w-full h-auto rounded-lg border shadow-lg"
                />
              </div>
              <div className="flex justify-center">
                <Button onClick={downloadCollage}>
                  <Download className="w-4 h-4 mr-2" />
                  Pobierz kolaż
                </Button>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};