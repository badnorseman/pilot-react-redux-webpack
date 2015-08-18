"use strict";
import { combineReducers } from "redux";
import productReducer from "./product_reducer";
import routeReducer from "./route_reducer";

const combinedReducers = combineReducers({
  productReducer,
  routeReducer
});

export default combinedReducers;
