import React from 'react';
import ReactDOM from 'react-dom'; // Controls throwing code onto browser
import App from './App'; // Refers to current directory

/*
const element = <h1>Hello, world</h1>;
ReactDOM.render(element, document.getElementById('root'));
*/

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
