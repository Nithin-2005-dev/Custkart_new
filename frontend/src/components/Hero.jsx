import React from "react";
import { Link } from "react-router";

const Hero = () => {
  return (
    <div className="container px-6 py-16 mx-auto">
      <div className="items-center lg:flex">
        <div className="w-full lg:w-1/2">
          <div className="lg:max-w-lg">
            <h1 className="text-5xl font-semibold text-gray-800 lg:text-7xl">
              Your Wish? <br /> We{" "}
              <span className="text-blue-500">Design</span>
            </h1>
            <p className="mt-3 text-gray-600 font-bold">
              At CustKart, we strive to provide top-quality solutions that
              empower businesses to reach their full potential. Our products and
              services are designed to help you streamline operations, boost
              productivity, and enhance customer satisfaction.
            </p>
            <Link
              to={"/products"}
              className="w-full px-5 py-3 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500 block text-center font-bold"
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
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="w-16 h-16 bg-blue-500 rounded-full animate-bounce"></div>
              <div className="absolute w-8 h-8 bg-white rounded-full top-10 left-10 transform group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-300"></div>
              <div className="absolute w-12 h-12 bg-gray-500 rounded-full bottom-10 right-10 transform group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
