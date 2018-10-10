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
    let el;
    if (typeof element.type === 'string') {
      el = document.createElement(element.type);
    }
    if (element.children) {
      element.children.forEach(child => {
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
