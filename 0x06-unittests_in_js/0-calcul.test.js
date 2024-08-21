#!/usr/bin/node

const assert = require("assert");
const calculateNumber = require("./0-calcul");

describe("calculateNumber", function () {
  it("zeroes", function () {
    assert.strictEqual(calculateNumber(0.0, 0.0), 0);
  });

  it("integers", function () {
    assert.strictEqual(calculateNumber(2, 3), 5);
  });

  it("roundDown", function () {
    assert.strictEqual(calculateNumber(2.4, 2.3), 4);
  });
  it("roundUpOne", function () {
    assert.strictEqual(calculateNumber(2.6, 2.3), 5);
  });

  it("round Up Both numbers and return sum", function () {
    assert.strictEqual(calculateNumber(4.7, 2.6), 8);
  });

  it("return the sum of 2 rounded negative numbers", function () {
    assert.strictEqual(calculateNumber(-1.4, -2.6), -4);
  });
  it("should return NaN when one or both inputs are NaN", function () {
    assert.strictEqual(calculateNumber(NaN, 2.6), NaN);
    assert.strictEqual(calculateNumber(NaN, NaN), NaN);
  });

  it("should return infinity when one or both inputs are Infinity", function () {
    assert.strictEqual(calculateNumber(2, Infinity), Infinity);
    assert.strictEqual(calculateNumber(Infinity, Infinity), Infinity);
    assert.strictEqual(calculateNumber(Infinity, 2), Infinity);
  });

  it("return 0 when both inputs are null", function () {
    assert.strictEqual(calculateNumber(null, null), 0);
  });

  it("return the second number when other input is null", function () {
    assert.strictEqual(calculateNumber(null, -2), -2);
    assert.strictEqual(calculateNumber(3, null), 3);
  });

  it("should handle very large numbers that could cause overflow", function () {
    assert.strictEqual(
      calculateNumber(Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER),
      Number.MAX_SAFE_INTEGER * 2
    );
  });

  it("should handle numbers with trailing 9's", function () {
    assert.strictEqual(calculateNumber(1.59999999, 2.6999999), 5);
  });
});
