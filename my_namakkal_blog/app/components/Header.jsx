import Image from "next/image";
import React from "react";
import Logo from "../logo.webp";
import { assets } from "@/Assets/assets";

const Header = () => {
  return (
    <div className="py-5 px-5 md:px-12 lg:px-28">
      <div className="flex justify-between items-center">
        <Image
          src={Logo}
          width={180}
          height={200}
          alt="My Namakkal logo"
          className="w-[130px] sm:w-auto"
        />
        <button
          className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black"
          style={{ boxShadow: "-7px 7px 0px #000" }}
        >
          Get Started
          <Image src={assets.arrow} alt="arrow" />
        </button>
      </div>
      <div className="text-center my-10">
        <h1 className="text-3xl sm:text-5xl font-medium font-outfit">
          Namakkal's Hot News 
        </h1>
        <p className="mt-10 max-w-[740px] m-auto text-xs sm:text-base">
          Get the latest updates from Namakkal, Rasipuram, and Karur – covering
          breaking news, crime reports, market trends, and local events. Stay
          informed. Stay connected.
        </p>
      </div>
    </div>
  );
};

export default Header;
