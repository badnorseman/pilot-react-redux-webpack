"use strict";
import $ from "jquery";
import { getFormData, getHeaders, getUrl } from "../utils/apiUtils";

export function create(entityName, data) {
  const url = getUrl(entityName);
  const headers = getHeaders();
  const formData = getFormData(entityName, data);
  return Promise.resolve(
    $.ajax({
      url: url,
      dataType: "json",
      type: "POST",
      headers: headers,
      processData: false,
      contentType: false,
      data: formData
    })
  );
}

export function destroy(entityName, id) {
  const url = getUrl(entityName, id);
  const headers = getHeaders();
  return Promise.resolve(
    $.ajax({
      url: url,
      dataType: "json",
      type: "DELETE",
      headers: headers
    })
  );
}

export function fetchClientToken(entityName) {
  const url = getUrl(entityName, "new");
  const headers = getHeaders();
  return Promise.resolve(
    $.ajax({
      url: url,
      dataType: "json",
      type: "GET",
      headers: headers
    })
  );
}

export function fetchAll(entityName) {
  const url = getUrl(entityName);
  const headers = getHeaders();
  return Promise.resolve(
    $.ajax({
      url: url,
      dataType: "json",
      type: "GET",
      headers: headers
    })
  );
}

export function update(entityName, data) {
  const url = getUrl(entityName, data.id);
  const headers = getHeaders();
  const formData = getFormData(entityName, data);
  return Promise.resolve(
    $.ajax({
      url: url,
      dataType: "json",
      type: "PATCH",
      headers: headers,
      processData: false,
      contentType: false,
      data: formData
    })
  );
}
