import './index.css';
import ReactDOM from '../my-reactDOM';
import React from '../my-react';

const HelloWorld = (props) => React.createElement('div', null, 'Hello ', props.name);

class App extends React.Component {

  render() {
    return React.createElement(HelloWorld, {name: 'world'}, null);
  }
}

window.onload = () => {
  ReactDOM.render(
    React.createElement(App, null, null),
    document.getElementById('root'),
  );
};
