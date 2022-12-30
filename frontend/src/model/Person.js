export default class Person {
  constructor(_id, name, age, __v) {
    this._id = _id;
    this.name = name;
    this.age = age;
    this.__v = __v;
  }
  getId = () => this._id;
  getName = () => this.name;
  getAge = () => this.age;
  getV = () => this.__v;
  setId(_id) {
    this._id = _id;
  }
  setName(name) {
    this.name = name;
  }
  setAge(age) {
    this.age = age;
  }
  setV(__v) {
    this.__v = __v;
  }
}
