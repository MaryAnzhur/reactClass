import { createSlice } from "@reduxjs/toolkit";
import { fetchTodaysWeather } from "./api";

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    data: {},
    loading: false,
  },
  reducers: {
    getTodaysWeather(state, action) {
      return (state = action.payload);
    },
  },
  selectors: {
    getTodaysWeather: (state) => state,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodaysWeather.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchTodaysWeather.pending, (state) => {
      state.loading = true;
    });
  },
});

export const weatherReducer = weatherSlice.reducer;
export const { getTodaysWeather } = weatherSlice.selectors;
