import { useDispatch, useSelector } from "react-redux";
import { getTodaysWeather } from "../../store/weatherSlice/weatherSlice";
import { useEffect } from "react";
import { fetchTodaysWeather } from "../../store/weatherSlice/api";

import './TodaysWeather.css';

const TodaysWeather = ({ city, celsius }) => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector(getTodaysWeather);
  useEffect(() => {
    dispatch(fetchTodaysWeather(city));
  }, [city]);

  const kelvinToCelsius = (num) => {
    return num - 273.15;
  };

  const kelvinToFar = (num) => {
    return ((num - 273.15) * 9) / 5 + 32;
  };
  return (
    <div className="mainToday">
      {loading && <p>Loading ...</p>}
      {data.cod === 200 ? (
        <div className="todayDiv">
          <h1>{data.name}</h1>
          {celsius ? (
            <h2>{Math.trunc(kelvinToCelsius(data.main.temp || 0))} °C</h2>
          ) : (
            <h2>{Math.trunc(kelvinToFar(data.main.temp) || 0)} °F</h2>
          )}
          <p>{data.weather[0].main}</p>
        </div>
      ) : (
        <p>Data is missing</p>
      )}
    </div>
  );
};

export default TodaysWeather;
