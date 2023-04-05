import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <footer>
      <div class="footer">
        <div class="footer_about">
          <h3>About Us</h3>
          <p>
            Zigtech is a leading software development company that offers
            innovative and cutting-edge solutions for businesses of all sizes.
            Contact us today to learn more about our services and how we can
            help your business succeed.
          </p>
        </div>
        <div class="footer_main">
          <h3>REACH US</h3>
          <ul>
            <li>Kairaba Avenue</li>
            <li>The Gambia, West Africa</li>
            <li>555-555-555</li>
            <li>info@zigtech.net</li>
          </ul>
        </div>
        <div class="footer_right">
          <div class="footer_links">
            <i class="fas fa-facebook-alt"></i>
            <i class="fas fa-twitter"></i>
            <i class="fas fa-telegram"></i>
            <i class="fas fa-pintrest"></i>
          </div>
        </div>
      </div>
      <div class="copyright">
        Copyright © 2022 All Rights Reserved by Zigtech.
      </div>
    </footer>
  );
};

export default Footer;
