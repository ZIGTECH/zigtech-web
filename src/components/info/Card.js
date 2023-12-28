import React from "react";
import { images } from "../../images";

const Card = ({ icon, heading, content }) => {
  return (
    <div className="group">
      <div class="transition-all duration-1000 w-full h-full bg-white shadow-xl  p-4 relative z-40  ">
        <div class=" absolute top-0 left-0 w-24 h-3 rounded-ss-lg z-30 bg-[#996d31] transition-all duration-200 group-hover:bg-[#5E043D] group-hover:w-1/2"></div>
        <div className="text-left">
          <lord-icon
            src={icon}
            trigger="loop"
            colors="primary:#996d31"
            state="intro"
            style={{ width: "70px", height: "70px", marginTop: "20px" }}
          ></lord-icon>
          <h3 className="mt-8 text-3xl font-semibold">{heading}</h3>
          <p className="mt-4 text-2xl text-gray-600">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
