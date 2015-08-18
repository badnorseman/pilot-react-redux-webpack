"use strict";
import { combineReducers } from "redux";
import productState from "./product_reducer";

const combinedReducers = combineReducers({
  productState
});

export default combinedReducers;
