import React, { Component } from 'react';
import PayPalButton1 from "../Components/PayPalButton/button1.js"
import PayPalButton2 from "../Components/PayPalButton/button2.js"
import PayPalButton3 from "../Components/PayPalButton/button3.js"

export class ButtonPage extends Component {
    render() {
        return (
            <div>
                <PayPalButton1/>
                <PayPalButton2/>
                <PayPalButton3/>
            </div>
            );
        }
    }
export default ButtonPage;

