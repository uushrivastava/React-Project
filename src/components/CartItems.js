import React from 'react';


class CartItems extends React.Component {
    render() {
        const { price, title, qty, img } = this.props.product;  //Object Destructuring
        const { product , onDecreaseQuantity ,onIncreaseQuantity, onDeleteItems} = this.props;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img src = { img } style={style.image}  alt = "No Found"/>
                </div>
                <div className="right-block">
                    <div style={style.itemTitle}>{title}</div>
                    <div style={style.itemDetails}>Rs. {price}</div>
                    <div style={style.itemDetails}>Qty {qty}</div>
                    <div className="cart-item-actions">
                        <img 
                        src="https://image.flaticon.com/icons/png/512/1828/1828926.png" 
                        alt="Increase" 
                        style={style.actionIcon}
                        onClick = {() => onIncreaseQuantity(product)} 
                        />

                        <img 
                        src="https://image.flaticon.com/icons/png/512/1828/1828906.png" 
                        alt="Decrease" 
                        style={style.actionIcon} 
                        onClick = {() => onDecreaseQuantity(product)} 
                        />

                        <img 
                        src="https://image.flaticon.com/icons/png/512/1214/1214428.png" 
                        alt="Delete" 
                        style={style.actionIcon}
                        onClick = {() => onDeleteItems(product.id)}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

const style = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    },
    itemTitle: {
        fontSize: 25,
        color: 'black'
    },
    itemDetails: {
        color: '#777'
    },
    actionIcon: {
        height: 25,
        width: 25,
        marginRight: 10
    }
}

export default CartItems;