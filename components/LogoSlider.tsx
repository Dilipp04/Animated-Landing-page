"use client";

import { motion, useAnimationFrame } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

interface LogoSliderProps {
  logos: string[];
  speed?: number; // px per frame
}

export default function LogoSlider({ logos, speed = 2 }: LogoSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const xRef = useRef(0);

  useAnimationFrame(() => {
    if (!containerRef.current) return;

    // move left continuously
    xRef.current -= speed;

    // reset position when fully moved left
    const totalWidth = containerRef.current.scrollWidth / 2;

    if (Math.abs(xRef.current) >= totalWidth) {
      xRef.current = 0;
    }

    containerRef.current.style.transform = `translateX(${xRef.current}px)`;
  });

  return (
    <div className="overflow-hidden w-full py-8 bg-white">
      <div
        ref={containerRef}
        className="flex gap-12"
        style={{ willChange: "transform" }}>
        {/* duplicate for seamless infinite scroll */}
        {[...logos, ...logos].map((logo, index) => (
          <Image
            key={index}
            src={logo}
            width={120}
            height={120}
            alt="logo"
            className="object-contain shrink-0 opacity-80 hover:opacity-100  transition"
          />
        ))}
      </div>
    </div>
  );
}
