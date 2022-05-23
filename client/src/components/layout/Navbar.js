import React from 'react';
import { Link } from 'react-router-dom';

// rubah link nya


const Navbar = () => {
  return (
    // copy dan paste navbar dari remonds-theme disini, dan rubah class menjadi className
    <nav className="navbar bg-dark">
      <h1>
        
      </h1>
      <ul>
        <li><a href="profiles.html">Members</a></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>  
  )
};export default Navbar;