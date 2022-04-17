import dayjs from "dayjs";
import React from "react";
import { useSelector } from "react-redux";
import Like from "../Like/Like";
import Raiting from "../Raiting/Raiting";
import s from "./HotelItem.module.css";

const HotelItem = ({ item }) => {
  const state = useSelector((state) => state);
  const getHotelsReducer = state.getHotelsReducer;

  const convertDate = dayjs(getHotelsReducer.checkIn).format("DD MMM, YYYY");
  const dayWord =
    getHotelsReducer.numberOfDays == 1
      ? "день"
      : getHotelsReducer.numberOfDays > 1 && getHotelsReducer.numberOfDays <= 4
      ? "дня"
      : getHotelsReducer.numberOfDays >= 5
      ? "дней"
      : "";

  return (
    <>
      <div className={s.wrapper}>
        <div className={s.hotelHeader}>
          <h3 className={s.hotelTitle}>{item.hotelName}</h3>
          <Like item={item} />
        </div>

        <p
          className={s.hotelDate}
        >{`${convertDate}   -   ${getHotelsReducer.numberOfDays} ${dayWord}`}</p>
        <div className={s.hotelFooter}>
          <Raiting raiting={item.stars} />
          <p className={s.hotelPrice}>
            <span className={s.price}>Price:</span> {item.priceFrom} ₽
          </p>
        </div>
      </div>
    </>
  );
};

export default HotelItem;
