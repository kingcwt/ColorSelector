"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const convert = require("./convert.js");
const equalColorObjects = (first, second) => {
  if (first === second)
    return true;
  for (const prop in first) {
    if (first[prop] !== second[prop])
      return false;
  }
  return true;
};
const equalHex = (first, second) => {
  if (first.toLowerCase() === second.toLowerCase())
    return true;
  return equalColorObjects(convert.hexToRgba(first), convert.hexToRgba(second));
};
exports.equalColorObjects = equalColorObjects;
exports.equalHex = equalHex;
