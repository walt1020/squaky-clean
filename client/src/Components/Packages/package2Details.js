import React, { Component } from 'react';


class Package2Details extends Component {
  render() {
    return (
		<div className="col-xs-4 table-bordered" >            
            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                <h3>Squeaky Deluxe </h3>
                <p> Full service wash, clear coat shine, clear coat protectant, underbody wash, tire shine and rim cleaning. </p>
                <p> $20 </p>

            <input type="hidden" name="cmd" value="_s-xclick" />
            <input type="hidden" name="hosted_button_id" value="W89VCS7TQ2WQW" />
            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
            <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
            </form>
		</div>
    );
  }
}

export default Package2Details;



