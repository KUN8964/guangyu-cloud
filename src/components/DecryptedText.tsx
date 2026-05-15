"use client";

import { useEffect, useState, useRef, useCallback } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?/";

interface DecryptedTextProps {
  text: string;
  speed?: number;         // ms between character updates
  maxIterations?: number;  // cycles before full reveal
  sequential?: boolean;    // reveal char by char
  className?: string;
  encryptedClassName?: string;
  animateOn?: "view" | "hover" | "load";
  delay?: number;
}

export default function DecryptedText({
  text,
  speed = 50,
  maxIterations = 10,
  sequential = false,
  className = "",
  encryptedClassName = "",
  animateOn = "load",
  delay = 0,
}: DecryptedTextProps) {
  const [display, setDisplay] = useState(text);
  const [triggered, setTriggered] = useState(animateOn === "load");
  const containerRef = useRef<HTMLSpanElement>(null);
  const frameRef = useRef<number>(0);

  const animate = useCallback(() => {
    let iteration = 0;
    const totalChars = text.length;
    // Track which chars are revealed: -1 means still encrypting
    const revealedAt: number[] = Array(totalChars).fill(-1);

    const tick = () => {
      const now = Date.now();
      const chars = text.split("");

      for (let i = 0; i < totalChars; i++) {
        if (revealedAt[i] >= 0) continue; // already revealed

        if (sequential) {
          // In sequential mode, only animate chars in order
          const nextToReveal = revealedAt.findIndex((v) => v < 0);
          if (nextToReveal >= 0 && i > nextToReveal) continue;
        }

        // Each iteration, some chars get revealed
        if (iteration >= maxIterations) {
          revealedAt[i] = iteration;
          continue;
        }

        // Random chance to reveal this char
        if (Math.random() < 1 / (maxIterations - iteration + 1)) {
          revealedAt[i] = iteration;
          continue;
        }

        // Otherwise show random encrypted char
        // Preserve spaces
        if (chars[i] === " ") {
          chars[i] = " ";
        } else {
          chars[i] = CHARS[Math.floor(Math.random() * CHARS.length)];
        }
      }

      setDisplay(chars.join(""));
      iteration++;

      if (iteration <= maxIterations + 1) {
        frameRef.current = requestAnimationFrame(() => {
          // Add delay between ticks based on speed
          setTimeout(tick, speed);
        });
      } else {
        // Final frame: show exact text
        setDisplay(text);
      }
    };

    // Initial delay
    setTimeout(tick, delay);
  }, [text, speed, maxIterations, sequential, delay]);

  useEffect(() => {
    if (!triggered) return;
    animate();
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [triggered, animate]);

  // Intersection observer for "view" trigger
  useEffect(() => {
    if (animateOn !== "view" || !containerRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [animateOn]);

  const handleMouseEnter = () => {
    if (animateOn === "hover") {
      setDisplay(text); // reset
      setTimeout(() => setTriggered(true), 50);
      // Re-trigger
      setTriggered(false);
      setTimeout(() => setTriggered(true), 100);
    }
  };

  return (
    <span
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      className={`inline-block ${className} ${!triggered ? encryptedClassName : ""}`}
    >
      {triggered ? display : text}
    </span>
  );
}
