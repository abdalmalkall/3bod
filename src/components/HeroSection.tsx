import { Button } from "@/components/ui/button";
import { Music } from "lucide-react";

const HeroSection = () => {
  const scrollToMusic = () => {
    document.getElementById('music')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-elegant"
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-primary/40 backdrop-blur-sm"></div>
      
      <div className="container mx-auto px-4 relative z-10 animate-fade-in">
        <div className="max-w-3xl mx-auto">
          <div className="bg-cream/95 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-elegant">
            <div className="text-center space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4">
                عيد ميلاد سعيد يا{" "}
                <span className="text-accent drop-shadow-gold">حبيبتي</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-secondary leading-relaxed">
                صرتي ١٨… وهاد العمر لابق عليكي متل الفرح لما يختار ملامحك.
              </p>

              <Button
                onClick={scrollToMusic}
                className="mt-8 bg-gradient-romantic text-accent hover:shadow-gold transition-all duration-300 text-lg px-8 py-6"
              >
                <Music className="ml-2 h-5 w-5" />
                استمعي للأغنية
              </Button>

              <div className="mt-8 pt-8 border-t border-accent/20">
                <p className="text-lg md:text-xl text-primary/90 leading-relaxed italic">
                  يا حلوتي… اليوم ما بيشبه غيرك. صرتي ١٨، بس حلاوتك سبقِت عمرك بكتير. 
                  بين الطفولة والشباب واقفة، وعم تقولي للعالم إنو الجمال ما إلو سن.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
