import Nav from "./Components/Nav/Nav";
import Body from "./Components/Body/Body";
import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [path, setPath] = useState(null);
  const [source, setSource] = useState("");
  const [data, setData] = useState([]);

  // console.log(path);

  // useEffect(() => {
  //     fetch('https://dummyjson.com/comments')
  //       .then((res) => res.json())
  //       .then((data) => console.log(data));
  //   }, []);

  // console.log(path);
  // console.log(source);

  useEffect(() => {
    if (source === "fakestoreapi") {
      if (path !== null) {
        fetch(`https://fakestoreapi.com/${path}`)
          .then((res) => res.json())
          .then((data) => setData(data));
      }
    } else if (source === "dummyjson") {
      if (path !== null) {
        fetch(`https://dummyjson.com/${path}`)
          .then((res) => res.json())
          .then((data) => setData(data[path]));
      }
    } else if (source === "jsonplaceholder") {
      if (path !== null) {
        fetch(`https://jsonplaceholder.typicode.com/${path}`)
          .then((res) => res.json())
          .then((data) => setData(data));
      }
    }
  }, [path]);

  // console.log(data);

  return (
    <div>
      <Nav setPath={setPath} setSource={setSource} />
      <Body data={data} path={path} />
    </div>
  );
}

export default App;
