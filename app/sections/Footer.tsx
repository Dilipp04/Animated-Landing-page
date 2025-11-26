import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import React from "react";

const Footer = () => {
  return (
    <>
      <div
        data-aos="fade-up"
        className="h-80 max-w-2xl flex flex-col m-10  gap-6 justify-center items-center text-center">
        <Logo />
        <h1 data-aos="fade-up" className="text-4xl">
          Lorem ipsum dolor sit amet consectetur.
        </h1>
        <p data-aos="fade-up">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi
          accusantium molestias voluptas similique aliquid natus numquam
          explicabo voluptatum. Laborum, expedita.
        </p>
        <Button data-aos="fade-up">lorem ipsum</Button>
      </div>
      <footer className="bg-[rgb(23,30,43)] w-full py-16">
        <div className="container mx-auto px-6">
          {/* Logo */}
          <div className="mb-5">
            <Logo />
          </div>

          {/* 4 Column Footer */}
          <div className="grid grid-cols-2 md:grid-cols-4 justify-items-end gap-10 text-white">
            <ul className="space-y-3">
              <li className="font-semibold text-lg">Lorem ipsum</li>
              <li>lorem ipsum</li>
              <li>lorem ipsum</li>
              <li>lorem ipsum</li>
            </ul>

            <ul className="space-y-3">
              <li className="font-semibold text-lg">Lorem ipsum</li>
              <li>lorem ipsum</li>
              <li>lorem ipsum</li>
              <li>lorem ipsum</li>
            </ul>

            <ul className="space-y-3">
              <li className="font-semibold text-lg">Lorem ipsum</li>
              <li>lorem ipsum</li>
              <li>lorem ipsum</li>
              <li>lorem ipsum</li>
            </ul>

            <ul className="space-y-3">
              <li className="font-semibold text-lg">Lorem ipsum</li>
              <li>lorem ipsum</li>
              <li>lorem ipsum</li>
              <li>lorem ipsum</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
