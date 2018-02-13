import React, { Component } from 'react';
import testimony2 from "./testimony2.JPG";
import Signin from "./Signin/signin.js";
import aboutus from "./aboutus.JPG";
import './Body.css';



class Body extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <div id="myCarousel" className="carousel slide" data-ride="carousel">
      
            <ol className="carousel-indicators">
              <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
              <li data-target="#myCarousel" data-slide-to="1"></li>
            </ol>
            <div className="carousel-inner center-block">
              <div className="item active">
                <img src={testimony2} alt="testimony2" className="center-block" />
                <div className="carousel-caption">
                  <h3>Squeaky Clean</h3>
                </div>
              </div>

              <div className="item">
                <img src={aboutus} alt="aboutus" className="center-block" />
                <div className="carousel-caption">
                  <h3>Squeaky Clean</h3>
                 
                </div>
              </div>

            </div> {/*closing carousel inner*/}

            {/*Left and right controls*/}
            <a className="left carousel-control" href="#myCarousel" data-slide="prev">
              <span className="glyphicon glyphicon-chevron-left"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="right carousel-control" href="#myCarousel" data-slide="next" >
              <span className="glyphicon glyphicon-chevron-right"></span>
              <span className="sr-only">Next</span>
            </a>

          </div>
        </div>
        <Signin></Signin>
      </div>
      
    );
  }
}

export default Body;
