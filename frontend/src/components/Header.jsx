import React, { useContext, useState } from "react";
import { Link } from "react-router";
import { AuthStore } from "../store/AuthStore";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {currentUser,handleLOgOut}=useContext(AuthStore);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isOrderDropdownOpen, setOrderIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };
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
              <Link
                to={"/"}
                className="px-3 py-2 mx-3 mt-2 text-gray-200 transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-gray-700"
              >
                Home
              </Link>
              <button
                onClick={()=>{
                  setOrderIsDropdownOpen(!isOrderDropdownOpen)
                }}
                className="px-3 py-2 mx-3 mt-2 text-gray-200 transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-gray-700 text-start"
              >
                Orders
              </button>
              {isOrderDropdownOpen && (
        <div className="absolute left-24 top-24 lg:top-12 mt-2 w-40 bg-white rounded-md shadow-lg z-20">
          <Link to={"/products"}
            className="block px-4 py-2 text-gray-700 hover:bg-gray-200 w-full text-left rounded-t-md font-bold"
          >
            Place Order
          </Link>
          <Link to={"/orders"}
           className="block px-4 py-2 text-gray-700 hover:bg-gray-200 w-full text-left rounded-t-md font-bold"
          >
            Your Orders
          </Link>
        </div>
      )}
              <Link
                to={"/about"}
                className="px-3 py-2 mx-3 mt-2 text-gray-200 transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-gray-700"
              >
                About
              </Link>
              <a
                href="#"
                className="px-3 py-2 mx-3 mt-2 text-gray-200 transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-gray-700"
              >
                Feedback
              </a>
              {currentUser?<div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="px-5 py-2 ml-3 mt-2 text-gray-200 transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-sky-500 bg-sky-600 font-bold w-fit capitalize"
      >
        Hello 👋 {currentUser.name} {isDropdownOpen?<FaCaretUp className="text-gray-200 transition-colors duration-300 transform rounded-md  inline-block text-2xl"/>:<FaCaretDown className="text-gray-200 transition-colors duration-300 transform rounded-md  inline-block text-2xl"/>}
      </button>

      {isDropdownOpen && (
        <div className="absolute left-3 mt-2 w-40 bg-white rounded-md shadow-lg">
          <button onClick={handleLOgOut}
            className="block px-4 py-2 text-gray-700 hover:bg-red-600 hover:text-white w-full text-left rounded-b-md font-bold"
          >
            Logout
          </button>
        </div>
      )}
    </div>: <Link to={'/login'} className="px-5 py-2 mx-3 mt-2 text-gray-200 transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-red-500  text-start  bg-red-600 font-bold w-fit">Login</Link>}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
