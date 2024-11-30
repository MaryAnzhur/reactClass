import { NavLink } from "react-router-dom";
import ROUTES from "../../Routes";

import "./Nav.css";

function Nav() {
  return (
    <div className="mainNav">
      <NavLink to={ROUTES.HOME}>
        <img
          src="https://www.logoai.com/uploads/output/2023/03/09/3e7b3de38aae120166de3f23d2b59173.jpg"
          alt="logo"
        />
      </NavLink>
      <ul>
        <li>
          <NavLink className='navLi' to={ROUTES.HOME}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className='navLi' to={ROUTES.PRODUCTS}>
            Products
          </NavLink>
        </li>
        <li>
          <NavLink className='navLi' to={ROUTES.CONTACT}>
            Contast Us
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
