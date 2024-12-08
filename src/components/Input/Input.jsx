import { Formik, Form, Field, ErrorMessage } from "formik";
import { object, string } from "yup";

import "./Input.css";

function Input() {
  const initialValues = {
    nameSurname: "",
    passNumber: "",
    email: "",
    zip: "",
    age: "",
    add1: "",
    add2: "",
  };

  const validationSchema = object({
    nameSurname: string()
      .matches(
        /^(?=.{4,20}$)[A-Z][a-z]+ [A-Z][a-z]+$/,
        "Please enter a valid name and surname, starting with uppercase letters and separated by a space. Only alphabetic characters are allowed, and the total length must be between 4 and 20 characters."
      )
      .required("Field is required"),
    passNumber: string()
      .matches(/^\d{9}$/, "Passport number must contain 9 digits.")
      .required("Field is required"),
    email: string()
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Please enter a valid email address in the format 'example@domain.com'."
      )
      .required("Field is required"),
    zip: string()
      .matches(/^\d{4}$/, "ZIP code must contain 4 digits.")
      .requiredc("Field is required"),
    age: string()
      .matches(/^[1-9][0-9]?$|^100$/, "Age must be a number between 1 and 100.")
      .required("Field is required"),
    add1: string().required("Field is required"),
    add2: string(),
  });

  const addUser = (values) => {
    console.log(values);
  };

  return (
    <div>
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={(value) => addUser(value)}
      >
        <Form>
          <Field
            type="text"
            placeholder="Name Surname"
            name="nameSurname"
          ></Field>
          <ErrorMessage component="p" name="nameSurname" />
          <Field
            type="text"
            placeholder="Passport number"
            name="passNumber"
          ></Field>
          <ErrorMessage component="p" name="passNumber" />
          <Field type="text" placeholder="Email" name="email"></Field>
          <ErrorMessage component="p" name="email" />
          <Field type="text" placeholder="Zip code" name="zip"></Field>
          <ErrorMessage component="p" name="zip" />
          <Field type="text" placeholder="Age" name="age"></Field>
          <ErrorMessage component="p" name="age" />
          <Field type="text" placeholder="Address 1" name="add1"></Field>
          <ErrorMessage component="p" name="add1" />
          <Field type="text" placeholder="Address 2" name="add2"></Field>
          <ErrorMessage component="p" name="add2" />
          <button type="submit">Add</button>
        </Form>
      </Formik>
    </div>
  );
}

export default Input;
