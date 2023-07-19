import { computed, watchEffect } from "vue";
import { getNonce } from "../utils/nonce.js";
import styles from "../css/styles.css.js";
const styleElementMap = /* @__PURE__ */ new Map();
const useStyleSheet = (nodeRef) => {
  const parentDocument = computed(() => nodeRef.value ? nodeRef.value.ownerDocument : document);
  watchEffect(() => {
    if (typeof parentDocument.value !== "undefined" && !styleElementMap.has(parentDocument.value)) {
      const styleElement = parentDocument.value.createElement("style");
      styleElement.innerHTML = styles;
      styleElementMap.set(parentDocument.value, styleElement);
      const nonce = getNonce();
      if (nonce)
        styleElement.setAttribute("nonce", nonce);
      parentDocument.value.head.appendChild(styleElement);
    }
  });
};
export {
  useStyleSheet
};
