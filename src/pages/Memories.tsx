import { Card } from "@/components/ui/card";
import { Heart, Sparkles, Music, Camera } from "lucide-react";

// استيراد الصور من مجلد assets
import image1 from "@/assets/234ab091-dd40-441b-9e55-be9d6e9c9b30.jpeg";
import image2 from "@/assets/a270a6db-e96d-43a9-bfca-101770afa47a.jpeg";
import image3 from "@/assets/7092356c-5882-49c8-b249-c3b24a54f3fe.jpeg";
import image4 from "@/assets/adc3c17e-1e58-410a-9eb4-57a1b63e04ba.jpeg";

const loveMoments = [
  {
    id: 1,
    title: "لحظة الانجذان الأولى 💫",
    image: image1,
    caption: "من أول مرة شفتكِ، عرفت إنه في شي خاص بينا. كان في نظرة في عيونكِ خلت قلبي يرفرف مثل الفراشة 🌸",
  },
  {
    id: 2,
    title: "",
    image: image2,
    caption: "ضحكتكِ يا ريحانة بتعمل معي سحر. كل ما أسمعها بتنسيني هموم الدنيا كلها وبتخلي العالم يضاء قدامي ✨",
  },
  {
    id: 3,
    title: "",
    image: image3,
    caption: "كل ما بتفكري فيكِ، بحس إني عم بشم ريحة الياسمين. حنين لقلبكِ الطيب وروحكِ الجميلة 🌹",
  },
  {
    id: 4,
    title: "الاحتواء والأمان 🤗",
    image: image4,
    caption: "معكِ بحس إني في بيتي. بحس بالأمان والراحة، وكإن كل شي في مكانه الصحيح ❤️",
  }
];

const LoveJourney = () => {
  return (
    <div className="min-h-screen pb-24 pt-8 bg-gradient-to-br from-purple-900 via-pink-800 to-rose-900" dir="rtl">
      
      {/* خلفية متحركة رومانسية */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(20)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-pink-300 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${Math.random() * 6 + 3}s`,
            }}
          />
        ))}
        {[...Array(15)].map((_, i) => (
          <Sparkles
            key={i}
            className="absolute text-yellow-200 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* الهيدر */}
        <div className="text-center mb-12">
          <div className="relative inline-block mb-6">
            <div className="relative">
              <Heart className="w-20 h-20 mx-auto text-pink-400 animate-pulse" />
              <Music className="w-8 h-8 absolute -top-2 -right-2 text-purple-300 animate-bounce" />
              <Camera className="w-6 h-6 absolute -bottom-2 -left-2 text-blue-300 animate-spin" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-amiri">
            يا ريحانة قلبي 🌸
          </h1>
          <p className="text-2xl text-pink-200 font-amiri mb-4">
            رحلة انجذان قلبي إليكِ
          </p>
          <div className="max-w-2xl mx-auto bg-gradient-to-r from-pink-600/50 to-rose-600/50 rounded-full p-3 backdrop-blur-sm border border-pink-400/30">
            <p className="text-lg font-amiri text-white">
              "كل شي فيكِ بيجننني... من صوتكِ لضحكتكِ لنظرتكِ ❤️"
            </p>
          </div>
        </div>

        {/* البطاقات الرئيسية */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {loveMoments.map((moment, index) => (
            <Card 
              key={moment.id} 
              className="bg-white/10 backdrop-blur-lg border-2 border-pink-400/50 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 group animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* الصورة */}
              <div className="relative overflow-hidden">
                <img 
                  src={moment.image} 
                  alt={moment.title}
                  className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              {/* المحتوى */}
              <div className="p-6">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 font-amiri text-center">
                  {moment.title}
                </h3>
                
                <p className="text-white/90 text-xl leading-loose font-amiri text-center mb-6">
                  {moment.caption}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* رسالة ختامية */}
        <div className="max-w-4xl mx-auto mt-16">
          <Card className="bg-gradient-to-r from-pink-600/80 via-rose-600/80 to-pink-600/80 text-white p-8 text-center backdrop-blur-lg border-2 border-white/30">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-amiri">
              يا أحلى ريحانة في الدنيا 🌸
            </h2>
            <p className="text-2xl leading-loose font-amiri mb-6">
              كل شي فيكِ بيجننني... من صوتكِ الحلو، لضحكتكِ العذبة، 
              لنظرتكِ الدافئة، لقلبكِ الطيب. ما في شي فيكِ إلا وهو 
              أحلى من الثاني ❤️
            </p>
          </Card>
        </div>

        {/* تأثير قلوب متحركة إضافية */}
        <div className="fixed bottom-4 left-4 opacity-60">
          <Heart className="w-12 h-12 text-pink-400 animate-bounce" />
        </div>
        <div className="fixed top-4 right-4 opacity-50">
          <Sparkles className="w-10 h-10 text-yellow-300 animate-spin" />
        </div>
      </div>
    </div>
  );
};

export default LoveJourney;