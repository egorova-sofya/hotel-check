import React from "react";
import { useSelector } from "react-redux";
import HotelItem from "../HotelItem/HotelItem";

const HotelsList = () => {
  const state = useSelector((state) => state);
  const getHotelsReducer = state.getHotelsReducer;

  const hotelList = getHotelsReducer.hotelsArr.map((item) => {
    return <HotelItem item={item} />;
  });

  return (
    <>
      {getHotelsReducer.hotelsArr <= 0 ? (
        <div>Результатов не найдено</div>
      ) : (
        hotelList
      )}
    </>
  );
};

export default HotelsList;
