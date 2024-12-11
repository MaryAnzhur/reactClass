import { Field, Form, Formik } from "formik";
import { object, string } from "yup";

import "./UserForm.css";

const UserForm = () => {
  const initalValue = { comment: "" };

  const valudationScema = object({
    comment: string().max(50, "Comment must be 50 characters or less."),
  });

  return (
    <div>
      <Formik initialValues={initalValue} validationSchema={valudationScema}>
        <Form>
          <Field type="text" name="comment" placeholder="Write your comment" />
        </Form>
      </Formik>
    </div>
  );
};

export default UserForm;
