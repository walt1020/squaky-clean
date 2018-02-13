import React, { Component } from 'react';
import axios from 'axios';
import '../Packages/package.css';

class Signin extends Component {
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
    handleSignUp(event){
        event.preventDefault();
        const data = {
            username: this.state.newUserEmail,
            password: this.state.newUserPassword,
        }
        axios.post('/api/register', data).then((data)=>{
            console.log(data);
        }).catch((err)=>{
            console.log(err)
        });
        console.log('Sign up');
    }
    handleSignIn(event){
        event.preventDefault();
        axios.get('/api/test').then((data)=>{
            console.log(data);
        }).catch((err)=>{
            console.log(err);
        });
        console.log('Sign in');
    }
    render() {
      return (
        <div className='row'>
            <div className='col-sm-6 customerSignin text-left washPackages'>
                <h3>New User Sign-Up</h3>
                <form data-toggle="validator" onSubmit={this.handleSignUp.bind(this)}>
  
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
            <div className='col-sm-6 customerSignin text-left washPackages'>
                <h3>Existing User Sign-In</h3>
                <form data-toggle="validator" onSubmit={this.handleSignIn.bind(this)}>
  
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
  
export default Signin;
  