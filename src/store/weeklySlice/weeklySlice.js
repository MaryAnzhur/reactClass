import { createSlice } from "@reduxjs/toolkit";
import { fetchWeeklyWeather } from "./api";

const weeklySlice = createSlice({
  name: "week",
  initialState: {
    data: {},
    loading: false,
  },
  reducers: {
    getWeeklyWeather(state, action) {
      return (state = action.payload);
    },
  },
  selectors: {
    getWeeklyWeather: (state) => state,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchWeeklyWeather.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchWeeklyWeather.pending, (state) => {
      state.loading = true;
    });
  },
});

export const weeklyReducer = weeklySlice.reducer;
export const { getWeeklyWeather } = weeklySlice.selectors;
