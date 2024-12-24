import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);

  const [startTime, setStartTime] = useState(false);

  useEffect(() => {
    let intervalSec;
    if (startTime) {
      intervalSec = setInterval(() => {
        setSec((prevState) => {
          if (prevState === 59) {
            setMin((prevMin) => prevMin + 1);
            return 0;
          } else {
            return prevState + 1;
          }
        });
      }, 1000);
    }
    return () => clearInterval(intervalSec);
  }, [startTime]);

  const start = () => {
    setStartTime(true);
  };
  const stop = () => {
    setStartTime(false);
  };
  const reset = () => {
    setStartTime(false);
    setSec(0);
    setMin(0);
  };

  return (
    <div className="mainApp">
      <div className="numbers">
        {min < 10 ? `0${min}` : min}:{sec < 10 ? `0${sec}` : sec}
      </div>
      <div className="buttons">
        <button className="button" onClick={start}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="80px"
            viewBox="0 -960 960 960"
            width="80px"
            fill="#e8eaed"
          >
            <path d="m380-300 280-180-280-180v360ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
          </svg>
        </button>
        <button className="button" onClick={stop}>
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="80px"
            viewBox="0 -960 960 960"
            width="80px"
            fill="#e8eaed"
          >
            <path d="M360-320h80v-320h-80v320Zm160 0h80v-320h-80v320ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
          </svg>{" "}
        </button>
        <button className="button" onClick={reset}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="80px"
            viewBox="0 -960 960 960"
            width="80px"
            fill="#e8eaed"
          >
            <path d="M320-320h320v-320H320v320ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default App;
