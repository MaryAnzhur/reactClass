import Button from "../Button/Button";
import VisibilityIcon from '@mui/icons-material/Visibility';

import "./Users.css";

function Users({ user, setUser }) {
  const deleteUser = (id) => {
    let newUsers = user.filter((elm) => {
      return elm.id !== id;
    });
    console.log(newUsers);

    setUser(newUsers);
  };

  return (
    <div className="mainUsers">
      <div className="userTitle">
        <div className="userData">
          <p className="userP">Login</p>
          <img src="" alt="" />
        </div>
        <div className="userData">
          <p className="userP">Password</p>
          <img src={VisibilityIcon} alt="" />
        </div>
      </div>
      {user.map((elm) => (
        <div className="userBox" key={elm.id}>
          <p className="userData">{elm.login}</p>
          <p className="userData">{elm.password}</p>
          <Button onDelete={() => deleteUser(elm.id)} />
        </div>
      ))}
    </div>
  );
}

export default Users;
