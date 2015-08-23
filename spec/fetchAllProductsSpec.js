"use strict";

describe("fetchAllProducts", () => {
  beforeEach(function() {
    jasmine.Ajax.install();
  });

  afterEach(function() {
    jasmine.Ajax.uninstall();
  });
  
  describe("on success", () => {
    it("should return status 200", () => {
      let fetchAllProducts = require("./fetchAllProducts");
      let response = fetchAllProducts(200);
      expect(response).toEqual(200);
    });
    it("should return all products", () => {
      let fetchAllProducts = require("./fetchAllProducts");
      let response = fetchAllProducts();
      expect(response).toEqual({});
    });
  });
});
