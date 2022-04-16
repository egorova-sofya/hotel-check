import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FeaturedHotels from "../../components/FeaturedHotels/FeaturedHotels";
import Header from "../../components/Header/Header";
import HotelsList from "../../components/HotelsList/HotelsList";
import SearchHotels from "../../components/SearchHotels/SearchHotels";
import { useAuth } from "../../hooks/useAuth";
import s from "./HomePage.module.css";

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
      <div className={s.wrapper}>
        <main className={s.container}>
          <SearchHotels />
          <FeaturedHotels />
          <div className={s.block}>
            <HotelsList />
          </div>
        </main>
      </div>
    </>
  );
};

export default HomePage;
