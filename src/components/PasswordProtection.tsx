import { useState, useEffect } from 'react';
import { Shield, Zap, Crown, Rocket, Sparkles, Gem, Trophy, Castle } from 'lucide-react';

const PasswordProtection = ({ onUnlock, children }) => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [particles, setParticles] = useState([]);

  // كلمة السر - يمكنك تغييرها هنا
  const correctPassword = "2";

  // إنشاء جسيمات متحركة
  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      speed: Math.random() * 2 + 1,
      color: `hsl(${Math.random() * 60 + 200}, 70%, 60%)`
    }));
    setParticles(newParticles);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    await new Promise(resolve => setTimeout(resolve, 800));
    
    if (password === correctPassword) {
      setError('');
      onUnlock?.();
    } else {
      setError('⚠️ كلمة السر غير صحيحة! حاول مرة أخرى بقوة أكبر!');
      setPassword('');
    }
    
    setIsLoading(false);
  };

  return (
    <>
      {children ? (
        children
      ) : (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 flex items-center justify-center p-4 relative overflow-hidden" dir="rtl">
          
          {/* خلفية متحركة من الجسيمات */}
          <div className="absolute inset-0">
            {particles.map(particle => (
              <div
                key={particle.id}
                className="absolute rounded-full animate-pulse"
                style={{
                  left: `${particle.x}%`,
                  top: `${particle.y}%`,
                  width: `${particle.size}px`,
                  height: `${particle.size}px`,
                  backgroundColor: particle.color,
                  animationDuration: `${particle.speed}s`,
                  filter: 'blur(1px)'
                }}
              />
            ))}
          </div>

          {/* خطوط الطاقة */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-pulse"></div>
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent animate-pulse"></div>
            <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-pink-400 to-transparent animate-pulse"></div>
          </div>

          {/* تأثير الإكليل */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-96 h-96 rounded-full border-4 border-yellow-400/20 animate-spin-slow"></div>
            <div className="absolute w-80 h-80 rounded-full border-4 border-blue-400/20 animate-spin-slow" style={{animationDirection: 'reverse'}}></div>
          </div>

          <div className="bg-gradient-to-br from-gray-800/80 to-purple-900/80 backdrop-blur-2xl border-2 border-cyan-400/30 rounded-3xl p-10 max-w-lg w-full text-center relative z-10 shadow-2xl shadow-cyan-500/20">
            
            {/* تأثير الإطار المتوهج */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-3xl blur opacity-30 animate-pulse"></div>
            
            {/* التاج الملكي */}
            <div className="relative mb-8">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <Crown className="w-12 h-12 text-yellow-400 fill-current animate-bounce" />
              </div>
              <div className="bg-gradient-to-br from-cyan-500 to-blue-600 w-28 h-28 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-2xl relative overflow-hidden">
                <Shield className="w-16 h-16 text-white" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <Sparkles className="absolute -bottom-2 -right-2 w-8 h-8 text-yellow-300 animate-ping" />
              <Gem className="absolute -bottom-2 -left-2 w-6 h-6 text-cyan-300 animate-pulse" />
            </div>
            
            <h1 className="text-5xl font-bold text-white mb-6 font-amiri bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              🏰 البوابة الملكية
            </h1>
            
            <p className="text-cyan-200 mb-8 font-amiri text-xl leading-relaxed">
              <Castle className="w-6 h-6 inline mr-2 text-yellow-400" />
              هذه البوابة محمية بسحر قوي
              <br />
              <Zap className="w-5 h-5 inline mr-2 text-yellow-400" />
              أدخل كلمة السر الأسطورية
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="أدخل كلمة السر القوية..."
                  className="w-full px-6 py-5 pr-16 rounded-2xl bg-gray-900/80 border-2 border-cyan-400/50 text-white placeholder-cyan-300 text-center font-amiri text-xl focus:outline-none focus:border-cyan-400 focus:bg-gray-900 transition-all duration-300 shadow-lg shadow-cyan-500/10"
                  dir="rtl"
                  autoFocus
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 bg-gray-800/50 p-2 rounded-lg"
                >
          
                </button>
              </div>

              {error && (
                <div className="bg-red-500/20 border-2 border-red-400/50 rounded-2xl p-4 animate-shake">
                  <p className="text-red-200 font-amiri text-lg flex items-center justify-center">
                    <Trophy className="w-5 h-5 ml-2" />
                    {error}
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={!password.trim() || isLoading}
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white py-5 rounded-2xl font-amiri text-2xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/30 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none relative overflow-hidden group"
              >
                {/* تأثير اللمعة المتحركة */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                
                <span className="relative z-10 flex items-center justify-center">
                  {isLoading ? (
                    <>
                      <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin ml-3"></div>
                      جاري تفعيل القوة...
                    </>
                  ) : (
                    <>
                      <Rocket className="w-6 h-6 ml-3 animate-bounce" />
                      🚀 ابدأ المغامرة!
                      <Zap className="w-5 h-5 mr-3 text-yellow-300" />
                    </>
                  )}
                </span>
              </button>
            </form>

            {/* شعار القوة في الأسفل */}
            <div className="mt-8 pt-6 border-t border-cyan-400/30">
              <div className="flex justify-center space-x-6 space-x-reverse">
                <div className="text-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Trophy className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-cyan-300 text-sm">القوة</span>
                </div>
                <div className="text-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Gem className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-cyan-300 text-sm">الحكمة</span>
                </div>
                <div className="text-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-cyan-300 text-sm">الحماية</span>
                </div>
              </div>
            </div>
          </div>

          {/* النجوم المتساقطة */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-8 bg-gradient-to-b from-cyan-400 to-transparent animate-fall"
                style={{
                  left: `${20 + i * 30}%`,
                  animationDelay: `${i * 2}s`,
                  animationDuration: '3s'
                }}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default PasswordProtection;