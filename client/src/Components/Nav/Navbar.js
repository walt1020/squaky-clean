import React, { Component } from 'react';
import Logo from './duck_logo.png';
import {Link} from 'react-router-dom';
// import './Navbar.css';
class Navbar extends Component {
  render() {
    return (
      <div className="Navbar-1">
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand"  href="/">Squeaky Clean <span> <img src={Logo} alt="brand logo" /> </span></a>
            </div>
            <ul className="nav navbar-nav">
              <li className="">
                <Link to="/">Packages</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              <li>
                <Link to="/">Logout</Link>
              </li>
              <li>
                <Link to="/buttonPage">Test Packages and Buttons</Link>
              </li>

            </ul>
            <button className="btn btn-danger navbar-btn pull-left">Button</button>
          </div>
        </nav>

      </div>
    );
  }
}

export default Navbar;
