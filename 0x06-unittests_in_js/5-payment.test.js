#!/usr/bin/node

const { expect } = require("chai");
const sinon = require("sinon");
const sendPaymentRequestToApi = require("./5-payment");
const Utils = require("./utils");

describe("sendPaymentRequestToApi", function () {
  let spyConsole;

  beforeEach(function () {
    spyConsole = sinon.spy(console, "log");
  });

  afterEach(() => {
    spyConsole.restore();
  });

  it("should successfully log 'The total is 120'", function () {
    sendPaymentRequestToApi(100, 20);

    expect(spyConsole.calledOnceWith("The total is: 120")).to.be.true;
    expect(spyConsole.calledOnce).to.be.true;
  });

  it("should successfully log 'The total is 20'", function () {
    sendPaymentRequestToApi(10, 10);

    expect(spyConsole.calledOnceWith("The total is: 20")).to.be.true;
    expect(spyConsole.calledOnce).to.be.true;
  });
});
