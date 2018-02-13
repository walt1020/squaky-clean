import React, { Component } from 'react';
import './package.css';


class Package1 extends Component {
  render() {
    return (
		<div className="col-xs-4" >
			<div className="table-bordered washPackages">
				<form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
					<h3>Squeaky Clean </h3>
					<p>Exterior only wash, clear coat shine, clear coat protectant, and underbody wash.  </p>
					<p> $35 </p>

					<input type="hidden" name="cmd" value="_s-xclick" />
					<input type="hidden" name="hosted_button_id" value="DUHW64YWZSHGS" />
					<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
					<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
				</form>
			</div>
		</div>
    );
  }
}

export default Package1;