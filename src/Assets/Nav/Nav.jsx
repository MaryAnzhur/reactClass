import "./Nav.css";

function Nav({userData}) {
  return (
    <div className="mainNav">
      <form action="#" className="form" onSubmit={userData}>
        <input type="text" id='username' placeholder="Username" required />
        <input
          type="password"
          id="password"
          placeholder="Password"
          required
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default Nav;
