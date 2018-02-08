import React, { Component } from 'react';
// import Logo from '../Nav/duck_logo.png';
// import {Link} from 'react-router-dom';
// import './Navbar.css';
class PayPalButton1 extends Component {
  render() {
    return (
		<div className="col-xs-4 table-bordered" >
			<form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
				<h3>Basic Squeakly Clean Carwash</h3>
				<p>We arrive on site and give your car an awesome wash. Base Price is $25.  </p>

				<input type="hidden" name="cmd" value="_s-xclick" />
				<input type="hidden" name="hosted_button_id" value="DUHW64YWZSHGS" />
				<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
				<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
			</form>
		</div>
    );
  }
}

export default PayPalButton1;