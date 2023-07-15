import React from "react";
import { SlLocationPin } from "react-icons/sl";
import { PiPhoneCall } from "react-icons/pi";

const Footer = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto text-white bg-[#1E0C06]">
      <div className="w-[85%] mx-auto pt-20 ">
        <ul className="w-full grid grid-cols-3 justify-between items-center gap-10">
          <li className="text-4xl text-md font-medium">CofeShop</li>
          <div className="text-3xl flex gap-5">
            <PiPhoneCall className="text-5xl" />
            +000 000 000 000
          </div>
          <div className="text-3xl flex items-center gap-5">
            <SlLocationPin className="text-5xl" /> Na Plzeňce 1166/0 150 00
          </div>
        </ul>
        <p className="text-xl py-10">Privacy Policy</p>
      </div>
    </div>
  );
};

export default Footer;
