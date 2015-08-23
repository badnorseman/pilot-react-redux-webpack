import { create, destroy, fetchAll, update } from "../src/scripts/api/api";

describe("api", () => {
  beforeEach(function() {
    jasmine.Ajax.install();
  });

  afterEach(function() {
    jasmine.Ajax.uninstall();
  });

  describe("fetchAll", () => {
    it("should return status 200", (done) => { // done means async test
      // mock response for certain endpoint
      jasmine.Ajax.stubRequest("http://localhost:3000/api/products").andReturn({
        "responseText": JSON.stringify({data: []})
      });

      // Because fetchAll() returns a promise, we have to wait until
      // it resolves.
      fetchAll("Product").then((body) => {
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

      // Because fetchAll() returns a promise, we have to wait until
      // it resolves.
      fetchAll("Product").then((body) => {
        expect(body.data.length).toEqual(2);
        
        done();
      });
    });
  });

  describe("create", () => {
    it("should create a product", () => {
      jasmine.Ajax.stubRequest("http://localhost:3000/api/products").andReturn({
        "responseText": JSON.stringify({data: {
          id: 1, name: "aaa", price: 100
        }})
      });

      create("Product").then((body) => {
        expect(body.data).toEqual({id: 1, name: "aaa", price: 100});
        
        done();
      });
    });
  });

  describe("update", () => {
    it("should update a product", () => {
      jasmine.Ajax.stubRequest("http://localhost:3000/api/products/1").andReturn({
        "responseText": JSON.stringify({data: {
          id: 1, name: "aaa", price: 200
        }})
      });

      update("Product", {id: 1}).then((body) => {
        expect(body.data).toEqual({id: 1, name: "aaa", price: 200});
        
        done();
      });
    });
  });

  describe("destroy", () => {
    it("should destroy a product", () => {
      jasmine.Ajax.stubRequest("http://localhost:3000/api/products/1").andReturn({
        "responseText": JSON.stringify({success: true})
      });

      destroy("Product", 1).then((body) => {
        expect(body.success).toBe(true);
        
        done();
      });
    });
  });
});
