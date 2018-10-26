import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <img
          className="logo"
          src={require('./logo.svg')}
          alt="A purple and beautiful letter U"
        />
        <ul className="menu">
          <li className="menu-item">
            <a href="http://www.google.com">Home</a>
          </li>
          <li className="menu-item">
            <a href="http://www.google.com">Process</a>
          </li>
          <li className="menu-item">
            <a href="http://www.google.com">Services</a>
          </li>
          <li className="menu-item">
            <a href="http://www.google.com">Testimonials</a>
          </li>
          <li className="menu-item">
            <a href="http://www.google.com">Contact</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
