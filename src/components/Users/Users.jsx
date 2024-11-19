import { useEffect, useState } from "react";
import see from "../../Assets/img/eye_op.svg";
import hide from "../../Assets/img/eye-cl.svg";
import a from "../../Assets/img/a_z.svg";
import z from "../../Assets/img/z_a.svg";

import "./Users.css";

function Users() {
  useEffect(() => {
    function getData() {
      fetch("https://673b986796b8dcd5f3f6e23a.mockapi.io/dataForReact")
        .then((res) => res.json())
        .then((res) => setUser(res));
    }
    getData();
  }, []);

  const [user, setUser] = useState([]);
  const [password, setPassword] = useState(true);
  const [id, setId] = useState(true);
  const [name, setName] = useState(true);
  const [age, setAge] = useState(true);
  const [date, setDate] = useState(true);
  const [button, setButton] = useState(user);

  // let idSort = 0;

  const seeHidePass = () => {
    setPassword(!password);
  };

  const sortId = () => {
    setId(!id);
    // if (idSort === 0 || idSort === -1) {

    // }
  };

  const sortName = () => {
    setName(!name);
  };

  const sortAge = () => {
    setAge(!age);
  };

  const sortDate = () => {
    setDate(!date);
  };

  const deleteButton = (userId) => {
    let sorted = button.filter((elm) => elm.id !== userId);
    return setButton(sorted);
  };

  return (
    <div className="mainDivUsers">
      <div className="heading">
        <div className="withImg">
          <p>ID</p>
          <img src={id ? a : z} alt="a to z icon" onClick={sortId} />
        </div>
        <p>Photo</p>
        <div className="withImg">
          <p>Name</p>
          <img src={name ? a : z} alt="a to z icon" onClick={sortName} />
        </div>
        <div className="withImg">
          <p>Age</p>
          <img src={age ? a : z} alt="a to z icon" onClick={sortAge} />
        </div>
        <div className="withImg">
          <p>Password</p>
          <img
            src={password ? see : hide}
            alt="eye icon"
            onClick={seeHidePass}
          />
        </div>
        <div className="withImg">
          <p>Created Date</p>
          <img src={date ? a : z} alt="a to z icon" onClick={sortDate} />
        </div>
        <p>Delete Button</p>
      </div>
      <div className="userData">
        {button.map((elm, index) => {
          return (
            <div className="userBox" key={index}>
              <p>{elm.id}</p>
              <img src={elm.avatar} alt="city" />
              <p>{elm.name}</p>
              <p>{elm.age}</p>
              <p className="passP">{elm.password}</p>
              <p>{elm.createdAt}</p>
              <button
                className="deleteBtn"
                style={{ backgroundColor: elm.color }}
                onClick={() => deleteButton(elm.id)}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Users;
