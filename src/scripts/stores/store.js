"use strict";
import { applyMiddleware, createStore } from "redux";
import { appReducer } from "../reducers/app_reducer";
import thunkMiddleware from "redux-thunk";

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware
)(createStore);

export default function configureStore(initialState) {
  return createStoreWithMiddleware(appReducer, initialState);
}
