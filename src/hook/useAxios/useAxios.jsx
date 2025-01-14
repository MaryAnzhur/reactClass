import axios from "axios";
import { useEffect, useState } from "react";

export default function useAxios({ city }) {
  const [data, setData] = useState();
  useEffect(() => {
    axios(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ba8608127335c6068af01ea8e811dad7`
    ).then((res) => setData(res.data));
  }, [city]);
  return { data };
}