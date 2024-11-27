import ROUTES from '../../pages/Routes'
import { NavLink } from 'react-router-dom';

import "./Nav.css";


function Nav() {
  return (
    <ul>
      <li>
        <NavLink to={ROUTES.Group1} className='links'>Group 1</NavLink>
      </li>
      <li>
        <NavLink to={ROUTES.Group2} className='links'>Group 2</NavLink>
      </li>
      <li>
        <NavLink to={ROUTES.Group3}  className='links'>Group 3</NavLink>
      </li>
    </ul>
  );
}

export default Nav;
