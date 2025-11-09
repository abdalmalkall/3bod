import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Gift, Phone, Heart, Star, Moon, Sparkles } from "lucide-react";

const Promise = () => {
  const handleContact = () => {
    // Replace with actual WhatsApp/Viber link
    window.open("https://wa.me/1234567890", "_blank");
  };

  return (
    <div className="min-h-screen pb-24 pt-8 bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-blue-900/20 relative overflow-hidden">
      
      {/* Enhanced Animated Background Elements */}
      
      {/* Floating Hearts with different animations */}
      <div className="absolute inset-0 opacity-40">
        {[...Array(30)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-pink-400"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 28 + 8}px`,
              height: `${Math.random() * 28 + 8}px`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${Math.random() * 8 + 4}s`,
              animationName: 'float',
              animationIterationCount: 'infinite',
              animationTimingFunction: 'ease-in-out',
            }}
          />
        ))}
      </div>

      {/* Floating Stars with pulse effect */}
      <div className="absolute inset-0 opacity-50">
        {[...Array(25)].map((_, i) => (
          <Star
            key={i}
            className="absolute text-yellow-300"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 20 + 6}px`,
              height: `${Math.random() * 20 + 6}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 4 + 2}s`,
              animationName: 'pulse',
              animationIterationCount: 'infinite',
            }}
          />
        ))}
      </div>

      {/* Rotating Sparkles */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(20)].map((_, i) => (
          <Sparkles
            key={i}
            className="absolute text-blue-300"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 16 + 6}px`,
              height: `${Math.random() * 16 + 6}px`,
              animationDelay: `${Math.random() * 7}s`,
              animationDuration: `${Math.random() * 10 + 5}s`,
              animationName: 'spin',
              animationIterationCount: 'infinite',
            }}
          />
        ))}
      </div>

      {/* Animated Moon */}
      <div className="absolute top-8 right-8 opacity-25">
        <Moon className="w-24 h-24 text-yellow-200 animate-bounce" />
      </div>

      {/* Floating Circles */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-purple-400 to-pink-400"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 60 + 20}px`,
              height: `${Math.random() * 60 + 20}px`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${Math.random() * 12 + 6}s`,
              animationName: 'float',
              animationIterationCount: 'infinite',
              animationTimingFunction: 'ease-in-out',
              filter: 'blur(8px)',
            }}
          />
        ))}
      </div>

      {/* Moving Lines */}
      <div className="absolute inset-0 opacity-15">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-gradient-to-r from-transparent via-pink-300 to-transparent h-1"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 200 + 100}px`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${Math.random() * 6 + 3}s`,
              animationName: 'moveHorizontal',
              animationIterationCount: 'infinite',
              animationTimingFunction: 'linear',
            }}
          />
        ))}
      </div>

      {/* Pulsing Dots */}
      <div className="absolute inset-0 opacity-25">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 8 + 2}px`,
              height: `${Math.random() * 8 + 2}px`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 5 + 2}s`,
              animationName: 'pulse',
              animationIterationCount: 'infinite',
            }}
          />
        ))}
      </div>

      {/* Floating Diamonds */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-gradient-to-br from-cyan-400 to-blue-400 transform rotate-45"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 30 + 10}px`,
              height: `${Math.random() * 30 + 10}px`,
              animationDelay: `${Math.random() * 9}s`,
              animationDuration: `${Math.random() * 15 + 7}s`,
              animationName: 'float',
              animationIterationCount: 'infinite',
              animationTimingFunction: 'ease-in-out',
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Gift className="w-16 h-16 mx-auto mb-4 text-secondary animate-bounce" />
            <h1 className="text-4xl md:text-6xl font-bold text-gradient-gold mb-4 font-amiri">
              وعد للمستقبل
            </h1>
          </div>

          {/* Main Message Card */}
          <div className="relative mb-12">
            <Card className="bg-card/80 backdrop-blur-lg border-primary/40 p-8 md:p-12 relative z-10 shadow-2xl transform hover:scale-[1.01] transition-all duration-500">
              <div className="space-y-6 text-lg md:text-xl leading-relaxed font-amiri">
                <p className="text-foreground/90 text-right text-2xl md:text-3xl leading-loose">
                  انظر إلى قبري واقصصي عليّ حكايتك، وأنا لا أريد أن أراك حزينة أبداً
                </p>
                
                <p className="text-foreground/90 text-right text-xl md:text-2xl leading-loose">
                  كل عام أنتِ معي، وأعدكِ بأن المسافة ستنتهي، وفي النهاية سنكون في منزل واحد معاً
                </p>

                <div className="bg-gradient-romantic p-6 rounded-lg my-8 border-2 border-pink-300/50 shadow-lg">
                  <p className="text-foreground text-2xl md:text-3xl font-semibold text-center font-amiri leading-relaxed">
                    "المسافة مؤقتة، لكن حبي لكِ أبدي"
                  </p>
                </div>

                <p className="text-foreground/90 text-right text-xl md:text-2xl leading-loose">
                  أنتِ قلبي، روحي، وكل شيء في حياتي. كل لحظة بدونكِ تشبه الأبدية، 
                  لكن كل ثانية من محادثاتنا تملأ حياتي معنى وفرحاً
                </p>

                <p className="text-foreground/90 text-right text-xl md:text-2xl leading-loose">
                  أعدكِ يا حبيبتي أنه مهما بلغت الأميال بيننا، 
                  حبي سيجد دائماً طريقه إليكِ. قصتنا لم تُكتب بالمسافة، 
                  بل بقوة قلوبنا
                </p>

                {/* New Romantic Section */}
                <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 p-6 rounded-lg my-8 border border-purple-300/30">
                  <p className="text-foreground/90 text-right text-xl md:text-2xl leading-loose font-amiri">
                    "في عينيكِ وجدت بيتي، وفي قلبكِ وجدت سلامي، 
                    وفي حبكِ وجدت كل معاني الحياة"
                  </p>
                </div>

                <p className="text-foreground/90 text-right text-xl md:text-2xl leading-loose">
                  سأظل أحبكِ أكثر كل يوم، وسأجعل حياتكِ جنة على الأرض. 
                  هذا ليس مجرد وعد، بل هو قسم من قلبي
                </p>

                <div className="text-center pt-8">
                  <p className="text-2xl md:text-4xl font-bold text-gradient-romantic mb-4 font-amiri">
                    بكل حبي
                  </p>
                  <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-amiri">
                    ملكك للأبد ❤️
                  </p>
                </div>
              </div>
            </Card>
          </div>
          </div>
        </div>


      {/* Add custom animations */}
      <style >{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }
        
        @keyframes moveHorizontal {
          0% { transform: translateX(-100px); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(100px); opacity: 0; }
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
      `}</style>
    </div>
  );
};

export default Promise;