"use strict";

import fetchAllProducts from "./fetchAllProducts";

describe("fetchAllProducts", () => {
  beforeEach(function() {
    jasmine.Ajax.install();
  });

  afterEach(function() {
    jasmine.Ajax.uninstall();
  });

  describe("on success", () => {
    it("should return status 200", (done) => { // done means async test
      // mock response for certain endpoint
      jasmine.Ajax.stubRequest("http://localhost:3000/api/products").andReturn({
        "responseText": JSON.stringify({data: []})
      });

      // Because fetchAllProducts returns a promise, we have to wait until
      // it resolves.
      fetchAllProducts().then((body) => {
        expect(body).toEqual({data: []});
        
        done();
      });
    });

    it("should return all products", () => {
      // mock response for certain endpoint
      jasmine.Ajax.stubRequest("http://localhost:3000/api/products").andReturn({
        "responseText": JSON.stringify({data: [
          { name: "aaa", price: 100 },
          { name: "bbb", price: 200 },
        ]})
      });

      // Because fetchAllProducts returns a promise, we have to wait until
      // it resolves.
      fetchAllProducts().then((body) => {
        expect(body.data.length).toEqual(2);
        
        done();
      });
    });
  });
});
