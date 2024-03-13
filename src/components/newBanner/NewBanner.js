import React from "react";
import { images } from "../../images";
import Card from "./Card";

const NewBanner = () => {
  return (
    // <div className="banner">
    <div className="max-w-[1300px] w-full shadow-lg mx-auto">
      <div class="container flex flex-col items-center gap-8 mx-auto my-32">
        <p class="text-5xl font-medium leading-7 text-center text-dark-grey-600">
          Meet Our Pertners
        </p>
        <div class="flex flex-wrap items-center justify-center w-full gap-6 lg:gap-0 lg:flex-nowrap lg:justify-between ">
          <Card img={images.ipay} />
          <img src={images.imoney_sm} alt="" className="w-44 h-44" />
          <Card img={images.gppa} />
          <Card img={images.iremit} />
          <Card img={images.eden} />
        </div>
      </div>
    </div>
    // </div>
  );
};

export default NewBanner;
