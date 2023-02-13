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
import { Box, IconButton } from "@mui/material";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
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
        <Box
          className="swiper-button-next"
          sx={{ "&:after": { display: "none" }, padding: "25px" }}
        >
          <IconButton>
            <ChevronRight></ChevronRight>
          </IconButton>
        </Box>
        <Box
          className="swiper-button-prev"
          sx={{ "&:after": { display: "none" }, padding: "25px" }}
        >
          <IconButton>
            <ChevronLeft></ChevronLeft>
          </IconButton>
        </Box>
        <Box className="swiper-pagination"></Box>
      </Swiper>
    </Box>
  );
};

export default Slider;
