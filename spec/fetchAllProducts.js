"use strict";
import $ from "jquery";

export default function fetchAllProducts() {
  return Promise.resolve(
    $.ajax({
      url: "http://localhost:3000/api/products",
      dataType: "json",
      type: "GET"
    })
  );
}
