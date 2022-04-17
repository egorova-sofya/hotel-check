import React, { useEffect, useState } from "react";
import s from "./FilterComponent.module.css";
import cn from "classnames";
import FilterButton from "./FilterButton";
import { useDispatch, useSelector } from "react-redux";
import { sortHotels } from "../../../Redux/reducers/getHotelsReducer";

const FilterComponent = ({ title, activeButton, filterKey }) => {
  const [activeArrow, setActiveArrow] = useState("up");
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const getHotelsReducer = state.getHotelsReducer;

  useEffect(() => {
    dispatch(sortHotels(activeArrow, filterKey));
  }, [activeArrow, dispatch, filterKey, getHotelsReducer.featuredHotelsArr]);

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
