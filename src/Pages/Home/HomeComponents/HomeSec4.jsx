import React from "react";
import HomeSec4Img from '../../../assets/HomeAssets/HomeSec4Img.png'

const HomeSec4 = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto h-auto text-white">
      <div className="w-[85%] mx-auto pb-[10rem]">
        <h1 className="text-8xl py-32">
          PORPULAR DESTINATION FOR COFFEE LOVER
        </h1>
        <div className="w-full flex items-center justify-between gap-32">
          <img src={HomeSec4Img} alt="" />
          <div>
            <p className="text-3xl my-10 leading-snug">
              Lorem ipsum dolor sit amet, consectetur
            </p>
            <p className="text-3xl my-10 leading-snug">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
            </p>
            <p className="text-3xl my-10 leading-snug">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.
            </p>
          </div>
        </div>
        <button className="w-85% mx-auto flex justify-center bg-[#1E0C06] py-7 font-medium px-[5rem] text-3xl mt-20">
          Get a booking
        </button>
      </div>
    </div>
  );
};

export default HomeSec4;
