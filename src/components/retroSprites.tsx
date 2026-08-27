"use client";

import React from "react";
import { useAesthetic } from "@/components/aestheticProvider";
import Image from "next/image";

export function RetroSprites() {
  const { aesthetic } = useAesthetic();

  if (aesthetic !== "retro") return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 h-24 pointer-events-none z-40 overflow-hidden select-none">
      {/* Kirby (Slow) */}
      <div
        className="absolute animate-kirby"
        style={{
          width: "56px",
          height: "56px",
          bottom: "12px",
          zIndex: 20,
        }}
      >
        <Image
          src="/images/gif/kirby.gif"
          alt="Kirby"
          width={56}
          height={56}
          className="pixelated object-contain"
          style={{ transform: "scaleX(-1)" }} // Flip horizontally to run left
          unoptimized
        />
      </div>

      {/* Mario (Medium) */}
      <div
        className="absolute animate-mario"
        style={{
          width: "68px",
          height: "68px",
          bottom: "12px",
          zIndex: 20,
        }}
      >
        <Image
          src="/images/gif/mario-running-8-bit.gif"
          alt="Mario"
          width={68}
          height={68}
          className="pixelated object-contain"
          unoptimized
        />
      </div>

      {/* Sonic (Fast - Resized to match) */}
      <div
        className="absolute animate-sonic"
        style={{
          width: "40px",
          height: "40px",
          bottom: "8px",
          zIndex: 20,
        }}
      >
        <Image
          src="/images/gif/sonic-running.gif"
          alt="Sonic"
          width={40}
          height={40}
          className="pixelated object-contain"
          unoptimized
        />
      </div>

      {/* Bat (Flying from right to left, patrolling 75% width, higher up) */}
      <div
        className="absolute animate-bat"
        style={{
          width: "48px",
          height: "48px",
          bottom: "48px",
          zIndex: 20,
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
          className="pixelated object-contain"
          unoptimized
        />
      </div>

      {/* Pikachu Hi (Static in the bottom-left corner, flipped) */}
      <div
        className="absolute left-4"
        style={{
          width: "48px",
          height: "48px",
          bottom: "-1px",
          left: "4px",
          zIndex: 10,
        }}
      >
        <Image
          src="/images/gif/pikachu-hi.gif"
          alt="Pikachu Hi"
          width={48}
          height={48}
          className="pixelated object-contain"
          style={{ transform: "scaleX(-1)" }} // Flip horizontally
          unoptimized
        />
      </div>

      {/* Mega Man Dance (Moving from left to 20% width) */}
      <div
        className="absolute animate-megaman"
        style={{
          width: "40px",
          height: "40px",
          bottom: "0px",
          zIndex: 10,
        }}
      >
        <Image
          src="/images/gif/mega-man-dance.gif"
          alt="Mega Man Dance"
          width={40}
          height={40}
          className="pixelated object-contain"
          unoptimized
        />
      </div>

      {/* Hi There (Static in the bottom-right corner) */}
      <div
        className="absolute right-4"
        style={{
          width: "48px",
          height: "48px",
          bottom: "0px",
          right: "0px",
          zIndex: 10,
        }}
      >
        <Image
          src="/images/gif/hi-there.gif"
          alt="Hi There"
          width={48}
          height={48}
          className="pixelated object-contain"
          unoptimized
        />
      </div>

      {/* Bulbasaur Rolling (Rolling from right to left) */}
      <div
        className="absolute animate-bulbasaur"
        style={{
          width: "32px",
          height: "32px",
          bottom: "-2px",
          zIndex: 20,
        }}
      >
        <Image
          src="/images/gif/bulbasaur-rolling.gif"
          alt="Bulbasaur Rolling"
          width={32}
          height={32}
          className="pixelated object-contain"
          unoptimized
        />
      </div>

      {/* Pacman (Moving in a screen-wide box loop)
      <div
        className="absolute animate-pacman"
        style={{
          width: "36px",
          height: "36px",
          bottom: "12px",
          left: "0px",
          zIndex: 20,
        }}
      >
        <Image
          src="/images/gif/pacman-eating.gif"
          alt="Pacman"
          width={36}
          height={36}
          className="pixelated object-contain"
          unoptimized
          priority
        />
      </div> */}

      {/* Bocchi Stroke (Static on the ground in the middle-left area) */}
      {/* <div
        className="absolute left-[35%]"
        style={{
          width: "60px",
          height: "36px",
          bottom: "20px",
          right: "15%",
          zIndex: 10,
        }}
      >
        <Image
          src="/images/gif/bocchi-stroke.gif"
          alt="Bocchi Stroke"
          width={60}
          height={36}
          className="pixelated object-contain"
          unoptimized
        />
      </div> */}

      {/* SMB3 Mario (Running very fast from right to left with a pause)
      <div
        className="absolute animate-mario-smb3"
        style={{
          width: "48px",
          height: "48px",
          bottom: "6px",
          zIndex: 20,
        }}
      >
        <Image
          src="/images/gif/mario-super-mario-bros-3.gif"
          alt="Mario SMB3"
          width={48}
          height={48}
          className="pixelated object-contain"
          style={{ transform: "scaleX(-1)" }} // Flip horizontally to run left
          unoptimized
        />
      </div> */}
    </div>
  );
}
