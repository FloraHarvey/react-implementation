class ReactDOM {

  static render(reactElement, container) {
    const elementToRender = ReactDOM.createDomElement(reactElement);
    container.appendChild(elementToRender);
  }

  static getElementOrComponent = (reactElement) => {
    let component;

    if (typeof reactElement.type === 'function') {
      try {
        component = reactElement.type();
      } catch {
        const instance = new reactElement.type();
        component = instance.render();
      }
    } else {
      component = reactElement.type;
    }

    return component;
  }

  static createDomElement = (reactElement) => {
    const component = ReactDOM.getElementOrComponent(reactElement);

    const domElement = typeof component === 'string'
      ? document.createElement(component)
      : ReactDOM.createDomElement(component);

    if (reactElement.children) {
      reactElement.children.forEach(child => {

        const childElement = typeof child === 'string'
          ? document.createTextNode(child)
          : ReactDOM.createDomElement(child);

        domElement.appendChild(childElement);
      });
    }
    return domElement;
  }
}

export default ReactDOM;
