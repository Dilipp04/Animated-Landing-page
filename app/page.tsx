"use client";
import Hero from "./sections/Hero";
import Footer from "./sections/Footer";
import Navbar from "./sections/Navbar";
import Features from "./sections/Features";
import AOSProvider from "@/components/AOSProvider";
import Banner from "./sections/Banner";
import Clients from "./sections/Clients";
import FAQ from "./sections/FAQ";
import CardsSection from "./sections/CardSections";
import FormSection from "./sections/FormSection";
import Ad from "./sections/Ad";
import Display1 from "./sections/Display1";
import Display2 from "./sections/Display2";
import Testimonials from "./sections/Testimonals";
import Display3 from "./sections/Display3";
import Display5 from "./sections/Display5";
import Display4 from "./sections/Display4";

export default function HomePage() {
  return (
    <AOSProvider>
      <main className="flex flex-col m-0 space-y-5 items-center justify-center w-full overflow-hidden text-textblack bg-cover bg-center bg-no-repeat">
        <Navbar />
        <Hero />
        <Features />

        <Banner
          image="/banner1.png"
          heading="Lorem ipsum dolor sit amet consectetur. Quis adipiscing purus egestas aliquam viverra mi."
          descriptions={[
            "Lorem ipsum dolor sit amet consectetur. Mattis justo euismod volutpat vestibulum nisi at ac risus amet. Mi accumsan sagittis justo pellentesque id sed. Id tellus id luctus id. At quis nunc libero urna arcu vulputate sed ut. Nisl porta massa diam condimentum nulla quam.",
            "Lorem ipsum dolor sit amet consectetur. Volutpat in dictum nec condimentum ultrices non. Ornare semper in tincidunt pellentesque cras mauris in vitae. At viverra quis eu malesuada vel et porttitor. Nulla luctus quam lacus lacus non at. Tincidunt morbi feugiat a pulvinar euismod natoque nulla ligula. Tincidunt cursus vitae leo.",
          ]}
          buttonText="Learn More"
        />

        <Clients />
        <CardsSection />
        <Banner
          image="/banner2.png"
          heading="Dolor sit amet consectetur. Quis adipiscing purus egestas aliquam viverra mi. dolor sit amet consectetur. Quis adipiscing "
        />

        <FormSection />
        <Ad />
        <Display1 />
        <Display2 />
        <Testimonials />
        <Display3 />
        <Display4 />
        <Display5 />
        <FAQ />
        <Footer />
      </main>
    </AOSProvider>
  );
}
