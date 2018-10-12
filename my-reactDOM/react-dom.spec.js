import ReactDOM from './index';

describe('render', () => {
  it('given an element object with children and a container it renders the element in the container', () => {
    document.body.innerHTML =
      '<div id="root">' +
      '</div>';

    ReactDOM.render(
      {
        type: 'div',
        children: ['Hello world']
      },
      document.getElementById('root')
    );

    expect(document.getElementById('root').firstElementChild.textContent).toEqual('Hello world');
  });

  it('given an element object with children it recursively renders the element and all children in the tree', () => {
    document.body.innerHTML =
      '<div id="root">' +
      '</div>';

    const childElement = {
      type: 'div',
      children: ['Hello world']
    }

    ReactDOM.render(
      {
        type: 'div',
        children: [childElement, ' Second child']
      },
      document.getElementById('root')
    );

    expect(document.getElementById('root').firstElementChild.textContent).toEqual('Hello world Second child');
  });

  it('given an element function it renders the element', () => {
    document.body.innerHTML =
      '<div id="root">' +
      '</div>';

    const Element = () => ({
      type: 'div',
      children: ['Hello world']
    });

    ReactDOM.render(
      { type: Element },
      document.getElementById('root')
    );

    expect(document.getElementById('root').firstElementChild.textContent).toEqual('Hello world');
  });

  it('given an element class it instantiates the class and calls its render function', () => {
    document.body.innerHTML =
      '<div id="root">' +
      '</div>';

    class Component {
      render() {
        return {
          type: 'div',
          children: ['Hello world']
        };
      }
    }

    ReactDOM.render(
      { type: Component },
      document.getElementById('root')
    );

    expect(document.getElementById('root').firstElementChild.textContent).toEqual('Hello world');
  });

})
