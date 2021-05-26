import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import  firebase from 'firebase';
import 'firebase/firestore';

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBgqYI4uJebOn3LyumjEoHsNify9135s5c",
    authDomain: "cart-51dd2.firebaseapp.com",
    projectId: "cart-51dd2",
    storageBucket: "cart-51dd2.appspot.com",
    messagingSenderId: "675176408078",
    appId: "1:675176408078:web:5880a13f7f2bbe1dfd085f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));