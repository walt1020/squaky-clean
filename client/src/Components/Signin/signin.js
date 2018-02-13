import React, { Component } from 'react';
import axios from 'axios';
import '../Packages/package.css';

class Signin extends Component {
    state = {
        isLogin: false
    }
    constructor(props){
      super(props);
      this.handleSignUp = this.handleSignUp.bind(this);
      this.handleSignIn = this.handleSignIn.bind(this);
    }
    handleSignUp(event){
        event.preventDefault();
        axios.get('/api/test').then((data)=>{
            console.log(data);
        }).catch((err)=>{
            console.log(err)
        });
        console.log('Sign in');
    }
    handleSignIn(event){
        event.preventDefault();
        axios.get('/api/test').then((data)=>{
            console.log(data);
        }).catch((err)=>{
            console.log(err);
        });
        console.log('Sign up');
    }
    render() {
      return (
        <div className='row'>
            <div className='col-sm-6 customerSignin text-left washPackages'>
                <h3>New User Sign-Up</h3>
                <form data-toggle="validator" role="form">
                    <div className="form-group">
                        <label htmlFor="inputEmail" className="control-label">Email</label>
                        <input type="email" className="form-control" id="inputEmail" placeholder="Email" data-error="Bruh, that email address is invalid" required />
                    </div>
                    <div className="form-group ">
                        <label htmlFor="inputPassword" className="control-label">Password</label>
                        <div className="form row">
                            <div className="form-group col-xs-12">
                                <input type="password" data-minlength="6" className="form-control" id="inputPassword" placeholder="Password" required />
                                <div className="help-block">Minimum of 6 characters</div>
                            </div>
                            <div className="form-group col-xs-12">
                                <input type="password" className="form-control" id="inputPasswordConfirm" data-match="#inputPassword" data-match-error="Whoops, these don't match" placeholder="Confirm" required />
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <button onClick={this.handleSignUp} className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
            <div className='col-sm-6 customerSignin text-left washPackages'>
                <h3>Existing User Sign-In</h3>
                <form data-toggle="validator" role="form">
                    <div className="form-group">
                        <label htmlFor="existingEmail" className="control-label">Email</label>
                        <input type="email" className="form-control" id="existingEmail" placeholder="Email" data-error="Bruh, that email address is invalid" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="existingPassword" className="control-label">Password</label>
                        <div className="form row">
                            <div className="form-group col-xs-12">
                                <input type="existingPassword" data-minlength="6" className="form-control" id="existingPassword" placeholder="Password" required />
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <button onClick={this.handleSignIn} className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
      );
    }
  }
  
export default Signin;
  