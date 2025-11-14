import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

interface PasswordGateProps {
  onSuccess: () => void;
}

const PasswordGate = ({ onSuccess }: PasswordGateProps) => {
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // كلمة السر القوية
  const correctPassword = "1";

  // التحقق من المصادقة عند تحميل المكون
  useEffect(() => {
    const authStatus = localStorage.getItem("birthday-authenticated");
    const authTime = localStorage.getItem("birthday-auth-time");
    
    if (authStatus === "true" && authTime) {
      // التحقق إذا مر أكثر من 24 ساعة على المصادقة
      const timeDiff = Date.now() - parseInt(authTime);
      const twentyFourHours = 24 * 60 * 60 * 1000;
      
      if (timeDiff < twentyFourHours) {
        setIsAuthenticated(true);
        onSuccess();
      } else {
        // انتهت صلاحية المصادقة بعد 24 ساعة
        localStorage.removeItem("birthday-authenticated");
        localStorage.removeItem("birthday-auth-time");
        toast.info("انتهت جلستك، يرجى إدخال كلمة المرور مرة أخرى");
      }
    }
  }, [onSuccess]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (attempts >= 5) {
      toast.error("لقد تجاوزت عدد المحاولات المسموحة، حاولي مرة أخرى بعد 5 دقائق");
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      if (password === correctPassword) {
        const currentTime = Date.now();
        localStorage.setItem("birthday-authenticated", "true");
        localStorage.setItem("birthday-auth-time", currentTime.toString());
        setIsAuthenticated(true);
        toast.success("أهلاً وسهلاً... المفاجأة بانتظارك 🎉");
        setTimeout(onSuccess, 500);
      } else {
        const newAttempts = attempts + 1;
        setAttempts(newAttempts);
        
        if (newAttempts >= 5) {
          // حفظ وقت تجاوز المحاولات
          localStorage.setItem("last-failed-attempt", Date.now().toString());
          toast.error(`تم تجاوز عدد المحاولات المسموحة! حاولي مرة أخرى بعد 5 دقائق`);
        } else if (newAttempts >= 3) {
          toast.error(`كلمة المرور غير صحيحة (المحاولة ${newAttempts}/5)`);
        } else {
          toast.error("كلمة المرور غير صحيحة، حاولي مرة تانية");
        }
      }
      setIsLoading(false);
      setPassword(""); // مسح الحقل بعد كل محاولة
    }, 800);
  };

  // التحقق من تجاوز المحاولات
  useEffect(() => {
    const lastFailedAttempt = localStorage.getItem("last-failed-attempt");
    if (lastFailedAttempt) {
      const timeDiff = Date.now() - parseInt(lastFailedAttempt);
      const fiveMinutes = 5 * 60 * 1000;
      
      if (timeDiff < fiveMinutes) {
        setAttempts(5); // تعطيل النموذج
      } else {
        // إعادة تعيين المحاولات بعد 5 دقائق
        localStorage.removeItem("last-failed-attempt");
        setAttempts(0);
      }
    }
  }, []);

  const getHint = () => {
    if (attempts >= 3) {
      return "💡 تلميح: اسم المدينة + السنة + المناسبة بالانجليزي";
    }
    return "💡 تلميح: فكري في مكان مميز وسنة خاصة ومناسبة جميلة";
  };

  const getRemainingTime = () => {
    const lastFailedAttempt = localStorage.getItem("last-failed-attempt");
    if (lastFailedAttempt) {
      const timeDiff = Date.now() - parseInt(lastFailedAttempt);
      const fiveMinutes = 5 * 60 * 1000;
      const remaining = Math.ceil((fiveMinutes - timeDiff) / 1000 / 60);
      return remaining > 0 ? remaining : 0;
    }
    return 0;
  };

  const [remainingTime, setRemainingTime] = useState(getRemainingTime());

  // تحديث الوقت المتبقي
  useEffect(() => {
    if (attempts >= 5) {
      const interval = setInterval(() => {
        const time = getRemainingTime();
        setRemainingTime(time);
        if (time === 0) {
          setAttempts(0);
          clearInterval(interval);
        }
      }, 60000);
      
      return () => clearInterval(interval);
    }
  }, [attempts]);

  // إذا كان المستخدم مصادقًا، لا تظهر بوابة كلمة المرور
  if (isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-romantic p-4 animate-fade-in">
      <div className="max-w-md w-full">
        <div className="bg-cream/95 backdrop-blur-sm rounded-2xl p-8 shadow-elegant animate-slide-up">
          <div className="text-center space-y-6">
            <div className="space-y-2">
              <h1 className="text-3xl md:text-4xl font-bold text-primary">
                أدخل كلمة المرور
              </h1>
              <p className="text-xl text-accent">
                لحتى تفتح المفاجأة
              </p>
              {attempts > 0 && attempts < 5 && (
                <p className="text-sm text-orange-600 mt-2">
                  محاولات الدخول: {attempts}/5
                </p>
              )}
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 mt-8">
              <Input
                type="password"
                placeholder="كلمة المرور"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="text-center text-lg border-accent/30 focus:border-accent bg-background/50"
                disabled={isLoading || attempts >= 5}
                autoComplete="off"
                autoFocus
              />
              
              <Button
                type="submit"
                className="w-full bg-gradient-romantic text-accent hover:shadow-gold transition-all duration-300 text-lg py-6"
                disabled={isLoading || attempts >= 5 || !password.trim()}
              >
                {isLoading ? "جاري التحقق..." : 
                 attempts >= 5 ? `انتظري ${remainingTime} دقيقة` : 
                 "افتح المفاجأة"}
              </Button>
            </form>

            <p className="text-sm text-muted-foreground mt-6">
              {getHint()}
            </p>

            {attempts >= 5 && (
              <div className="text-xs text-red-600 mt-4 space-y-2">
                <p>⏳ تم تعطيل الدخول مؤقتًا لأسباب أمنية</p>
                <p>يمكنك المحاولة مرة أخرى بعد: {remainingTime} دقيقة</p>
              </div>
            )}

            <div className="text-xs text-gray-500 mt-4">
              <p>⚠️ سيتم طلب كلمة المرور بعد كل إعادة تحميل</p>
              <p>🔐 الجلسة صالحة لمدة 24 ساعة فقط</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordGate;