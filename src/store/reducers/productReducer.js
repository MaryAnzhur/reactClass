import axios from "axios";
import { ADD, DELETE, EDIT, RESET } from "../types/productTypes";
import {
  addProduct,
  deleteProduct,
  editProduct,
} from "../actions/productActions";
import { Axios } from "../../axios";

const initalState = [];

const productReducer = (state = initalState, action) => {
  switch (action.type) {
    case ADD:
      return action.payload;
    case EDIT:
      return state.map((elm) =>
        elm.id == action.payload.id ? { ...elm, price: action.payload.price } : elm
      );
    case DELETE:
      return state.filter((elm) => {
        return elm.id != action.payload;
      });
    case RESET:
      return action.payload;
    default:
      return state;
  }
};

export const getProductsMiddleWare = () => {
  return (dispatch) => {
    axios("https://api.escuelajs.co/api/v1/products").then((res) =>
      dispatch(addProduct(res.data))
    );
  };
};

export const delProductMiddleWare = (id) => {
  return (dispatch) => {
    Axios.deleteData(id).then((res) => {
      dispatch(deleteProduct(res.data));
    });
  };
};

// export const editProductMiddleWare = (id, price) => {
//   return (dispatch) => {
//     Axios.editData(id).then((res) => {
//       dispatch(editProduct((res.data.price = price)));
//     });
//   };
// };

export { productReducer };
