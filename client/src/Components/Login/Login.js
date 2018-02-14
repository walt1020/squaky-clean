import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
 render() {
   return (
   	<form role="form" action="/api/login" method="post" className="form-signin">
   	<h2 className="form-signin-heading">Please sign in</h2>
   	<label for="inputEmail" className="sr-only"></label>
   	<input type="text" name="username" id="inputEmail" placeholder="Username" required="" autofocus="" className="form-control" />
   	<input type="password" name="password" id="inputPassword" placeholder="Password" className="form-control" />
   	<button type="submit" className="btn btn-lg btn-primary btn-block">LOGIN</button>
   	</form>
   );
 }
}

export default Login;