import axios from "axios";
import dayjs from "dayjs";
import { takeEvery, call, put, select } from "redux-saga/effects";
import { GET_HOTELS, saveHotels } from "../reducers/getHotelsReducer";

const getHotelApi = (location, checkIn, checkOut) => {
  return axios.get(
    `https://engine.hotellook.com/api/v2/cache.json?location=${location}&currency=rub&checkIn=${checkIn}&checkOut=${checkOut}&limit=10`
  );
};

function* getHotelWorker() {
  const state = yield select();
  const getHotelsReducer = state.getHotelsReducer;
  try {
    let checkOut = dayjs(getHotelsReducer.checkIn)
      .add(getHotelsReducer.numberOfDays, "day")
      .format("YYYY-MM-DD");

    const data = yield call(
      getHotelApi,
      getHotelsReducer.location,
      getHotelsReducer.checkIn,
      checkOut
    );
    yield put(saveHotels(data.data));
  } catch (error) {
    console.log("error", error.response);
  }
}

export function* getHotelWatcher() {
  yield takeEvery(GET_HOTELS, getHotelWorker);
}
