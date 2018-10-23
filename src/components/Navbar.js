import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const navbar = () => {
  return (
    <nav className="nav-style">
      <ul>
        <li>
        	<NavLink exact to="/" activeStyle={{fontWeight: 'bold', color: 'red' }}>Home</NavLink>

        </li>
        <li>
        	<NavLink to="/about" activeStyle={{fontWeight: 'bold', color: 'red' }}>About</NavLink>

        </li>
        <li>
        	<NavLink to="/video" activeStyle={{fontWeight: 'bold', color: 'red' }}>Videos</NavLink>

        </li>
        <li><NavLink to='/projects' activeStyle={{fontWeight: 'bold', color: 'red' }}>Projects</NavLink></li>
      </ul>
    </nav>
  )
}

export default navbar;