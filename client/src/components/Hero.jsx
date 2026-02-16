import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className="relative">
      <img
        src={assets.main_banner_bg}
        className="hidden md:block w-full"
        alt=""
      />
      <img
        src={assets.main_banner_bg_sm}
        className=" md:hidden w-full"
        alt=""
      />
    </div>
  );
};

export default Hero;
