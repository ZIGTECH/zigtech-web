import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <footer class="footer-distributed">
      <div class="footer-left">
        <h3>
          Zahra Innovative <span>Technologies</span>
        </h3>

        <p class="footer-links">
          <a href="#" class="link-1">
            Home
          </a>

          <a href="#team">Team</a>

          <a href="#product">Portfolio</a>

          <a href="#contact">Contact Us</a>
        </p>

        <p class="footer-company-name">Zigtech © 2022</p>
      </div>

      <div class="footer-center">
        <div>
          <i class="fa fa-map-marker"></i>
          <p>46 Kairaba Avenue, The Gambia</p>
        </div>

        <div>
          <i class="fa fa-phone"></i>
          <p>+220-7025555</p>
        </div>

        <div>
          <i class="fa fa-envelope"></i>
          <p>
            <a href="mailto:support@company.com">info@zigtech.net</a>
          </p>
        </div>
      </div>

      <div class="footer-right">
        <p class="footer-company-about">
          <span>About Us</span>
          Zigtech is a leading software development company that offers
          innovative and cutting-edge solutions for businesses of all sizes.
          Contact us today to learn more about our services and how we can help
          your business succeed.
        </p>

        <div class="footer-icons">
          <a href="#">
            <i class="fa fa-facebook"></i>
          </a>
          <a href="#">
            <i class="fa fa-twitter"></i>
          </a>
          <a href="#">
            <i class="fa fa-linkedin"></i>
          </a>
          <a href="#">
            <i class="fa fa-github"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
