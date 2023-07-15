import React from "react";
import HomeSec3Img01 from "../../../assets/HomeAssets/HomeSec3Img01.png";

const HomeSec3 = () => {
  return (
    <div className="w-full max-w-[1440] mx-auto h-auto text-white py-[4rem] ">
      <div className="w-[90%] mx-auto text-center">
        <h1 className="text-8xl py-36">PORPULAR COFFEE</h1>
        <div className="flex justify-center mx-auto">
          <img src={HomeSec3Img01} alt="" className="w-[90%]"/>
        </div>
      </div>
    </div>
  );
};

export default HomeSec3;
