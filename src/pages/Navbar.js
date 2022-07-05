import React from 'react';
import '../Styles/Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <h1>Math Magicians</h1>
    <ul>
      <li><NavLink to="/">Home</NavLink></li>
      <div className="vertical-line" />
      <li><NavLink to="/calculator">Calculator</NavLink></li>
      <div className="vertical-line" />
      <li><NavLink to="/quotes">Quotes</NavLink></li>
    </ul>
  </nav>
);
export default Navbar;
