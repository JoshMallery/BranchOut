import React from 'react';
import '../CSS/NavBar.css';
import { NavLink } from 'react-router-dom';


const NavBar = () => {
  return (
    <div className='nav-bar'>
      <img className="logo" src={require('../images/official-logo.png')}/>
      <div className="navBar-link">
        <NavLink exact to="/">
          Home
         </NavLink>
         <NavLink to="/form">
           Add New Course
          </NavLink>
      </div>
    </div>
  )
}
export default NavBar;
