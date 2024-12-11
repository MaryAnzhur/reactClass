import { useEffect, useState } from "react";

import "./Data.css";

const Data = () => {
  const [comment, setComment] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001")
      .then((res) => res.json())
      .then((res) => setComment(res));
  }, []);

  return (
    <div className="data">
      {comment.map((item, index) => {
        return <p key={index}>{item.body}</p>;
      })}
    </div>
  );
};

export default Data;
