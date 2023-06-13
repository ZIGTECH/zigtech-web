import React from "react";

const ProductCard = ({ props }) => {
  return (
    <div class=" sm:w-1/2 md:w-2/5 lg:w-[32%] mt-8 shadow hover:sh">
      {/* <div class="portfolio-item mx-auto max-w-sm"> */}
      <div class="portfolio-img relative overflow-hidden cursor-pointer">
        <img
          src={props.image}
          alt="portfolio image"
          class="max-w-full w-[384px] h-[258px]"
        />
        <div class="portfolio-hover"></div>
      </div>
      <div class="px-4 py-4 bg-white  text-[#5E043D] h-auto">
        <h5 class="font-bold text-2xl text-black-600 uppercase text-center">
          {props.heading}
        </h5>
        <p class="text-gray-600 text-center">{props.content}</p>
        <button className="bg-[#5e043d] text-white w-full rounded-md py-3">
          <a href="#" className="font-mono">
            View Project
          </a>
        </button>
      </div>
      {/* </div> */}
    </div>
  );
};

export default ProductCard;
