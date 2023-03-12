import React from "react";
import Slider from "react-slick";
import "./banner.scss";

const Banner = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerPadding: "160px",
  };
  return (
    <div className="banner">
      {/* <h2 style={{ textAlign: "left", fontWeight: 700, marginBottom: "5rem" }}>
        {" "}
        Trusted By{" "}
      </h2> */}
      <Slider {...settings}>
        <div class="sponsor-feature">
          <img
            alt=""
            src="https://itagroup.hs.llnwd.net/o40/csg/pse-demo/channel-incentive/logo-mil.png"
            style={{ width: "155px" }}
          />
        </div>
        <div class="sponsor-feature">
          <img
            alt=""
            src="https://itagroup.hs.llnwd.net/o40/csg/pse-demo/channel-incentive/logo-timberline.jpg"
            style={{ width: "155px" }}
          />
        </div>
        <div class="sponsor-feature">
          <img
            alt=""
            src="https://itagroup.hs.llnwd.net/o40/csg/pse-demo/channel-incentive/logo-ppg.jpg"
            style={{ width: "155px" }}
          />
        </div>
        <div class="sponsor-feature">
          <img
            alt=""
            src="https://itagroup.hs.llnwd.net/o40/csg/pse-demo/channel-incentive/logos/logo1.jpg"
            style={{ width: "155px" }}
          />
        </div>
        <div class="sponsor-feature">
          <img
            alt=""
            src="https://itagroup.hs.llnwd.net/o40/csg/pse-demo/channel-incentive/logos/logo2.jpg"
            style={{ width: "155px" }}
          />
        </div>
        <div class="sponsor-feature">
          <img
            alt=""
            src="https://itagroup.hs.llnwd.net/o40/csg/pse-demo/channel-incentive/logos/logo3.jpg"
            style={{ width: "155px" }}
          />
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
