import { ADD_USER } from "../types/userTypes";

export const addUser = (payload) => ({
  type: ADD_USER,
  payload,
});
