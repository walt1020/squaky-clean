import React, { Component } from 'react';
import './Register.css';

class Register extends Component {
 render() {
   return (
   	<form role="form" action="/api/register" method="post" style={{maxWidth: '300px'}} className="form-signin">
   	<h2 className="form-signin-heading">Sign Up here</h2>
   	<input type="text" name="firstName" placeholder="First Name" className="form-control" />
   	<input type="text" name="lastName" placeholder="Last Name" className="form-control" />
   	<input type="text" name="phone" placeholder="Phone" className="form-control" />
   	<input type="text" name="position" placeholder="Position" className="form-control" />
   	<input type="text" name="emailAddress" placeholder="E-mail" className="form-control" />
   	<input type="text" name="home_address" placeholder="Address" className="form-control" />
   	<input type="checkbox" name="technician" id="tech" className="form-control" />
   		<label for="tech">Technician? </label>
   	<input type="text" name="product_selected" placeholder="Product" className="form-control" />
   	<input type="text" name="special_instructions" placeholder="Instructions" className="form-control" />
   	<input type="text" name="username" placeholder="Your Username" className="form-control" />
   	<input type="password" name="password" placeholder="Your Password" className="form-control" />
   	<button type="submit" className="btn btn-lg btn-primary btn-block">Sign Up</button>
</form>
   );
 }
}

export default Register;