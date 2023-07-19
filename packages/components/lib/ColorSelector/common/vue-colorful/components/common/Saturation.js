"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const vue = require("vue");
const Interactive = require("./Interactive.js");
const Pointer = require("./Pointer.js");
const convert = require("../../utils/convert.js");
const clamp = require("../../utils/clamp.js");
const round = require("../../utils/round.js");
const Saturation = /* @__PURE__ */ vue.defineComponent({
  name: "Saturation",
  props: {
    hsva: {
      type: Object
    },
    onChange: {
      type: Function
    }
  },
  setup(props, {
    attrs
  }) {
    const {
      hsva
    } = vue.toRefs(props);
    const handleMove = (interaction) => {
      props.onChange({
        s: interaction.left * 100,
        v: 100 - interaction.top * 100
      });
    };
    const handleKey = (offset) => {
      props.onChange({
        s: clamp.clamp(hsva.value.s + offset.left * 100, 0, 100),
        v: clamp.clamp(hsva.value.v - offset.top * 100, 0, 100)
      });
    };
    return () => {
      const containerStyle = {
        backgroundColor: convert.hsvaToHslString({
          h: hsva.value.h,
          s: 100,
          v: 100,
          a: 1
        })
      };
      return vue.createVNode("div", {
        ...attrs,
        "class": "vue-colorful__saturation",
        "style": containerStyle
      }, [vue.createVNode(Interactive.Interactive, {
        "onMove": handleMove,
        "onKey": handleKey,
        "aria-label": "Color",
        "aria-valuetext": `Saturation ${round.round(hsva.value.s)}%, Brightness ${round.round(hsva.value.v)}%`
      }, {
        default: () => [vue.createVNode(Pointer.Pointer, {
          "class": "vue-colorful__saturation-pointer",
          "top": 1 - hsva.value.v / 100,
          "left": hsva.value.s / 100,
          "color": convert.hsvaToHslString(hsva.value)
        }, null)]
      })]);
    };
  }
});
exports.Saturation = Saturation;
