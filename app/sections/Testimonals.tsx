"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, Zap, Star, Shirt, Info } from "lucide-react";
import { useRef } from "react";

const cards = [
  {
    icon: <Zap className="w-8 h-8 text-[#0052CC]" />,
    text: "Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod.",
    img: "/people/p1.png",
    name: "Jane Cooper",
  },
  {
    icon: <Star className="w-8 h-8 text-[#0052CC]" />,
    text: "Vehicula sit sit pharetra bibendum ut risus accumsan. Purus, in metus, enim, ipsum morbi euismod pellentesque.",
    img: "/people/p2.png",
    name: "Ralph Edwards",
  },
  {
    icon: <Shirt className="w-8 h-8 text-[#0052CC]" />,
    text: "Viverra lacus suspendisse elit, adipiscing orci, non turpis etiam sapien. Viverra blandit sem neque pretium.",
    img: "/people/p3.png",
    name: "Courtney Henry",
  },
  {
    icon: <Info className="w-8 h-8 text-[#0052CC]" />,
    text: "Vehicula sit sit pharetra bibendum ut risus accumsan. Purus, in metus, enim, ipsum morbi euismod pellentesque.",
    img: "/people/p4.png",
    name: "Cameron Williamson",
  },
  {
    icon: <Zap className="w-8 h-8 text-[#0052CC]" />,
    text: "Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod.",
    img: "/people/p1.png",
    name: "Jane Cooper",
  },
  {
    icon: <Star className="w-8 h-8 text-[#0052CC]" />,
    text: "Vehicula sit sit pharetra bibendum ut risus accumsan. Purus, in metus, enim, ipsum morbi euismod pellentesque.",
    img: "/people/p2.png",
    name: "Ralph Edwards",
  },
  {
    icon: <Shirt className="w-8 h-8 text-[#0052CC]" />,
    text: "Viverra lacus suspendisse elit, adipiscing orci, non turpis etiam sapien. Viverra blandit sem neque pretium.",
    img: "/people/p3.png",
    name: "Courtney Henry",
  },
  {
    icon: <Info className="w-8 h-8 text-[#0052CC]" />,
    text: "Vehicula sit sit pharetra bibendum ut risus accumsan. Purus, in metus, enim, ipsum morbi euismod pellentesque.",
    img: "/people/p4.png",
    name: "Cameron Williamson",
  },
];

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };
  return (
    <section className="w-full bg-[#155ADA] text-white py-16 px-10">
      {/* Top Content */}
      <div className="max-w-5xl mx-auto">
        <p className="text-sm font-medium opacity-80">
          Join other Sun harvesters
        </p>

        <h2 className="text-4xl font-bold mt-2">LOREM IPSUM DOLOR SIT AMET</h2>

        <p className="text-sm mt-3 opacity-90 max-w-xl leading-relaxed">
          Dui euismod iaculis libero, aliquet vitae et elementum porttitor.
          Eleifend mi tristique condimentum congue fusce nunc, donec magnis
          commodo.
        </p>

        <Button
          variant="outline"
          className="mt-6 bg-white text-black font-semibold px-6 rounded-md">
          Lorem Ipsum
        </Button>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-6 mt-12 overflow-x-scroll no-scrollbar max-w-6xl mx-auto">
        {cards.map((item, index) => (
          <Card
            key={index}
            className="min-w-[270px] rounded-xl shadow-lg bg-white">
            <CardContent className=" h-full flex flex-col justify-between p-6 space-y-4">
              {item.icon}

              <p className="text-sm text-gray-700 leading-relaxed">
                {item.text}
              </p>

              <div className="flex items-center gap-3 pt-4 ">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-10 h-10 rounded-full"
                />
                <span className="text-sm font-semibold">{item.name}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex gap-4 mt-10 justify-center">
        <button
          onClick={scrollLeft}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#0052CC] shadow">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <button
          onClick={scrollRight}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#0052CC] shadow">
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
