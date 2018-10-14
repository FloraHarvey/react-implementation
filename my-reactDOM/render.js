export const render = (reactElement, container) => {
  const elementToRender = createDomElement(reactElement);
  container.appendChild(elementToRender);
};

const getElementOrComponent = (reactElement) => {
  let component;
  const { props } = reactElement;

  if (typeof reactElement.type === 'function') {
    try {
      component = reactElement.type(props);
    } catch {
      const instance = new reactElement.type();
      instance.props = props;
      component = instance.render();
    }
  } else {
    component = reactElement.type;
  }

  return component;
};

const createDomElement = (reactElement) => {
  const component = getElementOrComponent(reactElement);

  const domElement = typeof component === 'string'
    ? document.createElement(component)
    : createDomElement(component);

  if (reactElement.props && reactElement.props.children) {
    reactElement.props.children.forEach(child => {

      const childElement = typeof child === 'string'
        ? document.createTextNode(child)
        : createDomElement(child);

      domElement.appendChild(childElement);
    });
  }
  return domElement;
};
