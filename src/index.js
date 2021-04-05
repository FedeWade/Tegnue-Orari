import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVgIFc1bQvNsp7uu1J5lIf303rATW5kaI",
  authDomain: "orari-dd568.firebaseapp.com",
  projectId: "orari-dd568",
  storageBucket: "orari-dd568.appspot.com",
  messagingSenderId: "476628703080",
  appId: "1:476628703080:web:30365e0c579f1c2b36e8dd",
  measurementId: "G-22TGDVVCQJ",
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
