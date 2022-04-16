import React from "react";
import Title from "../Title/Title";
import FilterComponent from "./FilterComponent/FilterComponent";

const FeaturedHotels = () => {
  return (
    <>
      <Title weight="bold">Избранное</Title>
      <FilterComponent />
    </>
  );
};

export default FeaturedHotels;
