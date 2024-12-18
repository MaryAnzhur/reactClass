import { useEffect } from "react";
import "./Modal.css";

const Modal = ({ comment, btn1, btn2, btn1C, btn2C }) => {
  useEffect(() => {
    const closeModal = (e) => {
      if (e.target.className === "modalContainer") {
        btn2C();
      }
    };
    window.addEventListener("click", closeModal);
    return () => window.removeEventListener("click", closeModal);
  }, []);

  return (
    <div className="modalContainer">
      <div className="modal">
        <h4>{comment}</h4>
        <div className="buttons">
          <button onClick={btn1C}>{btn1}</button>
          <button onClick={btn2C}>{btn2}</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
