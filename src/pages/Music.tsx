import { Card } from "@/components/ui/card";
import { Music as MusicIcon, Heart, Star } from "lucide-react";

const songs = [
  {
    id: 1,
    title: "يا ريحانة قلبي 🌸",
    description: "ريحتك بتعطّر أيامي متل نسمة من حماة وقت الغروب",
    lyrics: "والله يا ريحانة، كل ما بشمّ ريحتك بحس الدني كلها بتتغير، بتذكري دايماً بجو الحارة الحمصية وبرودة المي على حجر السقاية. ريحتك أحلى من ريحة الياسمين بعيد الصيف ❤️",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 2,
    title: "والله اسمِك لحالو بيكفي 🌹",
    description: "ريحة طيبة، ووجه أطيب، وضحكتِك بتروّق البال",
    lyrics: "يا حبيبتي، اسمك ريحانة… والله شو بحب هالاسم! كل ما بدك تحكي معي، اسمك لحاله بيعطيني طاقة وحب. ضحكتِك بتعمل معجزات، بتخلي هموم الدني كلها تطير! 😍",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 3,
    title: "يا عيوني انتي 💫",
    description: "كل ما تحكي كلمة بحس الدني صارت أخفّ",
    lyrics: "بعيونك يا حبيبتي، بقدر أشوف السما كلها. صوتك أحلى من أغنية العندليب، وكلماتك أحلى من قصيدة نزار قباني. بحس الدني كلها بتتوقف لما تبتسمي، وبترجع تدور لما تضحكي! 🌟",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 4,
    title: "ريحانة يا وردة الحارة 🌷",
    description: "يا سِكّرة، الله يخلّيكِ إلي وما يحرمني من طلتِك الحلوة",
    lyrics: "يا وردة من ورود حماة، يا أحلى من قمر على سور المدينة القديمة. طلتك يا ريحانة بتسكر الدني كلها، وبتحليها أكثر من أطيب حلاوة جبنية من حماة. الله لا يحرمني من هالطلّة الحلوة! 🍯",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  

];

const Music = () => {
  return (
    <div className="min-h-screen pb-24 pt-8 bg-gradient-to-br from-rose-50 to-pink-100 dark:from-purple-950 dark:to-pink-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="relative inline-block">
            <MusicIcon className="w-16 h-16 mx-auto mb-4 text-pink-600 animate-float" />
            <Heart className="w-8 h-8 absolute -top-2 -right-2 text-red-500 animate-pulse" />
            <Star className="w-6 h-6 absolute -bottom-1 -left-2 text-yellow-500 animate-spin" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gradient-gold mb-4 font-amiri">
            أغاني لريحانة قلبي 🌸
          </h1>
        
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {songs.map((song, index) => (
            <Card 
              key={song.id}
              className="bg-white/80 dark:bg-purple-900/60 backdrop-blur-sm border-2 border-pink-200 dark:border-pink-700 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-6 md:p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-gradient-to-br from-pink-500 to-rose-600 text-white px-5 py-3 rounded-full font-bold text-2xl shadow-lg">
                    {song.id}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-gradient-romantic mb-2 font-amiri">
                      {song.title}
                    </h3>
                    <p className="text-lg text-gray-700 dark:text-gray-300 font-amiri">
                      {song.description}
                    </p>
                  </div>
                </div>

                <div className="aspect-video mb-6 rounded-xl overflow-hidden shadow-lg border-2 border-pink-100 dark:border-pink-800">
                  <iframe
                    width="100%"
                    height="100%"
                    src={song.embedUrl}
                    title={song.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>

                <div className="bg-gradient-to-r from-pink-50 to-rose-50 dark:from-purple-800 dark:to-pink-800 p-6 rounded-lg border border-pink-200 dark:border-pink-600">
                  <p className="text-gray-800 dark:text-gray-200 text-lg md:text-xl leading-loose italic font-amiri text-right">
                    {song.lyrics}
                  </p>
                </div>

                {/* Decorative elements */}
                <div className="flex justify-center mt-6 space-x-2">
                  {[...Array(3)].map((_, i) => (
                    <Heart
                      key={i}
                      className="w-5 h-5 text-pink-500 animate-pulse"
                      style={{ animationDelay: `${i * 0.3}s` }}
                    />
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Footer message */}
        <div className="text-center mt-12">
     
        </div>
      </div>
    </div>
  );
};

export default Music;