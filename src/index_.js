import React from 'react';
// import ReactDOM from 'react-dom';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

const elem = <h2>Hello World</h2>;
const elem2 = React.createElement("h3", null, "Once again");
const elem3 = React.createElement("h3", {className: "greeting"}, "greeting once again");

const elem4 = (
  <div>
    {/* <h4>Hello World</h4> */}{elem}
    <input type='text' />
    <button>Click me</button>
  </div>
);

// ReactDOM.render(elem, document.getElementById('root'));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {elem}
    {elem2}
    {elem3}
    {elem4}
    {/* {elem3}
    {elem3} */}
    <App/>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
