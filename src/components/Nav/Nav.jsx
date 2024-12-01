import { NavLink } from 'react-router-dom'
import ROUTES from '../../Routes'

import './Nav.css'

function Nav () {
    return(
        <ul className='navMain'>
            <li><NavLink className='navItems' to={ROUTES.HOME}>Home</NavLink></li>
            <li><NavLink className='navItems' to={ROUTES.ABOUTUS}>About Us</NavLink></li>
            <li><NavLink className='navItems' to={ROUTES.PRODUCTS}>Products</NavLink></li>
            <li><NavLink className='navItems' to={ROUTES.STAFF}>Staff</NavLink></li>
            <li><NavLink className='navItems' to={ROUTES.CONTACTUS}>Contact us</NavLink></li>
            
        </ul>
    )
}

export default Nav