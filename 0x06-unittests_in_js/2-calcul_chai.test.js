#!/usr/bin/node

const { expect } = require("chai");
const calculateNumber = require("./2-calcul_chai");

describe("calculateNumber", () => {
  describe("type === SUM", () => {
    it("should return the sum of two rounded numbers when type is SUM", () => {
      const result = calculateNumber("SUM", 1.4, 2.6);
      expect(result).to.equal(4);
    });

    it("should handle negative numbers correctly", () => {
      const result = calculateNumber("SUM", -1.4, -2.6);
      expect(result).to.eq(-4);
    });

    it("should handle large numbers correctly", () => {
      const result = calculateNumber("SUM", 1000000000.4, 2000000000.6);
      expect(result).to.eq(3000000001);
    });

    it("should handle small numbers correctly", () => {
      const result = calculateNumber("SUM", 0.1, 0.2);
      expect(result).to.eq(0);
    });
  });

  describe("type === SUBTRACT", () => {
    it("should return the difference of two rounded numbers when type is SUBTRACT", () => {
      const result = calculateNumber("SUBTRACT", 5.7, 2.3);
      expect(result).to.eq(4);
    });

    it("should handle edge cases where rounding changes the number significantly", () => {
      const result = calculateNumber("SUBTRACT", 0.49, 0.51);
      expect(result).to.eq(-1);
    });

    it("return the difference of 2 rounded negative numbers", function () {
      const result = calculateNumber("SUBTRACT", -1.4, -2.6);
      expect(result).to.eq(2);
    });

    it("should subtract whole number from decimal", function () {
      const result = calculateNumber("SUBTRACT", 2.6, 2);
      expect(result).to.eq(1);
    });
  });
  describe("type === DIVIDE", () => {
    it("should return the division of two rounded numbers when type is DIVIDE", () => {
      const result = calculateNumber("DIVIDE", 5.5, 2.2);
      expect(result).to.eq(3);
    });

    it("should return the division of two whole numbers when type is DIVIDE", () => {
      const result = calculateNumber("DIVIDE", 1, 2);
      expect(result).to.eq(0.5);
    });

    it("should return the division 1 and 3", () => {
      const result = calculateNumber("DIVIDE", 1, 3);
      expect(result).to.eq(0.3333333333333333);
    });

    it("should return Error when dividing by zero", () => {
      const result = calculateNumber("DIVIDE", 5, 0);
      expect(result).to.eq("Error");
    });

    it("should return 0 when dividend is 0", () => {
      const result = calculateNumber("DIVIDE", 0, 5);
      expect(result).to.eq(0);
    });
  });

  it("should return undefined for unsupported operation types", () => {
    const result = calculateNumber("MULTIPLY", 1, 2);
    expect(result).to.eq(undefined);
  });
});
