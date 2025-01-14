import useAxios from "../../hook/useAxios/useAxios";
import icons from "../../constants/Icons";

import "./Today.css";

function Today({ city, temp }) {
  const { data } = useAxios({ city: city });
  const kelvinToCelsius = (num) => {
    return num - 273.15;
  };
  const kelvinToFar = (num) => {
    return ((num - 273.15) * 9) / 5 + 32;
  };
  return (
    <div className="mainToday">
      <p className="city">{data?.name}</p>
      {temp === "C" ? (
        <p>{Math.trunc(kelvinToCelsius(data?.main.temp))} °C</p>
      ) : (
        <p>{Math.trunc(kelvinToFar(data?.main.temp))} °F</p>
      )}
      {icons.map((elm,id) =>
        elm.weather === data?.weather[0].main ? <img key={id} className="weatherIcon" src={elm.icon} alt="weatherIcon"/> : null
      )}
      <p>{data?.weather[0].main}</p>
    </div>
  );
}

export default Today;
