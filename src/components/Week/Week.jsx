import useAxiosLarge from "../../hook/useAxiosLarge/useAxiosLarge";
import icons from "../../constants/Icons";
import { useEffect, useState } from "react";

import "./Week.css";

const Week = ({ city, temp }) => {
  const [date, setDate] = useState([]);

  const { dataL } = useAxiosLarge({ city: city });
  const today = new Date().getDate();

  const filtered = dataL?.list.filter((elm) => {
    return Number(elm.dt_txt.split(" ")[0].split("-")[2]) !== today;
  });

  const uniqueArray = filtered?.filter((item, index, self) => {
    return (
      self.findIndex(
        (t) =>
          t.dt_txt.split(" ")[0].split("-")[2] ===
          item.dt_txt.split(" ")[0].split("-")[2]
      ) === index
    );
  });

  console.log(uniqueArray);
  // const seperateDate = filtered.filter((elm)=>{return elm.dt_txt.split(" ")[0].split("-")[2]!== date.dt_txt.split(" ")[0].split("-")[2]})
  // setDate(...date, seperateDate)
  // console.log(date);

  // useEffect(() => {
  //   const count = [1, 2, 3, 4, 5];

  //   });
  //   setDate(computedDates);
  // }, [dataL, date];

  // const weekDate = () => {
  //   const today = new Date();
  //   count.map((elmC) => {
  //     const otherDay = new Date(today);
  //     otherDay.setDate(today.getDate() + elmC);

  //     const neededDay = String(otherDay.getDate()).padStart(2, "0");

  //     const firstMatch = dataL?.list.find(
  //       (elm) => elm.dt_txt.split(" ")[0].split("-")[2] === neededDay
  //     );
  //     setDate(firstMatch);
  //   });
  // };
  // weekDate();
  const kelvinToCelsius = (num) => {
    return num - 273.15;
  };
  const kelvinToFar = (num) => {
    return ((num - 273.15) * 9) / 5 + 32;
  };

  return (
    <div className="mainWeek">
      {uniqueArray?.map((elm, id) => (
        <div className="eachDay" key={id}>
          <p className="date">{elm.dt_txt.split(" ")[0].slice(5)}</p>
          <div className="tempWeek">
            {temp === "C" ? (
              <p className="temperature">
                {Math.trunc(kelvinToCelsius(elm.main.temp))} °C
              </p>
            ) : (
              <p className="temperature">
                {Math.trunc(kelvinToFar(elm.main.temp))} °F
              </p>
            )}
            {icons.map((elmI, id) =>
              elmI.weather === elm.weather[0].main ? (
                <img
                  key={id}
                  src={elmI.icon}
                  className="icon"
                  alt="weatherIcon"
                />
              ) : null
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Week;
