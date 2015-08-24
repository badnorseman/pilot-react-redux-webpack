"use strict";
import { combineReducers } from "redux";
import productReducer from "./productReducer";
import routeReducer from "./routeReducer";

const mainReducer = combineReducers({
  productReducer,
  routeReducer
});

export default mainReducer;
