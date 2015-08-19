"use strict";
import {
  ROUTE_CHANGE_REQUEST
} from "../actions/routeActions";

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

    default:
      return state;
  }
};
