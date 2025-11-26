import Image from "next/image";

export default function Ad() {
  return (
    <section className="w-full my-20 bg-gray-50">
      <div className="max-w-7xl mx-auto pt-10 px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Text column */}
        <div className="space-y-4">
          <p className="text-primary font-semibold">Lorem Ipsum</p>

          <h2 className="text-4xl font-bold leading-tight">
            Lorem Ipsum Dolor
            <br /> Sit Amet
          </h2>

          <p className="text-gray-700 max-w-md text-sm leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi
            suspendisse convallis. Urna a urna lectus donec felis risus duis
            pellentesque. Pellentesque ultricies ipsum.
          </p>

          <div className="flex gap-4 pt-2">
            <Image
              src="/google-badge.png"
              alt="Google Play"
              width={150}
              height={50}
            />
            <Image
              src="/appstore-badge.png"
              alt="App Store"
              width={150}
              height={50}
            />
          </div>
        </div>

        {/* Phone Image */}
        <div className="relative hidden md:block">
          <Image
            src="/phone.png"
            alt="Hand holding phone"
            width={700}
            height={700}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
