import React from "react";

const ProductCard = ({ props }) => {
  return (
    <div class="w-full mt-8 shadow hover:sh relative h-[440px] md:h-[480px] overflow-y-hidden">
      <div class="portfolio-img relative overflow-hidden cursor-pointer h-[50%]">
        <img
          src={props.image}
          alt="portfolio image"
          class="w-full object-scale-down"
        />
        <div class="portfolio-hover"></div>
      </div>
      <div class="px-4 py-4 bg-white  text-[#5E043D] h-30%]">
        <h5 class="font-extrabold leading-relaxed text-2xl text-black-600 uppercase text-center">
          {props.heading}
        </h5>
        <p class="text-gray-600 text-center text-2xl sm:text-xl md:text-2xl">
          {props.content}
        </p>
      </div>
      <div className="p-5 w-full absolute bottom-0 h-[20%]">
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
