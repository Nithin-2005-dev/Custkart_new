import React, { useState } from "react";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-[#222831] text-center py-8 text-white">
      {/* Logo and Branding */}
      <div className="flex flex-col items-center mb-6">
        <img
          src="\src\assets\CustKart Logo.png"
          alt="CustomKart Logo"
          className="h-12 mb-2"
        />
        <h3 className="text-2xl font-bold text-teal-600">CustomKart</h3>
      </div>

      {/* Shop Address */}
      <div className="mb-6">
        <h4 className="text-lg font-semibold mb-2">Shop Address</h4>
        <p>M Pupunki, Ashram, Bokaro Steel City, Jharkhand 827013</p>
        <a
          href="https://www.google.com/maps/place/Custkart-+Merchandise+Store/@23.6983976,86.2003694,14.57z/data=!4m6!3m5!1s0x39f4232a7dbae3ff:0x207bd19bde05d5dc!8m2!3d23.6979195!4d86.2025446!16s%2Fg%2F11h60lpvbx?hl=en&entry=ttu&g_ep=EgoyMDI1MDEyMS4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Reach Us on Google Maps
        </a>
      </div>

      {/* Connect Section */}
      <div className="mb-1">
        <h4 className="text-2xl p-1 font-semibold mb-2">Connect</h4>
        <div className="flex justify-evenly items-center gap-2">
          <a
            href="https://wa.me/your-number"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 hover:underline text-4xl"
          >
            <FaSquareWhatsapp />
          </a>
          <a href="mailto:your-email@example.com" className="text-blue-200 hover:underline text-4xl">
          <MdEmail />
          </a>
        </div>
      </div>
      
      <div className="flex justify-evenly px-6 py-1 mx-auto ">
        <div className="flex items-center justify-evenly">
          <div className="flex items-center justify-evenly">
            <div className="flex justify-evenly ">
              <Link
                to={"/"}
                className="px-3 py-2 mx-3 mt-2 text-gray-200 transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-gray-700"
              >
                Home
              </Link>
              <Link
                to={"/about"}
                className="px-3 py-2 mx-3 mt-2 text-gray-200 transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-gray-700"
              >
                About
              </Link>
              <Link
                to={"/feedback"}
                className="px-3 py-2 mx-3 mt-2 text-gray-200 transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-gray-700"
              >
                Feedback
              </Link>
              <Link
                to={"/contact"}
                className="px-3 py-2 mx-3 mt-2 text-gray-200 transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-gray-700"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-300 pt-4">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} CustomKart. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
