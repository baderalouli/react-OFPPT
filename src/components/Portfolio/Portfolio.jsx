import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import ham1 from "../../img/hamza5.jpeg"
import ham2 from "../../img/hamza6.jpeg"
import ham3 from "../../img/hamza7.jpeg"
import ham4 from "../../img/hamza8.jpeg"
import ham5 from "../../img/hamza9.jpeg"

import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? 'white' : '' }}>Nos</span>
      <span>Solution</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={ham1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ham2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ham3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ham4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ham5} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
