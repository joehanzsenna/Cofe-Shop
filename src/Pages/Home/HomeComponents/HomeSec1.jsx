import React from "react";
import heroImg from "../../../assets/HomeAssets/homeHeroImg.svg";
import homeSec1Img01 from "../../../assets/HomeAssets/homeImg01.png";
import homeSec1Img02 from "../../../assets/HomeAssets/homeImg02.png";
import homeSec1Img03 from "../../../assets/HomeAssets/homeImg03.png";

const HomeSec1 = () => {
  return (
    <div className=" text-white w-full relative md:h-[1080px] max-w-[1440px] mx-auto">
        <img src={heroImg} alt="" className="w-full h-[900px] md:h-auto lg:h-[110%] absolute top-0 object-cover" />
      <div className="w-full h-[900px] lg:h-auto">
        <div className="w-full lg:w-[85%] h-auto lg:h-[714px] bg-[#1e0c06b2] lg:bg-[#1E0C06]  absolute top-[50%] md:top-[45%] lg:top-[53%] lg:right-0 translate-y-[-18rem] md:translate-y-[-19rem] lg:translate-y-[-50%] flex-col lg:flex-row flex justify-center items-center">
          <div className="w-[80%] md:w-[70%] lg:w-full h-full py-[50px] lg:py-[6rem] pl-[35px] text-white">
            <h1 className="text-3xl md:text-5xl lg:text-[78px] md:leading-[6rem] font-serif font-semibold">
              YOUR COFFEE. YOUR WAY.
            </h1>
            <p className="text-xl md:text-2xl lg:text-[30px] py-8 md:py-[50px] ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
            </p>
            <button className="bg-[#FF6D1C] py-[16px] px-[70px] text-3xl">
              Order
            </button>
          </div>
          <div className="w-[90%] grid grid-cols-3 justify-between lg:grid-cols-1 gap-4 py-12 px-12">
            <div className="flex lg:flex-row-reverse">
              <img src={homeSec1Img01} alt="" className="" />
            </div>
            <div>
              <img src={homeSec1Img02} alt="" />
            </div>
            <div className="flex lg:flex-row-reverse">
              <img src={homeSec1Img03} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSec1;
