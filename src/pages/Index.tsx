import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PookalamDesigns } from "@/components/PookalamDesigns";
import { OnamDecorations } from "@/components/OnamDecorations";
import { Sparkles, Heart } from "lucide-react";
import onamHeroBg from "@/assets/onam-hero-bg.jpg";

const Index = () => {

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
                Experience the beauty of traditional pookalam designs in vibrant, animated glory
              </p>
              <div className="flex justify-center pt-8">
                <Button 
                  size="lg" 
                  className="onam-gradient text-white hover:scale-105 transition-transform duration-300 onam-shadow gap-2"
                  onClick={() => {
                    document.getElementById('pookalam-section')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <Heart className="w-5 h-5" />
                  View Pookalam Gallery
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pookalam Gallery Section */}
      <section id="pookalam-section" className="relative z-10 py-20 px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-slide-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Traditional Pookalam Designs
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the sacred geometry and vibrant beauty of Kerala's traditional flower arrangements
            </p>
          </div>
          <PookalamDesigns />
        </div>
      </section>

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