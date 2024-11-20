import { useEffect, useState } from "react";
import see from "../../Assets/img/eye_op.svg";
import hide from "../../Assets/img/eye-cl.svg";
import a from "../../Assets/img/a_z.svg";
import z from "../../Assets/img/z_a.svg";
import num1 from "../../Assets/img/1_9.svg";
import num9 from "../../Assets/img/9_1.svg";

import "./Users.css";

function Users() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    function getData() {
      fetch("https://673b986796b8dcd5f3f6e23a.mockapi.io/dataForReact")
        .then((res) => res.json())
        .then((res) => setUser(res));
    }
    getData();
  }, []);

  // console.log(user);

  const [id, setId] = useState(true);
  const [name, setName] = useState(true);
  const [age, setAge] = useState(true);
  const [date, setDate] = useState(true);
  const [password, setPassword] = useState({});

  const seeHidePass = (userId) => {
    setPassword({
      [userId]: !password[userId],
    });

    // let updatedArr = [];
    // if (password === 0) {
    //   updatedArr = user.map((item) => ({
    //     ...item,
    //     isOpen: item.id === userId,
    //   }));
    //   setPassword(1);
    // } else {
    //   updatedArr = user.map((item) => ({
    //     ...item,
    //     isOpen: false,
    //   }));
    //   setPassword(0);
    // }
    // setUser(updatedArr);
  };

  const sortId = () => {
    let sortedById = [];
    if (id === true) {
      sortedById = user.toSorted((a, b) => {
        return a.id - b.id;
      });
      setId(!id);
    } else if (id === false) {
      sortedById = user.toSorted((a, b) => {
        return b.id - a.id;
      });
      setId(!id);
    }
    setUser(sortedById);
  };

  const sortName = () => {
    let sortedByName = [];
    if (name === true) {
      sortedByName = user.toSorted((a, b) => {
        return a.name.localeCompare(b.name);
      });
      setName(!name);
    } else if (name === false) {
      sortedByName = user.toSorted((a, b) => {
        return b.name.localeCompare(a.name);
      });
      setName(!name);
    }
    setUser(sortedByName);
  };

  const sortAge = () => {
    let sortedByAge = [];
    if (age === true) {
      sortedByAge = user.toSorted((a, b) => {
        return a.age - b.age;
      });
      setAge(!age);
    } else if (age === false) {
      sortedByAge = user.toSorted((a, b) => {
        return b.age - a.age;
      });
      setAge(!age);
    }
    setUser(sortedByAge);
  };

  const sortDate = () => {
    let sortedByDate = [];
    if (date === true) {
      sortedByDate = user.toSorted((a, b) => {
        return (
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );
      });
      setDate(!date);
    } else if (date === false) {
      sortedByDate = user.toSorted((a, b) => {
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      });
      setDate(!date);
    }
    setUser(sortedByDate);
  };

  const deleteButton = (userId) => {
    let sorted = user.filter((elm) => elm.id !== userId);
    return setUser(sorted);
  };

  return (
    <div className="mainDivUsers">
      <div className="heading">
        <div className="withImg">
          <p>ID</p>
          <img src={id ? num1 : num9} alt="a to z icon" onClick={sortId} />
        </div>
        <p>Photo</p>
        <div className="withImg">
          <p>Name</p>
          <img src={name ? a : z} alt="a to z icon" onClick={sortName} />
        </div>
        <div className="withImg">
          <p>Age</p>
          <img src={age ? num1 : num9} alt="a to z icon" onClick={sortAge} />
        </div>
        <p>Password</p>
        <div className="withImg">
          <p>Created Date</p>
          <img src={date ? num1 : num9} alt="a to z icon" onClick={sortDate} />
        </div>
        <p>Delete Button</p>
      </div>
      <div className="userData">
        {user.map((elm, index) => {
          return (
            <div className="userBox" key={index}>
              <p>{elm.id}</p>
              <img src={elm.avatar} alt="city" />
              <p>{elm.name}</p>
              <p>{elm.age}</p>
              <div className="withImg">
                <p>{!password[elm.id] ? "**************" : elm.password}</p>
                <img
                  src={!password[elm.id] ? see : hide}
                  alt="eye icon"
                  onClick={() => seeHidePass(elm.id)}
                />
              </div>
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
