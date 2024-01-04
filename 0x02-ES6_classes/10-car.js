export default class Car {
  /* eslint-disable no-underscore-dangle */
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  static get [Symbol.species]() {
    return this;
  }

  cloneCar() {
    const newCar = new this.constructor[Symbol.species]();
    return newCar;
  }
}
