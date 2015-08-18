"use strict";
import {
  ROUTE_CHANGE_REQUEST,
  ROUTE_CHANGE_RESPONSE,
  ROUTE_CHANGE_ERROR
} from "../actions/route_actions";

const initialState = {
  previous: "",
  next: ""
};

export default function routeReducer(state = initialState, action) {
  switch (action.type) {
    case ROUTE_CHANGE_REQUEST:
      return Object.assign({}, state, {
        previous: action.data.previous,
        next: action.data.next
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
