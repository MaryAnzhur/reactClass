import { useEffect, useState } from "react";
import ROUTES from "../../Routes";
import { Link } from "react-router-dom";

import "./Staff.css";

export const Staff = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((res) => res.json())
      .then((res) => setdata(res.data));
  }, []);
  return (
    <div className="mainStaff">
      {data.map((elm) => {
        return (
          <Link
            to={`/${ROUTES.STAFF}/${elm.first_name}/${elm.id}`}
            key={elm.id}
          >
            <img src={elm.avatar} alt="avatar" />
          </Link>
        );
      })}
    </div>
  );
};
