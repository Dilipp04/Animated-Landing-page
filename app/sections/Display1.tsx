import { Button } from "@/components/ui/button";

export default function Display1() {
  return (
    <section
      className="
        w-screen h-96 md:h-screen 
        bg-no-repeat bg-cover bg-center 
        flex items-center bg-sky-100 
      
      "
      style={{ backgroundImage: "url('/bikes-images.png')" }}>
      <div className="w-full px-6 md:px-16 pt-10  h-full backdrop-blur-sm md:backdrop-blur-none">
        <div className="max-w-lg space-y-4">
          <p
            data-aos="fade-right"
            className="text-sm tracking-widest text-primary font-semibold">
            NO LIMITS
          </p>

          <h2
            data-aos="fade-right"
            className="text-xl md:text-3xl font-bold leading-tight">
            LOREM IPSUM DOLOR SIT AMET
          </h2>

          <p
            data-aos="fade-right"
            className="text-gray-800 text-sm md:text-base leading-relaxed max-w-md">
            Lorem ipsum dolor sit amet consectetur. Nisi faucibus vitae
            porttitor pharetra tempor quis arcu. Ipsum nullam.
          </p>

          <Button data-aos="fade-right" className="mt-4">
            Lorem Ipsum →
          </Button>
        </div>
      </div>
    </section>
  );
}
