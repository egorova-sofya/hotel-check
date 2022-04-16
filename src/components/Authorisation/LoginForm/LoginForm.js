import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import s from "./LoginForm.module.css";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../Button/Button";
import * as yup from "yup";
import Title from "../../Title/Title";
import { setCookie } from "../../../utils/cookies";

const LoginForm = () => {
  const navigate = useNavigate();

  const initialValues = {
    login: "",
    password: "",
  };

  const validationSchema = yup.object({
    login: yup
      .string()
      .email("Введите корректный Email")
      .required("Введите email"),
    password: yup
      .string()
      .min(8, "Пароль должен содержать минимум 8 знаков")
      .required("Введите пароль")
      .matches(/^[a-zA-Z0-9_]+$/, "Пароль не должен содержать кириллицу"),
  });

  const onSubmit = (values, onSubmitProps) => {
    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm();
    setCookie("isAuthUser", true, 150);
    navigate("/");
  };

  return (
    <>
      <Title>Simple Hotel Check</Title>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        validateOnMount
        enableReinitialize
      >
        {({ touched, errors }) => {
          return (
            <Form>
              <div className={s.container}>
                <div>
                  <label htmlFor="login">Логин</label>
                  <Field
                    id="login"
                    type="text"
                    name="login"
                    className={`form-control ${
                      touched.login && errors.login ? "is-invalid" : ""
                    }`}
                  />
                  <ErrorMessage
                    component="div"
                    name="login"
                    className={`is-invalid `}
                  />
                </div>

                <div>
                  <label htmlFor="password">Пароль</label>

                  <Field
                    id="password"
                    type="password"
                    name="password"
                    className={`form-control ${
                      touched.password && errors.password ? "is-invalid" : ""
                    }`}
                  />
                  <ErrorMessage
                    component="div"
                    name="password"
                    className={`invalid-feedback `}
                  />
                </div>
                <Button
                  type={"submit"}
                  appearence={"primary"}
                  onClick={() => {
                    // handleClick(email, pass);
                  }}
                >
                  Войти
                </Button>
              </div>
            </Form>
          );
        }}
      </Formik>
      <p className={s.underFormLinks}>
        <Link className={s.link} to="/registration">
          Зарегестрироваться
        </Link>
      </p>
    </>
  );
};

export default LoginForm;
