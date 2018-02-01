import React, { Component } from 'react';
// import Body from "./Components/Body.js";
// import Footer from "./Components/Footer.js";
import logo from './logo.svg';
import Navbar from "./Components/Navbar.js";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        {/*<Body />*/}
        {/*<Footer />*/}
      </div>
    );
  }
}

export default App;
