"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

interface BannerProps {
  image: string;
  heading: string;
  descriptions?: string[];
  buttonText?: string;
}

const Banner = ({ image, heading, descriptions, buttonText }: BannerProps) => {
  return (
    <div className="relative h-screen w-full">
      {/* Background Image */}
      <Image src={image} alt="Background" fill className="object-cover -z-10" />

      {/* Content */}
      <div className="relative z-10 text-white p-5 md:p-10">
        <Logo />

        <div className="flex flex-col text-center items-center my-32 space-y-4 w-[80%] m-auto justify-center">
          {/* Heading */}
          <h3 data-aos="fade-up" className="text-lg md:text-4xl font-extrabold">
            {heading}
          </h3>

          {/* Descriptions */}
          {descriptions?.map((text, index) => (
            <p key={index} data-aos="fade-up" className="text-sm md:text-xl">
              {text}
            </p>
          ))}

          {/* Button */}
          {buttonText && (
            <Button
              data-aos="fade-up"
              className="text-black"
              variant={"outline"}>
              {buttonText}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Banner;
