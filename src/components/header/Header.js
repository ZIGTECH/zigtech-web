import React, { useState } from "react";
import { images } from "../../images";
import "./header.scss";

const Header = () => {
  const [open, setOpen] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setOpen(!open);
  };
  return (
    <div>
      <header>
        <nav className="navbar container">
          <div className="logo">
            <img src={images.logo}></img>
          </div>
          <ul className={open ? `nav-items active` : `nav-items`}>
            <li>About</li>
            <li>Contact</li>
            <li>Portfolio</li>
            <li className="btn btn--nav-btn">View Plans</li>
          </ul>
          <div className="hamburger">
            <img src={images.hamburger} onClick={handleClick}></img>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
