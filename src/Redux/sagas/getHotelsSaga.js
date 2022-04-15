import axios from "axios";
import dayjs from "dayjs";
import { takeEvery, call, put } from "redux-saga/effects";
import { GET_HOTELS, saveHotels } from "../reducers/getHotelsReducer";

const getHotelApi = (location, checkIn, checkOut) => {
  return axios.get(
    `https://engine.hotellook.com/api/v2/cache.json?location=${location}&currency=rub&checkIn=${checkIn}&checkOut=${checkOut}&limit=10`
  );
};

function* getHotelWorker({ payload }) {
  try {
    let checkOut = dayjs(payload.checkIn)
      .add(payload.numberOfDays, "day")
      .format("YYYY-MM-DD");

    const data = yield call(
      getHotelApi,
      payload.location,
      payload.checkIn,
      checkOut
    );
    console.log(data.data);
    yield put(saveHotels(data.data));
  } catch (error) {
    console.log("error", error.response);
  }
}

export function* getHotelWatcher() {
  yield takeEvery(GET_HOTELS, getHotelWorker);
}
