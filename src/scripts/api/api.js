"use strict";
import $ from "jquery";
import { getFormData, getHeaders, getUrl } from "../utils/ApiUtils";

export function create(entityName, data) {
  return (
    Promise.resolve(
      $.ajax({
        url: getUrl(entityName),
        dataType: "json",
        type: "POST",
        headers: getHeaders(),
        processData: false,
        contentType: false,
        data: getFormData(entityName, data)
      })
    )
  )
}

export function destroy(entityName, id) {
  return (
    Promise.resolve(
      $.ajax({
        url: getUrl(entityName, id),
        dataType: "json",
        type: "DELETE",
        headers: getHeaders()
      })
    )
  )
}

export function fetchClientToken(entityName) {
  return (
    Promise.resolve(
      $.ajax({
        url: getUrl(entityName, "new"),
        dataType: "json",
        type: "GET",
        headers: getHeaders()
      })
    )
  )
}

export function fetchAll(entityName) {
  return (
    Promise.resolve(
      $.ajax({
        url: getUrl(entityName),
        dataType: "json",
        type: "GET",
        headers: getHeaders()
      })
    )
  )
}

export function update(entityName, data) {
  return (
    Promise.resolve(
      $.ajax({
        url: getUrl(entityName, data.id),
        dataType: "json",
        type: "PATCH",
        headers: getHeaders(),
        processData: false,
        contentType: false,
        data: getFormData(entityName, data)
      })
    )
  )
}
