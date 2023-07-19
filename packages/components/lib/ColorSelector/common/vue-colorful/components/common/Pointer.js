"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const vue = require("vue");
const format = require("../../utils/format.js");
const Pointer = /* @__PURE__ */ vue.defineComponent({
  name: "Pointer",
  props: {
    top: {
      type: Number,
      default: 0.5
    },
    left: {
      type: Number
    },
    color: {
      type: String
    }
  },
  setup(props, {
    attrs
  }) {
    const {
      color,
      left,
      top
    } = vue.toRefs(props);
    return () => {
      const nodeClassName = format.formatClassName(["vue-colorful__pointer", attrs.class]);
      const style = {
        top: `${top.value * 100}%`,
        left: `${left.value * 100}%`,
        ...attrs.style
      };
      return vue.createVNode("div", {
        ...attrs,
        "class": nodeClassName,
        "style": style
      }, [vue.createVNode("div", {
        "class": "vue-colorful__pointer-fill",
        "style": {
          backgroundColor: color.value
        }
      }, null)]);
    };
  }
});
exports.Pointer = Pointer;
