"use strict";

describe("fetchAllProducts", () => {
  describe("on success", () => {
    it("should return status 200", () => {
      let fetchAllProducts = require("./fetch_all_products");
      let response = fetchAllProducts(200);
      expect(response).toEqual(200);
    });
    it("should return all products", () => {
      let fetchAllProducts = require("./fetch_all_products");
      let response = fetchAllProducts();
      expect(response).toEqual({});
    });
  });
});
