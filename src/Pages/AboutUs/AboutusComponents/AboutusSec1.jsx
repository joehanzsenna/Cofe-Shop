import React from "react";
import AboutSec1Img01 from '../../../assets/HomeAssets/AboutSec1Img01.png'
import AboutSec1Img02 from '../../../assets/HomeAssets/AboutSec1Img02.png'
import AboutSec1Img03 from '../../../assets/HomeAssets/AboutSec1Img03.png'

const AboutusSec1 = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto text-white">
      <div className="w-[95%] h-screen bg-[#1E0C06] mb-10 grid justify-center items-center grid-cols-2">
        <div className="w-[80%] justify-self-end">
          <h1 className="text-3xl md:text-5xl lg:text-[78px] font-serif font-medium mb-20">
            ABOUT US
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl leading-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud.
          </p>
        </div>
        <div>
          {/* <img src={AboutSec1Img01} alt="" className=""/>
            <img src={AboutSec1Img02} alt="" className=""/>
            <img src={AboutSec1Img03} alt="" className=""/> */}
        </div>
      </div>
    </div>
  );
};

export default AboutusSec1;
