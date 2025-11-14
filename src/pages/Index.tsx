import { useState, useEffect } from "react";
import PasswordGate from "./PasswordGate";
import Birthday from "./Birthday";

const Index = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const auth = localStorage.getItem("birthday-authenticated");
    if (auth === "true") {
      setIsAuthenticated(true);
    }
    setIsChecking(false);
  }, []);

  if (isChecking) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-romantic">
        <div className="text-accent text-2xl">جاري التحميل...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <PasswordGate onSuccess={() => setIsAuthenticated(true)} />;
  }

  return <Birthday />;
};

export default Index;
