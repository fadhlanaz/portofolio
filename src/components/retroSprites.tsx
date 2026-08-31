"use client";

import React from "react";
import { useAesthetic } from "@/components/aestheticProvider";
import Image from "next/image";

export function RetroSprites() {
  const { aesthetic } = useAesthetic();

  if (aesthetic !== "retro") return null;

  return (
    <>
      {/* Pacman (Traveling around the entire screen perimeter using CSS, layered above navbar) */}
      <div className="fixed inset-0 pointer-events-none z-[60] overflow-hidden select-none">
        <div
          className="absolute animate-pacman pointer-events-none"
          style={{
            width: "40px",
            height: "40px",
            bottom: "8px",
            left: "8px",
            zIndex: 60,
            pointerEvents: "none",
          }}
        >
          <Image
            src="/images/gif/pacman-eating.gif"
            alt="Pacman Eating"
            width={40}
            height={40}
            className="pixelated object-contain pointer-events-none select-none"
            style={{ pointerEvents: "none" }}
            unoptimized
            priority
          />
        </div>
      </div>

      {/* Bottom bar sprites */}
      <div className="fixed bottom-0 left-0 right-0 h-24 pointer-events-none z-40 overflow-hidden select-none">
        {/* Kirby (Slow) */}
        <div
          className="absolute animate-kirby pointer-events-none"
          style={{
            width: "56px",
            height: "56px",
            bottom: "12px",
            zIndex: 20,
            pointerEvents: "none",
          }}
        >
          <Image
            src="/images/gif/kirby.gif"
            alt="Kirby"
            width={56}
            height={56}
            className="pixelated object-contain pointer-events-none select-none"
            style={{ transform: "scaleX(-1)", pointerEvents: "none" }} // Flip horizontally to run left
            unoptimized
          />
        </div>

        {/* Mario (Medium) */}
        <div
          className="absolute animate-mario pointer-events-none"
          style={{
            width: "68px",
            height: "68px",
            bottom: "12px",
            zIndex: 20,
            pointerEvents: "none",
          }}
        >
          <Image
            src="/images/gif/mario-running-8-bit.gif"
            alt="Mario"
            width={68}
            height={68}
            className="pixelated object-contain pointer-events-none select-none"
            style={{ pointerEvents: "none" }}
            unoptimized
          />
        </div>

        {/* Sonic (Fast - Resized to match) */}
        <div
          className="absolute animate-sonic pointer-events-none"
          style={{
            width: "40px",
            height: "40px",
            bottom: "8px",
            zIndex: 20,
            pointerEvents: "none",
          }}
        >
          <Image
            src="/images/gif/sonic-running.gif"
            alt="Sonic"
            width={40}
            height={40}
            className="pixelated object-contain pointer-events-none select-none"
            style={{ pointerEvents: "none" }}
            unoptimized
          />
        </div>

        {/* Bat (Flying from right to left, patrolling 75% width, higher up) */}
        <div
          className="absolute animate-bat pointer-events-none"
          style={{
            width: "48px",
            height: "48px",
            bottom: "48px",
            zIndex: 20,
            pointerEvents: "none",
          }}
        >
          {/* Sparkle glitter trail behind the bat */}
          <div className="absolute inset-0 pointer-events-none" style={{ zIndex: -1 }}>
            <div className="sparkle-pixel" style={{ width: "6px", height: "6px", top: "12px", right: "-10px", animationDelay: "0s" }} />
            <div className="sparkle-pixel" style={{ width: "4px", height: "4px", top: "28px", right: "-20px", animationDelay: "0.2s" }} />
            <div className="sparkle-pixel" style={{ width: "7px", height: "7px", top: "4px", right: "-15px", animationDelay: "0.4s" }} />
            <div className="sparkle-pixel" style={{ width: "5px", height: "5px", top: "20px", right: "-28px", animationDelay: "0.1s" }} />
            <div className="sparkle-pixel" style={{ width: "6px", height: "6px", top: "16px", right: "-36px", animationDelay: "0.3s" }} />
          </div>
          <Image
            src="/images/gif/bat-flying.gif"
            alt="Bat"
            width={48}
            height={48}
            className="pixelated object-contain pointer-events-none select-none"
            style={{ pointerEvents: "none" }}
            unoptimized
          />
        </div>

        {/* Pikachu Hi (Static in the bottom-left corner, flipped) */}
        <div
          className="absolute left-4 pointer-events-none"
          style={{
            width: "48px",
            height: "48px",
            bottom: "-1px",
            left: "4px",
            zIndex: 10,
            pointerEvents: "none",
          }}
        >
          <Image
            src="/images/gif/pikachu-hi.gif"
            alt="Pikachu Hi"
            width={48}
            height={48}
            className="pixelated object-contain pointer-events-none select-none"
            style={{ transform: "scaleX(-1)", pointerEvents: "none" }} // Flip horizontally
            unoptimized
          />
        </div>

        {/* Mega Man Dance (Moving from left to 20% width) */}
        <div
          className="absolute animate-megaman pointer-events-none"
          style={{
            width: "40px",
            height: "40px",
            bottom: "0px",
            zIndex: 10,
            pointerEvents: "none",
          }}
        >
          <Image
            src="/images/gif/mega-man-dance.gif"
            alt="Mega Man Dance"
            width={40}
            height={40}
            className="pixelated object-contain pointer-events-none select-none"
            style={{ pointerEvents: "none" }}
            unoptimized
          />
        </div>

        {/* Hi There (Static in the bottom-right corner) */}
        <div
          className="absolute right-4 pointer-events-none"
          style={{
            width: "48px",
            height: "48px",
            bottom: "0px",
            right: "0px",
            zIndex: 10,
            pointerEvents: "none",
          }}
        >
          <Image
            src="/images/gif/hi-there.gif"
            alt="Hi There"
            width={48}
            height={48}
            className="pixelated object-contain pointer-events-none select-none"
            style={{ pointerEvents: "none" }}
            unoptimized
          />
        </div>

        {/* Bulbasaur Rolling (Rolling from right to left) */}
        <div
          className="absolute animate-bulbasaur pointer-events-none"
          style={{
            width: "32px",
            height: "32px",
            bottom: "-2px",
            zIndex: 20,
            pointerEvents: "none",
          }}
        >
          <Image
            src="/images/gif/bulbasaur-rolling.gif"
            alt="Bulbasaur Rolling"
            width={32}
            height={32}
            className="pixelated object-contain pointer-events-none select-none"
            style={{ pointerEvents: "none" }}
            unoptimized
          />
        </div>
      </div>
    </>
  );
}
