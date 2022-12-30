import Person from "../model/Person";

export function jsonToObj(json) {
  return new Person(json._id, json.name, json.age, json.__v);
}

export function objToJson(obj) {
  return {
    _id: obj.getId(),
    name: obj.getName(),
    age: obj.getAge(),
    __v: obj.getV(),
  };
}

export function jsonListToObjList(jsonList) {
  var lst = [];
  jsonList.map((json) => {
    lst.push(new Person(json._id, json.name, json.age, json.__v));
  });
  return lst;
}

export function objListToJsonList(objList) {
  var lst = [];
  objList.map((obj) => {
    lst.push({
      _id: obj.getId(),
      name: obj.getName(),
      age: obj.getAge(),
      __v: obj.getV(),
    });
  });
  return lst;
}
