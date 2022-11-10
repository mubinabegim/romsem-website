import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";
// import main_bg from "../../images/desktop/desktop-goods/main_bg.png";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import Button from "../../components/Button";

export default function MainSection({meals}) {
  const navigate = useNavigate();


  return (
    <Swiper
      cssMode={true}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      mousewheel={true}
      keyboard={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      className="mySwiper bg-white mt-5"
    >
      {meals.map((meal) => {
        return (
          <SwiperSlide onClick={() => navigate(`/product/${meal.id}`)} key={meal.id}>
            <div
              className="flex flex-col items-end h-[50vh] w-[88%] bg-no-repeat bg-contain mx-auto mt-5"
              style={{
                backgroundImage: `url(${meal.image})`,
              }}
            >
              <i className="text-2xl font-medium">{meal.title}</i>
              <p className="2xl:text-sm text-xs text-orange-500">
                {meal.weight}{" "}
              </p>

              <div className="pt-16 font-medium">
                <p className="block w-[110%] h-[8%] bg-orange-500 translate-y-4 -rotate-12"></p>{" "}
                {meal.discount}
              </div>
              <p className="text-2xl pt-1 pb-14 font-bold">{meal.price}</p>
              <Button classes={"px-14"} />
            </div>
          </SwiperSlide>
        );
      })}  
    </Swiper>
  );
}
