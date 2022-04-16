import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FeaturedHotels from "../../components/FeaturedHotels/FeaturedHotels";
import Header from "../../components/Header/Header";
import HotelsList from "../../components/HotelsList/HotelsList";
import SearchHotels from "../../components/SearchHotels/SearchHotels";
import { useAuth } from "../../hooks/useAuth";

const HomePage = () => {
  const { isAuth } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      return navigate("/login");
    }
  }, [isAuth]);

  return (
    <>
      <Header />
      <FeaturedHotels />
      <SearchHotels />
      <HotelsList />
    </>
  );
};

export default HomePage;
