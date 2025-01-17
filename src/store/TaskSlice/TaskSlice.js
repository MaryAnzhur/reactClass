import { ADD, DEL } from "../types";

const initalState = {
  task: [],
};

const taskReducer = (state = initalState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        task: [
          ...state.task,
          {
            id: new Date().getTime(),
            task: action.payload,
            date: new Date().toLocaleDateString(),
            checked: false,
          },
        ],
      };
    case DEL:
      return {
        ...state,
        task: state.task.filter((elm) => elm.id !== action.payload),
      };

    default:
      return state;
  }
};

export default taskReducer;
