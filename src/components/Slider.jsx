import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination, Autoplay } from "swiper";
import "./css/swiper.css";
import { useNavigate } from "react-router-dom";

export default function () {
  const swiper = useSwiper();
  const navigation = useNavigate();
  // navigation("/products");
  const goToProducts = () => navigation("/products");

  return (
    <div className="swiperContainer">
      <Swiper
        pagination={true}
        navigation={true}
        loop={true}
        autoplay={true}
        loopFillGroupWithBlank={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {/* <SwiperSlide className="swiperSlide">
          <img src="./images/slider/4.png" alt="" className="sliderImg" />
        </SwiperSlide> */}
        <SwiperSlide className="swiperSlide">
          <img src="./images/slider/1.jpg" alt="" className="sliderImg" />
          <h2 className="text-center caption">Best performance</h2>
          <button
            onClick={goToProducts}
            className="btn btn-outline-light btnPosition1 rounded-pill fs-5 fw-bold"
          >
            Shop now
          </button>
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <img src="./images/slider/5.jpg" alt="" className="sliderImg" />
          <h2 className="text-center caption">Elegance Products</h2>
          <button
            onClick={goToProducts}
            className="btn btn-outline-light btnPosition1 rounded-pill fs-5 fw-bold"
          >
            Shop now
          </button>
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <img src="./images/slider/6.jpg" alt="" className="sliderImg" />
          <button
            onClick={goToProducts}
            className="btn btn-outline-light btnPosition1 rounded-pill fs-5 fw-bold"
          >
            Shop now
          </button>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
