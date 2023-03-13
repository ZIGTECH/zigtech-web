import React from "react";
import "./hero.scss";
import { images } from "../../images";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div>
      <div className="hero">
        <div className="right-top-image">
          <picture>
            <source
              media="(max-width:767px)"
              srcSet={images.intro_right_mobile}
            />
            <img src={images.intro_right} />
          </picture>
        </div>
        <div className="hero__wrapper container">
          <div className="hero__content">
            <h1 className="title1">
              Crafting Innovative Solutions through Technology
            </h1>
            {/* <h3>Trusted Software Development Company</h3> */}
            <p className="hero__text">
              We are a team of experienced software developers dedicated to
              crafting innovative solutions that help businesses achieve their
              goals. With expertise in a range of technologies and industries,
              we work closely with our clients to understand their unique needs
              and design custom solutions that meet those needs. Whether you
              need a mobile app, web application, or enterprise software, we
              have the skills and experience to bring your vision to life.
            </p>
            {/* <button className="btn">VIEW PLANS</button> */}
          </div>
          <div className="hero__image">
            <picture>
              <source media="(max-width:767px)" srcSet={images.hero} />
              <img src={images.hero} />
            </picture>
          </div>
        </div>
        <div className="left-bottom-image">
          <picture>
            <source
              media="(max-width:767px)"
              srcSet={images.intro_left_mobile}
            />
            <img src={images.intro_left} />
          </picture>
        </div>
      </div>
    </div>
  );
};

export default Hero;
