function SalesContent() {
    return (
      <>
        <div className="h-64 rounded-md overflow-hidden bg-cover bg-center bg-[url('/assets/PngTree-Sales.png')] ">
          <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
            <div className="px-10 max-w-xl">
              <h2 className="text-2xl text-white font-semibold">Flash Sales</h2>
              <p className="mt-2 text-white">
                12.12 Flash Sales, Sale 50% all Hotels Booking and checking
                hotels Location on 12.12.2024
              </p>
              <button className="flex items-center mt-4 px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                <span>Booking Now</span>
                <svg
                  className="h-5 w-5 mx-2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="md:flex mt-8 md:-mx-4 ">
          <div className="w-full h-64 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:w-1/2 bg-[url('/assets/PngTree-Christmas.jpg')]">
            <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
              <div className="px-10 max-w-xl">
                <h2 className="text-2xl text-white font-semibold">
                  Freeze Check-in
                </h2>
                <p className="mt-2 text-gray-400">
                  Receive a Christmas gift upon check-in at your hotel location.
                  From 02.12.2024 to 30.12.2024
                </p>
                <button className="flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none">
                  <span>Book Now</span>
                  <svg
                    className="h-5 w-5 mx-2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="w-full h-64 mt-8 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:mt-0 md:w-1/2 bg-[url('/assets/pixabay-monicore.png')]">
            <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
              <div className="px-10 max-w-xl">
                <h2 className="text-2xl text-white font-semibold">Coupon</h2>
                <p className="mt-2 text-gray-400">
                  Book now and receive Christmas discounts up to 70%. Only use
                  in 24.12.2024
                </p>
                <button className="flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none">
                  <span>Book Now</span>
                  <svg
                    className="h-5 w-5 mx-2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}
export default SalesContent;