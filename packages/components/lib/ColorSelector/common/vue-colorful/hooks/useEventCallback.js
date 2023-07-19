"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const vue = require("vue");
function useEventCallback(handler) {
  const callbackRef = vue.ref(handler);
  const fn = vue.ref((value) => {
    callbackRef.value && callbackRef.value(value);
  });
  callbackRef.value = handler;
  return fn.value;
}
exports.useEventCallback = useEventCallback;
