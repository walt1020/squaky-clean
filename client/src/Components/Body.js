import React, { Component } from 'react';
import Carwash from "./carwash.gif";
import Duckroll from "./duckroll.jpg";
import Rickroll from "./rickroll.png";
// import './Body.css';


class Body extends Component {
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
                <img src={Rickroll} alt="rickroll" class="center-block" />
                <div class="carousel-caption">
                  <h3>RickRoll!</h3>
                  <p>As Unsettling as it is Catchy!</p>
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

        <div class="customerSignin col-xs-12 text-left">
          <h1>New User Sign-Up</h1>
          <form data-toggle="validator" role="form">
  
            <div class="form-group">
              <label for="inputEmail" class="control-label">Email</label>
              <input type="email" class="form-control" id="inputEmail" placeholder="Email" data-error="Bruh, that email address is invalid" required />
              <div class="help-block with-errors"></div>
            </div>
            <div class="form-group ">
              <label for="inputPassword" class="control-label">Password</label>
              <div class="form row">
                <div class="form-group col-xs-12">
                  <input type="password" data-minlength="6" class="form-control" id="inputPassword" placeholder="Password" required />
                  <div class="help-block">Minimum of 6 characters</div>
                </div>
                <div class="form-group col-xs-12">
                  <input type="password" class="form-control" id="inputPasswordConfirm" data-match="#inputPassword" data-match-error="Whoops, these don't match" placeholder="Confirm" required />
                  <div class="help-block with-errors"></div>
                </div>
              </div>
            </div>
            <div class="form-group">
              <button type="submit" class="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>

        <div class="customerSignin col-xs-12 text-left">
          <h1>Existing User Sign-In</h1>
          <form data-toggle="validator" role="form">
  
            <div class="form-group">
              <label for="existingEmail" class="control-label">Email</label>
              <input type="email" class="form-control" id="existingEmail" placeholder="Email" data-error="Bruh, that email address is invalid" required />
              <div class="help-block with-errors"></div>
            </div>
            <div class="form-group">
              <label for="existingPassword" class="control-label">Password</label>
              <div class="form row">
                <div class="form-group col-xs-12">
                  <input type="existingPassword" data-minlength="6" class="form-control" id="existingPassword" placeholder="Password" required />
                </div>
              </div>
            </div>
            <div class="form-group">
              <button type="submit" class="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>

        

      </div>
      
    );
  }
}

export default Body;
