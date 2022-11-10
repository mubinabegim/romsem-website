import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import SecondCol from "../../pages/main_page/SecondCol/SecondCol";
import ThirdCol from "../main_page/ThirdCol";
import Vector from "../../images/desktop/Vector 11.svg";

import Plus from "../../images/desktop/Group 15.svg";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Mousewheel, Keyboard } from "swiper";

const Detailed = ({ meals }) => {
  const { id } = useParams();
  const [meal, setMeal] = useState({});

  useEffect(() => {
    meals.map((m) => {
      if (m.id == id) setMeal(m);
    });
  }, [id]);

  return (
    <div>
      <div className="sm:flex hidden">
        <Sidebar />
        <div className="w-[65%] bg-gray ">
          <Navbar />
          <div className="border border-t-0">
            <div className="bg-white md:flex py-8 justify-between">
              <div className="flex items-center justify-center">
                <img
                  width="60%"
                  src={meal.image}
                  className={"rounded-3xl"}
                  alt="food"
                />
              </div>
              <div className="bg-white sm:pl-10 sm:pt-6 lg:p-0">
                <p className="sm:text-3xl lg:text-5xl font-medium leading-tight">
                  {meal.title}
                </p>
                <p
                  style={{ color: "#FF9846", fontFamily:'Yantramanav' }}
                  className={"mt-2.5 font-light text-lg"}
                >
                  {meal.weight}
                </p>
                <div className="flex my-5 gap-8 items-center md:mt-10 md:mb-6">
                  <p className="text-lg font-bold">{meal.price}</p>
                  <div className="flex items-center gap-5 items-center">
                    <img src={Vector} alt="vector" />
                    <span className="sm:text-2xl lg:text-4xl font-bold mx-2">
                      10
                    </span>
                    <img
                      src={Plus}
                      className="sm:w-5 sm:h-5 lg:w-auto lg:h-auto"
                      alt="plus"
                    />
                  </div>
                </div>
                <p>Состав</p>
                <p className="font-light text-lg mt-1.5">{meal.title}</p>
                <Button classes={"px-14 mt-9 mb-4"} />
              </div>
            </div>
          </div>
          <div className="bg-gray pt-8">
            <p className="font-medium text-2xl text-center my-6">Рекомендуем к этому товару</p>
            <div className="overflow-hidden ">
              <Swiper
                slidesPerView={3}
                spaceBetween={30}
                slidesPerGroup={3}
                loop={false}
                loopFillGroupWithBlank={false}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation, Mousewheel, Keyboard]}
                className="mySwiper multiCards"
              >
                {meals.map((meal) => {
                  return (
                    <SwiperSlide key={meal.id}>
                      <div className="flex justify-center items-center ">
                        <div>
                          <img
                            src={meal.image}
                            alt="food"
                            className="w-[70%] rounded-full mx-auto"
                          />
                          <p className="font-medium text-center my-2.5">
                            {meal.title}
                          </p>
                          <div className="flex gap-x-2.5 justify-center items-center">
                            <span className="font-bold  text-2xl">
                              {meal.price}
                            </span>
                            <img src={Plus} className="w-7 h-7" alt="plus" />
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
          <Footer />
        </div>
        <ThirdCol />
      </div>
    </div>
  );
};

export default Detailed;
