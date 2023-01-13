import React, { FC, SetStateAction, useState } from "react";
import styles from "./index.module.scss";
import { store } from "../../store/store";

type item = { x: number; y: number };

type Props = {
  sliderValue: number;
  arrDots: item[];
  isSubDot?: boolean;
  setMouseEnterToDot?: (value: SetStateAction<boolean>) => void;
};

export const Dot: FC<Props> = ({
  sliderValue,
  arrDots,
  isSubDot,
  setMouseEnterToDot,
}) => {
  let style_dot;
  if (isSubDot) {
    style_dot = {
      left: `${arrDots[sliderValue].x}px`,
      top: `${arrDots[sliderValue].y - 60}px`,
    };
  } else {
    style_dot = {
      left: `${arrDots[sliderValue].x}px`,
      top: `${arrDots[sliderValue].y}px`,
    };
  }

  return (
    <div
      className={styles.dot}
      style={style_dot}
      onMouseLeave={() => setMouseEnterToDot(false)}
    >
      <p>{sliderValue + 1}</p>
      <h2>{store[sliderValue].blockName}</h2>
    </div>
  );
};
