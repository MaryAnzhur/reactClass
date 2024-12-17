import { Formik, Form, Field, ErrorMessage } from "formik";
import { object, string } from "yup";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../Routes";

import "./SignIn.css";

const SignIn = () => {
  const [user, setUser] = useState([]);
  const [exist, setExist] = useState(false);
  
  const InitialValues = { userName: "", pass: "" };

  const validationSchema = object({
    userName: string(),
    pass: string(),
  });

  const navigate = useNavigate();

  const checkUserName = (e) => {
    axios("http://localhost:3001/users").then((res) => setUser(res.data));
    user.map((item) => {
      if (item.username === e.userName && item.password === e.pass) {
         navigate(`/${ROUTES.USERS}/${item.id}`);
      } else{
        setExist(true)
      }
    });
  };

  return (
    <div className="mainSignIn">
      <p className={exist?'visible':'exist'}>User does not exist, please register</p>
      <Formik
        initialValues={InitialValues}
        validationSchema={validationSchema}
        onSubmit={(e) => checkUserName(e)}
      >
        <Form className="form">
          <Field
            placeholder="Username"
            name="userName"
            className="field"
          ></Field>
          <ErrorMessage component="p" name="userName"></ErrorMessage>
          <Field
            placeholder="Password"
            name="pass"
            type="password"
            className="field"
          ></Field>
          <ErrorMessage component="p" name="pass"></ErrorMessage>
          <button type="submit" className="btn">
            Log in
          </button>
        </Form>
      </Formik>
      <div className="divSign">
        <p>Don't have an account?</p>
        <button className="btn" onClick={()=>navigate(`${ROUTES.REGISTRATION}`)}>Sign up</button>
      </div>
    </div>
  );
};

export default SignIn;
