import React from "react";
import { useSelector } from "react-redux";
import { Carousel } from "react-responsive-carousel";
import s from "./ImageSlider.module.css";

const ImageSlider = () => {
  const state = useSelector((state) => state);
  const mainReducer = state.mainReducer;
  const isTouchable = "ontouchstart" in window;

  return (
    <>
      <Carousel
        showArrows={!isTouchable}
        centerMode={true}
        centerSlidePercentage={30}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        swipeable={true}
        swipeScrollTolerance={10}
        preventMovementUntilSwipeScrollTolerance={false}
      >
        {mainReducer.imagesArr.map((item) => {
          return (
            <div className={s.imgWrapper} key={item.id}>
              <img className={s.img} src={item.url} />
            </div>
          );
        })}
      </Carousel>
    </>
  );
};

export default ImageSlider;
