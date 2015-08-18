"use strict";
import { combineReducers } from "redux";
import productReducer from "./product_reducer";

const combinedReducers = combineReducers({
  productReducer
});

export default combinedReducers;
