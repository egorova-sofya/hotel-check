import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect } from "react";
import s from "./SearchHotels.module.css";
import * as yup from "yup";
import Button from "../Button/Button";
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import {
  getHotels,
  updateDate,
  updateLocation,
} from "../../Redux/reducers/getHotelsReducer";

const SearchHotels = () => {
  let today = dayjs().format("YYYY-MM-DD");
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const getHotelsReducer = state.getHotelsReducer;
  const checkIn = getHotelsReducer.checkIn;

  useEffect(() => {
    dispatch(updateLocation("Москва"));
    dispatch(updateDate(today));
  }, []);

  const initialValues = {
    location: getHotelsReducer.location,
    checkIn: checkIn,
    numberOfDays: "",
  };

  const validationSchema = yup.object({
    location: yup.string().required("Введите город"),
    numberOfDays: yup.number().required("Введите количество дней"),
  });

  const onSubmit = (values, onSubmitProps) => {
    console.log("values", values);
    onSubmitProps.setSubmitting(false);
    dispatch(getHotels(values));
  };

  return (
    <>
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
                  <Field
                    id="location"
                    type="text"
                    name="location"
                    className={`form-control ${
                      touched.location && errors.location ? "is-invalid" : ""
                    }`}
                    value={getHotelsReducer.location}
                    onChange={(e) => dispatch(updateLocation(e.target.value))}
                  />
                  <ErrorMessage
                    component="div"
                    name="location"
                    className={`is-invalid `}
                  />

                  <label className={s.label}>Дата заселения</label>
                  <input
                    type="date"
                    placeholder=""
                    name="checkIn"
                    value={checkIn}
                    onChange={(e) => {
                      dispatch(updateDate(e.target.value));
                    }}
                  />

                  <label className={s.label}>Количество дней</label>

                  <Field
                    id="numberOfDays"
                    type="number"
                    name="numberOfDays"
                    className={`form-control ${
                      touched.numberOfDays && errors.numberOfDays
                        ? "is-invalid"
                        : ""
                    }`}
                  />
                  <ErrorMessage
                    component="div"
                    name="numberOfDays"
                    className={`invalid-feedback `}
                  />
                </div>
                <Button type={"submit"} appearence={"primary"}>
                  Найти
                </Button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default SearchHotels;
