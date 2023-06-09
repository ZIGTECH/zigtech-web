import React from "react";
import Slider from "react-slick";
import "./banner.scss";
import { images } from "../../images";

const Banner = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerPadding: "160px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="banner">
      {/* <h2 style={{ textAlign: "left", fontWeight: 700, marginBottom: "5rem" }}>
        {" "}
        Trusted By{" "}
      </h2> */}
      <Slider {...settings}>
        <div class="sponsor-feature">
          <img alt="" src={images.ipay} style={{ width: "155px" }} />
        </div>
        <div class="sponsor-feature">
          <img alt="" src={images.imoney} style={{ width: "155px" }} />
        </div>
        <div class="sponsor-feature">
          <img alt="" src={images.gppa} style={{ width: "155px" }} />
        </div>
        <div class="sponsor-feature">
          <img alt="" src={images.iremit} style={{ width: "155px" }} />
        </div>
        <div class="sponsor-feature">
          <img alt="" src={images.eden} style={{ width: "155px" }} />
        </div>
        {/* <div class="sponsor-feature">
          <img
            alt=""
            src="https://itagroup.hs.llnwd.net/o40/csg/pse-demo/channel-incentive/logos/logo3.jpg"
            style={{ width: "155px" }}
          />
        </div> */}
      </Slider>
    </div>
  );
};

export default Banner;
