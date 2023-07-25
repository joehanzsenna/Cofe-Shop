import React from "react";
import AboutSec1Img01 from '../../../assets/HomeAssets/AboutSec1Img01.png'
import AboutSec1Img02 from '../../../assets/HomeAssets/AboutSec1Img02.png'
import AboutSec1Img03 from '../../../assets/HomeAssets/AboutSec1Img03.png'

const AboutusSec1 = () => {
  return (
    <div id="aboutUs" className="w-full max-w-[1440px] mx-auto text-white">
      <div className="w-[100%] lg:w-[96%] h-[auto] lg:h-[800px] bg-[#1E0C06] mb-10 grid justify-center items-center grid-cols-1 lg:grid-cols-2 ">
        <div className="w-[80%] mx-auto py-20 lg:w-[81%] justify-self-end">
          <h1 className="text-3xl md:text-5xl lg:text-[85px] font-serif font-medium mb-20">
            ABOUT US
          </h1>
          <p className="md:leading-normal text-xl md:text-2xl lg:text-3xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud.
          </p>
        </div>
        <div className="w-[100%] grid grid-cols-1 gap-10 md:relative py-20 md:py-0 h-auto">
          <img
            src={AboutSec1Img01}
            alt=""
            className="w-[70%] mx-auto md:mx-0 md:w-[auto] md:translate-x-[4rem] lg:translate-x-[23rem] md:translate-y-[8rem] lg:translate-y-[2rem]"
          />
          <img
            src={AboutSec1Img02}
            alt=""
            className="w-[70%] mx-auto md:mx-0 md:w-[auto] md:translate-x-[10rem] lg:translate-x-[10rem] md:translate-y-[2rem] lg:translate-y-[-4rem] "
          />
          <img
            src={AboutSec1Img03}
            alt=""
            className="w-[70%] mx-auto md:mx-0 md:w-[auto] md:translate-x-[35rem] lg:translate-x-[21rem] md:translate-y-[-8rem] lg:translate-y-[-4rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutusSec1;
