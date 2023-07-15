import React from "react";
import HomeSec2Img01 from '../../../assets/HomeAssets/homeSec2Img01.png'
import HomeSec2Img02 from '../../../assets/HomeAssets/homeSec2Img02.png'
import HomeSec2Img03 from '../../../assets/HomeAssets/homeSec2Img03.png'

const HomeSec2 = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto h-[auto] bg-gray-400 text-white">
      <div className="w-[90%] mx-auto pt-52 pb-20">
        <h1 className="text-8xl w-[45rem] text-white">
          THE COFFEE <br /> WE WORK WITH
        </h1>
        <div className="mt-[8rem] grid grid-cols-3 gap-40 justify-between w-[100%]">
          <div className="w">
            <img src={HomeSec2Img01} alt="" />
            <h1 className="mt-[5rem] mb-8 text-3xl">Espresso</h1>
            <p className="text-3xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
            </p>
          </div>
          <div className="w">
            <img src={HomeSec2Img02} alt="" />
            <h1 className="mt-[5rem] mb-8 text-3xl">Black Coffee</h1>
            <p className="text-3xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
            </p>
          </div>
          <div className="w">
            <img src={HomeSec2Img03} alt="" />
            <h1 className="mt-[5rem] mb-8 text-3xl">Latte</h1>
            <p className="text-3xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSec2;
