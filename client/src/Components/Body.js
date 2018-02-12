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
          <div id="myCarousel" class="carousel slide" data-ride="carousel">
      
            <ol class="carousel-indicators">
              <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
              <li data-target="#myCarousel" data-slide-to="1"></li>
              <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner center-block">
              <div class="item active">
                <img src={Duckroll} alt="duckroll" class="center-block" />
                <div class="carousel-caption">
                  <h3>Duckroll!</h3>
                  <p>Fond Memories of Rickrolling!</p>
                </div>
              </div>

              <div class="item">
                <img src={aboutus} alt="aboutus" class="center-block" />
                <div class="carousel-caption">
                  <h3>Squeaky Clean</h3>
                  <p>Book your appointment today!</p>
                </div>
              </div>

              <div class="item">
                <img src={Carwash} alt="car wash" class="center-block" />
                <div class="carousel-caption">
                  <h3>Car Wash!</h3>
                  <p>We Clean it for You!</p>
                </div>
              </div>
            </div> {/*closing carousel inner*/}

            {/*Left and right controls*/}
            <a class="left carousel-control" href="#myCarousel" data-slide="prev">
              <span class="glyphicon glyphicon-chevron-left"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="right carousel-control" href="#myCarousel" data-slide="next" >
              <span class="glyphicon glyphicon-chevron-right"></span>
              <span class="sr-only">Next</span>
            </a>

          </div>
        </div>
        <Signin></Signin>
      </div>
      
    );
  }
}

export default Body;
