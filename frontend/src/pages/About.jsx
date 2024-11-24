import React from "react";
import { assets } from "../assets/assets/assets_frontend/assets";

const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          ABOUT <span className="text-gray-700 font-medium">US</span>
        </p>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.about_image}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente,
            dolor ex adipisci magni numquam aliquam eius magnam, ducimus libero
            tempore iste suscipit omnis laboriosam cum harum sint? Nihil, libero
            necessitatibus corrupti placeat quae similique reiciendis porro
            harum magni expedita tenetur, dolores deserunt ad maxime, nam minima
            sunt iste quidem dolorum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            dolor, nam velit laudantium qui officia beatae, omnis dolores
            eveniet repellendus itaque recusandae eaque nostrum mollitia
            assumenda adipisci exercitationem illo ullam? Nam voluptates, sunt
            placeat magnam explicabo vero quo quam soluta veritatis, iure
            obcaecati unde aliquid suscipit tenetur dolores commodi id.
          </p>
          <b>Our Vision</b>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error
            doloribus tempora aperiam unde nobis ipsa dicta impedit molestias.
            Quaerat officia repudiandae explicabo ex, saepe exercitationem
            possimus et maxime aut neque!
          </p>
        </div>
      </div>

      <div className="text-xl my-4">
        <p>
          WHY <span className="text-gray-700 font-semibold">CHOOSE US</span>
        </p>
      </div>

      <div className="flex flex-col md:flex-row mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Efficiency:</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, soluta!</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Convenience:</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, quo!</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer" >
          <b>Personalization:</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, id.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
