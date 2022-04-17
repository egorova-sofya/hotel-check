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
  updateNumberOfDays,
} from "../../Redux/reducers/getHotelsReducer";
import { withBlockLayout } from "../../hoc/Layouts/BlockLayout/BlockLayout";

const SearchHotels = () => {
  // let today = dayjs().format("YYYY-MM-DD");
  let today = dayjs().format("YYYY-MM-DD");
  // let today = dayjs().format("YYYY-DD-MM");
  // let today = dayjs().format("DD-MM-YYYY");
  console.log(today);
  // DD-MM-YYYY
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const getHotelsReducer = state.getHotelsReducer;
  const checkIn = getHotelsReducer.checkIn;

  useEffect(() => {
    dispatch(updateLocation("Москва"));
    dispatch(updateDate(today));
    dispatch(getHotels());
  }, []);

  const initialValues = {
    location: getHotelsReducer.location,
    checkIn: checkIn,
    numberOfDays: getHotelsReducer.numberOfDays,
  };

  const validationSchema = yup.object({
    location: yup.string().required("Введите город"),
    numberOfDays: yup.number().required("Введите количество дней"),
  });

  const onSubmit = (values, onSubmitProps) => {
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
                  <div className={s.inputWrapper}>
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
                  </div>

                  <div className={s.inputWrapper}>
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
                  </div>

                  <div className={s.inputWrapper}>
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
                      value={getHotelsReducer.numberOfDays}
                      onChange={(e) => {
                        dispatch(updateNumberOfDays(e.target.value));
                      }}
                    />
                    <ErrorMessage
                      component="div"
                      name="numberOfDays"
                      className={`invalid-feedback `}
                    />
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
