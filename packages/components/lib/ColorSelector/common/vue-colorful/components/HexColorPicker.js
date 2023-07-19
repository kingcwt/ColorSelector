"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const vue = require("vue");
const ColorPicker = require("./common/ColorPicker.js");
const compare = require("../utils/compare.js");
const convert = require("../utils/convert.js");
const colorModel = {
  defaultColor: "000",
  toHsva: convert.hexToHsva,
  fromHsva: ({
    h,
    s,
    v
  }) => convert.hsvaToHex({
    h,
    s,
    v,
    a: 1
  }),
  equal: compare.equalHex
};
const HexColorPicker = /* @__PURE__ */ vue.defineComponent({
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
    return () => vue.createVNode(ColorPicker.ColorPicker, {
      ...props,
      ...attrs,
      "colorModel": colorModel
    }, null);
  }
});
exports.HexColorPicker = HexColorPicker;
