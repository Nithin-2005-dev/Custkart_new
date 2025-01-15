import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";

function CenterMode() {
  const settings = {
    infinite: true,         // Ensures continuous sliding
    slidesToShow: 3,        // Number of visible slides
    slidesToScroll: 1,      // Scrolls one slide at a time
    speed: 500,             // Transition speed
    centerMode: false,      // Disables center mode to avoid misalignment
    centerPadding: "0px",   // No extra padding for clean alignment
    responsive: [
      {
        breakpoint: 1024, // Medium screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768, // Small screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container max-w-screen-lg mx-auto mt-10 px-4">
      {/* Header */}
      <h2 className="text-3xl font-bold text-center mb-8">Our Testimonials</h2>

      {/* Slider */}
      <Slider {...settings}>
        {/* Card 1 */}
        <div>
          <div className="p-4">
            <div className="card bg-base-100 shadow-lg rounded-lg">
              <figure>
                <img
                  src="src/assets/cs5.jpg"
                  alt="Product 1"
                  className="rounded-t-lg"
                />
              </figure>
              <div className="card-body">
                <p className=" font-bold">Official Merchandise Partner for TedX under an event at NIT Durgapur.</p>
                <div className="card-actions justify-end">
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div>
          <div className="p-4">
            <div className="card bg-base-100 shadow-lg rounded-lg">
              <figure>
                <img
                  src="src/assets/cs2.jpg"
                  alt="Product 2"
                  className="rounded-t-lg"
                />
              </figure>
              <div className="card-body">
                <p className="font-bold">Official Merchandise Partner for VITBMUN club at VIT Bhopal.</p>
                <div className="card-actions justify-end">
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div>
          <div className="p-4">
            <div className="card bg-base-100 shadow-lg rounded-lg">
              <figure>
                <img
                  src="src/assets/cs3.jpg"
                  alt="Product 3"
                  className="rounded-t-lg"
                />
              </figure>
              <div className="card-body">
                <p className="font-bold">Official Merchandise Partner at IIT Patna.</p>
                <div className="card-actions justify-end">
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div>
          <div className="p-4">
            <div className="card bg-base-100 shadow-lg rounded-lg">
              <figure>
                <img
                  src="src/assets/cs4.jpg"
                  alt="Product 4"
                  className="rounded-t-lg"
                />
              </figure>
              <div className="card-body">
                <p className="font-bold">Quality guaranteed with exceptional value.</p>
                <div className="card-actions justify-end">
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default CenterMode;
