import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
/*
root.render(
  <React.StrictMode>
    <App test = {{date: "", provpass: 5}}/>
  </React.StrictMode>);
*/
const response = await fetch("http://127.0.0.1:3000/dashboard/test", {
  method: "GET",
  mode: "cors",
  cache: "no-cache",
  credentials: "same-origin",
  headers: {
    "Content-Type": "application/json",
  },
  redirect: "follow",
  referrerPolicy: "no-referrer"
}).then((res) => res.json()).then((result) => {console.log(result); root.render(
  <React.StrictMode>
    <App ActiveTest={result.activetest} ProvPass={result.provpass}/>
  </React.StrictMode>
);})
