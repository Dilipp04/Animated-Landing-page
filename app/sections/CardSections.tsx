import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function CardsSection() {
  const cards = [
    {
      title: "Lorem ipsum dolor sit amet consectetur.",
      text: "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.",
      img: "/card/card1.png",
    },
    {
      title: "Lorem ipsum dolor sit amet consectetur.",
      text: "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.",
      img: "/card/card2.png",
    },
    {
      title: "Lorem ipsum dolor sit amet consectetur.",
      text: "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.",
      img: "/card/card3.png",
    },
    {
      title: "Lorem ipsum dolor sit amet consectetur.",
      text: "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.",
      img: "/card/card4.png",
    },
  ];

  return (
    <div
      className="mx-8"
      style={{
        backgroundImage: "url('/bg-graphic.png')",
        backgroundRepeat: "no-repeat",
      }}>
      <div className=" space-y-2">
        <h4 className="text-primary font-semibold text-lg">
          Lorem ipsum dolor sit amet
        </h4>
        <h2 className="text-3xl font-bold">LOREM IPSUM DOLOR SIT</h2>
        <p className="text-md max-w-xl">
          Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis
          donec dui. Mi porttitor ut aliquam mattis maecenas eget integer in
          nam. Non nisi iaculis at felis aliquet. Hendrerit tellus at purus
          lectus.
        </p>
      </div>
      <section className="w-full bg-hero-pattern max-w-7xl mx-auto py-16 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}>
              <Card className="overflow-hidden rounded-2xl shadow-md">
                <Image
                  src={card.img}
                  alt="Card image"
                  width={600}
                  height={400}
                  className="w-full h-56 object-cover"
                />
                <CardContent className="p-6 space-y-3">
                  <h3 className="font-semibold text-sm">{card.title}</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {card.text}
                  </p>
                  <a
                    href="#"
                    className="text-primary text-sm font-medium hover:underline">
                    Learn More
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
