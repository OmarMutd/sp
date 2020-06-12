import React, { Component } from 'react';
import './Coupons.css';

export class Coupons extends Component {
    render() {
        return (
            <div className='all-coupons'>
                <div className='coupon'>
                    <h4 className='coupon-name'>PICK UP ONLY</h4>
                    <h3>CHEESE</h3>
                    <p>Medium $7.99</p>
                    <p>Large $8.99</p>
                    <p>Giant $9.99</p>
                    <p>Additional Topping $1.25 each</p>
                    <p>LIMITED TIME OFFER</p>
                </div>

                <div className='coupon'>
                    <h4 className='coupon-name'>GREAT DEALS</h4>
                    <h3>2 LARGE 2 TOPPINGS</h3>
                    <p>$22.99</p>
                    <h3>2 GIANTS 2 TOPPINGS</h3>
                    <p>$24.99</p>
                    <p>Additional Topping $1.25 each</p>
                    <p>LIMITED TIME OFFER</p>
                    <p>GOOD FOR DELIVERY</p>
                </div>

                <div className='coupon'>
                    <h4 className='coupon-name'>MANAGER SPECIAL</h4>
                    <h3>ANY SIZE PIZZA UP TO 3 TOPPINGS</h3>
                    <p>$14.99</p>
                    <p>Additional Topping $1.25 each</p>
                    <p>LIMITED TIME OFFER</p>
                    <p>GOOD FOR DELIVERY</p>

                </div>

                <div className='coupon'>
                    <h4 className='coupon-name'>DELUXE SPECIAL</h4>
                    <p>Medium $12.99</p>
                    <p>Large $14.99</p>
                    <p>Giant $15.99</p>
                    <p>Additional Topping $1.25 each</p>
                    <p>LIMITED TIME OFFER</p>
                    <p>GOOD FOR DELIVERY</p>
                </div>


                <div className='coupon'>
                    <h4 className='coupon-name'>2X2 SPECIAL</h4>
                    <h3>2 PASTA DISHES</h3>
                    <h3>2 CAESAR SALADS</h3>
                    <h3>AND BREAD STIX</h3>
                    <h2>$23.99</h2>
                    <p>LIMITED TIME OFFER</p>
                    <p>GOOD FOR DELIVERY</p>
                </div>

            </div>
        )
    }
}

export default Coupons
