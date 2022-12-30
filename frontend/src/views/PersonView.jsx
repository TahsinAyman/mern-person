import { useNavigate } from "react-router-dom";
import SinglePersonView from "./SinglePersonView";

export default function PersonsView({ persons, personRef }) {

  const navigate = useNavigate();

  return (  
    <>  
      <button onClick={() => navigate("/add")}>+</button>
      <table border="1" cellPadding="10">
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Age</th>
          <th>Update</th>
          <th>Delete</th>
        </tr>
        {persons &&
          persons.map((person) => {
            if (persons[persons.length - 1] === person) {
              return (
                <SinglePersonView
                  person={person}
                  index={persons.indexOf(person) + 1}
                  personRef={personRef}
                />
              );
            } else {
              return (
                <SinglePersonView
                  person={person}
                  index={persons.indexOf(person) + 1}
                />
              );
            }
          })}
      </table>
    </>
  );
}
