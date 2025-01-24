import React from "react";
import { Link } from "react-router";

const Hero = () => {
  return (
    <div className="container px-6 py-16 mx-auto">
      <div className="items-center lg:flex">
        <div className="w-full lg:w-1/2">
          <div className="lg:max-w-lg">
            <h1 className="text-6xl text-center font-semibold text-white lg:text-start lg:text-8xl">
              Your Wish? <br /> We{" "}
              <span className="text-[#00ADB5]">Design</span>
            </h1>
            <p className="mt-3 text-white font-bold">
              At CustKart, we strive to provide top-quality solutions that
              empower businesses to reach their full potential. Our products and
              services are designed to help you streamline operations, boost
              productivity, and enhance customer satisfaction.
            </p>
            <Link
              to={"/products"}
              className="w-full px-5 py-3 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-[#00ADB5] rounded-lg lg:w-auto hover:bg-[#00acb5c8] focus:outline-none block text-center font-bold"
            >
              Shop Now
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2 group">
          <div className="relative">
            <img
              className="h-[30rem] lg:max-w-lg rounded-3xl shadow-xl shadow-slate-800 hover:scale-[1.02] transition-transform duration-300 cursor-pointer"
              src="\src\assets\hero-custkart.webp"
              alt="Catalogue"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
