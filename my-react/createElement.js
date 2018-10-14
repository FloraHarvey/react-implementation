export const createElement = (type, config, ...children) => {
  let props = {};
  if (config) {
    props = config;
  }
  const element = {
    type,
    props: {
      ...props,
      children,
    },
  };

  return element;
};
