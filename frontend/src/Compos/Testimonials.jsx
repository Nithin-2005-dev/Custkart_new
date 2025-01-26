import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FlipText } from "../components/components/ui/flip-text";
import React from "react";
import Slider from "react-slick";
import { useInView } from "react-intersection-observer";

function Testimonials() {
  const { ref: headingRef, inView: headingInView } = useInView({
    triggerOnce: false,
    threshold: 0.5, 
  });

  const settings = {
    infinite: true,
    slidesToShow: 3, // Default for larger screens
    slidesToScroll: 1,
    speed: 500,
    centerMode: false,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 1280, // Large screens (desktops)
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, // Medium screens (tablets, small laptops)
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Small screens (small tablets, larger phones)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // Extra small screens (phones)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-full mx-auto mt-10 px-4 scale-x-75 sm:scale-95">
      {/* Animated Heading */}
      <div
        ref={headingRef}
        className={`text-3xl font-bold text-center mb-8 text-white transition-transform duration-500
        }`}
      >
       {!headingInView?<div className="p-4"></div>: <FlipText word="Our Testimonals" />}
      </div>

      {/* Slider Section */}
      <Slider {...settings}>
        {/* Card 1 */}
        <div>
          <div className="p-4 h-full">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden h-full flex flex-col">
              <figure className="flex-shrink-0">
                <img
                  src="/src/assets/cs5.jpg"
                  alt="Official Merchandise Partner for TedX at NIT Durgapur"
                  className="w-full h-64 object-cover"
                />
              </figure>
              <div className="p-4 flex-1 flex flex-col justify-between ">
                <p className="font-semibold text-lg h-12">Official Merchandise Partner for TedX under an event at NIT Durgapur.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div>
          <div className="p-4 h-full ">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden h-full flex flex-col">
              <figure className="flex-shrink-0">
                <img
                  src="/src/assets/cs2.jpg"
                  alt="Official Merchandise Partner for VITBMUN at VIT Bhopal"
                  className="w-full h-64 object-cover"
                />
              </figure>
              <div className="p-4 flex-1 flex flex-col justify-between ">
                <p className="font-semibold text-lg h-12">Official Merchandise Partner for VITBMUN club at VIT Bhopal.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div>
          <div className="p-4 h-full">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden h-full flex flex-col">
              <figure className="flex-shrink-0">
                <img
                  src="/src/assets/cs3.jpg"
                  alt="Official Merchandise Partner at IIT Patna"
                  className="w-full h-64 object-cover"
                />
              </figure>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <p className="font-semibold text-lg h-12">Official Merchandise Partner at IIT Patna.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div>
          <div className="p-4 h-full">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden h-full flex flex-col">
              <figure className="flex-shrink-0">
                <img
                  src="/src/assets/cs4.jpg"
                  alt="Quality guaranteed with exceptional value"
                  className="w-full h-64 object-cover"
                />
              </figure>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <p className="font-semibold text-lg h-12">Quality guaranteed with exceptional value.</p>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Testimonials;
