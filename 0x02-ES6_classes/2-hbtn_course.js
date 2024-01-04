export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  get name() {
    return this._name;
  }

  set name(n) {
    if (typeof n === 'string') this._name = n;
    else throw new TypeError('Name must be a string');
  }

  get length() {
    return this._length;
  }

  set length(num) {
    if (Number.isFinite(num)) this._length = num;
    else throw new TypeError('Length must be a number');
  }

  get students() {
    return this._students;
  }

  set students(arr) {
    if (Array.isArray(arr)) this._students = arr;
    else throw new TypeError('Students must be an array');
  }
}
