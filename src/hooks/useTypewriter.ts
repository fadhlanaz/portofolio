"use client";

import { useEffect, useState } from "react";

export function useTypewriter(
  taglines: string[],
  speed: number = 50,
  delay: number = 2000
) {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopCount, setLoopCount] = useState(0);

  useEffect(() => {
    const currentTagline = taglines[currentIndex];

    const timer = setTimeout(
      () => {
        if (!isDeleting) {
          // Typing effect
          setCurrentText(currentTagline.substring(0, currentText.length + 1));

          if (currentText === currentTagline) {
            // Start deleting after delay
            setTimeout(() => setIsDeleting(true), delay);
          }
        } else {
          // Deleting effect
          setCurrentText(currentTagline.substring(0, currentText.length - 1));

          if (currentText === "") {
            setIsDeleting(false);
            setCurrentIndex((prev) => (prev + 1) % taglines.length);
            setLoopCount((prev) => prev + 1);
          }
        }
      },
      isDeleting ? speed / 2 : speed
    );

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentIndex, taglines, speed, delay]);

  return { currentText, loopCount };
}
