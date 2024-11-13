import "./BoxSec1.scss";

function BoxSec1({ src, title, text }) {
  return (
    <div className="box">
      <img src={src} alt="icon" />
      <p className="title">{title}</p>
      <p className="text">{text}</p>
    </div>
  );
}

export default BoxSec1;
