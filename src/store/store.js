import { configureStore } from "@reduxjs/toolkit";
import { weatherReducer } from "./weatherSlice/weatherSlice";
import { weeklyReducer } from "./weeklySlice/weeklySlice";

const store = configureStore({
  reducer: { weather: weatherReducer, week : weeklyReducer },
});

export default store;
