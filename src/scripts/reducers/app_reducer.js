import { combineReducers } from "redux";
import products from "./product_reducer";

const appReducer = combineReducers({
  products
});

export default appReducer;
