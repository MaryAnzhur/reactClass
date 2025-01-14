import axios from "axios";
import { useEffect, useState } from "react";

export default function useAxiosLarge({ city }) {
  const [dataL, setDataL] = useState();
  useEffect(() => {
    axios(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=ba8608127335c6068af01ea8e811dad7`
    ).then((res) => setDataL(res.data));
  }, [city]);
  return { dataL };
}
