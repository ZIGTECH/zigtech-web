import React from "react";
import { images } from "../../images";
import "./info.scss";

const Info = () => {
  return (
    <div>
      <div className="we-are-different">
        <div className="container">
          <h2 className="title1 title1--mod">We are different</h2>
          <div className="we-are-different__content">
            <div className="snappy">
              <img src={images.snappy_process} />
              <h3>Snappy Process</h3>
              <p>
                Our application process can be completed in minutes, not hours.
                Don't get stuck filling in tedious forms
              </p>
            </div>
            <div className="affordable">
              <img src={images.affordable_prices} />
              <h3>Affordable Prices</h3>
              <p>
                Our application process can be completed in minutes, not hours.
                Don't get stuck filling in tedious forms
              </p>
            </div>
            <div className="people">
              <img src={images.people_first} />
              <h3>People first</h3>
              <p>
                Our application process can be completed in minutes, not hours.
                Don't get stuck filling in tedious forms
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
