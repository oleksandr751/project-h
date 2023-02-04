import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Mousewheel,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
import "swiper/css";
import { IArticleData } from "../../interfaces";
import ArticleCard from "../articleCard";
import { Box } from "@mui/material";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
interface ISliderProps {
  slidesData: IArticleData[];
}
const Slider: React.FC<ISliderProps> = ({ slidesData }) => {
  SwiperCore.use([
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
    Mousewheel,
    Autoplay,
  ]);
  return (
    <Box sx={{ width: "60vw" }}>
      <Swiper
        style={{ height: "600px" }}
        loop
        spaceBetween={10}
        slidesPerView={2}
        pagination={{ clickable: true, el: ".swiper-pagination" }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        speed={500}
        // autoplay={{ delay: 10000, disableOnInteraction: false }}
      >
        {slidesData.map((slide) => (
          <SwiperSlide
            key={slide.articleId}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "100px",
            }}
          >
            <ArticleCard articleData={slide}></ArticleCard>
          </SwiperSlide>
        ))}
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-pagination"></div>
      </Swiper>
    </Box>
  );
};

export default Slider;
