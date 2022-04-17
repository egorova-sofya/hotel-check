import dayjs from "dayjs";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withBlockLayout } from "../../hoc/Layouts/BlockLayout/BlockLayout";
import { updateEditedHotel } from "../../Redux/reducers/getHotelsReducer";
import HotelItem from "../HotelItem/HotelItem";
import ImageSlider from "../ImageSlider/ImageSlider";
import s from "./HotelsList.module.css";

const HotelsList = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const getHotelsReducer = state.getHotelsReducer;
  const mainReducer = state.mainReducer;

  useEffect(() => {
    dispatch(
      updateEditedHotel(
        getHotelsReducer.hotelsArr,
        getHotelsReducer.featuredHotelsArr
      )
    );
  }, [getHotelsReducer.hotelsArr, getHotelsReducer.featuredHotelsArr]);

  const hotelList = getHotelsReducer.hotelsArr.map((item) => {
    return (
      <div key={item.hotelId} className={s.homeIcon}>
        <HotelItem item={item} />
      </div>
    );
  });

  const featuredHotelsLength = getHotelsReducer.featuredHotelsArr.length;
  const hotelWord =
    featuredHotelsLength == 1
      ? "отель"
      : featuredHotelsLength > 1 && featuredHotelsLength < 5
      ? "отеля"
      : featuredHotelsLength >= 5
      ? "отелей"
      : "";

  const locales = {
    ru: () => import("dayjs/locale/ru"),
  };

  function loadLocale(language) {
    return locales[language]().then(() => dayjs.locale(language));
  }
  loadLocale("ru");
  const convertDate = dayjs(getHotelsReducer.checkIn)
    .locale(locales)
    .format("DD MMMM YYYY");

  return (
    <>
      <div className={s.hotelListHeader}>
        <p className={s.hotelListBreadCrumbs}>
          <span className={s.breadCrumbsArrow}>Отели</span>{" "}
          {getHotelsReducer.location}
        </p>

        <p className={s.hotelListDate}>{convertDate}</p>
      </div>
      <div className={s.sliderWrapper}>
        <ImageSlider />
      </div>
      <p className={s.text}>
        Добавлено в Избранное:{" "}
        <span className={s.boldText}>{featuredHotelsLength}</span> {hotelWord}
      </p>
      {getHotelsReducer.editedArray.length <= 0 ? (
        <div>Результатов не найдено</div>
      ) : mainReducer.error.length > 0 ? (
        <div>{mainReducer.error}</div>
      ) : (
        <div className={`scrollStyle ${s.hotelListWrapper}`}>{hotelList}</div>
      )}
    </>
  );
};

export default withBlockLayout(HotelsList);
