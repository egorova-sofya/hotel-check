import React, { useEffect, useState, KeyboardEvent } from "react";
import { RaitingProps } from "./Raiting.props";
import cn from "classnames";
import s from "./Raiting.module.css";
import StartIcon from "./StartIcon/StartIcon";

const Raiting = ({ isEditable = false, rating, setRating, ...props }) => {
  const [ratingArray, setRatingArray] = useState > new Array(5).fill(<></>);

  useEffect(() => {
    constructRaiting(rating);
  }, [rating]);

  const constructRaiting = (currentRating) => {
    const updatedArray = ratingArray.map((r, i) => {
      return (
        <span
          onMouseEnter={() => changeDisplay(i + 1)}
          onMouseLeave={() => changeDisplay(rating)}
          onClick={() => onClick(i + 1)}
        >
          <StartIcon
            className={cn(s.star, {
              [s.filled]: i < currentRating,
              [s.editable]: isEditable,
            })}
            tabIndex={isEditable ? 0 : -1}
            onKeyDown={(e) => isEditable && handleSpace(i + 1, e)}
          />
        </span>
      );
    });

    setRatingArray(updatedArray);
  };

  const changeDisplay = (i) => {
    if (!isEditable) {
      return;
    }
    constructRaiting(i);
  };

  const onClick = (i) => {
    if (!isEditable || !setRating) {
      return;
    }
    setRating(i);
  };

  const handleSpace = (i, e) => {
    if (e.code !== "Space" || !setRating) {
      return;
    }
    setRating(i);
  };

  return (
    <>
      <div {...props}>
        {ratingArray.map((r, i) => (
          <span key={i}>{r}</span>
        ))}
      </div>
    </>
  );
};

export default Raiting;
