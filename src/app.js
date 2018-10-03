import './index.css';
import ReactDOM from '../my-reactDOM';

// TODO: make the following work:
// const element = React.createElement('div', null, `Hello World`);
// ReactDOM.render(element, document.getElementById('root'));

window.onload = () => {
  ReactDOM.render(
    { type: 'div', children: ['Hello', 'world', 'again'] },
    document.getElementById('root')
  );
};
