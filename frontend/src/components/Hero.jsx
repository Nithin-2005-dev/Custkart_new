import React from "react";
import { Link } from "react-router";

const Hero = () => {
  return <div class="container px-6 py-16 mx-auto">
  <div class="items-center lg:flex">
      <div class="w-full lg:w-1/2">
          <div class="lg:max-w-lg">
              <h1 class="text-5xl font-semibold text-gray-800 lg:text-7xl">Your Wish? <br/> We <span class="text-blue-500 ">Design</span></h1>
              
              <p class="mt-3 text-gray-600 font-bold">At CustKart, we strive to provide top-quality solutions that empower businesses to reach their full potential. 
              Our products and services are designed to help you streamline operations, boost productivity, and enhance customer satisfaction.</p>
              
              <Link to={"/orders"} class="w-full px-5 py-3 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500 block text-center font-bold">Shop Now</Link>
          </div>
      </div>
      <div class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2 ">
          <img class="h-[30rem] lg:max-w-lg rounded-3xl shadow-xl shadow-slate-800 hover:shadow-2xl hover:shadow-black hover:scale-[1.01] cursor-pointer" src="\src\assets\hero-custkart.webp " alt="Catalogue-pana.svg"/>
      </div>
  </div>
</div>
};

export default Hero;
