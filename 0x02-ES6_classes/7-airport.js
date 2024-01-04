export default class Airport {
  /* eslint-disable no-underscore-dangle */
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  get [Symbol.toStringTag]() {
    return `${this._code}`;
  }
}
