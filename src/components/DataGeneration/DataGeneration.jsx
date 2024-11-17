import { useState } from "react";
import users from "../../constants/data";

import "./DataGeneration.css";

function DataGeneration() {
  const [info, setInfo] = useState(false);
  const [filter, setFilter] = useState(users);

  const openClose = (userId) => {
    filter.filter((elm) => {
      return elm.id !== userId ? setInfo(!info) : null;
    });
  };

  const removeUser = (userId) => {
    const filteredArr = filter.filter((elm) => elm.id !== userId);
    setFilter(filteredArr);
  };

  return (
    <div className="mainData">
      {filter.map((elm, index) => (
        <div className="mainBoxes" key={index}>
          <h3 onClick={() => removeUser(elm.id)}>&times;</h3>
          <h2>{elm.name}</h2>
          <h4>#{elm.username}</h4>
          <button className="contactBtn" onClick={() => openClose(elm.id)}>
            Contact me
          </button>
          <div className={info ? "infoDiv" : "invisible"}>
            <p>Email: {elm.email}</p>
            <p>Phone: {elm.phone}</p>
            <p>Webpage: {elm.website}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DataGeneration;
