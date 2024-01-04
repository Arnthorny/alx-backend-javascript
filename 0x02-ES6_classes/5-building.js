export default class Building {
  /* eslint-disable no-underscore-dangle */
  constructor(sqft) {
    if (!this.evacuationWarningMessage && this.constructor !== Building) {
      throw new Error(
        'Class extending Building must override evacuationWarningMessage',
      );
    }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }
}
