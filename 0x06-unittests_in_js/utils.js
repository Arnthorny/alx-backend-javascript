#!/usr/bin/node

const Utils = {
  /**
   *
   * @param {string} type
   * @param {number} a
   * @param {number} b
   * @returns number
   */
  calculateNumber(type, a, b) {
    const roundA = Math.round(a);
    const roundB = Math.round(b);

    switch (type) {
      case "SUM":
        return roundA + roundB;
      case "SUBTRACT":
        return roundA - roundB;
      case "DIVIDE":
        if (roundB === 0) return "Error";
        else return roundA / roundB;
      default:
        return undefined;
    }
  },
};

module.exports = Utils;
