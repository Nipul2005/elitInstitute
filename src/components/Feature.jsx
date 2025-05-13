import Heading from "../design/Heading";
import FeatursBox from "../common/FeatursBox";
import { useRef, useState } from "react";

function Feature() {
  const [indx, setIndx] = useState(0);
  const countArray = Array.from({ length: 10 }, (_, index) => index);

  const left = () => {
    if (indx > 0) {
      setIndx((prev) => prev - 1);
    }
  };
  const right = () => {
    if (indx < countArray.length - 1) {
      setIndx((prev) => prev + 1);
    }
  };

  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      console.log(current.clientWidth);
      const scrollAmount = current.clientWidth / 3;
      current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };
  return (
    <section className="w-full h-auto sm:py-18 py-7 px-4 sm:container sm:mx-auto relative">
      <Heading text="Features" />
      <FeatursBox indx={indx} arr={countArray} scroll={scrollRef} />
      <i
        className="ri-arrow-left-double-line -left-10 absolute top-1/2 bg-primary w-10 h-10 sm:flex justify-center items-center rounded-full cursor-pointer text-2xl hidden text-white"
        onClick={() => scroll("left")}
      ></i>
      <i
        className="ri-arrow-right-double-line absolute -right-10 top-1/2 bg-primary w-10 h-10 sm:flex justify-center items-center rounded-full cursor-pointer text-2xl hidden text-white"
        onClick={() => scroll("right")}
      ></i>
    </section>
  );
}

export default Feature;
