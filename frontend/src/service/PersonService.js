import axios from "axios";
import application from "../resources/application.json";
import { jsonListToObjList, jsonToObj } from "../repository/PersonRepository";

export function fetchPersonsByPage(persons, set, page, last) {
  axios({
    method: "GET",
    url: `${application.backend}/api/v1/person/get/page/?items=10&page=${page}`,
  }).then(({ data }) => {
    if (!data.length && persons.length) {
      last(true);
    } else {
      set(jsonListToObjList([...persons, ...data]));
    }
  });
}

export function addPerson(person) {
  axios
    .post(`${application.backend}/api/v1/person/add/`, person)
    .then(() => {
      alert("Successfully Added");
      window.location.href = "/";
    })
    .catch(() => {
      alert("Something Went Wrong");
      window.location.href = "/";
    });
}

export function updatePerson(id, person) {
  axios
    .put(`${application.backend}/api/v1/person/update/${id}`, person)
    .then(() => {
      alert("Updated");
      window.location.href = "/";
    });
}

export function fetchPersonById(id, set) {
  axios
    .get(`${application.backend}/api/v1/person/get/${id}`)
    .then(({ data }) => {
      if (Object.keys(data).length) {
        set(jsonToObj(data));
      } else {
        set(null);
      }
    });
}

export function deletePersonById(id) {
  axios
    .delete(`${application.backend}/api/v1/person/delete/${id}`)
    .then(() => {
      alert("Deleted");
      window.location.href = "/";
    })
    .catch(() => {
      alert("Error");
      window.location.href = "/";
    });
}
