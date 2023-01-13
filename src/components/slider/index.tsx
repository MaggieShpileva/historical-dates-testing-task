import styles from "./index.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { FC, useState } from "react";
import { SubSlider } from "../SubSlider";
import { store } from "../../store/store";
import { Circle } from "../Circle";
import arrow from "../../images/icons/arrow.svg";

export const Slider: FC = () => {
  const [sliderValue, setSliderValue] = useState(0);

  const handleClickLeft = () => {
    sliderValue == 0 ? setSliderValue(0) : setSliderValue(sliderValue - 1);
  };
  const handleClickRigth = () => {
    sliderValue == store.length - 1
      ? setSliderValue(store.length - 1)
      : setSliderValue(sliderValue + 1);
  };
  return (
    <div className={styles.container}>
      <Circle sliderValue={sliderValue} setSliderValue={setSliderValue} />

      <Swiper className={styles.swiper}>
        {store.map((item, index) => (
          <SwiperSlide
            key={sliderValue + index}
            className={styles.swiper_slide}
          >
            <p>
              0{sliderValue + 1}/0{store.length}
            </p>
          </SwiperSlide>
        ))}

        <button
          className={styles.button_left}
          onClick={() => handleClickLeft()}
        >
          <img src={arrow} alt="arrow" />
        </button>

        <button
          className={styles.button_right}
          onClick={() => handleClickRigth()}
        >
          <img src={arrow} alt="arrow" />
        </button>
      </Swiper>

      <SubSlider sliderValue={sliderValue} />
    </div>
  );
};
