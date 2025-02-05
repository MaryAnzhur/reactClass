import TodaysWeather from "./components/TodaysWeather/TodaysWeather";
import WeeklyWeather from "./components/WeeklyWeather/WeeklyWeather";
import { useState } from "react";

import "./App.css";

function App() {
  const [input, setInput] = useState("Yerevan");
  const [celsius, setCelsius] = useState(true);

  return (
    <div className="mainApp">
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          setInput(e.target[0].value);
          e.target.reset();
        }}
      >
        <input placeholder="Write city" className="city"/>
        <input type="submit" className="submit"/>
      </form>
      <div className="buttons">
        <button className="button left" onClick={() => setCelsius(true)}>°C</button>
        <button className="button right" onClick={() => setCelsius(false)}>°F</button>
      </div>
      <TodaysWeather city={input} celsius={celsius} />
      <WeeklyWeather city={input} celsius={celsius} />
    </div>
  );
}

export default App;
