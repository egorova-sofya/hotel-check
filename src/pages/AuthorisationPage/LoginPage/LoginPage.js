import React from "react";
import LoginForm from "../../../components/Authorisation/LoginForm/LoginForm";
import { withModalLayout } from "../../../hoc/Layouts/ModalLayout/ModalLayout";
import s from "./LoginPage.module.css";

const LoginPage = () => {
  return (
    <div className={s.container}>
      <div className={s.loginWrapper}>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
