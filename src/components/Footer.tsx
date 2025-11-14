import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-accent">
            <Heart className="w-6 h-6 fill-current" />
            <h3 className="text-2xl font-bold">عيد ميلادها الـ١٨</h3>
            <Heart className="w-6 h-6 fill-current" />
          </div>
          
          <p className="text-accent/80 text-lg">
            سنة جديدة تبدأ من هون
          </p>

          <div className="pt-6 border-t border-accent/20 mt-6">
            <p className="text-accent/70 text-sm">
              هالموقع معمول خصيصاً إلك… ليوم بيشبّهك. 
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
