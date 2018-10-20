import React from './index';

describe('createElement', () => {
  it('given a type, props, and children it returns an object with those fields', () => {
    expect(React.createElement('div', { name: 'test' }, 'Hello', 'world')).toEqual({
      type: 'div',
      props: { name: 'test', children: ['Hello', 'world'] },
    });
  });

  it('given a type and children but no props it returns an object with those fields', () => {
    expect(React.createElement('div', null, 'Hello', 'world')).toEqual({
      type: 'div',
      props: { children: ['Hello', 'world'] },
    });
  });

  it('given a child that is null, it returns an object with children equal to null', () => {
    expect(React.createElement('div', null, null)).toEqual({
      type: 'div',
      props: { children: [null] },
    });
  });

  it('given no child arguments, it returns an object with children equal to an empty array', () => {
    expect(React.createElement('div', null)).toEqual({
      type: 'div',
      props: { children: [] },
    });
  });


  it('given a child that is also a react element it returns a nested object', () => {
    const childElement = React.createElement('div', { name: 'child' }, 'Hello', 'world')
    expect(React.createElement('div', { name: 'parent' }, childElement, 'secondChild')).toEqual({
      type: 'div',
      props: {
        name: 'parent',
        children: [
          {
            type: 'div',
            props: {
              name: 'child',
              children: ['Hello', 'world']
            },
          },
          'secondChild'
        ]
      },
    });
  });

  it('given a type that is also a react element it returns a nested element object', () => {
    const Hello = React.createElement('div', null, 'Hello world')
    expect(React.createElement(Hello, { name: 'test' })).toEqual({
      type: Hello,
      props: { name: 'test', children: [] },
    });
  });

  it('given a type that is a function it returns an element object', () => {
    const Hello = () => React.createElement('div', null, 'Hello world')
    expect(React.createElement(Hello, { name: 'test' })).toEqual({
      type: Hello,
      props: { name: 'test', children: [] },
    });
  });

  it('given a type that is a class it returns an element object', () => {
    class Hello {
      render() {
        return React.createElement('div', null, 'Hello world')
      }
    }
    expect(React.createElement(Hello, { name: 'test' })).toEqual({
      type: Hello,
      props: { name: 'test', children: [] },
    });
  });

});
