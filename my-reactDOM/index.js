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
    let component;

    if (typeof element === 'function') {
      try {
        component = element();
      } catch {
        const instance = new element;
        component = instance.render();
      }
    } else {
      component = element;
    }

    const el = document.createElement(component.type);

    if (component.children) {
      component.children.forEach(child => {

        const childElement = typeof child === 'string'
          ? document.createTextNode(child)
          : ReactDOM.createDomElement(child);

        el.appendChild(childElement);
      });
    }
    return el;
  }


}

export default ReactDOM;
