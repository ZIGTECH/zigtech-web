import React from "react";

const Card = ({ img }) => {
  return (
    <span>
      <div className="max-w-[177px] max-h-[177px] w-full h-full ">
        <img
          src={img}
          alt="icon"
          className="w-full h-full opacity-70 hover:opacity-100"
        />
      </div>
    </span>
  );
};

export default Card;
