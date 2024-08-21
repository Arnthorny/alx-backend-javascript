#!/usr/bin/node

const { expect } = require("chai");
const request = require("request");
// const { app } = require("./api");

const API_URL = "http://localhost:7865";

describe("Regex integration testing", function () {
  it("should test 200 response value", function (done) {
    request.get(`${API_URL}/cart/12`, (error, response, body) => {
      if (error) return done(error);
      expect(response.statusCode).to.eq(200);
      expect(body).to.eq("Payment methods for cart 12");
      done();
    });
  });

  it("should test 404 response value", function (done) {
    request.get(`${API_URL}/cart/hello`, (error, response, _) => {
      if (error) return done(error);
      expect(response.statusCode).to.eq(404);
      done();
    });
  });

  it("should test 404 response value for negative id", function (done) {
    request.get(`${API_URL}/cart/hello/-12`, (error, response, _) => {
      if (error) return done(error);
      expect(response.statusCode).to.eq(404);
      done();
    });
  });
});

describe("Test Suite for POST /login", function () {
  it("should test POST response value", function (done) {
    request.post(
      `${API_URL}/login`,
      { userName: "Betty" },
      (error, response, body) => {
        if (error) return done(error);

        expect(response.statusCode).to.eq(200);
        expect(body).to.eq("Welcome Betty");
        expect(response.headers["content-type"]).to.eq("application/json");

        done();
      }
    );
  });

  it("should test response when no json", function (done) {
    request.get(`${API_URL}/login`, {}, (error, response, _) => {
      if (error) {
        expect(response.statusCode).to.eq(500);
        return done(error);
      }
    });
  });
});

describe("Test Suite for GET /available_payments", function () {
  it("should test 200 response value", function (done) {
    request.get(`${API_URL}/available_payments`, (error, response, body) => {
      if (error) return done(error);

      expect(response.statusCode).to.eq(200);
      expect(body).to.deep.eq({
        payment_methods: { credit_cards: true, paypal: false },
      });
      done();
    });
  });
});
