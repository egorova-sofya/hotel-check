import React from "react";
import s from "./BlockLayout.module.css";

const BlockLayout = ({ children }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.modal}>{children}</div>
    </div>
  );
};

export const withBlockLayout = (Component) => {
  return function withLayoutComponent(props) {
    return (
      <BlockLayout>
        <Component {...props} />
      </BlockLayout>
    );
  };
};
