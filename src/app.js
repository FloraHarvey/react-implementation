import './index.css';

window.onload = () => {
  // create a new div
  const newDiv = document.createElement('div');
  // and give it some some text
  const newContent = document.createTextNode('Some text');

  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM
  document.body.appendChild(newDiv);
};
