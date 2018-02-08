import React, { Component } from 'react';
import Logo from '../Nav/duck_logo.png';
import {Link} from 'react-router-dom';
// import './Navbar.css';
class PayPalButton1 extends Component {
  render() {
    return (
		<div>
			<form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
			<input type="hidden" name="cmd" value="_s-xclick"/>
			<input type="hidden" name="hosted_button_id" value="DUHW64YWZSHGS"/>
			<table>
				<tr>
					<td>
						<input type="hidden" name="on0" value="Tires"/>Tires
					</td>
				</tr>
				<tr>
					<td>
					<select name="os0">
					<option value="Tooth Brush Scrub">Tooth Brush Scrub $50.00 USD</option>
					<option value="Power Scrub">Power Scrub $5.00 USD</option>
					<option value="Power Scrub + Gloss Black Treatment">Power Scrub + Gloss Black Treatment $10.00 USD</option>
				</select> 
					</td>
				</tr>
			</table>
			<input type="hidden" name="currency_code" value="USD"/>
			<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
			<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
			</form>
		</div>
    );
  }
}

export default PayPalButton1;
