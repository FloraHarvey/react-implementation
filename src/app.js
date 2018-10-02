window.onload = () => {
  // create a new div
  var newDiv = document.createElement("div");
  // and give it some some text
  var newContent = document.createTextNode("Some text");

  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM
  document.body.appendChild(newDiv);
}
