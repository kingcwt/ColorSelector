import { defineComponent, toRefs, createVNode } from "vue";
import { Interactive } from "./Interactive.js";
import { Pointer } from "./Pointer.js";
import { hsvaToHslString } from "../../utils/convert.js";
import { formatClassName } from "../../utils/format.js";
import { clamp } from "../../utils/clamp.js";
import { round } from "../../utils/round.js";
const Hue = /* @__PURE__ */ defineComponent({
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
    } = toRefs(props);
    const handleMove = (interaction) => {
      props.onChange({
        h: 360 * interaction.left
      });
    };
    const handleKey = (offset) => {
      props.onChange({
        h: clamp(hue.value + offset.left * 360, 0, 360)
      });
    };
    return () => {
      const nodeClassName = formatClassName(["vue-colorful__hue", attrs.class]);
      return createVNode("div", {
        "class": nodeClassName
      }, [createVNode(Interactive, {
        "onMove": handleMove,
        "onKey": handleKey,
        "aria-label": "Hue",
        "aria-valuenow": round(hue.value),
        "aria-valuemax": "360",
        "aria-valuemin": "0"
      }, {
        default: () => [createVNode(Pointer, {
          "class": "vue-colorful__hue-pointer",
          "left": hue.value / 360,
          "color": hsvaToHslString({
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
export {
  Hue
};
