"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const vue = require("vue");
const Interactive = require("./Interactive.js");
const Pointer = require("./Pointer.js");
const convert = require("../../utils/convert.js");
const format = require("../../utils/format.js");
const clamp = require("../../utils/clamp.js");
const round = require("../../utils/round.js");
const Alpha = /* @__PURE__ */ vue.defineComponent({
  name: "Alpha",
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
        a: interaction.left
      });
    };
    const handleKey = (offset) => {
      props.onChange({
        a: clamp.clamp(hsva.value.a + offset.left)
      });
    };
    const colorFrom = vue.computed(() => convert.hsvaToHslaString(Object.assign({}, hsva.value, {
      a: 0
    })));
    const colorTo = vue.computed(() => convert.hsvaToHslaString(Object.assign({}, hsva.value, {
      a: 1
    })));
    return () => {
      const gradientStyle = {
        backgroundImage: `linear-gradient(90deg, ${colorFrom.value}, ${colorTo.value})`
      };
      const nodeClassName = format.formatClassName(["vue-colorful__alpha", attrs.class]);
      const ariaValue = round.round(hsva.value.a * 100);
      return vue.createVNode("div", {
        ...attrs,
        "class": nodeClassName
      }, [vue.createVNode("div", {
        "class": "vue-colorful__alpha-gradient",
        "style": gradientStyle
      }, null), vue.createVNode(Interactive.Interactive, {
        "onMove": handleMove,
        "onKey": handleKey,
        "aria-label": "Alpha",
        "aria-valuetext": `${ariaValue}%`,
        "aria-valuenow": ariaValue,
        "aria-valuemin": "0",
        "aria-valuemax": "100"
      }, {
        default: () => [vue.createVNode(Pointer.Pointer, {
          "class": "vue-colorful__alpha-pointer",
          "left": hsva.value.a,
          "color": convert.hsvaToHslaString(hsva.value)
        }, null)]
      })]);
    };
  }
});
exports.Alpha = Alpha;
