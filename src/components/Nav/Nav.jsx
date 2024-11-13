import logo from "../../assets/images/logo.png";

import "./Nav.scss";

function Nav() {
  return (
    <div className="container">
      <div className="navMain">
        <div className="logo">
          <img src={logo} alt="" />
          <p>
            <i>The</i>Box
          </p>
        </div>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#" className="orange">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
