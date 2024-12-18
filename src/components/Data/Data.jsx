import { useState, useEffect } from "react";
import Modal from "../Modal/Modal";

import "./Data.css";

const Data = () => {
  const [modal, setModal] = useState(false);
  const [delId, setDelId] = useState(null);
  const [comment, setComment] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/comments")
      .then((res) => res.json())
      .then((res) => setComment(res));
  }, [comment]);

  const modalOC = () => {
    setModal(!modal);
  };

  const deleteComment = () => {
    fetch(`http://localhost:3001/comments/${delId}`, { method: "DELETE" });
    modalOC();
    setDelId(null);
  };

  return (
    <div className="data">
      {comment.map((item, index) => {
        return (
          <div key={index} className="comment">
            <p>{item.body}</p>
            <button
              onClick={() => {
                modalOC();
                setDelId(item.id);
              }}
              className="x"
            >
              X
            </button>
          </div>
        );
      })}
      {modal ? (
        <Modal
          comment={"Are you sure to delete comment?"}
          btn1={"Yes"}
          btn2={"No"}
          btn1C={deleteComment}
          btn2C={modalOC}
        />
      ) : null}
    </div>
  );
};

export default Data;
