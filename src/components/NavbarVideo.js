import React from 'react';
import { Link } from 'react-router-dom';

const navbar = () => {
  return (
    <nav className="nav-style">
      <ul>
        <li>Play</li>
        <li>Pause</li>
        <li>Forward</li>
        <li>Backward</li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/video'>Videos</Link></li>
      </ul>
    </nav>
  )
}

export default navbar;