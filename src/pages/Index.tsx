import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ImageUpload } from "@/components/ImageUpload";
import { DynamicGallery } from "@/components/DynamicGallery";
import { OnamDecorations } from "@/components/OnamDecorations";
import { Sparkles, Heart, Camera } from "lucide-react";
import onamHeroBg from "@/assets/onam-hero-bg.jpg";

interface ImageItem {
  id: string;
  src: string;
  name: string;
}

const Index = () => {
  const [images, setImages] = useState<ImageItem[]>([]);
  const [activeSection, setActiveSection] = useState<'upload' | 'gallery'>('upload');

  const handleImagesUploaded = (newImages: ImageItem[]) => {
    setImages(newImages);
    if (newImages.length > 0) {
      setActiveSection('gallery');
    }
  };

  const handleRemoveImage = (id: string) => {
    setImages(images.filter(img => img.id !== id));
  };

  return (
    <div className="min-h-screen bg-background relative">
      <OnamDecorations />
      
      {/* Hero Section */}
      <div className="relative">
        <div 
          className="h-screen bg-cover bg-center bg-no-repeat relative"
          style={{ backgroundImage: `url(${onamHeroBg})` }}
        >
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="text-center space-y-6 px-4 animate-slide-in-up">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Sparkles className="w-8 h-8 text-onam-gold animate-gentle-pulse" />
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold onam-gradient bg-clip-text text-transparent">
                  Onam Gallery
                </h1>
                <Sparkles className="w-8 h-8 text-onam-gold animate-gentle-pulse" />
              </div>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                Share the joy and beauty of Kerala's harvest festival through your cherished memories
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                <Button 
                  size="lg" 
                  className="onam-gradient text-white hover:scale-105 transition-transform duration-300 onam-shadow gap-2"
                  onClick={() => {
                    setActiveSection('upload');
                    document.getElementById('upload-section')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <Camera className="w-5 h-5" />
                  Upload Images
                </Button>
                {images.length > 0 && (
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 hover:scale-105 transition-all duration-300 gap-2"
                    onClick={() => {
                      setActiveSection('gallery');
                      document.getElementById('gallery-section')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    <Heart className="w-5 h-5" />
                    View Gallery ({images.length})
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Pills */}
      <div className="sticky top-4 z-50 flex justify-center px-4 py-4">
        <Card className="p-2 gentle-shadow bg-white/95 backdrop-blur-sm">
          <div className="flex gap-2">
            <Button
              variant={activeSection === 'upload' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setActiveSection('upload')}
              className={activeSection === 'upload' ? 'onam-gradient text-white' : ''}
            >
              Upload Images
            </Button>
            <Button
              variant={activeSection === 'gallery' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setActiveSection('gallery')}
              className={activeSection === 'gallery' ? 'onam-gradient text-white' : ''}
            >
              Gallery ({images.length})
            </Button>
          </div>
        </Card>
      </div>

      {/* Upload Section */}
      {activeSection === 'upload' && (
        <section id="upload-section" className="relative z-10 py-20 px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4 animate-slide-in-up">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Share Your Onam Memories
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Upload your beautiful Onam photos and watch them come alive in a dynamic, festive gallery
              </p>
            </div>
            <ImageUpload 
              onImagesUploaded={handleImagesUploaded}
              images={images}
              onRemoveImage={handleRemoveImage}
            />
          </div>
        </section>
      )}

      {/* Gallery Section */}
      {activeSection === 'gallery' && (
        <section id="gallery-section" className="relative z-10 py-20 px-4">
          <div className="max-w-7xl mx-auto space-y-8">
            <div className="text-center space-y-4 animate-slide-in-up">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Your Onam Gallery
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Experience your memories with gentle animations inspired by the festive spirit of Onam
              </p>
            </div>
            <DynamicGallery images={images} />
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="relative z-10 py-12 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-2">
              <span className="text-2xl">🌺</span>
              <p className="text-lg font-semibold text-foreground">
                Celebrating Onam with Love & Memories
              </p>
              <span className="text-2xl">🌺</span>
            </div>
            <p className="text-muted-foreground">
              May your festival be filled with joy, prosperity, and beautiful moments
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;