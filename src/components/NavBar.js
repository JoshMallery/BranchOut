import React from 'react';
import '../CSS/NavBar.css';
import { NavLink, Link } from 'react-router-dom';


const NavBar = () => {
  return (
    <div className='nav-bar'>
    <Link to="/">
      <img className="logo" alt="Branchout Logo" src={require('../images/official-logo.png')}/>
    </Link>
      <div className="navBar-link">
        <NavLink className="nav-btn" exact to="/">
          Home
         </NavLink>
         <NavLink className="nav-btn" to="/form">
           Add New Course
          </NavLink>
      </div>
    </div>
  )
}
export default NavBar;
