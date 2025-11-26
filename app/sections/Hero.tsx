"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full flex  flex-row items-center justify-between h-screen">
      {/* LEFT SIDE CONTENT */}
      <div className="w-full md:w-1/2 space-y-6 px-6 md:px-12 lg:px-20">
        <h1 className="text-xl md:text-5xl font-bold">
          Lorem ipsum dolor sit amet
        </h1>

        <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
          Lorem ipsum dolor sit amet consectetur. Enim netus cras congue quis
          elit sociis. Sed mi rhoncus id habitant. In urna tellus nisi platea
          morbi libero imperdiet neque. Justo suspendisse tristique posuere quis
          eget viverra.
        </p>

        {/* Email Input + Button */}
        <div className="flex items-center gap-3">
          <input
            type="email"
            placeholder="example@mail.com"
            className="border rounded-md px-4 py-3 w-64 outline-none"
          />
          <button className="bg-primary text-white px-5 py-3 rounded-md hover:bg-secondary">
            Subscribe →
          </button>
        </div>

        {/* CHECK ICON + TEXT */}
        <p className="flex items-center gap-2 text-blue-600 font-medium">
          <span className="text-xl">✔</span> No credit required!
        </p>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div data-aos="fade-left" className=" hidden md:flex h-full ">
        <Image
          src="/Hero-bike.png" // ⬅️ Replace with your image path
          alt="Hero"
          width={800}
          height={600}
          className="object-fill"
        />
      </div>
    </section>
  );
}
