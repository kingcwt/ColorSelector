"use strict";
const index = require("./common/index.js");
const withInstall = (comp) => {
  comp.install = (app) => {
    app.component(comp.name, comp);
  };
  return comp;
};
const ColorSelector = withInstall(index);
module.exports = ColorSelector;
