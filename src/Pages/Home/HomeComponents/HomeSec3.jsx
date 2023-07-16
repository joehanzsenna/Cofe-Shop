import React, { useState } from "react";
import { coffeeData } from "../HomeDb/HomeDb";
import { Swiper, SwiperSlide } from "swiper/react";
import { HiOutlineArrowRight } from "react-icons/hi";
import { HiOutlineArrowLeft } from "react-icons/hi";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

const HomeSec3 = () => {
  const [data] = useState(coffeeData);

  return (
    <div className="w-full max-w-[1440] mx-auto h-auto text-white py-[4rem] ">
      <div className="w-[90%] mx-auto text-center">
        <h1 className="text-3xl md:text-5xl lg:text-[78px] py-16 md:py-36 font-serif font-semibold">
          PORPULAR COFFEE
        </h1>
        <Swiper
          pagination={{
            clickable: true,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          // navigation={true}
          modules={[Pagination, Navigation]}
          className="flex justify-center mx-auto"
        >
          {data.map((coffeeData) => {
            const { id, image } = coffeeData;
            return (
              <SwiperSlide key={id}>
                <img src={image} alt="" className="w-[90%] mx-auto" />
              </SwiperSlide>
            );
          })}
          <div className="">
            <div>
              <HiOutlineArrowRight className="swiper-button-next text-white w-[4rem] h-[4rem]" />
            </div>
            <div>
              <HiOutlineArrowLeft className="swiper-button-prev text-white w-[4rem] h-[4rem]" />
            </div>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default HomeSec3;
