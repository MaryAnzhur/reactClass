import { ADD_USER } from "../types/userTypes";

const initialState = [];

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return [...state, action.payload
        // {name : action.payload.name.value,
        // surname : action.payload.sName.value,
        // age: action.payload.age.value,
        // file: URL.createObjectURL(action.payload.file.files[0])}
      ];
    default:
      return state;
  }
};

export default userReducer