"use strict";
import {
  ROUTE_CHANGE_REQUEST,
  ROUTE_CHANGE_RESPONSE,
  ROUTE_CHANGE_ERROR
} from "../actions/RouteActions";

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

    // case ROUTE_CHANGE_RESPONSE:
    //   return Object.assign({}, state, {
    //   });

    // case ROUTE_CHANGE_ERROR:
    //   return Object.assign({}, state, {
    //     errors: action.errors
    //   });

    default:
      return state;
  }
};
