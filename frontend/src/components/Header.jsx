import React, { useState } from "react";
import { Link } from "react-router";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="relative bg-gray-800 shadow">
      <div className="container px-6 py-4 mx-auto">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="flex items-center justify-between">
            <a href="#">
              <img
                className="w-auto scale-125 h-8 sm:h-7"
                src="\src\assets\CustKart Logo.png"
                alt="CustKart Logo"
              />
            </a>

            <div className="flex lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="text-gray-200 hover:text-gray-400 focus:outline-none focus:text-gray-400"
                aria-label="toggle menu"
              >
                {isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 8h16M4 16h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <div
            className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center ${
              isOpen ? "translate-x-0 opacity-100" : "opacity-0 -translate-x-full"
            }`}
          >
            <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
              <a
                href="#"
                className="px-3 py-2 mx-3 mt-2 text-gray-200 transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-gray-700"
              >
                Home
              </a>
              <a
                href="#"
                className="px-3 py-2 mx-3 mt-2 text-gray-200 transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-gray-700"
              >
                Orders
              </a>
              <a
                href="#"
                className="px-3 py-2 mx-3 mt-2 text-gray-200 transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-gray-700"
              >
                About
              </a>
              <a
                href="#"
                className="px-3 py-2 mx-3 mt-2 text-gray-200 transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-gray-700"
              >
                Feedback
              </a>
              <Link to={'/login'} className="px-5 py-2 mx-3 mt-2 text-gray-200 transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-red-500  text-start  bg-red-600 font-bold w-fit">Login</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
