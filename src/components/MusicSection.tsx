import { Music2 } from "lucide-react";

const MusicSection = () => {
  return (
    <section id="music" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto animate-slide-up">
          <div className="text-center mb-12">
            <Music2 className="w-12 h-12 text-accent mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              موسيقى للأمسية
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              هاد المكان للأغاني اللي بتشبّه هاللحظة. اضغطي على أي مقطع، وكل شي رح يصير ألطف.
            </p>
          </div>

          <div className="bg-card rounded-3xl p-8 shadow-elegant border border-accent/10">
            <div className="aspect-video rounded-xl overflow-hidden bg-muted/50 flex items-center justify-center">
              {/* يمكن استبدال هذا برابط يوتيوب حقيقي */}
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/aSMxHAnOh6I"
                title="أغنية خاصة"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            
            <p className="text-center text-muted-foreground mt-6 italic">
              القائمة عم تتجهّز… بس المهم إنو الأغاني اللي بسمعها أنا هالوقت، موجهة إلك.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MusicSection;
