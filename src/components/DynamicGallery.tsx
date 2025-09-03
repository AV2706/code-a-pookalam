import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";

interface ImageItem {
  id: string;
  src: string;
  name: string;
}

interface DynamicGalleryProps {
  images: ImageItem[];
}

export const DynamicGallery = ({ images }: DynamicGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (images.length === 0) return;

    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setIsAnimating(false);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  if (images.length === 0) {
    return (
      <div className="min-h-[400px] flex items-center justify-center">
        <Card className="p-12 text-center gentle-shadow">
          <div className="w-24 h-24 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
              <span className="text-2xl">🌸</span>
            </div>
          </div>
          <h3 className="text-xl font-semibold text-foreground mb-2">
            Your Onam Gallery Awaits
          </h3>
          <p className="text-muted-foreground">
            Upload your beautiful Onam memories to see them come alive here
          </p>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Main Featured Image */}
      <Card className="overflow-hidden onam-shadow">
        <div className="relative h-96 md:h-[500px]">
          <img
            src={images[currentIndex]?.src}
            alt={images[currentIndex]?.name}
            className={`w-full h-full object-cover transition-all duration-500 ${
              isAnimating ? 'scale-110 opacity-80' : 'scale-100 opacity-100'
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
              <p className="text-sm text-gray-800 font-medium">
                {images[currentIndex]?.name}
              </p>
              <p className="text-xs text-gray-600">
                Image {currentIndex + 1} of {images.length}
              </p>
            </div>
          </div>
        </div>
      </Card>

      {/* Floating Thumbnails Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {images.map((image, index) => (
          <Card
            key={image.id}
            className={`overflow-hidden cursor-pointer transition-all duration-500 gentle-shadow ${
              index === currentIndex 
                ? 'ring-2 ring-primary scale-105 onam-shadow' 
                : 'hover:scale-105 hover:onam-shadow'
            } ${
              index % 2 === 0 ? 'floating-animation' : ''
            }`}
            style={{
              animationDelay: `${index * 0.5}s`,
            }}
            onClick={() => setCurrentIndex(index)}
          >
            <div className="aspect-square relative group">
              <img
                src={image.src}
                alt={image.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </div>
          </Card>
        ))}
      </div>

      {/* Decorative Elements */}
      <div className="flex justify-center space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-primary scale-125' 
                : 'bg-primary/30 hover:bg-primary/60'
            }`}
          />
        ))}
      </div>
    </div>
  );
};