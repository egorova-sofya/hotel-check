import createSagaMiddleware from "@redux-saga/core";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { rootWatcher } from "./sagas";
import { composeWithDevTools } from "redux-devtools-extension";
import { getHotelsReducer } from "./reducers/getHotelsReducer";

const sagaMiddleware = createSagaMiddleware();

const appReducer = combineReducers({
  getHotelsReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootWatcher);
