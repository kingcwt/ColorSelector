import { hexToRgba } from "./convert.js";
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
  return equalColorObjects(hexToRgba(first), hexToRgba(second));
};
export {
  equalColorObjects,
  equalHex
};
