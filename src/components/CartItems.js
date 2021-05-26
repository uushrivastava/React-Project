import React from 'react';
import Phone from '../assests/iphone12.png';


class CartItems extends React.Component {

    constructor() {
        super();
        this.state = {
            price: 84998,
            title: "I-Phone 12",
            qty: 1,
            img: ''
        }
    }

    //usnig arrow function to bind the instance of the class
    IncreaseQuantity =() => { 
        // console.log('this.state',this.state);
        // set state form 1
        // this.setState({
        //     qty : this.state.qty + 1
        // })

        // set state form 2 to use when previous state is required
        
        this.setState( (prevState) =>{
            return{
            qty : this.state.qty + 1
        }})
    }

    DecreaseQuantity = () => {
        this.setState((prevState) => {
            if(prevState.qty  <= 0){
                return {
                    qty : 0
                }
            }
            return {
                qty : this.state.qty -1
            }
        })
    }

    render() {
        const { price, title, qty } = this.state;  //Object Destructuring
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img src={Phone} style={style.image} alt='no-data' />
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
                        onClick = {this.IncreaseQuantity} 
                        />

                        <img 
                        src="https://image.flaticon.com/icons/png/512/1828/1828906.png" 
                        alt="Decrease" 
                        style={style.actionIcon} 
                        onClick = {this.DecreaseQuantity}
                        />

                        <img 
                        src="https://image.flaticon.com/icons/png/512/1214/1214428.png" 
                        alt="Delete" 
                        style={style.actionIcon} 
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
        borderRadius: 4
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