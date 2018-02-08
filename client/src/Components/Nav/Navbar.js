import React, { Component } from 'react';
import {Link} from 'react-router-dom';
// import './Navbar.css';
class Navbar extends Component {
  render() {
    return (
      <div className="Navbar-1">
        <nav class="navbar navbar-inverse">
          <div class="container-fluid">
            <div class="navbar-header">
              <a class="navbar-brand" href="#">Squeaky Clean <span> <img src={Logo} /> </span></a>
            </div>
            <ul class="nav navbar-nav">
              <li class="active">
                <Link to="/">Packages</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              <li>
                <Link to="/">Logout</Link>
              </li>

            </ul>
            <button class="btn btn-danger navbar-btn pull-left">Button</button>
          </div>
        </nav>

      </div>
    );
  }
}

export default Navbar;
