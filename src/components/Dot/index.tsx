import React, { FC, SetStateAction, useState } from "react";
import styles from "./index.module.scss";
import cn from "classnames";
import { store } from "../../store/store";

type item = { x: number; y: number };

type Props = {
  sliderValue: any;
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
  const [isDot, setIsDot] = useState(false);
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

  //1-150,2-90,3-30,4-325, 5-255, 6-190

  // const handleMouseLeave = () => {
  //   style_dot = {
  //     opacity: "0",
  //     left: `${arrDots[index].x - 30}px`,
  //     top: `${arrDots[index].y - 30}px`,
  //   };
  //   console.log(style_dot);
  // };

  // const handleMouseEnter = () => {
  //   SetIsStyleDot({
  //     opacity: "1",
  //     left: `${arrDots[index].x - 28}px`,
  //     top: `${arrDots[index].y - 28}px`,
  //   });
  // };
  return (
    <div
      className={styles.dot}
      style={style_dot}
      // onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setMouseEnterToDot(false)}
    >
      <p>{sliderValue + 1}</p>
      <h2>{store[sliderValue].blockName}</h2>
    </div>
  );
};
