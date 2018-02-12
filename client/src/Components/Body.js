import React, { Component } from 'react';
import Carwash from "./carwash.gif";
import Duckroll from "./duckroll.jpg";
import Rickroll from "./rickroll.png";
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
              <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner center-block">
              <div className="item active">
                <img src={Duckroll} alt="duckroll" className="center-block" />
                <div className="carousel-caption">
                  <h3>Duckroll!</h3>
                  <p>Fond Memories of Rickrolling!</p>
                </div>
              </div>

              <div className="item">
                <img src={aboutus} alt="aboutus" className="center-block" />
                <div className="carousel-caption">
                  <h3>Squeaky Clean</h3>
                  <p>Book your appointment today!</p>
                </div>
              </div>

              <div className="item">
                <img src={Carwash} alt="car wash" className="center-block" />
                <div className="carousel-caption">
                  <h3>Car Wash!</h3>
                  <p>We Clean it for You!</p>
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
