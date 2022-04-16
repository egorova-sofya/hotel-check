import React from "react";
import StarItem from "./StarItem";
import s from "./Rating.module.css";

const Raiting = ({ raiting }) => {
  const starArr = new Array(5).fill(<StarItem />);
  return (
    <div className={s.raitingWrapper}>
      {starArr.map((item, index) =>
        index + 1 <= raiting ? (
          <StarItem active key={index} />
        ) : (
          <StarItem key={index} />
        )
      )}
    </div>
  );
};

export default Raiting;
