import React from "react";
import HomeSec4Img from '../../../assets/HomeAssets/HomeSec4Img.png'

const HomeSec4 = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto h-auto text-white">
      <div className="w-[85%] mx-auto pb-[10rem]">
        <h1 className="text-3xl md:text-5xl lg:text-[78px] py-24 md:py-32 font-serif font-semibold">
          PORPULAR DESTINATION FOR COFFEE LOVERS
        </h1>
        <div className="w-full grid md:grid-cols-1 lg:grid-cols-2 items-center md:justify-center lg:justify-between gap-16 lg:gap-32">
          <img src={HomeSec4Img} alt="" className=" justify-self-center" />
          <div className="lg:w-[100%] px-3 md:px-10 text-center lg:text-left">
            <p className="text-2xl md:text-3xl my-10 leading-snug">
              Lorem ipsum dolor sit amet, consectetur
            </p>
            <p className="text-2xl md:text-3xl my-10 leading-snug">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
            </p>
            <p className="text-2xl md:text-3xl mb-5 md:my-10 leading-snug">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.
            </p>
          </div>
        </div>
        <button className="w-50% md:w-85% mx-auto flex justify-center bg-[#1E0C06] hover:bg-[#1e1206] py-7 font-medium px-[3rem] md:px-[5rem] text-xl md:text-3xl mt-20">
          Get a booking
        </button>
      </div>
    </div>
  );
};

export default HomeSec4;
