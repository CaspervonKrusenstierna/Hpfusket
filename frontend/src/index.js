import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App isLoggedIn = {false} privilege={2}/>
  </React.StrictMode>
);

/*
const response = await fetch("http://127.0.0.1:3000/getsessioninfo", {
  method: "POST",
  mode: "cors",
  cache: "no-cache",
  credentials: "same-origin",
  headers: {
    "Content-Type": "application/json",
  },
  redirect: "follow",
  referrerPolicy: "no-referrer"
}).then((res) => res.json()).then((result) => {root.render(
  <React.StrictMode>
    <App isLoggedIn = {result.loggedIn}/>
  </React.StrictMode>
);})*/
