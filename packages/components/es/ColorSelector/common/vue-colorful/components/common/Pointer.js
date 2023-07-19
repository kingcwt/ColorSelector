import { defineComponent, toRefs, createVNode } from "vue";
import { formatClassName } from "../../utils/format.js";
const Pointer = /* @__PURE__ */ defineComponent({
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
    } = toRefs(props);
    return () => {
      const nodeClassName = formatClassName(["vue-colorful__pointer", attrs.class]);
      const style = {
        top: `${top.value * 100}%`,
        left: `${left.value * 100}%`,
        ...attrs.style
      };
      return createVNode("div", {
        ...attrs,
        "class": nodeClassName,
        "style": style
      }, [createVNode("div", {
        "class": "vue-colorful__pointer-fill",
        "style": {
          backgroundColor: color.value
        }
      }, null)]);
    };
  }
});
export {
  Pointer
};
