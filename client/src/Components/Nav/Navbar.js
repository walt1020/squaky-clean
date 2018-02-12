import React, { Component } from 'react';
import Logo from './duck_logo.png';
import {Link} from 'react-router-dom';
// import './Navbar.css';
class Navbar extends Component {
  render() {
    return (
      <div className="Navbar-1">
        <nav className="navbar navbar-inverse ">
          <div className="container-fluid">
            <div className="navbar-header ">
              <a className="navbar-brand" href="/"> Squeaky Clean <span> <img src={Logo} /> </span> </a>
            </div>
            <ul className="nav navbar-nav">
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" id="drop1" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> Packages 
                  <span className="caret"></span> 
                </a> 
                <ul className="dropdown-menu" aria-labelledby="drop1">
                  <li>
                    <Link to="/packageOverview">Package Overview</Link>
                  </li>
                  <li>
                    <Link to="/package1Details">Squeaky Clean</Link>
                  </li>
                  <li>
                    <Link to="/package2Details">Squeaky Deluxe</Link>
                  </li>
                  <li>
                    <Link to="/package3Details">Squeaky Ultimate</Link>
                  </li>
                </ul> 
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              <li>
                <Link to="/">Logout</Link>
              </li>
              <li>
                <Link to="/">Schedule Service</Link>
              </li>
            </ul>
            
          </div>
        </nav>

      </div>
    );
  }
}

export default Navbar;
