import { Heart, Camera, Music, Coffee, Sparkles } from "lucide-react";

const AboutSection = () => {
  const hobbies = [
    { icon: Camera, text: "تصوير عن بعد" },
    { icon: Music, text: "موسيقى" },
    { icon: Coffee, text: "شاي" },
    { icon: Sparkles, text: "تفاصيل صغيرة" },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto animate-slide-up">
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-elegant border border-accent/10">
            <div className="text-center mb-8">
              <Heart className="w-12 h-12 text-accent mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">
                عنّك شوي…
              </h2>
            </div>

            <div className="space-y-6 text-center">
              <p className="text-lg md:text-xl text-foreground leading-relaxed">
                في شي بملامحك بيخلي اليوم ألطف. يمكن لأنك دايمًا طالعة بهدوء، 
                وبنفس الوقت عندك هالهيبة الهادية. صرتي ١٨، وكل سنة كانت تزيد فيكي 
                لمعة بتخلي أي حدا يشوفك يقول "هيي هاي اللي كانت السبب إنو نهاري صار أحلى."
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-8 border-t border-accent/20">
                {hobbies.map((hobby, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center gap-3 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                  >
                    <hobby.icon className="w-8 h-8 text-accent" />
                    <span className="text-sm text-foreground">{hobby.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
