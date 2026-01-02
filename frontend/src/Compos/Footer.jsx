import React, { useState } from "react";
import { FaInstagram, FaLinkedin, FaSquareFacebook, FaSquareInstagram, FaSquareTwitter, FaSquareWhatsapp, FaTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { LineShadowText } from "../components/components/ui/line-shadow-text";
import { Dock, DockIcon } from "../components/components/ui/dock";
const Footer = () => {
  return (
    <footer className="bg-[#222831] text-center py-8 text-white ">
      {/* Logo and Branding */}
      <div className="flex flex-col items-center mb-6">
        <img
          src=".\CustKart_Logo.png"
          alt="CustomKart Logo"
          className="h-12 mb-2"
        />
        <h3 className="text-balance text-5xl font-semibold leading-none tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl text-teal-600">
      Cust
      <LineShadowText className="italic inline-block" shadowColor="white">
        Kart
      </LineShadowText>
    </h3>
      </div>

      <div className="mb-6">
        <h4 className="text-lg font-semibold mb-2 underline ">Shop Address</h4>
        <p className="text-sky-300 m-1">M Pupunki, Ashram, Bokaro Steel City, Jharkhand 827013</p>
        <a
          href="https://www.google.com/maps/place/Custkart-+Merchandise+Store/@23.6983976,86.2003694,14.57z/data=!4m6!3m5!1s0x39f4232a7dbae3ff:0x207bd19bde05d5dc!8m2!3d23.6979195!4d86.2025446!16s%2Fg%2F11h60lpvbx?hl=en&entry=ttu&g_ep=EgoyMDI1MDEyMS4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Reach Us on Google Maps
        </a>
      </div>

      <div className="mb-1">
        <h4 className="text-2xl p-1 font-semibold mb-2">Connect</h4>
        <div className="relative">
      <Dock iconMagnification={60} iconDistance={100}>
        <DockIcon className="bg-black/10 dark:bg-white/10">
          <FaSquareFacebook className="size-full text-sky-500" />
        </DockIcon>
        <DockIcon className="bg-black/10 dark:bg-white/10">
          <FaLinkedin className="size-full text-blue-400" />
        </DockIcon>
        <DockIcon className="bg-black/10 dark:bg-white/10">
          <FaInstagram className="size-full text-orange-400" />
        </DockIcon>
        <DockIcon className="bg-black/10 dark:bg-white/10">
          <FaTwitter className="size-full text-blue-400" />
        </DockIcon>
      </Dock>
    </div>
      </div>
            <div className="flex justify-evenly ">
              <Link
                to={"/"}
                className="px-3 py-2  mt-2 text-gray-200 transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-gray-700"
              >
                Home
              </Link>
              <Link
                to={"/about"}
                className="px-3 py-2  mt-2 text-gray-200 transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-gray-700"
              >
                About
              </Link>
              <Link
                to={"/orders"}
                className="px-3 py-2  mt-2 text-gray-200 transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-gray-700"
              >
                Orders
              </Link>
              <Link
                to={"/feedback"}
                className="px-3 py-2  mt-2 text-gray-200 transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-gray-700"
              >
                Feedback
              </Link>
            </div>
      <div className="border-t border-gray-300 pt-4">
        <p className="text-sm text-gray-300">
          © {new Date().getFullYear()} CustomKart. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
