import "./Nav.css";

function Nav({ drawInput }) {
  return (
    <div className="mainNav">
      <form action="" className="form" onSubmit={drawInput}>
        <input
          id="name"
          required
          className="inputArea"
          type="text"
          placeholder="Name"
        />
        <input
          id="sname"
          required
          className="inputArea"
          type="text"
          placeholder="Surname"
        />
        <input
          id="login"
          required
          className="inputArea"
          type="text"
          placeholder="Login"
        />
        <input
          id="password"
          required
          className="inputArea"
          type="password"
          placeholder="Password"
        />
        <input className="inputArea inputBtn" type="submit" />
      </form>
    </div>
  );
}

export default Nav;
