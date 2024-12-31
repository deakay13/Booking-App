import { useRef } from "react";

export default function Locations() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  return (
      <div className="mt-16">
        <h3 className="text-gray-600 text-2xl font-medium">Locations</h3>

        <div className="relative w-full flex items-center mt-5">
          <button
            onClick={scrollLeft}
            className="absolute left-0 z-10 p-3 bg-gray-300 opacity-65 rounded-full hover:bg-gray-500 "
          >
            Prev
          </button>

          <button
            onClick={scrollRight}
            className="absolute right-0 z-10 p-3 bg-gray-300 opacity-65 rounded-full hover:bg-gray-500 "
          >
            Next
          </button>

          <div
            className="overflow-hidden w-full snap-x scroll-smooth scroll-pl-6 flex space-x-4"
            ref={scrollRef}
          >
            <div className=" snap-start shrink-0 w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden ">
              <div className=" h-56 w-full bg-cover bg-slate-200 flex items-center justify-center"></div>
              <div className="px-5 py-3 bg-slate-400 h-full">
                <h3 className="text-gray-700 uppercase">Hà Nội</h3>
              </div>
            </div>

            <div className=" snap-start shrink-0 w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden ">
              <div className=" h-56 w-full bg-cover bg-slate-200 flex items-center justify-center"></div>
              <div className="px-5 py-3 bg-slate-400 h-full">
                <h3 className="text-gray-700 uppercase">Đà Nẵng</h3>
              </div>
            </div>
            <div className=" snap-start shrink-0 w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden ">
              <div className=" h-56 w-full bg-cover bg-slate-200 flex items-center justify-center"></div>
              <div className="px-5 py-3 bg-slate-400 h-full">
                <h3 className="text-gray-700 uppercase">Hạ Long</h3>
              </div>
            </div>
            <div className=" snap-start shrink-0 w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden ">
              <div className=" h-56 w-full bg-cover bg-slate-200 flex items-center justify-center"></div>
              <div className="px-5 py-3 bg-slate-400 h-full">
                <h3 className="text-gray-700 uppercase">Nha trang</h3>
              </div>
            </div>
            <div className=" snap-start shrink-0 w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden ">
              <div className=" h-56 w-full bg-cover bg-slate-200 flex items-center justify-center"></div>
              <div className="px-5 py-3 bg-slate-400 h-full">
                <h3 className="text-gray-700 uppercase">Đà Lạt</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

