import React, { useState } from "react";
import Title from "../Title/Title";
import FilterComponent from "./FilterComponent/FilterComponent";
import s from "./FeaturedHotels.module.css";
import { withBlockLayout } from "../../hoc/Layouts/BlockLayout/BlockLayout";
import HotelItem from "../HotelItem/HotelItem";
import { useSelector } from "react-redux";

const FeaturedHotels = () => {
  const [activeButton, setActiveButton] = useState("raiting");
  const state = useSelector((state) => state);
  const getHotelsReducer = state.getHotelsReducer;

  return (
    <>
      <div className={s.titleWrapper}>
        <Title weight="bold">Избранное</Title>
      </div>
      <div className={s.filterButtonsWrapper}>
        <div onClick={() => setActiveButton("raiting")}>
          <FilterComponent
            title="Рейтинг"
            filterKey="stars"
            activeButton={activeButton === "raiting"}
          />
        </div>
        <div onClick={() => setActiveButton("price")}>
          <FilterComponent
            title="Цена"
            filterKey="priceFrom"
            activeButton={activeButton === "price"}
          />
        </div>
      </div>
      <div className={s.hotelListWrapper}>
        {getHotelsReducer.featuredHotelsArr.length <= 0 ? (
          <div style={{ padding: "20px 0" }}>
            В избранное пока ничего не добавлено
          </div>
        ) : (
          getHotelsReducer.featuredHotelsArr.map((item) => {
            return <HotelItem key={item.hotelId} item={item} />;
          })
        )}
      </div>
    </>
  );
};

export default withBlockLayout(FeaturedHotels);
