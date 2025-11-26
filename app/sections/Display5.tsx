"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const slides = [
  {
    id: 1,
    title: "Artist & Investor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac enim velit risus varius fermentum.",
    image: "/mountain-bike.png",
  },
  {
    id: 2,
    title: "Adventure Rider",
    description:
      "Orci varius natoque penatibus et magnis dis parturient montes.",
    image: "/mountain-bike.png",
  },
  {
    id: 3,
    title: "Mountain Explorer",
    description:
      "Nam hendrerit nisi sed sollicitudin pellentesque. Fusce commodo.",
    image: "/mountain-bike.png",
  },
];

export default function Display5() {
  return (
    <div className="w-full mx-auto md:mx-20 py-20 px-6">
      {/* TITLE */}
      <div className="text-center space-y-3 mb-10">
        <h2 className="text-3xl md:text-4xl text-[#0E1E46] font-bold tracking-wide">
          LOREM IPSUM DOLOR SIT AMET
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Aliquet sed nulla tincidunt pulvinar sed fames sit facilisis dictumst.
          Ornare faucibus quis velit fringilla aliquam ultricies.
        </p>
      </div>

      <Carousel className="md:m-20 ">
        <CarouselContent>
          {slides.map((item, index) => (
            <CarouselItem key={index}>
              <div className="flex flex-col md:flex-row items-center gap-8 w-full">
                {/* LEFT IMAGE */}
                <div className="flex-1 rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src={item.image}
                    alt="Biker Image"
                    width={900}
                    height={600}
                    className="w-full h-[400px] md:h-[420px] object-cover rounded-xl"
                  />
                </div>

                {/* RIGHT CARD */}
                <Card className="w-full md:w-[340px] shadow-xl rounded-xl relative">
                  <CardContent className="p-6 flex flex-col gap-4">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>

                    <a
                      href="#"
                      className="text-blue-600 font-medium text-sm hover:underline">
                      Read Full Story →
                    </a>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Arrows */}
        <CarouselPrevious className="left-2 md:-left-10 bg-white shadow-md hover:bg-gray-100" />
        <CarouselNext className="right-2 md:-right-10 bg-white shadow-md hover:bg-gray-100" />
      </Carousel>
    </div>
  );
}
