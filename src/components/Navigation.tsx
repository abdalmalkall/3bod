import { Link, useLocation } from "react-router-dom";
import { Heart, Camera, Music, Gift } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { to: "/", icon: Heart, label: "الرجوع للهوم" },
  { to: "/memories", icon: Camera, label: "صور" },
  { to: "/music", icon: Music, label: "الاغاني الي بتحبيها" },
  { to: "/promise", icon: Gift, label: "الكلام الحلو لعيونك بس" },
];

export const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-t border-border">
      <div className="container max-w-2xl mx-auto px-4">
        <div className="flex justify-around items-center py-3">
          {navItems.map(({ to, icon: Icon, label }) => {
            const isActive = location.pathname === to;
            return (
              <Link
                key={to}
                to={to}
                className={cn(
                  "flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-all duration-300",
                  isActive
                    ? "text-primary scale-110"
                    : "text-muted-foreground hover:text-foreground hover:scale-105"
                )}
              >
                <Icon className={cn("w-6 h-6", isActive && "animate-glow")} />
                <span className="text-xs font-medium">{label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};