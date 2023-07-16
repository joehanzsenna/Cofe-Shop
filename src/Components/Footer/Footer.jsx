import React from "react";
import { SlLocationPin } from "react-icons/sl";
import { PiPhoneCall } from "react-icons/pi";

const Footer = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto text-white bg-[#1E0C06]">
      <div className="w-[85%] mx-auto pt-16 ">
        <ul className="w-full flex justify-between items-center gap-20">
          <div className="text-4xl font-semibold">CofeShop</div>
          <div className="text-3xl flex gap-4 font-medium">
            <PiPhoneCall className="text-5xl font-medium" />
            +000 000 000 000
          </div>
          <div className="text-3xl flex items-center gap-5 px-5 font-medium basis-1/3">
            <SlLocationPin className="text-6xl font-bold mb-5" /> Na Plzeňce
            1166/0 150 00
          </div>
        </ul>
        <p className="text-xl py-10">Privacy Policy</p>
      </div>
    </div>
  );
};

export default Footer;
