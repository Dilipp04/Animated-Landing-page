import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import * as motion from "motion/react-client";
import { useRef } from "react";

const Display4 = () => {
  const constraintsRef = useRef<HTMLDivElement>(null);

  return (
    <div className=" m-3 md:m-20 shadow-2xl">
      <section className=" mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 py-20 px-6">
        {/* Left Text */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-primary leading-snug">
            LOREM IPSUM DOLOR SIT AMET CONSECTETUR. DIGNISSIM TELLUS.
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Habitasse turpis morbi orci
            natoque vestibulum eget leo scelerisque. Gravida pellentesque nisl
            auctor.
          </p>

          <button className="px-6 py-2 bg-primary text-white rounded-md text-sm">
            Learn more
          </button>

          {/* Floating Card */}
          <motion.div ref={constraintsRef} className="w-full ">
            <motion.div drag dragConstraints={constraintsRef} dragElastic={0.2}>
              <Card data-aos="zoom-in-up" className="w-96 shadow-lg m-auto">
                <CardContent className="p-5 space-y-3">
                  <h4 className="font-semibold">Lorem Ipsum dolor sit</h4>
                  <p className="text-gray-600 text-sm">
                    Lorem ipsum dolor sit amet consectetur. Habitasse turpis
                    morbi orci natoque vestibulum eget leo scelerisque.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Image */}
        <div className="rounded-lg overflow-hidden">
          <Image
            src="/showroon.png"
            width={600}
            height={400}
            alt="section-image"
            className="w-full h-auto object-cover"
          />
        </div>
      </section>
      <div className=" h-6 w-full bg-linear-to-r from-[#043996] via-[#07178f] to-[#160a3d] " />
    </div>
  );
};

export default Display4;
