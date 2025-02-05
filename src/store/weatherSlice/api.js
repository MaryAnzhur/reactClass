import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTodaysWeather = createAsyncThunk(
  "weather/fetchTodaysWeather",
  async (city) => {
    const result = await axios(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ba8608127335c6068af01ea8e811dad7`
    );

    return result.data;
  }
);


