import React, { Dispatch, SetStateAction } from "react";
import { useSwiper } from "swiper/react";
import styles from "../index.module.scss";
import arrow from "../../../images/icons/arrow.svg";
import { FC } from "react";
type Props = {
  setPrevBtn: (value: SetStateAction<number>) => void;
};
export const NextSlideButton: FC<Props> = ({ setPrevBtn }) => {
  const swiper = useSwiper();
  const handleClick = () => {
    swiper.slideNext();
    setPrevBtn(swiper.activeIndex);

    console.log(swiper.activeIndex);
  };
  return (
    <button onClick={() => handleClick()} className={styles.button_next}>
      <img src={arrow} alt="" />
    </button>
  );
};
