import { defineComponent, createVNode } from "vue";
import { ColorPicker } from "./common/ColorPicker.js";
import { equalHex } from "../utils/compare.js";
import { hexToHsva, hsvaToHex } from "../utils/convert.js";
const colorModel = {
  defaultColor: "000",
  toHsva: hexToHsva,
  fromHsva: ({
    h,
    s,
    v
  }) => hsvaToHex({
    h,
    s,
    v,
    a: 1
  }),
  equal: equalHex
};
const HexColorPicker = /* @__PURE__ */ defineComponent({
  name: "HexColorPicker",
  inheritAttrs: false,
  props: {
    colorModel: {
      type: Object
    },
    color: {
      type: String
    },
    onChange: {
      type: Function
    }
  },
  setup(props, {
    attrs
  }) {
    return () => createVNode(ColorPicker, {
      ...props,
      ...attrs,
      "colorModel": colorModel
    }, null);
  }
});
export {
  HexColorPicker
};
