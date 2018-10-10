// const element = {
//   type: 'div',
//   children: ['hello', 'world'],
// }

class ReactDOM {

  static render(element, container) {
    const elementToRender = this.createDomElement(element);
    container.appendChild(elementToRender);
  }

  static createDomElement = (element) => {
    const component = typeof element === 'function' ? element() : element;
    const el = document.createElement(component.type);

    if (component.children) {
      component.children.forEach(child => {
        if (typeof child === 'string') {
          const childElement = document.createTextNode(child);
          el.appendChild(childElement);
        } else {
          const childElement = ReactDOM.createDomElement(child);
          el.appendChild(childElement);
        }
      });
    }
    return el;
  }


}

export default ReactDOM;
