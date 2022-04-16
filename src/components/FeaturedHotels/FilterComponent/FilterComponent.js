import React, { useState } from "react";
import s from "./FilterComponent.module.css";
import cn from "classnames";
import FilterButton from "./FilterButton";

const FilterComponent = ({ title, initialArray, activeButton }) => {
  const [activeArrow, setActiveArrow] = useState("up");

  return (
    <>
      <button
        className={cn(s.filterButton, {
          [s.activeButton]: activeButton,
        })}
        onClick={() => {
          activeArrow === "up" ? setActiveArrow("down") : setActiveArrow("up");
        }}
      >
        {title}
        <div className={s.arrowsWrapper}>
          <FilterButton activeArrow={activeArrow} activeButton={activeButton} />
        </div>
      </button>
    </>
  );
};

export default FilterComponent;
