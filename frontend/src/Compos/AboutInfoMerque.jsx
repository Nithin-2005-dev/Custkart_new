import { cn } from "../components/lib/utils";
import { Marquee } from "../components/components/ui/marquee";
import { Particles } from "../components/components/ui/particles";
import { VelocityScroll } from "../components/components/ui/scroll-based-velocity";
import { TextReveal } from "../components/components/ui/text-reveal";

const reviews = [
    {
        name: "Company Overview",
        body: "Custkart Merchandise Private Limited, established on June 10, 2020, is an Indian company specializing in custom apparel, including t-shirts, hoodies, and bags."
      },
      {
        name: "Target Audience",
        body: "They cater to corporate houses and college events, offering products like round-neck t-shirts and men's round-neck t-shirts."
      },
      {
        name: "Founders & Headquarters",
        body: "The company is headquartered in Bokaro, Jharkhand, and is led by CEO Kundan Mishra and Co-Founder Abhishek Mishra."
      },
      {
        name: "Quality & Manufacturing",
        body: "Custkart emphasizes quality and customer satisfaction, offering 100% cotton products with transparent manufacturing and graphic printing processes."
      },
      {
        name: "Shipping Information",
        body: "They provide shipping within 24 hours across India."
      },
      {
        name: "Online Presence",
        body: "Their online presence includes a Facebook page and an Instagram account, where they showcase their products and designs."
      },
      {
        name: "Status",
        body: "According to Tracxn, Custkart is no longer active."
      },
      {
        name: "Contact",
        body: "For more information, you can visit their official website or contact them directly through their social media channels."
      }
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  name,
  body,
}) => {
  return (
    <figure
      className={cn(
        "relative h-fit lg:w-60  cursor-pointer overflow-hidden rounded-xl border p-4 bg-gray-200",
        "border-gray-950/[.1]",
      )}
    >
    <Particles
        className="absolute inset-0 z-0"
        quantity={50}
        ease={10}
        color={"black"} vx={3} vy={3}
      />
      <div className="flex flex-row items-center gap-2">
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium ">
            {name}
          </figcaption>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function AboutInfoMerque() {
  return (
    <>
    <h2 className="text-3xl font-extrabold text-gray-800 my-4 text-center">
    About Custkart: A Brief Overview
        </h2>
    <div className="relative flex h-[500px] w-full flex-row items-center  overflow-hidden rounded-lg md:shadow-xl bg-transparent justify-evenly">
    
      <Marquee pauseOnHover reverse vertical className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee pauseOnHover vertical className="[--duration:40s]">
        {(firstRow.concat(secondRow)).map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover vertical className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
    </div>
    <VelocityScroll className={"text-orange-300 bg-gray-50 md:text-xl text-lg"} numRows={1} >CustKart <pre className="inline-block">   </pre></VelocityScroll>
    </>
  );
}
