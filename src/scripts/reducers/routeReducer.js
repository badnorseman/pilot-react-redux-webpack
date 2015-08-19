"use strict";
import {
  ROUTE_CHANGE_REQUEST
} from "../actions/routeActions";
import {
  PRODUCT_CREATE_RESPONSE,
  PRODUCT_CREATE_ERROR,
  PRODUCT_DESTROY_RESPONSE,
  PRODUCT_DESTROY_ERROR,
  PRODUCT_UPDATE_RESPONSE,
  PRODUCT_UPDATE_ERROR
} from "../actions/productActions";

const initialState = {
  route: "",
  id: 0
};

export default function routeReducer(state = initialState, action) {
  switch (action.type) {
    case ROUTE_CHANGE_REQUEST:
      return Object.assign({}, state, {
        route: action.route,
        id: action.id
      });
    case PRODUCT_CREATE_RESPONSE:
    case PRODUCT_DESTROY_RESPONSE:
    case PRODUCT_UPDATE_RESPONSE:
      console.log("SUCCESS", action)
      return Object.assign({}, state, {
        route: "LIST"
      });
    case PRODUCT_CREATE_ERROR:
    case PRODUCT_DESTROY_ERROR:
    case PRODUCT_UPDATE_ERROR:
      console.log("ERROR", action)
      return Object.assign({}, state, {
        // Do nothing.
      });

    default:
      return state;
  }
};
