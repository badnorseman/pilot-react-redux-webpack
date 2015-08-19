"use strict";
import {
  ROUTE_CHANGE_REQUEST
} from "../actions/routeActions";
import {
  PRODUCT_CREATE_RESPONSE,
  PRODUCT_CREATE_ERROR,
} from "../actions/productActions";

const initialState = {
  route: "LIST",
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
      return Object.assign({}, state, {
        route: "LIST"
      });
    case PRODUCT_CREATE_ERROR:
      return Object.assign({}, state, {
        // Do Nothing
      });

    default:
      return state;
  }
};
