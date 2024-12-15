import { ErrorMessage, Field, Form, Formik } from "formik";
import { object, string } from "yup";

import "./UserForm.css";
import { nanoid } from "nanoid";

const UserForm = () => {
  const initalValue = { comment: "" };

  const valudationScema = object({
    comment: string().max(50, "*Comment must be 50 characters or less."),
  });

  const addComment = (e) => {
    fetch("http://localhost:3001/comments", {
      method: "POST",
      body: JSON.stringify({
        id: nanoid(4),
        body: e.comment,
      }),
    });
    e.comment = "";
  };

  return (
    <div className="mainUserForm">
      <Formik
        initialValues={initalValue}
        validationSchema={valudationScema}
        onSubmit={(e) => addComment(e)}
      >
        <Form>
          <Field type="text" name="comment" placeholder="Write your comment" className='field'/>
          <ErrorMessage name="comment" component='p' className="error"></ErrorMessage>
          <button className="button">Add</button>
        </Form>
      </Formik>
    </div>
  );
};

export default UserForm;
