import { useDispatch } from "react-redux";
import { addUser } from "../../store/actions/userActions";
import { collectUsers } from "../../helpers/collectUsers";
import { useState } from "react";

import "./AddUser.css";

const AddUser = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState(false);
  const [sName, setSName] = useState(false);
  const [age, setAge] = useState(false);

  return (
    <div className="addUser">
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addUser(collectUsers(e.target.elements)));
          e.target.reset();
        }}
      >
        <input
          type="text"
          className="text"
          placeholder="Name"
          id="name"
          pattern="^[A-ZÀ-Ö][a-zà-öø-ÿ'-]*$"
          required
          onMouseOver={() => setName(true)}
          onMouseLeave={() => setName(false)}
        />
        {name ? (
          <p className="match name">
            *Name must start with an uppercase letter, contain only lowercase
            letters after.
          </p>
        ) : null}
        <input
          type="text"
          className="text"
          placeholder="Surname"
          id="sName"
          pattern="^[A-ZÀ-Ö][a-zà-öø-ÿ'-]*$"
          required
          onMouseOver={() => setSName(true)}
          onMouseLeave={() => setSName(false)}
        />
        {sName ? (
          <p className=" match sName">
            *Surname must start with an uppercase letter, contain only lowercase
            letters after.
          </p>
        ) : null}
        <input
          type="text"
          className="text"
          placeholder="Age"
          id="age"
          required
          pattern="^(?:[1-9][0-9]?|1[01][0-9]|120)$"
          onMouseOver={() => setAge(true)}
          onMouseLeave={() => setAge(false)}
        />
        {age ? (
          <p className=" match age">
            *Age must be a whole number between 1 and 120.
          </p>
        ) : null}
        <label className="label">
          Choose your best photo 😉
          <input type="file" className="file" id="file" />
        </label>
        <input type="submit" className="submit"/>
      </form>
    </div>
  );
};

export default AddUser;
