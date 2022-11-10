import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../../../images/desktop/desktop-goods/img1.png";
import Button from "../../../components/Button";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import Tab styles
import "react-tabs/style/react-tabs.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

// import required modules
import { Pagination, Navigation, Mousewheel, Keyboard } from "swiper";
import SingleCard from "./SingleCard";
import SecondCard from "./SecondCard";
import ThirdCard from "./ThirdCard";

export default function MultiCards({ meals }) {
  const navigate = useNavigate();
  return (
    <div className="overflow-hidden ">
      <div className="w-[86%] mx-auto mt-8">
        <Tabs>
          <TabList>
            <Tab>
              <p className="2xl:text-2xl text-sm font-medium">Новинки</p>
            </Tab>
            <Tab>
              <p className="2xl:text-2xl text-sm text-gray-500">Популярное</p>
            </Tab>
          </TabList>

          <TabPanel>
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
              {/* <SwiperSlide>
                <SecondCard />
              </SwiperSlide>
              <SwiperSlide>
                <SingleCard />
              </SwiperSlide>
              <SwiperSlide>
                <ThirdCard />
              </SwiperSlide>
              <SwiperSlide>
                <SingleCard />
              </SwiperSlide>
              <SwiperSlide>
                <SecondCard />
              </SwiperSlide>
              <SwiperSlide>
                <ThirdCard />
              </SwiperSlide> */}
              {meals.map((meal) => {
                return (
                  <SwiperSlide
                    onClick={() => navigate(`/product/${meal.id}`)}
                    key={meal.id}
                  >
                    <div className="bg-white p-2">
                      <img src={meal.image} alt="meal" />
                      <p className="2xl:text-2xl text-base font-medium pt-3">
                        {meal.title}
                      </p>
                      <p className="2xl:text-lg text-xs text-gray-400 pt-5 pb-3">
                        {meal.weight}
                      </p>
                      <div className="flex gap-2 items-center border-t-2 py-2">
                        <p className="2xl:text-2xl text-sm font-bold">
                          {meal.price}
                        </p>
                        <Button classes={"py-1 2xl:px-10 px-6"} />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </TabPanel>
          <TabPanel>
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              slidesPerGroup={3}
              loop={true}
              loopFillGroupWithBlank={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation, Mousewheel, Keyboard]}
              className="mySwiper multiCards"
            >
              <SwiperSlide>
                <SingleCard />
              </SwiperSlide>
              <SwiperSlide>
                <SecondCard />
              </SwiperSlide>
              <SwiperSlide>
                <ThirdCard />
              </SwiperSlide>
              <SwiperSlide>
                <SingleCard />
              </SwiperSlide>
              <SwiperSlide>
                <SecondCard />
              </SwiperSlide>
              <SwiperSlide>
                <ThirdCard />
              </SwiperSlide>
            </Swiper>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}
