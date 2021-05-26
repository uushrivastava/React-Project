import React from 'react';
import CartItem from "./CartItems";
// import Phone from "../assests/iphone12.png";
// import Watch from "../assests/watch.png";
// import Laptop from "../assests/lappy.png";


const Cart = (props) => {

        const { products } =props;
        return (
            <div className="cart">
                {products.map((product) => {
                    return( <CartItem product = {product} 
                        key = {product.id} 
                        onIncreaseQuantity  = {props.onIncreaseQuantity}
                        onDecreaseQuantity = {props.onDecreaseQuantity}
                        onDeleteItems = {props.onDeleteItems}
                        />
                    )
                })}

            </div>
        );
};

export default Cart;