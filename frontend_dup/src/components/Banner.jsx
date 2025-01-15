import React, { useState, useEffect } from "react";
import Typed from "typed.js";

function Banner() {
  const [bgColor, setBgColor] = useState("#f9f9f9"); // Initial background color

  useEffect(() => {
    const options = {
      strings: ["Get the best design on what you wear."],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      backDelay: 1000,
    };

    const typed = new Typed("#typed-text", options);

    return () => {
      typed.destroy();
    };
  }, []);

  // Change background color every 5 seconds
  useEffect(() => {
    const colors = ["#C7E7D8"];
    let index = 0;

    const interval = setInterval(() => {
      setBgColor(colors[index]);
      index = (index + 1) % colors.length;
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        backgroundColor: bgColor,
        transition: "background-color 0.8s ease-in-out",
      }}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Content */}
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col-reverse md:flex-row md:gap-x-8 gap-y-8">
        {/* Left Section */}
        <div className="order-2 md:order-1 w-full md:w-1/2 md:mt-32 md:pl-10 animate-fade-in-left">
          <h1
            className="text-5xl md:text-6xl lg:text-8xl font-bold text-center md:text-left"
            style={{
              opacity: 0,
              transform: "scale(0.8)", // Start smaller
              animation: "popIn 1s forwards", // Apply the custom pop-in animation
            }}
          >
            YOUR WISH?
          </h1>
          <h1
            className="text-6xl md:text-6xl lg:text-8xl font-bold text-[#169C82] text-center md:text-left"
            style={{
              opacity: 0,
              transform: "scale(0.8)", // Start smaller
              animation: "popIn 1s forwards 0.2s", // Apply the custom pop-in animation with delay
            }}
          >
            WE DESIGN!!!
          </h1>
          <h2 className="text-lg md:text-xl lg:text-2xl mt-4 font-medium text-gray-700 text-center md:text-left">
            <span id="typed-text"></span>
          </h2>
        </div>

        {/* Right Section */}
        <div className="order-1 md:order-2 w-full md:w-1/2 flex justify-center items-center animate-fade-in-right">
          <img
            src="src/assets/cs bannaer.jpg"
            alt="Design Preview"
            className="w-full md:w-[80%] max-w-[400px] md:max-w-[80%] object-contain transition-transform duration-700 ease-in-out hover:scale-105 border-4 border-black rounded-lg"
            style={{
              opacity: 0,
              transform: "scale(0.8)", // Start smaller
              animation: "popIn 1s forwards 0.4s", // Apply the custom pop-in animation with delay
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;



