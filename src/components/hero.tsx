"use client";

import React, { useEffect, useRef } from "react";
import { Mail, Github, Linkedin, MapPin } from "lucide-react";
import gsap from "gsap";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useTypewriter } from "@/hooks/useTypewriter";

export function Hero() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);
  const t = useTranslations("Hero");
  const subtitles = t.raw("subtitles");

  const { currentText } = useTypewriter(subtitles, 60, 2000);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      titleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
    )
      .fromTo(
        subtitleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
        "-=0.4",
      )
      .fromTo(
        buttonRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" },
        "-=0.3",
      );
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-[calc(100dvh-64px)] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Aurora Gradient Mesh Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-500/20 dark:bg-primary-500/10 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-screen filter animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-indigo-500/15 dark:bg-indigo-500/10 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-screen filter animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-teal-500/15 dark:bg-teal-500/10 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-screen filter animate-blob animation-delay-4000" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center z-10">
        {/* Profile Image Placeholder */}

        <div className="relative w-32 h-32 mx-auto mb-4 animate-float">
          <style jsx>{`
            @keyframes float {
              0%,
              100% {
                transform: translateY(0px);
              }
              50% {
                transform: translateY(-8px);
              }
            }
            .animate-float {
              animation: float 6s ease-in-out infinite;
            }
          `}</style>
          <div className="w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl shadow-primary-500/25">
            <Image
              src={"/images/photo-profile-1x1.png"}
              width={128}
              height={128}
              alt="Muhammad Fadhlan Aziz Profile"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-full bg-primary-500/20 blur-xl -z-10" />
        </div>

        <h1
          ref={titleRef}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4"
        >
          {t("title")}
        </h1>

        <div
          ref={subtitleRef}
          className="text-xl sm:text-2xl text-primary-600 dark:text-primary-400 mb-6"
        >
          <span className="align-middle">{currentText}</span>
          <span className="ml-1 w-1 h-6 inline-block bg-primary-500 animate-pulse align-middle"></span>
        </div>

        <div
          ref={buttonRef}
          className="flex text-sm md:text-base  gap-4 justify-center items-center mb-12"
        >
          <a
            href="mailto:muhammadfadhlan0011@gmail.com"
            role="button"
            className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3  rounded-lg hover:bg-primary-700 transition-colors"
          >
            <Mail size={20} />
            {t("contactMe")}
          </a>
          <a
            href="/pdf/CV_Muhammad_Fadhlan_Aziz.pdf"
            download
            role="button"
            className="inline-flex items-center gap-2 border border-primary-600 text-primary-600 dark:text-primary-400 dark:border-primary-400 px-6 py-3 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors"
          >
            {t("downloadCV")}
          </a>
        </div>

        {/* Contact Info */}
        <div className="flex flex-wrap justify-center gap-6 text-gray-600 dark:text-gray-400">
          <div className="flex items-center gap-2">
            <MapPin size={16} />
            <span>{t("location")}</span>
          </div>
          <a
            href="https://github.com/fadhlanaz"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          >
            <Github size={16} />
            <span>GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/muhammad-fadhlan-aziz"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          >
            <Linkedin size={16} />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
}
