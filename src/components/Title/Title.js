import React from "react";
import s from "./Title.module.css";
import cn from "classnames";

const Title = ({ children, size = "m", weight = "medium" }) => {
  return (
    <>
      <h1
        className={cn(s.title, {
          [s.l]: size === "l",
          [s.m]: size === "m",
          [s.s]: size === "s",
          [s.medium]: weight === "medium",
          [s.bold]: weight === "bold",
        })}
      >
        {children}
      </h1>
    </>
  );
};

export default Title;
