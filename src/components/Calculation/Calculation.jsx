import { useState } from "react";

import "./Calculation.css";

function Calculation() {
  const [number, setNumber] = useState(0);
  const add = (num) => {
    switch (num) {
      case "+1":
        setNumber(number + 1);
        break;
      case "-1":
        setNumber(number - 1);
        break;
      case "x2":
        setNumber(number * 2);
        break;
      case "/2":
        setNumber(number / 2);
        break;
    }
  };

  let calculArr = ["+1", "-1", "x2", "/2"];

  return (
    <div className="mainCal">
      <div className="numberArea">
        <p>{number}</p>
      </div>
      <div className="action">
        {calculArr.map((elm, index) => (
          <button key={index} className="calcul" onClick={() => add(elm)}>
            {elm}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Calculation;
