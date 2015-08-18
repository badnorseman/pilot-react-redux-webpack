"use strict";
import { applyMiddleware, createStore } from "redux";
import combinedReducers from "../reducers/combinedReducers";
import thunkMiddleware from "redux-thunk";

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware
)(createStore);

export default function configureStore(initialState) {
  return createStoreWithMiddleware(combinedReducers, initialState);
}
