import { useState } from "react";
import Nav from "./Assets/Nav/Nav";
import Users from "./Assets/Users/Users";

import "./App.css";

function App() {
  const [user, setUser] = useState([]);

  const usersData = (e) => {
    e.preventDefault();
    const { username, password } = e.target;
    const userInfo = {
      id: new Date(),
      login: username.value,
      password: password.value,
      seen: false,
    };
    setUser([...user, userInfo]);
    username.value = "";
    password.value = "";
  };

  return (
    <div>
      <Nav userData={usersData} />
      <Users user={user} setUser={setUser} />
    </div>
  );
}

export default App;
