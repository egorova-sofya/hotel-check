import React from "react";
import Title from "../Title/Title";
import FeaturedHotelsFilter from "./FeaturedHotelsFilter/FeaturedHotelsFilter";

const FeaturedHotels = () => {
  return (
    <>
      <Title weight="bold">Избранное</Title>
      <FeaturedHotelsFilter />
    </>
  );
};

export default FeaturedHotels;
