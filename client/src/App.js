import React, { Component } from 'react';
import Body from "./Components/Body.js";
import Footer from "./Components/Footer/Footer.js";
import logo from './logo.svg';
import Navbar from "./Components/Nav/Navbar.js";
import styles from './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Navbar />
        </div>

        <hr />

        <div>
         <Body />
        </div>

        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
