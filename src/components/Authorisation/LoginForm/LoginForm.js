import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect } from "react";
import s from "./LoginForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../../Button/Button";
import * as yup from "yup";

const LoginForm = ({ title }) => {
  const state = useSelector((state) => state);
  const registrationInfoReducer = state.registrationInfoReducer;
  const authReducer = state.authReducer;
  const dispatch = useDispatch();

  const initialValues = {
    login: "",
    password: "",
  };

  const validationSchema = yup.object({
    login: yup.string().email().required("Введите логин"),
    password: yup.string().min(8).required("Введите пароль"),
  });

  const onSubmit = (values, onSubmitProps) => {
    console.log("form data", values);
    console.log("onSubmitProps", onSubmitProps);
    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm();
  };

  return (
    <>
      <h1>Simple Hotel Check</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        validateOnMount
        enableReinitialize
      >
        {({ touched, errors, handleChange, values }) => {
          return (
            <Form>
              <div className={s.container}>
                <div>
                  <label for="login">Логин</label>
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
                  <label for="password">Пароль</label>

                  <Field
                    label="First Name"
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
