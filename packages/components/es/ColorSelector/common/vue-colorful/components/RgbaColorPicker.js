import { defineComponent, createVNode } from "vue";
import { AlphaColorPicker } from "./common/AlphaColorPicker.js";
import { equalColorObjects } from "../utils/compare.js";
import { rgbaToHsva, hsvaToRgba } from "../utils/convert.js";
const colorModel = {
  defaultColor: {
    r: 0,
    g: 0,
    b: 0,
    a: 1
  },
  toHsva: rgbaToHsva,
  fromHsva: hsvaToRgba,
  equal: equalColorObjects
};
const RgbaColorPicker = /* @__PURE__ */ defineComponent({
  name: "RgbaColorPicker",
  inheritAttrs: false,
  props: {
    colorModel: {
      type: Object
    },
    color: {
      type: Object
    },
    onChange: {
      type: Function
    }
  },
  setup(props, {
    attrs
  }) {
    return () => createVNode(AlphaColorPicker, {
      ...props,
      ...attrs,
      "colorModel": colorModel
    }, null);
  }
});
export {
  RgbaColorPicker
};
