import React from "react";
import Slider from "react-slick";

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 3000, 
    arrows: false,
  };

  return (
    <div className="w-full rounded-none">
      <Slider {...settings}>
        {/* Card 1 */}
        <div className="h-[50vh] md:h-[50vh] lg:h-[60vh]">
          <div className="p-0 h-full">
            <div className="  overflow-hidden h-full flex flex-col">
              <figure className="flex-shrink-0 h-full">
                <img
                  src="/src/assets/cs5.jpg"
                  alt="Official Merchandise Partner for TedX at NIT Durgapur"
                  className="w-full h-full object-cover"
                />
              </figure>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="h-[50vh] md:h-[50vh] lg:h-[60vh]">
          <div className=" h-full">
            <div className="  overflow-hidden h-full flex flex-col">
              <figure className="flex-shrink-0 h-full">
                <img
                  src="/src/assets/cs2.jpg"
                  alt="Official Merchandise Partner for VITBMUN at VIT Bhopal"
                  className="w-full h-full object-cover"
                />
              </figure>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="h-[50vh] md:h-[50vh] lg:h-[60vh]">
          <div className=" h-full">
            <div className="  overflow-hidden h-full flex flex-col">
              <figure className="flex-shrink-0 h-full">
                <img
                  src="/src/assets/cs3.jpg"
                  alt="Official Merchandise Partner at IIT Patna"
                  className="w-full h-full object-cover"
                />
              </figure>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="h-[50vh] md:h-[50vh] lg:h-[60vh]">
          <div className=" h-full">
            <div className="  overflow-hidden h-full flex flex-col">
              <figure className="flex-shrink-0 h-full">
                <img
                  src="/src/assets/cs4.jpg"
                  alt="Quality guaranteed with exceptional value"
                  className="w-full h-full object-cover"
                />
              </figure>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
