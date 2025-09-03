export const OnamDecorations = () => {
  return (
    <>
      {/* Floating Flower Decorations */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {/* Top flowers */}
        <div className="absolute top-10 left-10 w-8 h-8 text-4xl floating-animation opacity-60">
          🌼
        </div>
        <div className="absolute top-20 right-20 w-8 h-8 text-3xl floating-animation opacity-50" style={{ animationDelay: '1s' }}>
          🌻
        </div>
        <div className="absolute top-32 left-1/4 w-8 h-8 text-2xl floating-animation opacity-40" style={{ animationDelay: '2s' }}>
          🌺
        </div>
        
        {/* Middle flowers */}
        <div className="absolute top-1/3 right-10 w-8 h-8 text-3xl floating-animation opacity-50" style={{ animationDelay: '3s' }}>
          🌹
        </div>
        <div className="absolute top-1/2 left-16 w-8 h-8 text-2xl floating-animation opacity-60" style={{ animationDelay: '0.5s' }}>
          🌷
        </div>
        
        {/* Bottom flowers */}
        <div className="absolute bottom-20 right-1/4 w-8 h-8 text-4xl floating-animation opacity-40" style={{ animationDelay: '4s' }}>
          🌸
        </div>
        <div className="absolute bottom-32 left-20 w-8 h-8 text-3xl floating-animation opacity-55" style={{ animationDelay: '1.5s' }}>
          🏵️
        </div>
        
        {/* Leaves */}
        <div className="absolute top-1/4 right-1/3 w-8 h-8 text-2xl floating-animation opacity-30" style={{ animationDelay: '2.5s' }}>
          🍃
        </div>
        <div className="absolute bottom-1/3 left-1/3 w-8 h-8 text-3xl floating-animation opacity-35" style={{ animationDelay: '3.5s' }}>
          🌿
        </div>
      </div>

      {/* Decorative Corner Elements */}
      <div className="fixed top-0 left-0 w-32 h-32 pointer-events-none z-10">
        <div className="w-full h-full sunset-gradient rounded-br-full opacity-10"></div>
      </div>
      <div className="fixed top-0 right-0 w-32 h-32 pointer-events-none z-10">
        <div className="w-full h-full onam-gradient rounded-bl-full opacity-10"></div>
      </div>
      <div className="fixed bottom-0 left-0 w-32 h-32 pointer-events-none z-10">
        <div className="w-full h-full nature-gradient rounded-tr-full opacity-10"></div>
      </div>
      <div className="fixed bottom-0 right-0 w-32 h-32 pointer-events-none z-10">
        <div className="w-full h-full sunset-gradient rounded-tl-full opacity-10"></div>
      </div>
    </>
  );
};