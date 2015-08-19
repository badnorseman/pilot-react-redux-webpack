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
  return Promise.resolve(
    $.ajax({
      url: getUrl(entityName, id),
      dataType: "json",
      type: "DELETE",
      headers: getHeaders()
    })
  );
}

export function fetchClientToken(entityName) {
  return Promise.resolve(
    $.ajax({
      url: getUrl(entityName, "new"),
      dataType: "json",
      type: "GET",
      headers: getHeaders()
    })
  );
}

export function fetchAll(entityName) {
  return Promise.resolve(
    $.ajax({
      url: getUrl(entityName),
      dataType: "json",
      type: "GET",
      headers: getHeaders()
    })
  );
}

export function update(entityName, data) {
  return Promise.resolve(
    $.ajax({
      url: getUrl(entityName, data.id),
      dataType: "json",
      type: "PATCH",
      headers: getHeaders(),
      processData: false,
      contentType: false,
      data: getFormData(entityName, data)
    })
  );
}
