import { ADD, DELETE, EDIT, FILTER, RESET } from "../types/productTypes";

const addProduct = (payload) => ({
  type: ADD,
  payload,
});

const editProduct = (payload) => ({
  type: EDIT,
  payload,
});

const deleteProduct = (payload) => ({
  type: DELETE,
  payload,
});

const resetProduct = (payload) =>({
  type: RESET,
  payload,
})

export { addProduct, editProduct, deleteProduct, resetProduct };
