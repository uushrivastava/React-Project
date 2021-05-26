import React from 'react';
import Phone from '../assests/iphone12.png';


class CartItems extends React.Component{
    render (){
        return (
            <div  className = "cart-item">
                <div className = "left-block">
                <img src = {Phone} style= {style.image} alt ='no-data'/>
                </div>
                <div className = "right-block">
                    <div style = {style.itemTitle}>I-Phone 12</div>
                    <div style = {style.itemDetails}>Rs 84,999</div>
                    <div style = {style.itemDetails}>Qty : 1</div>
                    <div className = "cart-item-actions">
                        {/* buttons */}
                    </div>
                </div>
            </div>
        );
    }
}

const style = {
    image : {
        height : 110,
        width : 110,
        borderRadius : 4
    },
    itemTitle : {
        fontSize : 25,
        color : 'black'
    },
    itemDetails : {
        color : '#777'
    }
}

export default CartItems;