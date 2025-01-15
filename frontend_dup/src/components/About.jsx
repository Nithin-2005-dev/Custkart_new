import React, { useState, useEffect } from "react";

function About() {
  const [bgColor, setBgColor] = useState("#f9f9f9"); // Initial background color

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

  // Define pop-in animation using CSS in JS
  const popInAnimation = {
    animation: "popIn 1s ease-out forwards",
  };

  const keyframesStyle = `
    @keyframes popIn {
      0% {
        opacity: 0;
        transform: scale(0.8); /* Start smaller */
      }
      50% {
        opacity: 0.5; /* Midway point */
        transform: scale(1.1); /* Slightly bigger */
      }
      100% {
        opacity: 1;
        transform: scale(1); /* End at normal size */
      }
    }
  `;

  return (
    <>
      <style>{keyframesStyle}</style> {/* Insert the keyframes animation into the document */}
      <div
        style={{
          backgroundColor: bgColor,
          transition: "background-color 0.8s ease-in-out",
        }}
        className="relative h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-24" // Added padding-top for mobile
      >
        <div
          style={popInAnimation} // Apply the pop-in animation
          className="w-full"
        >
          <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col-reverse md:flex-row md:gap-x-8 gap-y-8 h-full">
            {/* Left Section */}
            <div className="order-2 md:order-1 w-full md:w-1/2 h-full flex flex-col items-center justify-center">
              <div className="flex justify-center items-center mb-8">
                <img
                  src="src/assets/about.jpg" // Replace with your image path
                  alt="CustKart Logo"
                  className="w-full md:w-3/4 max-w-[500px] object-contain transition-transform duration-700 ease-in-out hover:scale-105 rounded-lg"
                />
              </div>

              <div>
                <ul className="list-disc pl-6 text-lg font-medium text-gray-800">
                  <li>
                    <strong>Legal Name:</strong> CUSTKART MERCHANDISE PRIVATE LIMITED
                  </li>
                  <li>
                    <strong>Headquarters:</strong> Bokaro, Jharkhand, India
                  </li>
                  <li>
                    <strong>Core Team:</strong>
                    <ul className="list-decimal pl-6">
                      <li>Kundan Mishra - Chief Executive Officer</li>
                      <li>Abhishek Mishra - Co-Founder</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Contact:</strong>
                    <ul className="list-decimal pl-6">
                      <li>E-mail : custkart@gmail.com</li>
                      <li>Mobile No. : 7004800309</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Section */}
            <div className="order-2 md:order-2 w-full md:w-1/2 h-full flex items-center justify-center">
              <div className="text-center md:text-left">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
                  <span className="text-black">About </span>
                  <span className="text-[#169C82]">CustKart</span>
                </h1>

                <p className="text-lg md:text-xl lg:text-2xl mt-4 font-medium text-gray-700">
                  CUSTKART MERCHANDISE PRIVATE LIMITED was founded on June 10th, 2020.
                  Custkart has made a name for itself in the list of top suppliers of
                  Round Neck T-Shirt and Men's Round Neck T-Shirt in India. The
                  supplier company is located in Bokaro, Jharkhand, and is one of the
                  leading sellers of listed products. Custkart offers supreme quality
                  of Perfect Stitching Round Neck T-Shirts, etc. Buy Round Neck
                  T-Shirts, Men's Round Neck T-Shirts in bulk from us for the best
                  quality products and service. It is also known as Custkart
                  Merchandise Store.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;