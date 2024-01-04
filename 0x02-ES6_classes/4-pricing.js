import Currency from './3-currency';

export default class Pricing {
  /* eslint-disable no-underscore-dangle */
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(amt) {
    if (Number.isFinite(amt)) this._amount = amt;
    else throw new TypeError('Amount must be a number');
  }

  get currency() {
    return this._currency;
  }

  set currency(curr) {
    if (curr instanceof Currency) this._currency = curr;
    else throw new TypeError('currency must be of type Currency');
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    if (Number.isFinite(amount) && Number.isFinite(conversionRate)) return amount * conversionRate;
    throw new TypeError('Amount and ConversionRate must be numbers');
  }
}
