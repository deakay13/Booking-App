import { useState} from "react";
import { Link } from "react-router-dom";

export default function HeaderHome() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="bg-gray-200 sticky top-0 z-20">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="hidden w-full text-gray-600 md:flex md:items-center"></div>

          <div className="w-full text-gray-700 md:text-center text-2xl font-semibold">
            Travel Booking
          </div>

          <div className="flex items-center justify-end w-full">
            <Link
              className="text-gray-600 focus:outline-none mx-4 sm:mx-0"
              to="/Home/SignIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
            </Link>

            <div className="flex sm:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="text-gray-600 hover:text-gray-500 focus:outline-none focus:text-gray-500"
                aria-label="toggle menu"
              >
                <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <nav
          className={`${
            isOpen ? "" : "hidden"
          } sm:flex sm:justify-center sm:items-center mt-4`}
        >
          <div className="flex flex-col sm:flex-row">
            <Link
              className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0"
              to="/Home/Hotels"
            >
              Hotels
            </Link>
            <Link
              className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0"
              to="/Home/Flights"
            >
              Flights
            </Link>
            <Link
              className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0"
              to="/Home/Bus&Shuttle"
            >
              Bus & Shuttle
            </Link>
            <Link
              className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0"
              to="/Home/AirportTransfer"
            >
              Airport Transfer
            </Link>
            <Link
              className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0"
              to="/Home/CarRental"
            >
              Car Rental
            </Link>
            <Link
              className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0"
              to="/Home/ThingsToDo"
            >
              Things To Do
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}