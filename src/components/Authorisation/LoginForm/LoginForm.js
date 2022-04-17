import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import s from "./LoginForm.module.css";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../Button/Button";
import * as yup from "yup";
import Title from "../../Title/Title";
import { setCookie } from "../../../utils/cookies";
import { withModalLayout } from "../../../hoc/Layouts/ModalLayout/ModalLayout";

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
      <div className={s.titleWrapper}>
        <Title>Simple Hotel Check</Title>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        validateOnMount
        enableReinitialize
      >
        {({ touched, errors, setErrors, handleChange }) => {
          return (
            <Form>
              <div className={s.container}>
                <div
                  className={` ${s.inputWrapper} ${
                    touched.login && errors.login ? "is-invalid" : ""
                  }`}
                >
                  <label htmlFor="login">Логин</label>
                  <Field
                    id="login"
                    type="text"
                    name="login"
                    className={`form-control`}
                  />

                  <ErrorMessage component="div" name="login" />
                </div>

                <div
                  className={` ${s.inputWrapper} ${
                    touched.password && errors.password ? "is-invalid" : ""
                  }`}
                >
                  <label htmlFor="password">Пароль</label>

                  <Field
                    id="password"
                    type="password"
                    name="password"
                    className={`form-control`}
                  />
                  <ErrorMessage component="div" name="password" />
                </div>
                <div className={s.buttonWrapper}>
                  <Button type={"submit"} appearence={"primary"}>
                    Войти
                  </Button>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default withModalLayout(LoginForm);
