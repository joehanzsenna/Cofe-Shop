import React from "react";
import heroImg from "../../../assets/HomeAssets/homeHeroImg.svg";

const HomeSec1 = () => {
  return (
    <div className=" text-white w-full h-[1080px] max-w-[1440px] mx-auto">
      <div className="w-full relative">
        <img src={heroImg} alt="" className="overflow-hidden " />
        <div className="w-[1145px] h-[714px] bg-[#1E0C06] absolute  top-[43%] right-0 translate-y-[-50%] flex justify-center align-middle">
          <div className="w-full h-full py-[80px] px-[35px] text-white">
            <h1 className="text-[110px] leading-[8rem]">
              Your Coffee. Your Way.
            </h1>
            <p className="text-[28px] py-[30px] ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
            </p>
            <button className="bg-[#FF6D1C] py-[20px] px-[80px] text-2xl">Order</button>
          </div>
          <div className="w-full "></div>
        </div>
      </div>
    </div>
  );
};

export default HomeSec1;
