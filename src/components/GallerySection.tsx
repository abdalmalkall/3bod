import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Image as ImageIcon } from "lucide-react";

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // صور تجريبية - يمكن استبدالها بصور حقيقية
  const images = [
    "./public/0e6cf217-b650-45f2-958c-261dc2f6bbe0.jpg",
    "./public/82eed783-860e-45e1-af5d-f04e32814f05.jpg",
    "./public/b48f7785-a367-429d-8890-7c41441f5ac4.jpg",
    "./public/bca0b6c9-dfa4-4e7d-8dc5-768f5538161c.jpg",
    "./public/eb4b2abb-8401-4cda-a2d1-5e43c719feba.jpg",
    "./public/roro.png",
  ];

  return (
    <section id="gallery" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-slide-up">
            <ImageIcon className="w-12 h-12 text-accent mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              لحظات من القلب
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              لحظات بعيون بعيدة… بس كلها قريبة من القلب.
            </p>
            <p className="text-base md:text-lg text-accent mt-4 italic">
              ١٨ مرة عم قول لحالي "شو هالحلوة؟" و١٨ مرة عم حسّ إنو الدنيا بتلين شوي بس لأني شفت صورتك هلأ.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image}
                  alt={`صورة ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-romantic opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-0">
          {selectedImage && (
            <img
              src={selectedImage}
              alt="صورة مكبرة"
              className="w-full h-auto rounded-2xl"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default GallerySection;
