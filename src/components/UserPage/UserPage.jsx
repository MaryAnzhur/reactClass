import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import ROUTES from "../../Routes";

import "./UserPage.css";

const UserPage = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    axios("http://localhost:3001/users").then((res) => setData(res.data));
  }, []);

  const user = data.find((item) => item.id === id);

  return (
    <div className="mainCard">
      <img src={user?.image} alt="" />
      <div className="firstData">
        <p>
          {user?.firstName} {user?.lastName} {user?.maidenname}
        </p>
        <p>Age: {user?.age}</p>
        <p>Gender: {user?.gender}</p>
        <p>{user?.email}</p>
        <p>{user?.phone}</p>
        <p>{moment(user?.birthdate).format("MMMM D, YYYY")}</p>
      </div>
      <button className="back">
        <Link to={ROUTES.LOGIN}>Back</Link>
      </button>
    </div>
  );
};

export default UserPage;
