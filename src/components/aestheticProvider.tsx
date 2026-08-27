"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Aesthetic = "modern" | "retro";

type AestheticContextType = {
  aesthetic: Aesthetic;
  setAesthetic: (aesthetic: Aesthetic) => void;
};

const AestheticContext = createContext<AestheticContextType | undefined>(undefined);

export function AestheticProvider({ children }: { children: React.ReactNode }) {
  const [aesthetic, setAestheticState] = useState<Aesthetic>("modern");
  const audioRef = React.useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("aesthetic-theme") as Aesthetic;
    if (saved === "retro" || saved === "modern") {
      setAestheticState(saved);
    }

    // Initialize BGM on client
    audioRef.current = new Audio("/bgm/AdhesiveWombat - Night Shade.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.10; // Set a pleasant 10% volume

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (aesthetic === "retro") {
      const playBgm = () => {
        audio.play().catch(() => {
          // Autoplay blocked
        });
      };

      playBgm();

      const handleInteraction = () => {
        playBgm();
        window.removeEventListener("click", handleInteraction);
        window.removeEventListener("keydown", handleInteraction);
      };

      window.addEventListener("click", handleInteraction);
      window.addEventListener("keydown", handleInteraction);

      return () => {
        audio.pause();
        window.removeEventListener("click", handleInteraction);
        window.removeEventListener("keydown", handleInteraction);
      };
    } else {
      audio.pause();
    }
  }, [aesthetic]);

  useEffect(() => {
    const root = document.documentElement;
    if (aesthetic === "retro") {
      root.classList.add("theme-retro");
      root.classList.remove("theme-modern");
    } else {
      root.classList.add("theme-modern");
      root.classList.remove("theme-retro");
    }
  }, [aesthetic]);

  const setAesthetic = (newAesthetic: Aesthetic) => {
    setAestheticState(newAesthetic);
    localStorage.setItem("aesthetic-theme", newAesthetic);
  };

  return (
    <AestheticContext.Provider value={{ aesthetic, setAesthetic }}>
      {children}
    </AestheticContext.Provider>
  );
}

export function useAesthetic() {
  const context = useContext(AestheticContext);
  if (!context) {
    throw new Error("useAesthetic must be used within an AestheticProvider");
  }
  return context;
}
