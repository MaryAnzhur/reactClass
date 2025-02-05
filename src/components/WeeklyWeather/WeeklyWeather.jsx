import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchWeeklyWeather } from "../../store/weeklySlice/api";
import { getWeeklyWeather } from "../../store/weeklySlice/weeklySlice";

import './WeeklyWeather.css'

const WeeklyWeather = ({ city, celsius }) => {
  const dispatch = useDispatch();
  const { data } = useSelector(getWeeklyWeather);
  useEffect(() => {
    dispatch(fetchWeeklyWeather(city));
  }, [city]);

  const kelvinToCelsius = (num) => {
    return num - 273.15;
  };

  const kelvinToFar = (num) => {
    return ((num - 273.15) * 9) / 5 + 32;
  };

  return (
    <div className="mainWeek">
      {data.cod === "200" ? (
        data.list.map((elm, i) =>
          (i + 1) % 8 === 0 ? (
            <div key={i} className="weekDiv">
              {celsius ? (
                <h3>{Math.trunc(kelvinToCelsius(elm.main.temp || 0))} °C</h3>
              ) : (
                <h3>{Math.trunc(kelvinToFar(elm.main.temp) || 0)} °F</h3>
              )}
              <p>{elm.weather[0].main}</p>
            </div>
          ) : null
        )
      ) : (
        <p>Data is missing</p>
      )}
    </div>
  );
};

export default WeeklyWeather;
