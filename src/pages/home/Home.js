import React from "react";
import Banner from "../../components/banner/Banner";
import Contact from "../../components/contact/Contact";
import Fixed from "../../components/fixed/Fixed";
import Footer from "../../components/footer/Footer";
import Hero from "../../components/hero/Hero";
import Info from "../../components/info/Info";
import Product from "../../components/product/Product";

const Home = () => {
  return (
    <div>
      <Hero />
      <section className="section3">
        <Info />
      </section>
      <section className="section2">
        <Banner />
      </section>
      <section className="section2">
        <Product />
      </section>
      <section className="section2">
        <Fixed />
      </section>
      <section className="section2">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
