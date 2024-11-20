import { useState } from "react";
import Nav from "./components/Nav/Nav";
import Body from "./components/Body/Body";

import "./App.css";

function App() {
  const [inputData, setInputData] = useState([]);
  const [check, setCheck] = useState(false);

  const drawInput = (e) => {
    e.preventDefault();
    const { name, sname, login, password } = e.target;
    const data = {
      id: new Date().getTime(),
      name: name.value,
      sname: sname.value,
      login: login.value,
      password: password.value,
      done: false,
      seen: false,
    };
    setInputData([...inputData, data]);
    name.value = "";
    sname.value = "";
    login.value = "";
    password.value = "";
  };

  const doneBox = (id) => {
    const doneItem = inputData.filter((elm) => {
      return elm.id === id;
    });
    setCheck(!doneItem[0].done);
  };

  const deleteBox = (id) => {
    const deletedItem = inputData.filter((elm) => elm.id !== id);
    setInputData(deletedItem);
    console.log(deletedItem);
  };

  return (
    <div>
      <Nav drawInput={drawInput} />
      <Body
        inputData={inputData}
        deleteBox={deleteBox}
        doneBox={doneBox}
        checkbox={check}
      />
    </div>
  );
}

export default App;
