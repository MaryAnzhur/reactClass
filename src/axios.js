import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.escuelajs.co/api/v1/products",
});

export const Axios = {
  deleteData(id) {
    return instance.delete(`/${id}`);
  },
  editData(id, price) {
    return instance.put(`/${id}`, { data: price });
  },
};
