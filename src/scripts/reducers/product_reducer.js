import { PRODUCT_FETCH_ERROR, PRODUCT_FETCH_RESPONSE, PRODUCT_FETCH_REQUEST } from "../actions/product_actions";

const initialState = {
  isFetching: false,
  errors: [],
  items: {}
}

export default function products(state = initialState, action) {
  switch (action.type) {
    case PRODUCT_FETCH_ERROR:
      return Object.assign({}, state, {
        errors: action.errors,
        isFetching: false
      });

    case PRODUCT_FETCH_RESPONSE:
      return Object.assign({}, state, {
        errors: [],
        isFetching: false,
        items: action.data
      });

    case PRODUCT_FETCH_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      });

    default:
      return state;
  }
}
