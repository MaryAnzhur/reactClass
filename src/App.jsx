import { useState } from "react";
import Calculation from "./components/Calculation/Calculation";
import DataGeneration from "./components/DataGeneration/DataGeneration";

import "./App.css";

function App() {
  const [calcul, setCalcul] = useState(false);
  const showHide = () => {
    setCalcul(!calcul);
  };
  const [data, setData] = useState(false);
  const showHide2 = () => {
    setData(!data);
  };
  return (
    <div>
      <div className="buttons">
        <button className="btn" onClick={showHide}>
          Calculation
        </button>
        <button className="btn" onClick={showHide2}>
          Data
        </button>
      </div>
      <div className="forCal">{calcul && <Calculation />}</div>
      <div className="forData">{data && <DataGeneration />}</div>
    </div>
  );
}

export default App;
