import React from "react";
import heroImg from "../../../assets/HomeAssets/homeHeroImg.svg";
import homeSec1Img01 from "../../../assets/HomeAssets/homeImg01.png";
import homeSec1Img02 from "../../../assets/HomeAssets/homeImg02.png";
import homeSec1Img03 from "../../../assets/HomeAssets/homeImg03.png";

const HomeSec1 = () => {
  return (
    <div className=" text-white w-full h-[1080px] max-w-[1440px] mx-auto">
      <div className="w-full relative">
        <img src={heroImg} alt="" className="overflow-hidden " />
        <div className="w-[1145px] h-[714px] bg-[#1E0C06] absolute  top-[43%] right-0 translate-y-[-50%] flex justify-center align-middle">
          <div className="w-full h-full py-[50px] px-[35px] text-white">
            <h1 className="text-[110px] leading-[8rem]">
              Your Coffee. Your Way.
            </h1>
            <p className="text-[30px] py-[30px] ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
            </p>
            <button className="bg-[#FF6D1C] py-[16px] px-[70px] text-3xl">
              Order
            </button>
          </div>
          <div className="w-full grid grid-rows-3 py-12 px-12">
            <div className="flex flex-row-reverse">
              <img src={homeSec1Img01} alt="" className="" />
            </div>
            <div>
              <img src={homeSec1Img02} alt="" />
            </div>
            <div className="flex flex-row-reverse">
              <img src={homeSec1Img03} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSec1;
