import React, { Component } from 'react';
import styles from './Navbar.css';
import Logo from './duck_logo.png';

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
              <li class="active"><a href="#">Home</a></li>
              <li><a href="#">Link</a></li>
              <li><a href="#">Link</a></li>
              <li><p>using p tag</p></li>
            </ul>
            <button class="btn btn-danger navbar-btn pull-left">Button</button>
          </div>
        </nav>

      </div>
    );
  }
}

export default Navbar;
