#!/usr/bin/node

const { expect } = require("chai");
const request = require("request");
// const { app } = require("./api");

const API_URL = "http://localhost:7865";

describe("Basic Integration testing", function () {
  // Uncomment this code to allow tests run independent of server instance
  // Start the server before running tests
  //   before((done) => {
  //     server = app.listen(7865, () => {
  //       done();
  //     });
  //   });

  //   // Stop the server after tests
  //   after((done) => {
  //     server.close(done);
  //   });

  it("should test 200 response value", function (done) {
    request.get(`${API_URL}/`, (error, response, body) => {
      if (error) return done(error);
      expect(response.statusCode).to.eq(200);
      expect(body).to.eq("Welcome to the payment system");
      done();
    });
  });
});
