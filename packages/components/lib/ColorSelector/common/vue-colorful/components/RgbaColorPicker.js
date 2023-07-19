"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const vue = require("vue");
const AlphaColorPicker = require("./common/AlphaColorPicker.js");
const compare = require("../utils/compare.js");
const convert = require("../utils/convert.js");
const colorModel = {
  defaultColor: {
    r: 0,
    g: 0,
    b: 0,
    a: 1
  },
  toHsva: convert.rgbaToHsva,
  fromHsva: convert.hsvaToRgba,
  equal: compare.equalColorObjects
};
const RgbaColorPicker = /* @__PURE__ */ vue.defineComponent({
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
    return () => vue.createVNode(AlphaColorPicker.AlphaColorPicker, {
      ...props,
      ...attrs,
      "colorModel": colorModel
    }, null);
  }
});
exports.RgbaColorPicker = RgbaColorPicker;
