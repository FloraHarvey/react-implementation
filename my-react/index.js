class React {

  static createElement(type, props, ...children) {
    const element = {
      type,
      props,
      children,
    };

    return element;
  }
}

export default React;
