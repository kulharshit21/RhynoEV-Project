import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from './logo.jpg'; // Path relative to the Header.js file

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="RhynoEv Logo" className="logo" />
      <div className="company-name">Welcome to RhynoEv</div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li className="dropdown">
            <Link to="#">Products</Link>
            <div className="dropdown-content">
              <Link to="/product/se03-lite">Rhyno SE03 Lite</Link>
              <Link to="/product/se03">Rhyno SE03</Link>
              <Link to="/product/se03-max">Rhyno SE03 Max</Link>
              <Link to="/compare-all">Compare All</Link>
            </div>
          </li>
          <li><Link to="/pre-book">Pre-Book</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/rentals">Rentals</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
