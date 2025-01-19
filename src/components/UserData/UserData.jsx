import { useSelector } from "react-redux";
import { userSelectors } from "../../store/selectors/userSelectors";

import "./UserData.css";

const UserData = () => {
  const users = useSelector(userSelectors);
  return (
    <div className="userData">
      {users.map((elm, i) => (
        <div key={i} className="cardDiv">
          <img src={elm.file} alt="UserPhoto" className="photo" />
          <p className="name">{elm.name} {elm.surname}</p>
          <p className="age">age: {elm.age}</p>
        </div>
      ))}
    </div>
  );
};

export default UserData;
