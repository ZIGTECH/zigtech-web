import React from "react";
import { images } from "../../images";
import "./product.scss";
import ProductCard from "./ProductCard";

function Product() {
  const cardDetails = [
    {
      heading: "iPay App",
      content:
        "A super payment app is a mobile application that allows users to make financial transactions electronically.",
      image: images.hero,
    },
    {
      heading: "hero SaaS",
      content:
        "Remittance SaaS System is a cloud-based software solution that enables individuals or businesses to send and receive money internationally.",
      image: images.hero,
    },
    {
      heading: "iMoney App",
      content:
        "A money transfer app is a mobile application that allows users to send and receive money electronically.",
      image: images.hero,
    },
  ];
  return (
    <div class="portfolio-2 py-6 md:py-12 md:pt-32">
      <div class="container px-4 mx-auto">
        <div class="md:flex md:justify-center">
          <div class="md:w-10/12 xl:w-8/12 text-center">
            <h1 class="text-3xl md:text-7xl mb-4">Recent Projects</h1>
            <p class="text-xxl font-light">
              At Zigtech, we are proud of the work we have done for our clients.
              Our portfolio showcases some of the innovative and effective
              software solutions we have developed for businesses across a
              variety of industries. Take a look at some of our recent projects:
            </p>
            {/* <div class="mt-6">
              <button class="bg-indigo-600 border-2 border-solid border-indigo-600 hover:bg-indigo-700 hover:border-indigo-700 text-white rounded-full py-3 px-8 transition-colors duration-300 mx-2 mt-4">
                View Portfolio
              </button>
              <button class="border-2 border-solid border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white rounded-full py-3 px-8 transition-colors duration-300 mx-2 mt-4">
                About FWR blocks
              </button>
            </div> */}
          </div>
        </div>

        <div class="sm:flex sm:flex-wrap justify-center align-middle gap-6  mt-6 md:mt-12 pb-6">
          <div class="sm:px-6 sm:w-1/2 lg:w-[32%] mt-8 shadow-lg">
            <div class="portfolio-item mx-auto max-w-sm">
              <div class="portfolio-img relative overflow-hidden cursor-pointer">
                <img
                  src={images.ipay}
                  alt="portfolio image"
                  class="max-w-full h-auto"
                />
                <div class="portfolio-hover"></div>
              </div>
              <div class="px-1 py-4">
                <h5 class="font-bold text-2xl text-black-600 uppercase text-center">
                  iPay App
                </h5>
                <p class="text-gray-600 text-center">
                  A super payment app is a mobile application that allows users
                  to make financial transactions electronically.
                </p>
              </div>
            </div>
          </div>

          <div class="sm:px-6 sm:w-1/2 lg:w-[32%] mt-8 shadow-lg">
            <div class="portfolio-item mx-auto max-w-sm">
              <div class="portfolio-img relative overflow-hidden cursor-pointer">
                <img
                  src={images.iremit}
                  alt="portfolio image"
                  class="max-w-full h-auto"
                />
                <div class="portfolio-hover"></div>
              </div>
              <div class="px-1 py-4">
                <h5 class="font-bold text-2xl text-black-600 uppercase text-center">
                  iRemit SaaS
                </h5>
                <p class="text-gray-600 text-center">
                  Remittance SaaS System is a cloud-based software solution that
                  enables individuals or businesses to send and receive money
                  internationally.
                </p>
              </div>
            </div>
          </div>

          <div class="sm:px-6 sm:w-1/2 lg:w-[32%] mt-8 shadow-lg">
            <div class="portfolio-item mx-auto max-w-sm">
              <div
                class="portfolio-img relative overflow-hidden cursor-pointer"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={images.imoney}
                  alt="portfolio image"
                  class="max-w-full h-auto"
                  style={{ width: "155px", padding: "10px" }}
                />
                <div class="portfolio-hover"></div>
              </div>
              <div class="px-1 py-4">
                <h5 class="font-bold text-2xl text-black-600 uppercase text-center">
                  iMoney App
                </h5>
                <p class="text-gray-600 text-center">
                  A money transfer app is a mobile application that allows users
                  to send and receive money electronically.
                </p>
              </div>
            </div>
          </div>

          {/* <div class="sm:px-6 sm:w-1/2 lg:w-1/3 mt-8">
            <div class="portfolio-item mx-auto max-w-sm">
              <div class="portfolio-img relative overflow-hidden cursor-pointer">
                <img
                  src="//via.placeholder.com/800x600/666"
                  alt="portfolio image"
                  class="max-w-full h-auto"
                />
                <div class="portfolio-hover"></div>
              </div>
              <div class="px-1 py-4">
                <h5 class="font-semibold text-xl text-indigo-600 uppercase">
                  Women Inventor
                </h5>
                <p class="text-gray-600">
                  You can use FWR blocks for personal or commercial purpose with
                  attribution.
                </p>
              </div>
            </div>
          </div>

          <div class="sm:px-6 sm:w-1/2 lg:w-1/3 mt-8">
            <div class="portfolio-item mx-auto max-w-sm">
              <div class="portfolio-img relative overflow-hidden cursor-pointer">
                <img
                  src="//via.placeholder.com/800x600/666"
                  alt="portfolio image"
                  class="max-w-full h-auto"
                />
                <div class="portfolio-hover"></div>
              </div>
              <div class="px-1 py-4">
                <h5 class="font-semibold text-xl text-indigo-600 uppercase">
                  Pomodoro App
                </h5>
                <p class="text-gray-600">
                  FWR blocks is the must have tool for designers and developers.
                </p>
              </div>
            </div>
          </div>

          <div class="sm:px-6 sm:w-1/2 lg:w-1/3 mt-8">
            <div class="portfolio-item mx-auto max-w-sm">
              <div class="portfolio-img relative overflow-hidden cursor-pointer">
                <img
                  src="//via.placeholder.com/800x600/666"
                  alt="portfolio image"
                  class="max-w-full h-auto"
                />
                <div class="portfolio-hover"></div>
              </div>
              <div class="px-1 py-4">
                <h5 class="font-semibold text-xl text-indigo-600 uppercase">
                  Glax landing
                </h5>
                <p class="text-gray-600">
                  FWR blocks are made with Bootstrap and minimal custom styling.
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Product;
