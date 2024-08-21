#!/usr/bin/node

/**
 *
 * @param {boolean} success
 * @returns Promise
 */
function getPaymentTokenFromAPI(success) {
  if (success) {
    return Promise.resolve({ data: "Successful response from the API" });
  }
}

module.exports = getPaymentTokenFromAPI;
