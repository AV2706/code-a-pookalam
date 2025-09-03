export const PookalamDesigns = () => {
  return (
    <div className="space-y-12">
      {/* Real Pookalam Images */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex justify-center animate-fade-in">
          <div className="relative w-80 h-80 rounded-full overflow-hidden onam-shadow">
            <img 
              src="/lovable-uploads/5fb88147-d7e3-4139-852d-1514a4c5c231.png"
              alt="Traditional Colorful Pookalam"
              className="w-full h-full object-cover floating-animation hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>
        
        <div className="flex justify-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="relative w-80 h-80 rounded-full overflow-hidden onam-shadow">
            <img 
              src="/lovable-uploads/c9ef2c62-f0e1-4e42-a091-8d6c5aad6ef1.png"
              alt="Stained Glass Style Pookalam"
              className="w-full h-full object-cover floating-animation hover:scale-110 transition-transform duration-500"
              style={{ animationDelay: '1s' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>
        
        <div className="flex justify-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="relative w-80 h-80 rounded-full overflow-hidden onam-shadow">
            <img 
              src="/lovable-uploads/0ee1ada3-b67a-4dcf-8065-a763ab4f6910.png"
              alt="Pixelated Modern Pookalam"
              className="w-full h-full object-cover floating-animation hover:scale-110 transition-transform duration-500"
              style={{ animationDelay: '2s' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>
      </div>

      {/* Decorative separator */}
      <div className="flex justify-center py-8">
        <div className="flex items-center gap-4">
          <div className="w-16 h-0.5 onam-gradient"></div>
          <span className="text-3xl">🌸</span>
          <div className="w-16 h-0.5 onam-gradient"></div>
        </div>
      </div>

      {/* SVG Interpretations */}
      <div className="space-y-4 text-center">
        <h3 className="text-2xl font-semibold text-foreground">Artistic Interpretations</h3>
        <p className="text-muted-foreground">Inspired by the traditional designs above</p>
      </div>

      {/* Pookalam Design 1 - Colorful Mandala */}
      <div className="flex justify-center animate-fade-in">
        <div className="relative w-80 h-80">
          <svg viewBox="0 0 200 200" className="w-full h-full floating-animation">
            {/* Center */}
            <circle cx="100" cy="100" r="8" fill="hsl(var(--nature-dark))" />
            <circle cx="100" cy="100" r="12" fill="hsl(var(--sunset-primary))" />
            
            {/* Inner petals - Orange/Yellow */}
            {Array.from({ length: 8 }).map((_, i) => (
              <g key={i} transform={`rotate(${i * 45} 100 100)`}>
                <ellipse cx="100" cy="80" rx="6" ry="18" fill="hsl(var(--onam-gold))" />
                <ellipse cx="100" cy="75" rx="4" ry="12" fill="hsl(var(--sunset-secondary))" />
              </g>
            ))}
            
            {/* Middle petals - Pink/Purple */}
            {Array.from({ length: 12 }).map((_, i) => (
              <g key={i} transform={`rotate(${i * 30} 100 100)`}>
                <ellipse cx="100" cy="65" rx="8" ry="22" fill="hsl(320 80% 70%)" />
                <ellipse cx="100" cy="60" rx="6" ry="16" fill="hsl(280 70% 65%)" />
              </g>
            ))}
            
            {/* Outer petals - Blue/Green */}
            {Array.from({ length: 16 }).map((_, i) => (
              <g key={i} transform={`rotate(${i * 22.5} 100 100)`}>
                <ellipse cx="100" cy="45" rx="10" ry="25" fill="hsl(var(--nature-primary))" />
                <ellipse cx="100" cy="40" rx="8" ry="20" fill="hsl(200 70% 60%)" />
              </g>
            ))}
            
            {/* Outermost ring - Red */}
            <circle cx="100" cy="100" r="95" fill="none" stroke="hsl(var(--sunset-primary))" strokeWidth="10" />
          </svg>
        </div>
      </div>

      {/* Pookalam Design 2 - Stained Glass Style */}
      <div className="flex justify-center animate-fade-in" style={{ animationDelay: '0.5s' }}>
        <div className="relative w-80 h-80">
          <svg viewBox="0 0 200 200" className="w-full h-full floating-animation" style={{ animationDelay: '1s' }}>
            {/* Outer ring */}
            <circle cx="100" cy="100" r="95" fill="hsl(var(--sunset-primary))" />
            <circle cx="100" cy="100" r="85" fill="hsl(var(--onam-gold))" />
            
            {/* Decorative border segments */}
            {Array.from({ length: 8 }).map((_, i) => (
              <g key={i} transform={`rotate(${i * 45} 100 100)`}>
                <rect x="95" y="15" width="10" height="15" fill="hsl(var(--nature-dark))" />
                <circle cx="100" cy="25" r="6" fill="hsl(var(--nature-primary))" />
              </g>
            ))}
            
            {/* Middle purple ring */}
            <circle cx="100" cy="100" r="70" fill="hsl(280 70% 50%)" />
            <circle cx="100" cy="100" r="60" fill="hsl(320 80% 60%)" />
            
            {/* Inner flower pattern */}
            {Array.from({ length: 8 }).map((_, i) => (
              <g key={i} transform={`rotate(${i * 45} 100 100)`}>
                <path 
                  d="M 100 60 Q 110 70 100 80 Q 90 70 100 60 Z" 
                  fill="hsl(var(--onam-gold))"
                  stroke="hsl(var(--sunset-primary))"
                  strokeWidth="1"
                />
              </g>
            ))}
            
            {/* Center */}
            <circle cx="100" cy="100" r="15" fill="hsl(var(--nature-dark))" />
            <circle cx="100" cy="100" r="8" fill="hsl(var(--onam-gold))" />
          </svg>
        </div>
      </div>

      {/* Pookalam Design 3 - Pixelated Modern */}
      <div className="flex justify-center animate-fade-in" style={{ animationDelay: '1s' }}>
        <div className="relative w-80 h-80">
          <svg viewBox="0 0 200 200" className="w-full h-full floating-animation" style={{ animationDelay: '2s' }}>
            {/* Background */}
            <rect width="200" height="200" fill="hsl(45 30% 85%)" />
            
            {/* Pixelated flower pattern */}
            {Array.from({ length: 20 }).map((_, row) =>
              Array.from({ length: 20 }).map((_, col) => {
                const x = col * 10;
                const y = row * 10;
                const centerX = 100;
                const centerY = 100;
                const distance = Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2);
                
                let color = 'hsl(45 30% 85%)';
                if (distance < 15) color = 'hsl(var(--nature-dark))';
                else if (distance < 30) color = 'hsl(var(--sunset-primary))';
                else if (distance < 45) color = 'hsl(320 80% 60%)';
                else if (distance < 60) color = 'hsl(280 70% 50%)';
                else if (distance < 75) color = 'hsl(var(--nature-primary))';
                else if (distance < 90) color = 'hsl(var(--onam-gold))';
                
                return (
                  <rect
                    key={`${row}-${col}`}
                    x={x}
                    y={y}
                    width="10"
                    height="10"
                    fill={color}
                    opacity={distance > 90 ? 0 : 1}
                  />
                );
              })
            )}
          </svg>
        </div>
      </div>
    </div>
  );
};