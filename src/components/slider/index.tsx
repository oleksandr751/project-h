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
import { Typography } from "@mui/material";
interface ISliderSlides {
  id: number;
  text?: string;
  author?: string;
  year?: string;
  alt?: string;
}
interface ISliderProps {
  slides: ISliderSlides[];
}
const Slider: React.FC<ISliderProps> = ({ slides }) => {
  SwiperCore.use([
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
    Mousewheel,
    Autoplay,
  ]);
  return (
    <>
      <Swiper
        loop
        allowTouchMove={false}
        slidesPerView={1}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
        speed={5000}
        autoplay={{ delay: 10000, disableOnInteraction: false }}
      >
        {slides.map((slide) => (
          <SwiperSlide
            key={slide.id}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "100px",
            }}
          >
            <Typography
              variant="h5"
              style={{
                maxWidth: "350px",
                fontFamily: "cursive",
                marginTop: "40px",
              }}
            >
              {`"${slide.text ?? slide.alt}"`}
            </Typography>
            <Typography
              variant="h6"
              style={{
                maxWidth: "300px",
                fontFamily: "cursive",
                marginTop: "40px",
              }}
            >
              {`${slide.author ?? slide.alt}, ${slide.year}`}
            </Typography>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
