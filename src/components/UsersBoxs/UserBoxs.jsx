import { useState } from "react";
import users from "../../constants/data";

import "./UserBoxs.css";

function UserBoxs({ id, name, username, email, phone, website }) {
  const [info, setInfo] = useState(false);
  const [filter, setFilter] = useState(users);

  const openClose = () => {
    setInfo(!info);
  };

  const filterData = (userId) => {
    let filteredArr = filter.filter((elm) => {
      return elm.id !== userId;
    });
    setFilter([...filteredArr]);

    // <DataGeneration
    // data = {filteredArr}
    // />
    // console.log(filteredArr);
    // console.log(filter);
  };

  return (
    <div className="mainBoxes">
      <h3 onClick={() => filterData(id)
        
      }>&times;</h3>
      <h2>{name}</h2>
      <h4>#{username}</h4>
      <button className="contactBtn" onClick={openClose}>
        Contact me
      </button>
      <div className={info ? "infoDiv" : "invisible"}>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
        <p>Webpage: {website}</p>
      </div>
    </div>
  );
}

export default UserBoxs;
