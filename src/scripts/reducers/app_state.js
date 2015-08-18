import { combineReducers } from "redux";
import productState from "./product_state";

const appReducer = combineReducers({
  productState
});

export default appReducer;
