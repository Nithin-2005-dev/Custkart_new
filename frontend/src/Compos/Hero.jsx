import React from "react";
import { Link } from "react-router";
import { TextAnimate } from "../components/components/ui/text-animate";
import { VelocityScroll } from "../components/components/ui/scroll-based-velocity";
const Hero = () => {
  return (
    <>
    <div className="container px-6 py-16 mx-auto">
      <div className="items-center lg:flex">
        <div className="w-full lg:w-1/2">
          <div className="lg:max-w-lg">
          <TextAnimate animation="slideLeft" by="character" className="text-6xl text-center font-semibold text-white lg:text-start lg:text-8xl">
          Your Wish?
    </TextAnimate>
    <div className="flex justify-center">
    <TextAnimate animation="slideLeft" by="character" className="text-6xl text-center font-semibold text-white lg:text-start lg:text-8xl inline-block">
          We
    </TextAnimate>
    <pre className="inline-block"> </pre>
    <TextAnimate animation="slideLeft" by="character" className="text-6xl text-center font-semibold text-[#222831] lg:text-start lg:text-8xl inline-block">
          Design
    </TextAnimate>
    </div>
            <TextAnimate animation="fadeIn" by="line" as="p" className="mt-3 text-white font-bold">
      {`At CustKart, we strive to provide top-quality solutions that empower businesses to reach their full potential.\nOur products and services are designed to help you streamline operations, boost productivity, and enhance customer satisfaction.`}
    </TextAnimate>
            <p>
               
            </p>
            <Link
              to={"/products"}
              className="btn-24 w-full  text-center hover:text-white my-6 m-2"
            >
              Shop Now
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2 group">
          <div className="relative">
            <img
              className="h-[30rem] lg:max-w-lg rounded-3xl shadow-xl shadow-slate-800 hover:scale-[1.02] transition-transform duration-300 cursor-pointer"
              src=".\hero-custkart.webp"
              alt="Catalogue"
            />
          </div>
        </div>
      </div>
    </div>
    <VelocityScroll  className={"text-orange-300 bg-gray-50 md:text-xl text-lg"} numRows={1} >CustKart <pre className="inline-block">   </pre></VelocityScroll>
    <VelocityScroll className={"text-black bg-blue-400 md:text-xl text-lg"} numRows={1} >Your Wish? We design <pre className="inline-block">   </pre></VelocityScroll>
  </>
  );
};

export default Hero;
