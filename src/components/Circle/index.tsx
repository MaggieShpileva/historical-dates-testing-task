import React, {
  FC,
  ReactElement,
  ReactNode,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import styles from "./index.module.scss";
import { store } from "../../store/store";
import { Dot } from "../Dot";

type item = { x: number; y: number };
type ArrPoints = item[];
type Props = {
  sliderValue: number;
  setSliderValue: (value: SetStateAction<number>) => void;
};

export const Circle: FC<Props> = ({ sliderValue, setSliderValue }) => {
  let arrayLength = store.length;
  let arrPoints: ArrPoints = [];
  let angle = 0;
  let delta = (Math.PI * 2) / arrayLength;
  const circleRef = useRef();
  const ctx = useRef();
  const [mouseEnterToDot, setMouseEnterToDot] = useState(false);
  const [subDot, setSubDot] = useState<number>();
  const [isSubDot, SetIsSubDot] = useState(false);

  for (let i = 0; i < arrayLength; i++) {
    arrPoints.push({ x: 0, y: 0 });
  }

  arrPoints.forEach((item, index) => {
    item.x = (532 / 2) * Math.sin(angle) + 265 - 30;
    item.y = (530 / 2) * Math.cos(angle) + 265 - 30;
    angle += delta;
  });

  const handleClick = (index: number) => {
    setSliderValue(index);
    setMouseEnterToDot(false);
    SetIsSubDot(false);
    setSubDot(null);
  };

  const onMouseEnter = (index: number) => {
    setMouseEnterToDot(true);
    setSubDot(index);
    SetIsSubDot(true);
  };

  const renderDots = () => {
    return arrPoints.map((item, index) => {
      const mystyle = {
        left: `${item.x}px`,
        top: `${item.y}px`,
      };
      return (
        <div
          className={styles.dots}
          style={mystyle}
          key={index}
          onClick={(e) => handleClick(index)}
          onMouseEnter={(e) => onMouseEnter(index)}
          onMouseLeave={(e) => setMouseEnterToDot(false)}
        >
          <div className={styles.dot}></div>
        </div>
      );
    });
  };

  return (
    <div className={styles.container} ref={circleRef}>
      <div className={styles.circle}>
        {renderDots()}
        <Dot sliderValue={sliderValue} arrDots={arrPoints} />

        {mouseEnterToDot && subDot != sliderValue ? (
          <Dot
            sliderValue={subDot}
            arrDots={arrPoints}
            isSubDot={isSubDot}
            setMouseEnterToDot={setMouseEnterToDot}
          />
        ) : (
          ""
        )}
      </div>
      <div className={styles.numbers}>
        <div className={styles.first_num}>
          <h4> {store[sliderValue].block[0].year}</h4>
        </div>
        <div className={styles.last_num}>
          <h4>
            {store[sliderValue].block[store[sliderValue].block.length - 1].year}
          </h4>
        </div>
      </div>
    </div>
  );
};
