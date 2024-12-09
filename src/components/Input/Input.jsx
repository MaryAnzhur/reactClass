import { Formik, Form, Field, ErrorMessage } from "formik";
import { object, string } from "yup";
import UserInfo from "../UserInfo/UserInfo";
import { useState } from "react";
import { nanoid } from "nanoid";

import "./Input.css";

function Input() {
  const [data, setData] = useState([]);

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
      .required("Field is required"),
    age: string()
      .matches(/^[1-9][0-9]?$|^100$/, "Age must be a number between 1 and 100.")
      .required("Field is required"),
    add1: string().required("Field is required"),
    add2: string(),
  });

  const addUser = (values, formik) => {
    const added = {
      userId: nanoid(5),
      nameSurname: values.nameSurname,
      passNumber: values.passNumber,
      email: values.email,
      zip: values.zip,
      age: values.age,
      add1: values.add1,
      add2: values.add2,
    };
    setData([...data, added]);
    formik.resetForm();
    return data;
  };

  return (
    <div className="mainInput">
      <div className="input">
        <Formik
          validationSchema={validationSchema}
          initialValues={initialValues}
          onSubmit={(value, formik) => addUser(value, formik)}
        >
          <Form>
            <Field
              type="text"
              placeholder="Name Surname"
              name="nameSurname"
              className="field"
            ></Field>
            <ErrorMessage component="p" name="nameSurname" className="error e1"/>
            <Field
              type="text"
              placeholder="Passport number"
              name="passNumber"
              className="field"
            ></Field>
            <ErrorMessage component="p" name="passNumber" className="error e2"/>
            <Field
              type="text"
              placeholder="Email"
              name="email"
              className="field"
            ></Field>
            <ErrorMessage component="p" name="email" className="error e3"/>
            <Field
              type="text"
              placeholder="Zip code"
              name="zip"
              className="field"
            ></Field>
            <ErrorMessage component="p" name="zip" className="error e4"/>
            <Field
              type="text"
              placeholder="Age"
              name="age"
              className="field"
            ></Field>
            <ErrorMessage component="p" name="age" className="error e5"/>
            <Field
              type="text"
              placeholder="Address 1"
              name="add1"
              className="field"
            ></Field>
            <ErrorMessage component="p" name="add1"/>
            <Field
              type="text"
              placeholder="Address 2"
              name="add2"
              className="field"
            ></Field>
            <ErrorMessage component="p" name="add2"/>
            <button type="submit" className="button">Add</button>
          </Form>
        </Formik>
      </div>
      <div>
        {data.map((elm, i) => {
          return <UserInfo key={i} user={elm} />;
        })}
      </div>
    </div>
  );
}

export default Input;
