import React, { Component } from 'react';
import Package1 from "./package1.js"
import Package2 from "./package2.js"
import Package3 from "./package3.js"

class PackageOverview extends Component {
  render() {
    return (
    	<div>
            <Package1 />
            <Package2 />
            <Package3 />
        </div>
    );
  }
}

export default PackageOverview;