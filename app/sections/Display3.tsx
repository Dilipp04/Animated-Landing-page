import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";

export default function Display3() {
  return (
    <div className="w-full bg-[#F5F7FA] pb-20">
      {/* ---------------------- SECTION 1 ---------------------- */}
      <section className=" grid grid-cols-1 md:grid-cols-2 m-auto md:mx-20 gap-10 py-20 px-6">
        {/* Left Text */}
        <div data-aos="fade-up-right" className="space-y-4">
          <h2 className="text-3xl font-bold text-[#0E1E46]">
            LOREM IPSUM DOLOR SIT AMET
          </h2>

          <ButtonGroup>
            <Button variant="outline">Research</Button>
            <Button variant="outline">Plan</Button>
            <Button variant="outline">Design</Button>
          </ButtonGroup>

          <p className="text-gray-600 leading-relaxed">
            Egestas fringilla aliquam leo, habitasse arcu varius lorem elit.
            Neque pellentesque donec et tellus ac varius tortor, bibendum. Nulla
            felis ac turpis at amet. Purus malesuada placerat arcu at enim elit
            in accumsan.
          </p>

          <a
            href="#"
            className="inline-flex items-center gap-2 text-primary font-semibold">
            Check more <ArrowRight size={18} />
          </a>
        </div>

        {/* Right Image */}
        <div className="rounded-lg overflow-hidden">
          <Image
            src="/hand-shake.png"
            width={600}
            height={400}
            alt="section-image"
            className="w-full h-auto object-cover"
          />
        </div>
      </section>
    </div>
  );
}
