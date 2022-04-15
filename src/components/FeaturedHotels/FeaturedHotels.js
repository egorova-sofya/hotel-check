import React from "react";
import Title from "../Title/Title";
import FeaturedHotelsFilter from "./FeaturedHotelsFilter/FeaturedHotelsFilter";
import FeaturedHotelsItem from "./FeaturedHotelsItem/FeaturedHotelsItem";

const FeaturedHotels = () => {
  return (
    <>
      <Title weight="bold">Избранное</Title>
      <FeaturedHotelsFilter />
      <FeaturedHotelsItem />
    </>
  );
};

export default FeaturedHotels;
