import React from "react";
import s from "./Button.module.css";

const Button = ({
  children,
  className,
  disabled = false,
  type = "button",
  ...props
}) => {
  return (
    <>
      <button type={type} disabled={disabled} className={s.button} {...props}>
        {children}
      </button>
    </>
  );
};

export default Button;
