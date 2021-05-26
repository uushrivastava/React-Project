

import React from 'react';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import Phone from "./assests/iphone12.png";
import Watch from "./assests/watch.png";
import Laptop from "./assests/lappy.png";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 998,
          title: "Watch",
          qty: 1,
          img: Watch,
          id: 1
        },
        {
          price: 84998,
          title: "I-Phone 12",
          qty: 10,
          img: Phone,
          id: 2
        },
        {
          price: 4998,
          title: "laptop",
          qty: 1,
          img: Laptop,
          id: 3
        },
        {
          price: 49980,
          title: "ipad",
          qty: 4,
          img: '',
          id: 4
        }
      ]
    }
  }

  handleIncreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);

    products[index].qty += 1;

    this.setState({ products })
  }

  handleDecreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);


    if (products[index].qty === 0) {
      return;
    }
    products[index].qty -= 1;



    this.setState({ products })
  }

  handleDeleteItems = (id) => {
    const { products } = this.state;

    const items = products.filter((item) => item.id !== id);

    this.setState({
      products: items
    })
  }

  getCartCount = () => {
    const { products } = this.state;
     
    let count = 0;

    products.forEach((product) => {
      count += product.qty;
    })

    return count;
  }
  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar count = {this.getCartCount()}/>
        <Cart
          products = {products}
         onIncreaseQuantity  = {this.handleIncreaseQuantity}
         onDecreaseQuantity = {this.handleDecreaseQuantity}
         onDeleteItems = {this.handleDeleteItems} 
        />
      </div>
    );
  }
}

export default App;
