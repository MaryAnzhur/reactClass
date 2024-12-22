import { DEVELOPER, NUMBER, USER, AGE, SINGLE, SHUFFLE } from "./actionTypes";

export const initialState = {
  developers: [],
  user: { id: 1, name: "Mary" },
  arr: [1, 34, 2],
};

function shuffleArray(array) {
  let shuffled = [...array]; 
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case NUMBER:
      if (isNaN(Number(action.payload))) {
        alert("Please fill number");
      } else {
        return { ...state, arr: [...state.arr, action.payload] };
      }
      break;
    case AGE:
      if (isNaN(Number(action.payload))) {
        alert("Please fill number");
      } else {
        return { ...state, user: { ...state.user, age: action.payload } };
      }
      break;

    case DEVELOPER:
      if (isNaN(Number(action.payload))) {
        return { ...state, developers: [...state.developers, action.payload] };
      } else {
        alert("Please fill name");
      }
      break;

    case USER:
      if (isNaN(Number(action.payload))) {
        return {
          ...state,
          user: { id: state.user.id + 1, name: action.payload },
        };
      } else {
        alert("Please fill name");
      }
      break;

    case SINGLE:
      let newArr = state.arr.filter((elm) => {
        return elm > 9;
      });
      return { ...state, arr: newArr };
    case SHUFFLE:
      return {
        ...state,
        arr: shuffleArray(state.arr), // Shuffle and update the array
      };
    default:
      return state;
  }
}

export default reducer;
