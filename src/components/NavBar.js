import React from 'react';
import '../CSS/NavBar.css';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='nav-bar'>
      <img src={require('../images/branchOut-logo.png')}/>
      <div>
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
