import { useState } from "react";
import Nav from "./components/Nav/Nav";
import Body from "./components/Body/Body";

import "./App.css";

function App() {
  const [inputData, setInputData] = useState([]);
  const drawInput = (e) => {
    e.preventDefault();
    const formData = e.target;
    const { name, sname, login, password } = formData;
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
    formData.reset();
  };

  const seenBox = (id) => {
    const passArr = inputData.map((elm) => {
      if (elm.id === id) {
        elm.seen = !elm.seen;
      } else {
        elm.seen = false;
      }
      return elm;
    });
    setInputData(passArr);
  };

  const doneBox = (id) => {
    const seenArr = inputData.map((elm) => {
      if (elm.id === id) {
        elm.done = !elm.done;
      }
      return elm;
    });
    setInputData(seenArr);
  };

  // const doneBox = (id) => {
  //   const checkedArray = inputData.map((elm) => {
  //     if (elm.id === id) {
  //       elm.done = !check;
  //       console.log(elm.done);
  //     } else {
  //       elm.done = check;
  //     }
  //     return elm;
  //   });
  //   // setCheck(checkedArray);
  //   setInputData(checkedArray);
  //   console.log(inputData);
  // };

  const deleteBox = (id) => {
    const deletedItem = inputData.filter((elm) => elm.id !== id);
    setInputData(deletedItem);
  };

  return (
    <div>
      <Nav drawInput={drawInput} />
      <Body
        inputData={inputData}
        deleteBox={deleteBox}
        doneBox={doneBox}
        seenBox={seenBox}
      />
    </div>
  );
}

export default App;
