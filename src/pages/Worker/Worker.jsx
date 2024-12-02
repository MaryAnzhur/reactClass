import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ROUTES from "../../Routes";

import "./Worker.css";

export function Worker() {
  const [worker, setWorker] = useState([]);
  const { id, name } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`https://reqres.in/api/users/${id}`)
      .then((res) => res.json())
      .then((res) => setWorker([res.data]));
  }, [id]);

  console.log(worker);

  return (
    <div className="mainWorker">
      <span
        className="material-symbols-outlined left"
        onClick={() =>
          navigate(
            +id === 1
              ? `/${ROUTES.STAFF}/${name}/6`
              : `/${ROUTES.STAFF}/${name}/${+id - 1}`
          )
        }
      >
        arrow_back_ios
      </span>
      {worker.map((elm) => {
        return (
          <div className="worker" key={elm.id}>
            <img src={elm.avatar} alt="avatar" />
            <h2>
              {elm.first_name} {elm.last_name}
            </h2>
            <p>Email: {elm.email}</p>
          </div>
        );
      })}
      <span
        className="material-symbols-outlined right"
        onClick={() =>
          navigate(
            +id === 6
              ? `/${ROUTES.STAFF}/${name}/1`
              : `/${ROUTES.STAFF}/${name}/${+id + 1}`
          )
        }
      >
        arrow_forward_ios
      </span>
    </div>
  );
}
