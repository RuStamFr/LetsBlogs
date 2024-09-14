import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import "./slider.scss";

const Slider = ({ items }) => {
  console.log("items", items);
  return (
    <>
      <Swiper
        className={"slider"}
        modules={[Navigation, Autoplay]}
        slidesPerView={1}
        navigation
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="slider-image-holder">
              <img src={item.src} alt={""} />
              <div className="slide-post">
                <p className="slide-post-date">July 22, 2015</p>
                <p className="slide-post-name">Top 10 Ingredients</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
