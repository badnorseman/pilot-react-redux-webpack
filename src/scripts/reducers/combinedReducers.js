"use strict";
import { combineReducers } from "redux";
import productReducer from "./productReducer";
import routeReducer from "./routeReducer";

const combinedReducers = combineReducers({
  productReducer,
  routeReducer
});

export default combinedReducers;
