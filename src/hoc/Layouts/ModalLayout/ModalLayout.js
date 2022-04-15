import React from "react";
import s from "./ModalLayout.module.css";

const ModalLayout = ({ children }) => {
  return (
    <div className={s.wrapper}>
      <main className={s.container}>
        <div className={s.modal}>{children}</div>
      </main>
    </div>
  );
};

export const withModalLayout = (Component) => {
  return function withLayoutComponent(props) {
    return (
      <ModalLayout>
        <Component {...props} />
      </ModalLayout>
    );
  };
};
