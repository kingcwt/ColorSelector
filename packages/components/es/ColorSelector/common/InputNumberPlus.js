import { defineComponent, toRefs, createVNode } from "vue";
import { Slider, InputNumber } from "/Users/cuihongran/Desktop/ColorSelector/node_modules/.pnpm/ant-design-vue@4.0.0_vue@3.3.4/node_modules/ant-design-vue/es/index.js";
const InputNumberPlus = /* @__PURE__ */ defineComponent({
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
    } = toRefs(props);
    return () => {
      return createVNode("div", {
        "style": {
          display: "flex",
          width: "200px"
        }
      }, [createVNode(Slider, {
        "style": {
          flex: "0 0 120px",
          marginRight: "12px"
        },
        "value": value.value,
        "min": min.value,
        "max": max.value,
        "onChange": props.onChange
      }, null), createVNode(InputNumber, {
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
export {
  InputNumberPlus as default
};
