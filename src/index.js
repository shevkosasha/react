import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

const elem = <h2>Hello World</h2>;
const elem2 = React.createElement("h3", null, "Once again");
const elem3 = React.createElement("h3", {className: "greeting"}, "greeting once again");

const elem4 = (
  <div>
    {elem}
    <input type='text' />
    <button>Click me</button>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {elem}
    {elem2}
    {elem3}
    {elem4}
  </React.StrictMode>
);
