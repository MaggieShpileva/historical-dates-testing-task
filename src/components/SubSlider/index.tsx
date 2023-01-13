import React, { FC, useState } from "react";
import { Navigation, Pagination, Virtual } from "swiper";
import styles from "./index.module.scss";
import { Swiper, SwiperSlide, useSwiper, useSwiperSlide } from "swiper/react";
import { store } from "../../store/store";
import { NextSlideButton } from "./NextSlideButton";
import { PrevSlideButton } from "./PrevSlideButton";

type Props = {
  sliderValue: number;
};
export const SubSlider: FC<Props> = ({ sliderValue }) => {
  // const [valueSubSlider, setValueSubSlider] = useState(0);
  const [prevBtn, setPrevBtn] = useState(0);

  const handleClick = () => {};
  const slides = store[sliderValue].block.map((item, index) => {
    return (
      <div className={styles.slide}>
        <h5>{item.year}</h5>
        <p>{item.text}</p>
      </div>
    );
  });
  return (
    <div className={styles.container}>
      <Swiper
        spaceBetween={60}
        slidesPerView={3}
        className={styles.swiper}
        navigation={true}
      >
        {slides.map((slideContent, sliderValue) => (
          <SwiperSlide virtualIndex={sliderValue} key={sliderValue}>
            {slideContent}
          </SwiperSlide>
        ))}
        {prevBtn > 0 ? <PrevSlideButton setPrevBtn={setPrevBtn} /> : ""}
        {/* <PrevSlideButton /> */}
        {prevBtn < slides.length - 3 ? (
          <NextSlideButton setPrevBtn={setPrevBtn} />
        ) : (
          ""
        )}
      </Swiper>
    </div>
  );
};
