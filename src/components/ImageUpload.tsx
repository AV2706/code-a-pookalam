import { useState, useRef, useCallback } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, X, Image as ImageIcon } from "lucide-react";
import { toast } from "sonner";

interface ImageItem {
  id: string;
  src: string;
  name: string;
}

interface ImageUploadProps {
  onImagesUploaded: (images: ImageItem[]) => void;
  images: ImageItem[];
  onRemoveImage: (id: string) => void;
}

export const ImageUpload = ({ onImagesUploaded, images, onRemoveImage }: ImageUploadProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFiles = useCallback((files: FileList) => {
    const newImages: ImageItem[] = [];
    
    Array.from(files).forEach((file) => {
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const newImage: ImageItem = {
            id: Date.now() + Math.random().toString(),
            src: e.target?.result as string,
            name: file.name,
          };
          newImages.push(newImage);
          
          if (newImages.length === files.length) {
            onImagesUploaded([...images, ...newImages]);
            toast(`Added ${newImages.length} image${newImages.length > 1 ? 's' : ''} to gallery!`);
          }
        };
        reader.readAsDataURL(file);
      }
    });
  }, [images, onImagesUploaded]);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFiles(files);
    }
  }, [handleFiles]);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFiles(files);
    }
  };

  return (
    <div className="space-y-4">
      <Card
        className={`border-2 border-dashed transition-all duration-300 hover:border-primary cursor-pointer onam-shadow ${
          isDragging ? 'border-primary bg-primary/5 scale-[1.02]' : 'border-border'
        }`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onClick={() => fileInputRef.current?.click()}
      >
        <div className="p-8 text-center space-y-4">
          <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
            <Upload className="w-8 h-8 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Upload Your Onam Images
            </h3>
            <p className="text-muted-foreground">
              Drag and drop your images here, or click to select files
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Supports JPG, PNG, GIF formats
            </p>
          </div>
          <Button variant="outline" className="gap-2">
            <ImageIcon className="w-4 h-4" />
            Choose Images
          </Button>
        </div>
      </Card>

      <input
        ref={fileInputRef}
        type="file"
        multiple
        accept="image/*"
        onChange={handleFileSelect}
        className="hidden"
      />

      {images.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {images.map((image) => (
            <Card key={image.id} className="relative group overflow-hidden gentle-shadow">
              <div className="aspect-square relative">
                <img
                  src={image.src}
                  alt={image.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <Button
                  size="sm"
                  variant="destructive"
                  className="absolute top-2 right-2 w-6 h-6 p-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  onClick={(e) => {
                    e.stopPropagation();
                    onRemoveImage(image.id);
                  }}
                >
                  <X className="w-3 h-3" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};