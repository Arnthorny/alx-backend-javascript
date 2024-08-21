#!/usr/bin/node

const { expect } = require("chai");
const sinon = require("sinon");
const sendPaymentRequestToApi = require("./3-payment");
const Utils = require("./utils");

describe("sendPaymentRequestToApi", function () {
  it("should successfully spy on the function", function () {
    const spy = sinon.spy(Utils, "calculateNumber");

    sendPaymentRequestToApi(100, 20);

    expect(spy.calledOnceWith("SUM", 100, 20)).to.be.true;
    expect(spy.callCount).to.be.eq(1);
    expect(spy.alwaysReturned(120)).to.be.true;

    spy.restore();
  });
});
