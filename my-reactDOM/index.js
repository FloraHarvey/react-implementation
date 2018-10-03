class ReactDOM {
  static render(element, container) {
    let elementToRender;

    // create simple element with text children
    if (typeof element.type === 'string') {
      elementToRender = document.createElement(element.type);
      if (element.children) {
        elementToRender.innerHTML = element.children.join(' ');
      }
    }

    // add the newly created element and its content into the DOM within the
    // given container
    container.appendChild(elementToRender);
  }
}

export default ReactDOM;
