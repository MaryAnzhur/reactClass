import { useDispatch, useSelector } from "react-redux";
import { ADD, DEL } from "./store/types";

import "./App.css";

function App() {
  const { task } = useSelector((state) => state.task);
  const dispatch = useDispatch();
  const addTask = (e) => {
    e.preventDefault();
    const { input } = e.target;
    dispatch({ type: ADD, payload: input.value });
    input.value = "";
  };

  return (
    <div className="mainApp">
      <form onSubmit={addTask} className="form">
        <input type="text" placeholder="Add task" id="input" />
        <input type="submit" className="submit"/>
      </form>
      {task?.map((elm) => {
        return (
          <div key={elm.id} className="tasks">
            <p className="date">{elm.date}</p>
            <p className="task">{elm.task}</p>
            <button className='deleteBtn' onClick={() => dispatch({ type: DEL, payload: elm.id })}>
              <img
                src="https://icons.veryicon.com/png/o/miscellaneous/mahealth-pro/delete-295.png"
                className="delete"
                alt="delete"
              />
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
