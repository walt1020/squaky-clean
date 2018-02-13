import React, { Component } from 'react';
import Package1 from "./package1.js"
import Package2 from "./package2.js"
import Package3 from "./package3.js"
import './package.css';


class PackageOverview extends Component {
  render() {
    return (
    	<div>
        <div className="row">
            <Package1 />
            <Package2 />
            <Package3 />
        </div>
      </div>
    );
  }
}

export default PackageOverview;