import { combineReducers, createStore } from "redux";
import taskReducer from "./TaskSlice/TaskSlice";

const reducer = combineReducers({
  task: taskReducer,
});

const store = createStore(reducer);

export default store;
