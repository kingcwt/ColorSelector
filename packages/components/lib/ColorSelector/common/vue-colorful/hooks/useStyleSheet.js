"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const vue = require("vue");
const nonce = require("../utils/nonce.js");
const styles = require("../css/styles.css.js");
const styleElementMap = /* @__PURE__ */ new Map();
const useStyleSheet = (nodeRef) => {
  const parentDocument = vue.computed(() => nodeRef.value ? nodeRef.value.ownerDocument : document);
  vue.watchEffect(() => {
    if (typeof parentDocument.value !== "undefined" && !styleElementMap.has(parentDocument.value)) {
      const styleElement = parentDocument.value.createElement("style");
      styleElement.innerHTML = styles;
      styleElementMap.set(parentDocument.value, styleElement);
      const nonce$1 = nonce.getNonce();
      if (nonce$1)
        styleElement.setAttribute("nonce", nonce$1);
      parentDocument.value.head.appendChild(styleElement);
    }
  });
};
exports.useStyleSheet = useStyleSheet;
