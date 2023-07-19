"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const vue = require("vue");
const Interactive = require("./Interactive.js");
const Pointer = require("./Pointer.js");
const convert = require("../../utils/convert.js");
const format = require("../../utils/format.js");
const clamp = require("../../utils/clamp.js");
const round = require("../../utils/round.js");
const Hue = /* @__PURE__ */ vue.defineComponent({
  name: "Hue",
  props: {
    hue: {
      type: Number
    },
    onChange: {
      type: Function
    }
  },
  setup(props, {
    attrs
  }) {
    const {
      hue
    } = vue.toRefs(props);
    const handleMove = (interaction) => {
      props.onChange({
        h: 360 * interaction.left
      });
    };
    const handleKey = (offset) => {
      props.onChange({
        h: clamp.clamp(hue.value + offset.left * 360, 0, 360)
      });
    };
    return () => {
      const nodeClassName = format.formatClassName(["vue-colorful__hue", attrs.class]);
      return vue.createVNode("div", {
        "class": nodeClassName
      }, [vue.createVNode(Interactive.Interactive, {
        "onMove": handleMove,
        "onKey": handleKey,
        "aria-label": "Hue",
        "aria-valuenow": round.round(hue.value),
        "aria-valuemax": "360",
        "aria-valuemin": "0"
      }, {
        default: () => [vue.createVNode(Pointer.Pointer, {
          "class": "vue-colorful__hue-pointer",
          "left": hue.value / 360,
          "color": convert.hsvaToHslString({
            h: hue.value,
            s: 100,
            v: 100,
            a: 1
          })
        }, null)]
      })]);
    };
  }
});
exports.Hue = Hue;
