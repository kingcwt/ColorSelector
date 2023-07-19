"use strict";
const vue = require("vue");
const index = require("../../node_modules/.pnpm/ant-design-vue@4.0.0_vue@3.3.4/node_modules/ant-design-vue/es/slider/index.js");
const index$1 = require("../../node_modules/.pnpm/ant-design-vue@4.0.0_vue@3.3.4/node_modules/ant-design-vue/es/input-number/index.js");
const InputNumberPlus = /* @__PURE__ */ vue.defineComponent({
  name: "InputNumberPlus",
  props: {
    value: {
      type: Number
    },
    onChange: {
      type: Function
    },
    min: {
      type: Number
    },
    max: {
      type: Number
    }
  },
  setup(props) {
    const {
      value,
      min,
      max
    } = vue.toRefs(props);
    return () => {
      return vue.createVNode("div", {
        "style": {
          display: "flex",
          width: "200px"
        }
      }, [vue.createVNode(index.default, {
        "style": {
          flex: "0 0 120px",
          marginRight: "12px"
        },
        "value": value.value,
        "min": min.value,
        "max": max.value,
        "onChange": props.onChange
      }, null), vue.createVNode(index$1.default, {
        "value": value.value,
        "min": min.value,
        "max": max.value,
        "onChange": props.onChange,
        "style": {
          flex: 1
        }
      }, null)]);
    };
  }
});
module.exports = InputNumberPlus;
