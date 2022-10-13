import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { initializeApp } from "firebase/app";
initializeApp({
  apiKey: "AIzaSyAR2ACqq48RiPMb_JQdODlY-DY2IkQd2dU",
  authDomain: "farmaecommerce-dbf62.firebaseapp.com",
  projectId: "farmaecommerce-dbf62",
  storageBucket: "farmaecommerce-dbf62.appspot.com",
  messagingSenderId: "1080066682869",
  appId: "1:1080066682869:web:0c470cdd4203efb5b9babc",
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
