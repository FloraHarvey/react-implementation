import './index.css';
import ReactDOM from '../my-reactDOM';
import React from '../my-react';

// TODO: make the following work:
// const element = React.createElement('div', null, `Hello World`);
// ReactDOM.render(element, document.getElementById('root'));

window.onload = () => {
  const child = React.createElement('div', null, 'Child element');
  const element = React.createElement('div', null, child);
  ReactDOM.render(
    element,
    document.getElementById('root'),
  );
};
