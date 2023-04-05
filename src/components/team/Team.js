import React from "react";
import { images } from "../../images";
import "./team.scss";

function Team() {
  const teams = document.querySelectorAll(".teams div");

  teams.forEach((item) => {
    item.addEventListener("mouseover", () => {
      teams.forEach((el) => el.classList.remove("active"));

      item.classList.add("active");
    });
  });
  return (
    <section className="team">
      <div class="px-8 pt-24 pb-28 xl:px-5 min-h-screen place-content-center grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-screen-xl mx-auto teams">
        <h1 class="capitalize text-center mb-5 md:mb-10 sm:col-span-2 lg:col-span-4 text-4xl sm:text-5xl xl:text-6xl font-extrabold  bg-clip-text text-black-500">
          meet our team
        </h1>
        <div class="bg-white shadow-lg border-b-4 border-transparent group transition ease-in-out delay-150 hover:border-indigo-400 duration-300 cursor-pointer">
          <div class="relative">
            <img
              src={images.fatou}
              alt="James Williams"
              class="w-full object-cover"
            />
            <div class="overlay absolute bg-indigo-400 bg-opacity-0 group-hover:bg-opacity-70 grid place-items-center transition-colors ease-in delay-100"></div>
          </div>
          <div class="pt-5 pb-7 px-5 text-center">
            <h2 class="text-xl font-semibold">Fatou Ceesay</h2>
            <span class="text-gray-500 capitalize inline-block mt-1 mb-4">
              CEO Zahra Innovative Technologies
            </span>
            <p class="text-gray-500">
              Email:{" "}
              <a href="#" class="font-medium group-hover:text-gray-800">
                fceesay@zigtech.net
              </a>
            </p>
          </div>
        </div>
        <div class="bg-white shadow-lg border-b-4 border-transparent group transition ease-in-out delay-150 hover:border-indigo-400 duration-300 cursor-pointer">
          <div class="relative">
            <img
              src={images.david}
              alt="Alex Smith"
              class="w-full object-contain"
            />
            <div class="overlay absolute bg-indigo-400 bg-opacity-0 group-hover:bg-opacity-70 grid place-items-center transition-colors ease-in delay-100"></div>
          </div>
          <div class="pt-5 pb-7 px-5 text-center">
            <h2 class="text-xl font-semibold">David Ladipo</h2>
            <span class="text-gray-500 capitalize inline-block mt-1 mb-4">
              Head of Software Development
            </span>
            <p class="text-gray-500">
              Email:{" "}
              <a href="#" class="font-medium group-hover:text-gray-800">
                dladipo@zigtech.net
              </a>
            </p>
          </div>
        </div>

        <div class="bg-white shadow-lg border-b-4 border-transparent group transition ease-in-out delay-150 hover:border-indigo-400 duration-300 cursor-pointer">
          <div class="relative">
            <img
              src={images.omar}
              alt="Evan Brooks"
              class="w-full object-cover"
            />
            <div class="overlay absolute bg-indigo-400 bg-opacity-0 group-hover:bg-opacity-70 grid place-items-center transition-colors ease-in delay-100"></div>
          </div>
          <div class="pt-5 pb-7 px-5 text-center">
            <h2 class="text-xl font-semibold">Omar Jeng</h2>
            <span class="text-gray-500 capitalize inline-block mt-1 mb-4">
              Lead App Developer
            </span>
            <p class="text-gray-500">
              Email:{" "}
              <a href="#" class="font-medium group-hover:text-gray-800">
                ojeng@zigtech.net
              </a>
            </p>
          </div>
        </div>

        {/* <div class="active bg-white shadow-lg border-b-4 border-transparent group transition ease-in-out delay-150 hover:border-indigo-400 duration-300 cursor-pointer">
          <div class="relative">
            <img
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=461&q=80"
              alt="Eva Doe"
              class="w-full object-cover"
            />
            <div class="overlay absolute bg-indigo-400 bg-opacity-0 group-hover:bg-opacity-70 grid place-items-center transition-colors ease-in delay-100"></div>
          </div>
          <div class="pt-5 pb-7 px-5 text-center">
            <h2 class="text-xl font-semibold">Eva Doe</h2>
            <span class="text-gray-500 capitalize inline-block mt-1 mb-4">
              web developer
            </span>
            <p class="text-gray-500">
              Email:{" "}
              <a href="#" class="font-medium group-hover:text-gray-800">
                eva.doe@gmail.com
              </a>
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default Team;
