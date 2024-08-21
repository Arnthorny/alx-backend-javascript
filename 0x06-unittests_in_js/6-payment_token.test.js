#!/usr/bin/node
const assert = require("assert");
const getPaymentTokenFromAPI = require("./6-payment_token");

describe("getPaymentTokenFromAPI", function () {
  it("test result of getPaymentTokenFromAPI(true)", function (done) {
    getPaymentTokenFromAPI(true).then((data) => {
      assert.deepStrictEqual(data, {
        data: "Successful response from the API",
      });
      done();
    });
  });
});
