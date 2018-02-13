import React, { Component } from 'react';
import './package.css';


class Package3Details extends Component {
  render() {
    return (
		<div className="col-xs-4 table-bordered washPackages" >
            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                <h3>Squeaky Ultimate</h3>
                <p>Full service wash, mat shampoo, clear coat protectant,  clear coat shine, coat protectant, underbody wash, tire shine, rim cleaning, polish wax, interior fragrance  .</p>
                              <p>$25</p>
            <input type="hidden" name="cmd" value="_s-xclick"/>
            <input type="hidden" name="hosted_button_id" value="U7HWZ79UPTUD2"/>
            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
            <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
            </form>
		</div>
    );
  }
}

export default Package3Details;


