import React from "react";
import FeaturedHotels from "../../components/FeaturedHotels/FeaturedHotels";
import HotelsList from "../../components/HotelsList/HotelsList";
import SearchHotels from "../../components/SearchHotels/SearchHotels";

const HomePage = () => {
  return (
    <>
      <div>HomePage</div>
      <FeaturedHotels />
      <SearchHotels />
      <HotelsList />
    </>
  );
};

export default HomePage;
