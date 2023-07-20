import { defineComponent, toRefs, createVNode } from "vue";
import SeedTokenPreview from "./SeedTokenPreview.js";
const ColorSelector = /* @__PURE__ */ defineComponent({
  name: "ColorSelector",
  props: {
    color: {
      type: String,
      required: true
    },
    handleChangeColor: {
      type: Function,
      required: false
    }
  },
  setup(props) {
    const {
      color,
      handleChangeColor
    } = toRefs(props);
    return () => {
      return createVNode(SeedTokenPreview, {
        "color": color,
        "handleChangeColor": handleChangeColor,
        "theme": {
          config: {}
        },
        "tokenName": "colorPrimary"
      }, null);
    };
  }
});
export {
  ColorSelector as default
};
