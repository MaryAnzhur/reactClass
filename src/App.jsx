import { useState } from "react";
import Nav from "./components/Nav/Nav";
import Today from "./components/Today/Today";
import Hour from "./components/Hour/Hour";
import Week from "./components/Week/Week";

import "./App.css";

function App() {
  const [city, setCity] = useState("Yerevan");
  const [temp, setTemp] = useState("C");

  function value(e) {
    e.preventDefault();
    const { city } = e.target;
    const cityValue = city.value;
    setCity(cityValue);
    e.target.reset();
  }
  return (
    <div className="mainApp">
      <Nav value={value} setTemp={setTemp} />
      <div className="body1">
        <Today city={city} temp={temp} />
        <Hour city={city} temp={temp} />
      </div>
      <Week city={city} temp={temp}/>
    </div>
  );
}

export default App;
