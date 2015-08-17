"use strict";
import $ from "jquery";
import { getFormData, getHeaders, getUrl } from "../utils/api_utils";

export function create(objName, data) {
  return (
    Promise.resolve(
      $.ajax({
        url: getUrl(objName),
        dataType: "json",
        type: "POST",
        headers: getHeaders(),
        processData: false,
        contentType: false,
        data: getFormData(objName, data)
      })
    )
  )
}

export function destroy(objName, id) {
  return (
    Promise.resolve(
      $.ajax({
        url: getUrl(objName, id),
        dataType: "json",
        type: "DELETE",
        headers: getHeaders()
      })
    )
  )
}

export function fetchClientToken(objName) {
  return (
    Promise.resolve(
      $.ajax({
        url: getUrl(objName, "new"),
        dataType: "json",
        type: "GET",
        headers: getHeaders()
      })
    )
  )
}

export function fetchAll(objName) {
  return (
    Promise.resolve(
      $.ajax({
        url: getUrl(objName),
        dataType: "json",
        type: "GET",
        headers: getHeaders()
      })
    )
  )
}

export function update(objName, data) {
  return (
    Promise.resolve(
      $.ajax({
        url: getUrl(objName, data.id),
        dataType: "json",
        type: "PATCH",
        headers: getHeaders(),
        processData: false,
        contentType: false,
        data: getFormData(objName, data)
      })
    )
  )
}
