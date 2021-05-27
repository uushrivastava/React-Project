

import React from 'react';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
// import Phone from "./assests/iphone12.png";
// import Watch from "./assests/watch.png";
// import Laptop from "./assests/lappy.png";
import firebase from 'firebase';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      loading : true
    }
  }

  componentDidMount() {
      // firebase
      // .firestore()
      // .collection('products')
      // .get()
      // .then((snapshot) => {
      //   snapshot.docs.map((doc) =>{}
      //     )

      //     const products = snapshot.docs.map((doc) => {
      //       const data = doc.data();

      //       data['id'] = doc.id;
            
      //       return data;
      //     })

      //     this.setState({
      //       products,
      //       loading : false
      //     })
      // });

      firebase
      .firestore()
      .collection('products')
      .onSnapshot((snapshot) => {
        snapshot.docs.map((doc) =>{}
          )

          const products = snapshot.docs.map((doc) => {
            const data = doc.data();

            data['id'] = doc.id;
            
            return data;
          })

          this.setState({
            products,
            loading : false
          })
      })
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
  getCartTotal = () => {
    const { products } = this.state;

    let total = 0;
    
    products.map((product) => {
      if(product.qty > 0){
      total = total + (product.price * product.qty);
      }
      return '';
    })
    
    return total;
  }
  render() {
    const { products,loading } = this.state;
    return (
      <div className="App">
        <Navbar count = {this.getCartCount()}/>
        <Cart
          products = {products}
         onIncreaseQuantity  = {this.handleIncreaseQuantity}
         onDecreaseQuantity = {this.handleDecreaseQuantity}
         onDeleteItems = {this.handleDeleteItems} 
        />
        {loading && <h1>Loading Products....</h1>}
        <div>TOTAL : {this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;
