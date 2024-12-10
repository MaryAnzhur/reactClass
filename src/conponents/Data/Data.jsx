import { useEffect, useState } from "react";

import "./Data.css";

const Data = () => {
  const [comment, setComment] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001")
      .then((res) => res.json())
      .then((res) => setComment(res.comments))
  },[]);

  return <div>
    {comment.map((item)=>{return(
        <p>{item.body}</p>
    )})}
  </div>;
};

export default Data;
