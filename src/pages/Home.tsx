import { Button } from "@/components/ui/button";
import { CountdownTimer } from "@/components/CountdownTimer";
import { Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-love.jpg";

const Home = () => {
  const navigate = useNavigate();
  // Set your beloved's birthday date here (year, month-1, day)
  const birthdayDate = new Date(2025, 11, 25); // Example: December 25, 2025

  return (
    <div className="min-h-screen pb-8 sm:pb-12 md:pb-24">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden px-3 sm:px-4">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-15 sm:opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        
        <div className="relative z-10 container mx-auto px-3 sm:px-4 text-center">
          {/* Heart Icon */}
          <Heart className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-4 sm:mb-5 md:mb-6 text-primary animate-float" />
          
          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-5 md:mb-6 animate-fade-in">
            <span className="text-gradient-romantic font-amiri block mb-2 sm:mb-3">حبيبتي</span>
            <span className="text-gradient-gold font-amiri text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">مرتي ام مراد</span>
          </h1>

          {/* Call Image Section */}
          <div className="max-w-xs sm:max-w-md md:max-w-2xl mx-auto mb-8 sm:mb-10 md:mb-12 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-card/40 backdrop-blur-sm border border-primary/20">
            <div className="mb-3 sm:mb-4">
              <img 
                src={heroImage}
                alt="Our video calls"
                className="rounded-lg sm:rounded-xl shadow-lg sm:shadow-2xl w-full animate-glow"
              />
            </div>
            <p className="text-base sm:text-lg md:text-xl text-foreground/90 italic font-amiri leading-relaxed sm:leading-loose px-2">
              "هكذا يبدو الحب... الشاشات تفرقنا، لكن القلوب تبقى غير مكسورة"
            </p>
          </div>

          {/* CTA Button */}
          <Button
            onClick={() => navigate("/memories")}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-base sm:text-lg md:text-xl px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-glow font-amiri font-bold w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto"
          >
            اكبسي هون
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;