export default function Display2() {
  return (
    <div className="m-3 md:m-16 bg-gray-50 shadow-2xl">
      <div className=" flex justify-center  m-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-6 rounded-lg">
          {/* LEFT IMAGE */}
          <div>
            <img
              src="/bike-on-road.png"
              alt="Two motorcyclists on a road"
              className="rounded-lg w-full h-auto object-cover"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex flex-col justify-center">
            <p className="text-primary text-sm font-medium mb-2">Lorem ipsum</p>

            <h1 className="text-3xl font-bold mb-4">
              <span className="text-primary">LOREM</span> IPSUM DOLOR SIT AMET
              CONSECTETUR. ENIM DONEC.
            </h1>

            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet consectetur. Vel pellentesque odio enim
              amet non.
            </p>

            {/* LISTS */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <ul className="space-y-2 text-gray-700">
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
              </ul>

              <ul className="space-y-2 text-gray-700">
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
              </ul>
            </div>

            {/* BUTTON */}
            <button className="px-6 py-3 bg-primary text-white rounded-md hover:bg-secondary transition w-fit">
              Lorem ipsum →
            </button>
          </div>
        </div>
      </div>
      <div className=" h-6 w-full bg-linear-to-r from-[#043996] via-[#07178f] to-[#160a3d] " />
    </div>
  );
}
