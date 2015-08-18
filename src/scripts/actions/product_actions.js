import { create, destroy, fetchAll, update } from "../api/api";
import { Schema, arrayOf, normalize } from "normalizr";

const productSchema = new Schema("products", { idAttribute: "id" });
const ENTITY_NAME = "product";

export const PRODUCT_CREATE_REQUEST = "PRODUCT_CREATE_REQUEST";
export const PRODUCT_CREATE_RESPONSE = "PRODUCT_CREATE_RESPONSE";
export const PRODUCT_CREATE_ERROR = "PRODUCT_CREATE_ERROR";

function createProductRequest(data) {
  return {
    type: PRODUCT_CREATE_REQUEST,
    data: data
  };
}

function createProductResponse(response) {
  let normalized = normalize(response, arrayOf(productSchema));
  return {
    type: PRODUCT_CREATE_RESPONSE,
    data: normalized.entities.products
  };
}

function createProductError(error) {
  let errors = JSON.parse(error.responseText).errors;
  return {
    type: PRODUCT_CREATE_ERROR,
    error: JSON.parse(error.responseText).errors
  };
}

export function createProduct(data) {
  return dispatch => {
    dispatch(createProductRequest(data));
    return create(ENTITY_NAME, data)
    .then(() => fetchAll(ENTITY_NAME))
    .then(response => dispatch(createProductResponse(response)))
    .catch(error => dispatch(createProductError(error)))
  };
}

export const PRODUCT_DESTROY_REQUEST = "PRODUCT_DESTROY_REQUEST";
export const PRODUCT_DESTROY_RESPONSE = "PRODUCT_DESTROY_RESPONSE";
export const PRODUCT_DESTROY_ERROR = "PRODUCT_DESTROY_ERROR";

function destroyProductRequest(id) {
  return {
    type: PRODUCT_DESTROY_REQUEST,
    id: id
  };
}

function destroyProductResponse(response) {
  let normalized = normalize(response, arrayOf(productSchema));
  return {
    type: PRODUCT_DESTROY_RESPONSE,
    data: normalized.entities.products
  };
}

function destroyProductError(error) {
  let errors = JSON.parse(error.responseText).errors;
  return {
    type: PRODUCT_DESTROY_ERROR,
    errors: errors
  };
}

export function destroyProduct(id) {
  return dispatch => {
    dispatch(destroyProductRequest(id));
    return destroy(ENTITY_NAME, id)
    .then(() => fetchAll(ENTITY_NAME))
    .then(response => dispatch(destroyProductResponse(response)))
    .catch(error => dispatch(destroyProductError(error)))
  };
}

export const PRODUCT_FETCH_REQUEST = "PRODUCT_FETCH_REQUEST";
export const PRODUCT_FETCH_RESPONSE = "PRODUCT_FETCH_RESPONSE";
export const PRODUCT_FETCH_ERROR = "PRODUCT_FETCH_ERROR";

function productFetchRequest() {
  return {
    type: PRODUCT_FETCH_REQUEST
  };
}

function productFetchResponse(response) {
  let normalized = normalize(response, arrayOf(productSchema));
  return {
    type: PRODUCT_FETCH_RESPONSE,
    data: normalized.entities.products
  };
}

function productFetchError(error) {
  let errors = JSON.parse(error.responseText).errors;
  return {
    type: PRODUCT_FETCH_ERROR,
    errors: errors
  };
}

export function getProducts() {
  return dispatch => {
    dispatch(productFetchRequest());
    return fetchAll(ENTITY_NAME)
      .then(response => dispatch(productFetchResponse(response)))
      .catch(error => dispatch(productFetchError(error)))
  };
}

export const PRODUCT_UPDATE_REQUEST = "PRODUCT_UPDATE_REQUEST";
export const PRODUCT_UPDATE_RESPONSE = "PRODUCT_UPDATE_RESPONSE";
export const PRODUCT_UPDATE_ERROR = "PRODUCT_UPDATE_ERROR";

function updateProductRequest(data) {
  return {
    type: PRODUCT_UPDATE_REQUEST,
    data: data
  };
}

function updateProductResponse(response) {
  let normalized = normalize(response, arrayOf(productSchema));
  return {
    type: PRODUCT_UPDATE_RESPONSE,
    data: normalized.entities.products
  };
}

function updateProductError(error) {
  let errors = JSON.parse(error.responseText).errors;
  return {
    type: PRODUCT_UPDATE_ERROR,
    errors: errors
  };
}

export function updateProduct(data) {
  return dispatch => {
    dispatch(updateProductRequest(data));
    return update(ENTITY_NAME, data)
      .then(() => fetchAll(ENTITY_NAME))
      .then(response => dispatch(updateProductResponse(response)))
      .catch(error => dispatch(updateProductError(error)))
  };
}
