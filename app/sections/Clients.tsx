import LogoSlider from "@/components/LogoSlider";
import React from "react";

const Clients = () => {
  return (
    <div className="w-screen h-screen flex flex-col text-center justify-center space-y-8">
      <h1 className="text-6xl">Lorem ipsum dolor sit amet consectetur. .</h1>
      <div>
        <LogoSlider
          logos={[
            "/logos/hero.svg",
            "/logos/honda.svg",
            "/logos/tvs.svg",
            "/logos/bajaj.svg",
            "/logos/royal.svg",
            "/logos/yamaha.svg",
            "/logos/ktm.svg",
            "/logos/ather.svg",
            "/logos/ola.svg",
            "/logos/revolt.svg",
            "/logos/ultra.svg",
            "/logos/tork.svg",
          ]}
          speed={1.01} // smooth speed control
        />
      </div>
    </div>
  );
};

export default Clients;
