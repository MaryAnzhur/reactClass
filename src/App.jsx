import { useState } from "react";
import Calculation from "./components/Calculation/Calculation";

import "./App.css";

function App() {
  const [calcul, setCalcul] = useState(false);
  const showHide = () => {
    setCalcul(!calcul);
  };
  return (
    <div>
      <div className="buttons">
        <button className="btn" onClick={showHide}>
          Calculation
        </button>
        <button className="btn">Data</button>
      </div>
      <div className="forCal">{calcul && <Calculation />}</div>
    </div>
  );
}

export default App;
