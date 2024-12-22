import {useReducer, useState } from "react";
import reducer, { initialState } from "./reducer";
import { DEVELOPER, NUMBER, AGE, USER, SINGLE, SHUFFLE } from "./actionTypes";

import "./App.css";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [input, setInput] = useState("");

  function forInput(e) {
    setInput(e.target.value);
  }

  function forButton(type) {
    dispatch({ type: type, payload: input });
    setInput("");
  }

  return (
    <div className="appContainer">
      <div className="mainApp">
        <div>
          <form className="buttons">
            <div className="fieldDiv">
              <p className="fieldP">Enter Username</p>
              <input className="field" id="field" onChange={forInput} value={input}/>
            </div>
            <button
              className="fieldBtn"
              type="button"
              onClick={() => {
                forButton(DEVELOPER);
              }}
            >
              ADD DEVELOPER
            </button>
            <button
              className="fieldBtn"
              type="button"
              onClick={() => {
                forButton(SHUFFLE);
              }}
            >
              SHUFFLE ARRAY
            </button>
            <button
              className="fieldBtn"
              type="button"
              onClick={() => {
                forButton(NUMBER);
              }}
            >
              ADD NUMBER
            </button>
            <button
              className="fieldBtn"
              type="button"
              onClick={() => {
                forButton(SINGLE);
              }}
            >
              REMOVE SINGLE DIGITS
            </button>
            <button
              className="fieldBtn"
              type="button"
              onClick={() => {
                forButton(USER);
              }}
            >
              CHANGE USER
            </button>
            <button
              className="fieldBtn"
              type="button"
              onClick={() => {
                forButton(AGE);
              }}
            >
              ADD AGE
            </button>
          </form>
        </div>
        <div className="output">
          <p>Output</p>
          <p>{JSON.stringify(state)}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
