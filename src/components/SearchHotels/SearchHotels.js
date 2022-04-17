import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import s from "./SearchHotels.module.css";
import * as yup from "yup";
import Button from "../Button/Button";
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import {
  getHotels,
  updateDate,
  updateLocation,
  updateNumberOfDays,
} from "../../Redux/reducers/getHotelsReducer";
import { withBlockLayout } from "../../hoc/Layouts/BlockLayout/BlockLayout";

const SearchHotels = () => {
  let today = dayjs().format("YYYY-MM-DD");
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const getHotelsReducer = state.getHotelsReducer;

  useEffect(() => {
    dispatch(updateLocation("Москва"));
    dispatch(updateDate(today));
    dispatch(getHotels());
  }, []);

  const [location, setLocation] = useState("Москва");
  const [checkIn, setCheckIn] = useState(today);
  const [numberOfDays, setNumberOfDays] = useState(
    getHotelsReducer.numberOfDays
  );

  const initialValues = {
    location: location,
    checkIn: checkIn,
    numberOfDays: numberOfDays,
  };

  const validationSchema = yup.object({
    location: yup.string().required("Введите город"),
    numberOfDays: yup.number().required("Введите количество дней"),
  });

  const onSubmit = (values, onSubmitProps) => {
    dispatch(updateLocation(location));
    dispatch(updateDate(checkIn));
    dispatch(updateNumberOfDays(numberOfDays));
    onSubmitProps.setSubmitting(false);
    dispatch(getHotels());
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
                <div className={s.inputsWrapper}>
                  <div
                    className={` ${s.inputWrapper} ${
                      touched.location && errors.location ? "is-invalid" : ""
                    }`}
                  >
                    <Field
                      id="location"
                      type="text"
                      name="location"
                      className={`form-control`}
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    />
                    <ErrorMessage component="div" name="location" />
                  </div>

                  <div className={s.inputWrapper}>
                    <label className={s.label}>Дата заселения</label>
                    <input
                      type="date"
                      placeholder=""
                      name="checkIn"
                      value={checkIn}
                      onChange={(e) => {
                        setCheckIn(e.target.value);
                      }}
                    />
                  </div>

                  <div
                    className={` ${s.inputWrapper} ${
                      touched.numberOfDays && errors.numberOfDays
                        ? "is-invalid"
                        : ""
                    }`}
                  >
                    <label className={s.label}>Количество дней</label>

                    <Field
                      id="numberOfDays"
                      type="number"
                      name="numberOfDays"
                      className={`form-control`}
                      value={numberOfDays}
                      onChange={(e) => {
                        setNumberOfDays(e.target.value);
                      }}
                    />
                    <ErrorMessage component="div" name="numberOfDays" />
                  </div>
                </div>
                <div className={s.buttonWrapper}>
                  <Button type={"submit"} appearence={"primary"}>
                    Найти
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

export default withBlockLayout(SearchHotels);
