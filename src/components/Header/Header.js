import React from "react";
import { useNavigate } from "react-router-dom";
import { deleteCookie } from "../../utils/cookies";
import Title from "../Title/Title";
import s from "./Header.module.css";

const Header = () => {
  const navigate = useNavigate();

  const logout = () => {
    deleteCookie("isAuthUser");
    navigate("/login");
    window.location.reload();
  };

  return (
    <div className={s.headerContainer}>
      <Title>Simple Hotel Check</Title>
      <button onClick={logout} className={s.exitButton} type="button">
        Выйти
      </button>
    </div>
  );
};

export default Header;
