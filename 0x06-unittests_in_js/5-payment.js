#!/usr/bin/node

const Utils = require("./utils");

/**
 *
 * @param {number} totalAmount
 * @param {number} totalShipping
 */
function sendPaymentRequestToApi(totalAmount, totalShipping) {
  total = Utils.calculateNumber("SUM", totalAmount, totalShipping);
  console.log(`The total is: ${total}`);
}

module.exports = sendPaymentRequestToApi;
