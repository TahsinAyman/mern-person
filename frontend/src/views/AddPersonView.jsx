import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import validation from "../validation/PersonValidation";

export default function AddPersonView(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validation),
  });

  return (
    <form onSubmit={handleSubmit(props.onSubmit)}>
      <input type="text" {...register("name")} placeholder="Name" />
      {errors.name?.message && (
        <p style={{ color: "red" }}>{errors.name?.message}</p>
      )}
      <br />
      <input type="number" placeholder="Age" {...register("age")} />
      {errors.age?.message && (
        <p style={{ color: "red" }}>{errors.age?.message}</p>
      )}
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
