import { Clock } from "lucide-react";

const TimelineSection = () => {
  const moments = [
    {
      title: "أول لحظة سمعت صوتِك",
      description: "كان فيك شي بينسحب من القلب بلا ما يستأذن.",
    },
    {
      title: "أول صورة شفتها إلك",
      description: "الكون هدي دقيقة، كإنو عم يستوعب جمال جديد انضاف عليه.",
    },
    {
      title: "أول كلمة بيناتنا",
      description: "كانت بسيطة… بس خلت نهاري يعيد ترتيب حاله.",
    },
  ];

  return (
    <section id="timeline" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-slide-up">
            <Clock className="w-12 h-12 text-accent mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              خط الذكريات
            </h2>
          </div>

          <div className="relative">
            {/* الخط العمودي */}
            <div className="absolute right-8 top-0 bottom-0 w-0.5 bg-accent/30 hidden md:block" />

            <div className="space-y-12">
              {moments.map((moment, index) => (
                <div
                  key={index}
                  className="relative animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* النقطة على الخط */}
                  <div className="absolute right-6 w-5 h-5 bg-accent rounded-full border-4 border-background hidden md:block" />

                  <div className="md:mr-16 bg-card rounded-2xl p-6 shadow-elegant border border-accent/10 hover:shadow-gold transition-all duration-300">
                    <h3 className="text-xl font-bold text-accent mb-3">
                      {moment.title}
                    </h3>
                    <p className="text-lg text-foreground leading-relaxed">
                      {moment.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
