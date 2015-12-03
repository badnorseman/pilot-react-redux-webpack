"use strict";
const API = "http://localhost:3000/api";

export function getFormData(entityName, data) {
  let formData = new FormData();
  for (let key in data) {
    if (data.hasOwnProperty(key)) {
      formData.append(`${entityName.toLowerCase()}[${key}]`, data[key]);
    }
  }
  return formData;
}

export function getHeaders() {
  return {
    "Authorization": `Token token=${localStorage.token}`
  };
}

export function getUrl(entityName, params) {
  return `${API}/${entityName.toLowerCase()}s${getUrlParams(params)}`;
}

function getUrlParams(params = "") {
  return (params === "") ? "" : `/${params}`;
}
