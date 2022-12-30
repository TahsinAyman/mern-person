import { useEffect } from "react";
import { useState } from "react";
import {
  addPerson,
  deletePersonById,
  fetchPersonById,
  fetchPersonsByPage,
  updatePerson,
} from "../service/PersonService";
import PersonsView from "../views/PersonView";
import AddPersonView from "../views/AddPersonView";
import { useInView } from "react-intersection-observer";
import { useParams } from "react-router-dom";
import UpdatePersonView from "../views/UpdatePersonView";

export function ViewPerson() {
  const [page, setPage] = useState(0);
  const [persons, setPersons] = useState([]);
  const { ref, inView } = useInView({ threshold: 0.8 });
  const [last, setLast] = useState(false);

  useEffect(() => {
    if (!last) {
      console.log(JSON.stringify(persons));
      setPage(page + 1);
    }
  }, [inView]);

  useEffect(() => {
    fetchPersonsByPage(persons, setPersons, page, setLast);
  }, [page]);

  return <PersonsView persons={persons} personRef={ref} />;
}
export function AddPerson() {
  const onSubmit = (data) => {
    addPerson(data);
  };

  return <AddPersonView onSubmit={onSubmit} />;
}

export function UpdatePerson() {
  const { id } = useParams();
  const [person, setPerson] = useState(null);

  useEffect(() => {
    fetchPersonById(id, setPerson);
  }, []);

  const onSubmit = (data) => {
    updatePerson(id, data);
  };
  if (person) {
    return <UpdatePersonView person={person} onSubmit={onSubmit} />;
  } else {
    return null;
  }
}

export function DeletePerson() {
  const { id } = useParams();

  useEffect(() => {
    deletePersonById(id);
  }, []);

  return null;
}
