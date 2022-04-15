import React, { useState } from "react";
import Navbar from "../../../components/Navbar/Navbar";
import Sidebar from "../../../components/Sidebar/Sidebar";
import s from "./MainLayout.module.css";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar className={s.header} />
      <Sidebar className={s.sidebar} />
      <main className={s.container}>
        <div className={s.body}>{children}</div>
      </main>
    </>
  );
};

export const withMainLayout = (Component) => {
  return function withLayoutComponent(props) {
    return (
      <MainLayout>
        <Component {...props} />
      </MainLayout>
    );
  };
};
