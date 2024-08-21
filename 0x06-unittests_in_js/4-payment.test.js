#!/usr/bin/node

const { expect } = require("chai");
const sinon = require("sinon");
const sendPaymentRequestToApi = require("./4-payment");
const Utils = require("./utils");

describe("sendPaymentRequestToApi", function () {
  it("should successfully stub the function and log 10", function () {
    const stub = sinon.stub(Utils, "calculateNumber").returns(10);
    const spyConsole = sinon.spy(console, "log");

    sendPaymentRequestToApi(100, 20);

    expect(stub.calledOnceWith("SUM", 100, 20)).to.be.true;

    expect(spyConsole.calledOnceWith("The total is: 10")).to.be.true;
    expect(spyConsole.calledOnce).to.be.true;

    stub.restore();
    spyConsole.restore();
  });
});
