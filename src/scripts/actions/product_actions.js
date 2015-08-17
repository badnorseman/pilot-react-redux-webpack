// Todo:
// Now then both product_actions and transaction_actions are generic,
// we should have utils for action (dispatch) calls.
// Input:
// action e.g. create, load, update etc.
// path or entityName e.g. /products or product (perhaps modelName is better)
// Then we can rename Api to ApiCall for clarity.

import { create, destroy, fetchAll, update } from "../api/api";

const ENTITY_NAME = "product";

export const PRODUCT_CREATE_REQUEST = "PRODUCT_CREATE_REQUEST";

export function createProduct(data) {
  return {
    type: PRODUCT_CREATE_REQUEST
  }
}
  // create(ENTITY_NAME, data).then(() => {
  //   return fetchAll(ENTITY_NAME);
  // }).then(response => {
  //   dispatch({
  //     type: ActionTypes.PRODUCT_CREATE_RESPONSE,
  //     data: response
  //   });
  // }).catch(error => {
  //   dispatch({
  //     type: ActionTypes.PRODUCT_CREATE_ERROR,
  //     error: JSON.parse(error.responseText).errors
  //   });
  // });

export const PRODUCT_DESTROY_REQUEST = "PRODUCT_DESTROY_REQUEST";

export function destroyProduct(id) {
  return {
    type: PRODUCT_DESTROY_REQUEST,
    id: id
  }
}
  // destroy(ENTITY_NAME, id).then(() => {
  //   return fetchAll(ENTITY_NAME);
  // }).then(response => {
  //   dispatch({
  //     type: ActionTypes.PRODUCT_DESTROY_RESPONSE,
  //     data: response
  //   });
  // }).catch(error => {
  //   dispatch({
  //     type: ActionTypes.PRODUCT_DESTROY_ERROR,
  //     error: JSON.parse(error.responseText).errors
  //   });
  // });

export const PRODUCT_FETCH_REQUEST = "PRODUCT_FETCH_REQUEST";
export const PRODUCT_FETCH_RESPONSE = "PRODUCT_FETCH_RESPONSE";
export const PRODUCT_FETCH_ERROR = "PRODUCT_FETCH_ERROR";

export function getProducts() {
  return {
    type: PRODUCT_FETCH_REQUEST
  }
}
  // fetchAll(ENTITY_NAME).then(response => {
  //   dispatch({
  //     type: ActionTypes.PRODUCT_FETCH_RESPONSE,
  //     data: response
  //   });
  // }).catch(error => {
  //   dispatch({
  //     type: ActionTypes.PRODUCT_FETCH_ERROR,
  //     error: JSON.parse(error.responseText).errors
  //   });
  // });

export const PRODUCT_UPDATE_REQUEST = "PRODUCT_UPDATE_REQUEST";

export function updateProduct(data) {
  return {
    type: PRODUCT_UPDATE_REQUEST
  }
}
  // update(ENTITY_NAME, data).then(() => {
  //   return fetchAll(ENTITY_NAME);
  // }).then(response => {
  //   dispatch({
  //     type: ActionTypes.PRODUCT_UPDATE_RESPONSE,
  //     data: response
  //   });
  // }).catch(error => {
  //   dispatch({
  //     type: ActionTypes.PRODUCT_UPDATE_ERROR,
  //     error: JSON.parse(error.responseText).errors
  //   });
  // });
