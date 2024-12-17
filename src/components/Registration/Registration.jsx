import { Formik, Form, Field, ErrorMessage } from "formik";
import { object, string } from "yup";
import { Link } from "react-router-dom";
import ROUTES from "../../Routes";
import axios from "axios";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";

import "./Registration.css";

const Registration = () => {
  const navigate = useNavigate();

  const initialValues = {
    image: "",
    first: "",
    last: "",
    maid: "",
    age: "",
    gender: "",
    email: "",
    phone: "",
    birthdate: "",
    user: "",
    pass: "",
  };

  const validationSchema = object({
    image: string().required("*required"),
    first: string().required("*required"),
    last: string().required("*required"),
    maid: string(),
    age: string().required("*required"),
    gender: string().required("*required"),
    email: string().required("*required"),
    phone: string().required("*required"),
    birthdate: string().required("*required"),
    user: string().required("*required"),
    pass: string().required("*required"),
  });

  const addUser = (e) => {
    const id = nanoid(3);
    axios({
      baseURL: "http://localhost:3001/users",
      method: "POST",
      data: {
        id:id,
        firstName: e.first,
        lastName: e.last,
        maidenName: e.maid,
        image: e.image,
        age: e.age,
        gender: e.gender,
        email: e.email,
        phone: e.phone,
        birthdate: e.birthdate,
        username: e.user,
        password: e.pass,
      },
    });
    
    navigate(`/${ROUTES.USERS}/${id}`);
  };

  return (
    <div className="mainReg">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(e) => addUser(e)}
      >
        <Form className="form">
          <div className="eachForm">
            <Field className="field" name="user" placeholder="Username" />
            <ErrorMessage name="user" component="p" className="error" />
          </div>
          <div className="eachForm">
            <Field
              className="field"
              name="pass"
              placeholder="Password"
              type="password"
            />
            <ErrorMessage name="pass" component="p" className="error" />
          </div>
          <div className="eachForm">
            <Field className="field" name="first" placeholder="Firstname" />
            <ErrorMessage name="first" component="p" className="error" />
          </div>
          <div className="eachForm">
            <Field className="field" name="last" placeholder="Lastname" />
            <ErrorMessage name="last" component="p" className="error" />
          </div>
          <div className="eachForm">
            <Field className="field" name="maid" placeholder="Maidenname" />
          </div>
          <div className="eachForm">
            <Field className="field" name="image" placeholder="Image url" />
            <ErrorMessage name="image" component="p" className="error" />
          </div>
          <div className="eachForm">
            <Field className="field" name="age" placeholder="Age" />
            <ErrorMessage name="age" component="p" className="error" />
          </div>
          <div className="eachForm">
            <Field className="field" name="gender" placeholder="Gender" />
            <ErrorMessage name="gender" component="p" className="error" />
          </div>
          <div className="eachForm">
            <Field
              className="field"
              name="email"
              placeholder="Email"
              type="email"
            />
            <ErrorMessage name="email" component="p" className="error" />
          </div>
          <div className="eachForm">
            <Field className="field" name="phone" placeholder="Phone number" />
            <ErrorMessage name="phone" component="p" className="error" />
          </div>
          <div className="eachForm">
            <Field
              className="field"
              name="birthdate"
              placeholder="Birthdate (ex. 2000-1-1)"
            />
            <ErrorMessage name="birthdate" component="p" className="error" />
          </div>
          <button type="submit" className="submit">
            Submit
          </button>
        </Form>
      </Formik>
      <button className="back">
        <Link to={ROUTES.LOGIN}>Back</Link>
      </button>
    </div>
  );
};

export default Registration;
