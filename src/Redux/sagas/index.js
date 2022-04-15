import { all } from "redux-saga/effects";
import { getHotelWatcher } from "./getHotelsSaga";

export function* rootWatcher() {
  yield all([getHotelWatcher()]);
}
