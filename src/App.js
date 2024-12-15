import Data from "./components/Data/Data";
import UserForm from "./components/UserForm/UserForm";
import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [comment, setComment] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/comments")
      .then((res) => res.json())
      .then((res) => setComment(res));
  }, [comment]);
  
  return (
    <div className="app">
      <UserForm />
      <Data comment={comment}/>
    </div>
  );
}

export default App;
