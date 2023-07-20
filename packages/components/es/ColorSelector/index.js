import ColorSelector$1 from "./common/index.js";
const withInstall = (comp) => {
  comp.install = (app) => {
    app.component(comp.name, comp);
  };
  return comp;
};
const ColorSelector = withInstall(ColorSelector$1);
export {
  ColorSelector as default
};
