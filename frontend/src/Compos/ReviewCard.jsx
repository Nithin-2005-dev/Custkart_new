import React from "react";
import Marquee from "react-fast-marquee";
import classNames from "classnames";
import { FaWhatsapp } from "react-icons/fa6";
import { MdHomeRepairService } from "react-icons/md";
import { SiCodefresh } from "react-icons/si";
const cn = (...classes) => classNames(classes);
import { FlipText } from "../components/components/ui/flip-text";
import { Meteors } from "../components/components/ui/meteors";

import { useInView } from "react-intersection-observer";
const reviews = [
  {
    name: "Order Easily!via Whatsapp",
    body: "Instant checkout with our contact from whatsapp",
    img: <FaWhatsapp className="text-3xl rounded-lg shadow-lg shadow-slate-200"></FaWhatsapp>,
  },
  {
    name: "Online 24*7 Available!!",
    body: "Whenever you order.Our customer service will be happy to serve :)",
    img: <MdHomeRepairService className="text-3xl rounded-lg shadow-lg shadow-slate-200"></MdHomeRepairService>,
  },
  {
    name: "Top Notch Quality",
    body: "we ensure that the products we send meet the buyers expectations.",
    img: <SiCodefresh className="text-3xl rounded-lg shadow-lg shadow-slate-200"></SiCodefresh>,
  },
  {
    name: "Order Easily!via Whatsapp",
    body: "Instant checkout with our contact from whatsapp",
    img: <FaWhatsapp className="text-3xl rounded-lg shadow-lg shadow-slate-200"></FaWhatsapp>,
  },
  {
    name: "Online 24*7 Available!!",
    body: "Whenever you order.Our customer service will be happy to serve :)",
    img: <MdHomeRepairService className="text-3xl rounded-lg shadow-lg shadow-slate-200"></MdHomeRepairService>,
  },
  {
    name: "Top Notch Quality",
    body: "we ensure that the products we send meet the buyers expectations.",
    img: <SiCodefresh className="text-3xl rounded-lg shadow-lg shadow-slate-200"></SiCodefresh>,
  },
];

const firstRow = reviews.slice(0, reviews.length);
const ReviewCard = ({ name, body, img }) => {
  return (
    <div className="bg-gray-200 m-2 rounded-md">
    <figure
      className={cn(
        "m-4 relative w-64 cursor-pointer overflow-hidden rounded-xl p-4",
        " hover:scale-105 ",
      )}
    >
      <div className="flex flex-row items-center gap-2 ">
      <Meteors number={70} />
        {img}
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
    </div>
  );
};

export function MarqueeDemo() {
    const { ref: headingRef, inView: headingInView } = useInView({
        triggerOnce: false,
        threshold: 0.5, 
      });
  return (
    <>
    <div
            ref={headingRef}
            className={`text-3xl font-bold text-center mb-8 text-white transition-transform duration-500
            }`}
          >
          {!headingInView?<div className="p-4"></div>: <FlipText word="Our Services" />}
          </div>
    
    <div className="relative flex h-fit w-full flex-col items-center justify-evenly overflow-hidden bg-transparent md:shadow-xl">
      <Marquee pauseOnHover={true} speed={50} gradient={false}>
        {firstRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
    </div>
    </>
  );
}
