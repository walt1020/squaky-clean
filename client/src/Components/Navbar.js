import React, { Component } from 'react';
// import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar-1">
        
        <nav class="navbar navbar-inverse">
          <div class="container-fluid">
            <div class="navbar-header">
              <a class="navbar-brand" href="#">Squeaky Clean <span className="glyphicon glyphicon-qrcode"></span>  </a>
            </div>
            <ul class="nav navbar-nav">
              <li class="active"><a href="#">Home</a></li>
              <li><a href="#">Link</a></li>
              <li><a href="#">Link</a></li>
            </ul>
            <button class="btn btn-danger navbar-btn pull-left">Button</button>
          </div>
        </nav>

      </div>
    );
  }
}

export default Navbar;
