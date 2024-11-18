import { useEffect, useState } from "react";

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

  let title = ['ID', 'Name']

  return (
    <div>
      {user.map((elm, index) => {
        return <p key={index}>{elm.name}</p>;
      })}
    </div>
  );
}

export default Users;
