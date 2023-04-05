import React from "react";
import { images } from "../../images";
import "./product.scss";

function Product() {
  return (
    <div class="portfolio-2 py-6 md:py-12">
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

        <div class="sm:flex sm:flex-wrap sm:-mx-4 mt-6 md:mt-12 pb-6">
          <div class="sm:px-6 sm:w-1/2 lg:w-1/3 mt-8">
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
                <h5 class="font-semibold text-xl text-indigo-600 uppercase">
                  iPay App
                </h5>
                <p class="text-gray-600">Super payment app</p>
              </div>
            </div>
          </div>

          <div class="sm:px-6 sm:w-1/2 lg:w-1/3 mt-8">
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
                <h5 class="font-semibold text-xl text-indigo-600 uppercase">
                  iRemit SaaS
                </h5>
                <p class="text-gray-600">Remittance SaaS System</p>
              </div>
            </div>
          </div>

          <div class="sm:px-6 sm:w-1/2 lg:w-1/3 mt-8">
            <div class="portfolio-item mx-auto max-w-sm">
              <div class="portfolio-img relative overflow-hidden cursor-pointer">
                <img
                  src={images.imoney}
                  alt="portfolio image"
                  class="max-w-full h-auto"
                  width={20}
                />
                <div class="portfolio-hover"></div>
              </div>
              <div class="px-1 py-4">
                <h5 class="font-semibold text-xl text-indigo-600 uppercase">
                  iMoney App
                </h5>
                <p class="text-gray-600">
                  Client App to facilitate Money transfer service
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
