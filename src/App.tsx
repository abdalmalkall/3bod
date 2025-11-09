import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import PasswordProtection from './components/PasswordProtection';
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import Home from "./pages/Home";
import Memories from "./pages/Memories";
import Music from "./pages/Music";
import Promise from "./pages/Promise";
import NotFound from "./pages/NotFound";
import { useState } from "react";

const queryClient = new QueryClient();

const App = () => {
  const [isUnlocked, setIsUnlocked] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <PasswordProtection onUnlock={() => setIsUnlocked(true)}>
          {isUnlocked && (
            <BrowserRouter>
              <Navigation />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/memories" element={<Memories />} />
                <Route path="/music" element={<Music />} />
                <Route path="/promise" element={<Promise />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          )}
        </PasswordProtection>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;