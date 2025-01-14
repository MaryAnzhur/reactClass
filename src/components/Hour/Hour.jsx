import useAxiosLarge from "../../hook/useAxiosLarge/useAxiosLarge";
import icons from "../../constants/Icons";

import "./Hour.css";

const Hour = ({ city, temp }) => {
  const { dataL } = useAxiosLarge({ city: city });
  const count = [0, 1, 2, 3, 4, 5];
  const kelvinToCelsius = (num) => {
    return num - 273.15;
  };
  const kelvinToFar = (num) => {
    return ((num - 273.15) * 9) / 5 + 32;
  };
  return (
    <div className="mainHour">
      {count.map((elmC, id) => (
        <div className="eachTemp" key={id}>
          <p>{dataL?.list[elmC].dt_txt}</p>
          {temp === "C" ? (
            <p>{Math.trunc(kelvinToCelsius(dataL?.list[elmC].main.temp))} °C</p>
          ) : (
            <p>{Math.trunc(kelvinToFar(dataL?.list[elmC].main.temp))} °F</p>
          )}
          {icons.map((elm,id) =>
            elm.weather === dataL?.list[elmC].weather[0].main ? (
              <img key={id} src={elm.icon} className="icon" alt="weatherIcon"/>
            ) : null
          )}
        </div>
      ))}
    </div>
  );
};

export default Hour;
