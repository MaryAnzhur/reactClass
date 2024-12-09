import "./UserInfo.css";

function UserInfo({user}) {
  return (
    <div className="mainUserInfo">
      <p>{user.nameSurname}</p>
      <p>{user.passNumber}</p>
      <p>{user.email}</p>
      <p>{user.zip}</p>
      <p>{user.age}</p>
      <p>{user.add1}</p>
      <p>{user.add2 ? user.add2 : "empty"}</p>
    </div>
  );
}

export default UserInfo;
