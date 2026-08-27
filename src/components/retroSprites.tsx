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
        className="absolute"
        style={{
          animation: "walk-left 28s linear infinite",
          width: "56px",
          height: "56px",
          bottom: "12px",
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
        className="absolute"
        style={{
          animation: "walk-right 14s linear infinite",
          animationDelay: "3s",
          animationFillMode: "backwards",
          width: "68px",
          height: "68px",
          bottom: "12px",
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
        className="absolute"
        style={{
          animation: "walk-right 7s linear infinite",
          animationDelay: "6s",
          animationFillMode: "backwards",
          width: "40px",
          height: "40px",
          bottom: "8px",
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
        className="absolute"
        style={{
          animation: "bat-patrol 18s linear infinite",
          width: "48px",
          height: "48px",
          bottom: "48px",
        }}
      >
        <Image
          src="/images/gif/bat-flying.gif"
          alt="Bat"
          width={48}
          height={48}
          className="pixelated object-contain"
          unoptimized
        />
      </div>

      {/* Mega Man Dance (Static in the bottom-left corner) */}
      <div
        className="absolute left-4"
        style={{
          width: "42px",
          height: "42px",
          bottom: "0px",
        }}
      >
        <Image
          src="/images/gif/mega-man-dance.gif"
          alt="Mega Man Dance"
          width={42}
          height={42}
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

      {/* Bocchi Stroke (Static on the ground in the middle-left area) */}
      {/* <div
        className="absolute left-[35%]"
        style={{
          width: "60px",
          height: "36px",
          bottom: "20px",
          right: "15%",
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
        className="absolute"
        style={{
          animation: "walk-left-delayed 6s linear infinite",
          animationDelay: "2s",
          width: "48px",
          height: "48px",
          bottom: "6px",
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
