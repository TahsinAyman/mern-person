import { useNavigate } from "react-router-dom";

export default function SinglePersonView(props) {
  const navigate = useNavigate();

  if (props.personRef) {
    return (
      <tr ref={props.personRef}>
        <td>{props.index}</td>
        <td>{props.person.getName()}</td>
        <td>{props.person.getAge()}</td>
        <td>
          <button onClick={() => navigate(`/update/${props.person.getId()}`)}>
            Update
          </button>
        </td>
        <td>
          <button onClick={() => navigate(`/delete/${props.person.getId()}`)}>
            Delete
          </button>
        </td>
      </tr>
    );
  } else {
    return (
      <tr>
        <td>{props.index}</td>
        <td>{props.person.getName()}</td>
        <td>{props.person.getAge()}</td>
        <td>
          <button onClick={() => navigate(`/update/${props.person.getId()}`)}>
            Update
          </button>
        </td>
        <td>
          <button onClick={() => navigate(`/delete/${props.person.getId()}`)}>
            Delete
          </button>
        </td>
      </tr>
    );
  }
}
