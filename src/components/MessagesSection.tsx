import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircleHeart } from "lucide-react";
import { toast } from "sonner";

const MessagesSection = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      text: "كبرتي لـ١٨، بس ضحكتك بعدها قادرة تغيّر مزاج نهار كامل. فيكي براءة صغيرة مبينة من بين الشعر، وفيكي نضج عم يلمع وعم يقول إنو سنينك الجاية رح تكون غير.",
      author: "من القلب",
      time: "الآن",
    },
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      setMessages([
        ...messages,
        {
          text: message,
          author: "أنتِ",
          time: "للتو",
        },
      ]);
      toast.success("تمّ إضافة رسالتك بنجاح 💝");
      setMessage("");
    }
  };

  return (
    <section id="messages" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-slide-up">
            <MessageCircleHeart className="w-12 h-12 text-accent mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              كلمات من القلب
            </h2>
            <h2 className="text-3xl md:text-4xl text-accent mx-auto mb-4">
             بحبك يا هبله
            </h2>
          </div>

          <div className="space-y-6">
            {messages.map((msg, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 shadow-elegant border border-accent/10 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <p className="text-lg text-foreground leading-relaxed mb-4">
                  {msg.text}
                </p>
                <div className="flex justify-between items-center text-sm text-muted-foreground">
                  <span className="text-accent">— {msg.author}</span>
                  <span>{msg.time}</span>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};

export default MessagesSection;
