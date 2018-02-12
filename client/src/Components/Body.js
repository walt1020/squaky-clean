import React, { Component } from 'react';
import Carwash from "./carwash.gif";
import Duckroll from "./duckroll.jpg";
import Rickroll from "./rickroll.png";
import axios from "axios";
import './Body.css';
import helper from "../config/helper";


class Body extends Component {
  constructor(props) {
    super(props);
    this.state={
      newUserEmail:"",
      newUserPassword:"",
      newUserConfirm:"",
      existingUserEmail:"",
      existingUserPassword:""
    }
  }
  handleInputChange(event){
    this.setState({
      [event.target.name]:event.target.value
    })
  }
  onNewUserSubmit(event){
    event.preventDefault()
    console.log(this.state)
  }
  existingUserSubmit(event){
    console.log('hitting here')
    event.preventDefault()
    const data ={
      email:this.state.existingUserEmail,
      password:this.state.existingUserPassword
    }
    // axios.post("http://localhost:3000/api/login", data)
    // console.log(this.state)
    helper.loginUser(data)
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
                <img src={Rickroll} alt="rickroll" className="center-block" />
                <div className="carousel-caption">
                  <h3>RickRoll!</h3>
                  <p>As Unsettling as it is Catchy!</p>
                </div>
              </div>

              <div className="item">
                <img src={Carwash} alt="car wash" className="center-block" />
                <div className="carousel-caption">
                  <h3>Car Wash!</h3>
                  <p>We Clean it htmlFor You!</p>
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

        <div className="customerSignin col-xs-6 text-left table-bordered">
          <h4>New User Sign-Up</h4>
          <form data-toggle="validator" onSubmit={this.onNewUserSubmit.bind(this)}>
  
            <div className="form-group">
              <label htmlFor="inputEmail" className="control-label">Email</label>
              <input type="email" name="newUserEmail" className="form-control" id="inputEmail" placeholder="Email" data-error="Bruh, that email address is invalid" required onChange={this.handleInputChange.bind(this)} />
              <div className="help-block with-errors"></div>
            </div>
            <div className="form-group ">
              <label htmlFor="inputPassword" className="control-label">Password</label>
              <div className="form row">
                <div className="form-group col-xs-12">
                  <input type="password" name="newUserPassword" data-minlength="6" className="form-control" id="inputPassword" placeholder="Password" required onChange={this.handleInputChange.bind(this)}/>
                  <div className="help-block">Minimum of 6 characters</div>
                </div>
                <div className="form-group col-xs-12">
                  <input type="password" name="newUserConfirm" className="form-control" id="inputPasswordConfirm" data-match="#inputPassword" data-match-error="Whoops, these don't match" placeholder="Confirm" required onChange={this.handleInputChange.bind(this)}/>
                  <div className="help-block with-errors"></div>
                </div>
              </div>
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>

        <div className="customerSignin col-xs-6 text-left table-bordered">
          <h4>Existing User Sign-In</h4>
          <form data-toggle="validator" onSubmit={this.existingUserSubmit.bind(this)}>
  
            <div className="form-group">
              <label htmlFor="existingEmail" className="control-label">Email</label>
              <input type="email" name="existingUserEmail" className="form-control" id="existingEmail" placeholder="Email" data-error="Bruh, that email address is invalid" required onChange={this.handleInputChange.bind(this)}/>
              <div className="help-block with-errors"></div>
            </div>
            <div className="form-group">
              <label htmlFor="existingPassword" className="control-label">Password</label>
              <div className="form row">
                <div className="form-group col-xs-12">
                  <input type="existingPassword" name="existingUserPassword" data-minlength="6" className="form-control" id="existingPassword" placeholder="Password" required onChange={this.handleInputChange.bind(this)}/>
                </div>
              </div>
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>

        

      </div>
      
    );
  }
}

export default Body;
