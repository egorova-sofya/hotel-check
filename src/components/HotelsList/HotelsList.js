import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withBlockLayout } from "../../hoc/Layouts/BlockLayout/BlockLayout";
import { updateEditedHotel } from "../../Redux/reducers/getHotelsReducer";
import HotelItem from "../HotelItem/HotelItem";
import ImageSlider from "../ImageSlider/ImageSlider";

const HotelsList = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const getHotelsReducer = state.getHotelsReducer;

  useEffect(() => {
    dispatch(
      updateEditedHotel(
        getHotelsReducer.hotelsArr,
        getHotelsReducer.featuredHotelsArr
      )
    );
  }, [getHotelsReducer.hotelsArr, getHotelsReducer.featuredHotelsArr]);

  const hotelList = getHotelsReducer.hotelsArr.map((item) => {
    return <HotelItem item={item} key={item.hotelId} />;
  });

  return (
    <>
      <ImageSlider />
      {getHotelsReducer.editedArray <= 0 ? (
        <div>Результатов не найдено</div>
      ) : (
        hotelList
      )}
    </>
  );
};

export default withBlockLayout(HotelsList);
