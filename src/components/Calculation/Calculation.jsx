import "./Calculation.css";

function Calculation() {
  return (
    <div>
      <div className="numberArea"></div>
      <div className="action">
        <button className="calcul">+1</button>
        <button className="calcul">-1</button>
        <button className="calcul">x2</button>
        <button className="calcul">/2</button>
      </div>
    </div>
  );
}

export default Calculation;
