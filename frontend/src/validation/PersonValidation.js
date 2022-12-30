import * as yup from "yup";


const validation = yup.object({
  name: yup.string().required("The Name Is Required"),
  age: yup.number().typeError("Age is Required")
})

export default validation;