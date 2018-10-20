import ReactDOM from './index';

describe('render', () => {
  it('given an element object with children and a container it renders the element in the container', () => {
    document.body.innerHTML =
      '<div id="root">' +
      '</div>';

    ReactDOM.render(
      {
        type: 'div',
        props: {
          children: ['Hello world'],
        }
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
      props: {
        children: ['Hello world'],
      }
    }

    ReactDOM.render(
      {
        type: 'div',
        props: {
          children: [childElement, ' Second child'],
        }
      },
      document.getElementById('root')
    );

    expect(document.getElementById('root').firstElementChild.textContent).toEqual('Hello world Second child');
  });

  it('given a functional component it renders the component', () => {
    document.body.innerHTML =
      '<div id="root">' +
      '</div>';

    const Element = () => ({
      type: 'div',
      props: {
        children: ['Hello world'],
      }
    });

    ReactDOM.render(
      { type: Element, props: { children: [] } },
      document.getElementById('root')
    );

    expect(document.getElementById('root').firstElementChild.textContent).toEqual('Hello world');
  });

  it('given a component class it instantiates the class and calls its render function', () => {
    document.body.innerHTML =
      '<div id="root">' +
      '</div>';

    class Component {
      render() {
        return {
          type: 'div',
          props: {
            children: ['Hello world'],
          }
        };
      }
    }

    ReactDOM.render(
      { type: Component, props: { children: [] } },
      document.getElementById('root')
    );

    expect(document.getElementById('root').firstElementChild.textContent).toEqual('Hello world');
  });

  it('given a functional component with props it passes through the props when calling the function', () => {
    document.body.innerHTML =
      '<div id="root">' +
      '</div>';

    const Element = (props) => ({
      type: 'div',
      props: {
        children: [`Hello ${props.name}`],
      }
    });

    ReactDOM.render(
      { type: Element, props: { name: 'world', children: [] } },
      document.getElementById('root')
    );

    expect(document.getElementById('root').firstElementChild.textContent).toEqual('Hello world');
  });

  it('given a class component with props it instantiates the class and sets props as an instance variable', () => {
    document.body.innerHTML =
      '<div id="root">' +
      '</div>';

      class Component {
        constructor(props) {
          this.props = props;
        }

        render() {
          return {
            type: 'div',
            props: {
              children: [`Hello ${this.props.name}`],
            }
          };
        }
      }

    ReactDOM.render(
      { type: Component, props: { name: 'world', children: [] } },
      document.getElementById('root')
    );

    expect(document.getElementById('root').firstElementChild.textContent).toEqual('Hello world');
  });

})
