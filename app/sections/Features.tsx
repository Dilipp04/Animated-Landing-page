"use client";
import Image from "next/image";

const Features = () => {
  return (
    <div className=" w-screen ">
      <div className="shadow-2xl m-3 md:m-20">
        <section className="grid grid-cols-1 lg:grid-cols-2 px-6 md:px-16 lg:px-24 py-16 gap-10">
          {/* LEFT SIDE CONTENT */}
          <div data-aos="fade-right" className="w-full   space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold">
              LOREM IPSUM DOLOR SIT AMET
            </h2>

            <p className="text-gray-700 leading-relaxed  ">
              Lorem ipsum dolor sit amet consectetur. Amet sodales sociis
              facilisis donec dui. Mi porttitor ut aliquam mattis maecenas eget
              integer in nam. Non nisi iaculis at felis aliquet. Hendrerit
              tellus at purus lectus.
            </p>

            {/* FEATURE LIST */}
            <div data-aos="fade-right" className="space-y-6 ">
              {/* Item 1 */}
              <div className="flex items-start gap-4">
                <Image
                  src="/feature1.png"
                  alt="Feature 1"
                  width={70}
                  height={70}
                  className="rounded-md object-cover"
                />
                <p className="text-gray-700">
                  Lorem ipsum dolor sit amet consectetur. Vestibulum ornare
                  fermentum feugiat.
                </p>
              </div>

              {/* Item 2 */}
              <div className="flex items-start gap-4">
                <Image
                  src="/feature2.png"
                  alt="Feature 2"
                  width={70}
                  height={70}
                  className="rounded-md object-cover"
                />
                <p className="text-gray-700">
                  Lorem ipsum dolor sit amet consectetur. Dictum at ac tellus
                  faucibus urna ullamcorper id dui cursus. Venenatis.
                </p>
              </div>

              {/* Item 3 */}
              <div className="flex items-start gap-4">
                <Image
                  src="/feature3.png"
                  alt="Feature 3"
                  width={70}
                  height={70}
                  className="rounded-md object-cover"
                />
                <p className="text-gray-700">
                  Lorem ipsum dolor sit amet consectetur. Vestibulum nisl morbi
                  metus gravida eu facilisi enim. Ut diam auctor tortor
                  tincidunt.
                </p>
              </div>
            </div>

            {/* BUTTONS */}
            <div className="flex items-center gap-6 pt-4">
              <button className="bg-primary text-white px-6 py-3 rounded-md font-semibold hover:bg-secondary">
                Lorem Ipsum
              </button>

              <div className="flex items-center gap-2 text-primary font-semibold">
                <span className="text-xl">📞</span> 123456789
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div
            data-aos="fade-left"
            className="w-full rounded-2xl flex justify-center">
            <Image
              src="/feature-bike.png"
              alt="Motorcycle lineup"
              width={650}
              height={750}
              className="object-cover w-full h-auto"
            />
          </div>
        </section>
        <div className=" h-6 w-full bg-linear-to-r from-[#043996] via-[#07178f] to-[#160a3d] " />
      </div>

      <div className="shadow-2xl m-3 md:m-20">
        <section className="w-full px-6 py-16 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* LEFT CONTENT */}
            <div data-aos="fade-right">
              <h4 className="text-primary font-semibold mb-4">
                Lorem ipsum dolor sit amet
              </h4>

              <h2 className="text-3xl md:text-4xl font-extrabold leading-snug mb-5">
                LOREM IPSUM DOLOR SIT
                <br /> AMET CONSECTETUR. EU
                <br /> ELIT.
              </h2>

              <p className="text-gray-600 mb-10 max-w-lg">
                Lorem ipsum dolor sit amet consectetur. Mauris ullamcorper etiam
                leo eleifend condimentum in vitae faucibus. Amet massa malesuada
                sit pretium. Donec pharetra erat lacus suspendisse ornare.
              </p>

              {/* FEATURE LIST --------------- */}
              <div className="space-y-8">
                {[1, 2, 3].map((i) => {
                  return (
                    <div key={i} className="flex items-start gap-4">
                      <Image
                        src="/feature-icon.svg"
                        alt="feature icon"
                        width={50}
                        height={50}
                      />
                      <div>
                        <h3 className="font-semibold mb-2">
                          Lorem ipsum dolor sit amet consectetur. Volutpat hac
                          morbi egestas.
                        </h3>
                        <p className="text-gray-600 text-sm">
                          Lorem ipsum dolor sit amet consectetur. Eros egestas
                          et arcu eu non viverra. Risus quam mattis senectus
                          vitae interdum odio ornare gravida vestibulum. Donec
                          turpis nulla felis mauris eu donec.
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div data-aos="zoom-in-left" className="w-full h-full">
              <Image
                src="/business-meeting.png"
                alt="Business meeting"
                width={900}
                height={600}
                className="rounded-lg object-cover w-full"
              />
            </div>
          </div>
        </section>
        <div className="mt-20 h-6 w-full bg-linear-to-r from-[#043996] via-[#07178f] to-[#160a3d] " />
      </div>
    </div>
  );
};

export default Features;
