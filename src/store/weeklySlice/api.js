import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchWeeklyWeather = createAsyncThunk(
    "week/fetchWeeklysWeather",
    async (city) => {
      const result = await axios(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=ba8608127335c6068af01ea8e811dad7`
      );
      return result.data;
    }
  );