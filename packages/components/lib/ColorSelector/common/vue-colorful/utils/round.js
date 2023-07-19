"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const round = (number, digits = 0, base = Math.pow(10, digits)) => {
  return Math.round(base * number) / base;
};
exports.round = round;
