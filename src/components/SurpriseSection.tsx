import { Gift } from "lucide-react";

const SurpriseSection = () => {
  return (
    <section id="surprise" className="py-20 bg-gradient-elegant relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/30 backdrop-blur-sm" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-cream/95 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-elegant animate-slide-up">
            <div className="text-center mb-8">
              <Gift className="w-16 h-16 text-accent mx-auto mb-6" />
              <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
                المفاجأة الكبيرة
              </h2>
            </div>

            <div className="space-y-6 text-center">
              <p className="text-lg md:text-xl text-primary leading-relaxed">
                اليوم إنتي ١٨… عمر واقف بين ضحكة كبيرة وطفولة عم تقول "بعدني هون شوي".
              </p>
              
              <p className="text-lg md:text-xl text-primary leading-relaxed">
                ويمكن ما التقينا، بس بين كلمة وكلمة كنتي عم تصيري أقرب.
              </p>
              
              <p className="text-lg md:text-xl text-primary leading-relaxed">
                في ملامحك شي بيسحب القلب بلا إذن، وفي صوتك — حتى لو من بعيد — طيبة بتخلّي الدنيا تخفّف قسوتها.
              </p>

              <div className="my-8 pt-6 border-t border-accent/20">
                <p className="text-lg md:text-xl text-secondary leading-relaxed">
                  يا رب تكون هالسنة بداية خطوات ثابتة، وأحلام عم تكبر على كيفك، وراحة ما بتنقص.
                </p>
              </div>

              <div className="bg-primary/10 rounded-2xl p-6 mt-8">
                <p className="text-xl md:text-2xl text-accent font-bold italic">
                  وإذا بدي لخص كل شي…<br />
                  كبرتي، بس لسا الجميل جوّاتك عم يسبق عمرك.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SurpriseSection;
