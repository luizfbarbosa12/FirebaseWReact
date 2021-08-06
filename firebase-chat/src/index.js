import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDbxUs0gemHbKGyIUCtzthOG4FkDJln534",
  authDomain: "fir-chatwreact.firebaseapp.com",
  projectId: "fir-chatwreact",
  storageBucket: "fir-chatwreact.appspot.com",
  messagingSenderId: "491816240838",
  appId: "1:491816240838:web:61f1d1025fa539bcd5f9c7",
  measurementId: "G-NYHPQZ78GR",
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
