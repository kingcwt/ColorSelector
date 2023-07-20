"use strict";
const vue = require("vue");
const SeedTokenPreview = require("./SeedTokenPreview.js");
const ColorSelector = /* @__PURE__ */ vue.defineComponent({
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
    } = vue.toRefs(props);
    return () => {
      return vue.createVNode(SeedTokenPreview, {
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
module.exports = ColorSelector;
