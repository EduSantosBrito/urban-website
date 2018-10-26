import React, { Component } from 'react';
import './Header.css';
import Navbar from './Navbar/Navbar';
import HeaderContent from './HeaderContent/HeaderContent';
class Header extends Component {
  render() {
    return (
      <div className="header">
        <Navbar />
        <HeaderContent />
      </div>
    );
  }
}

export default Header;
