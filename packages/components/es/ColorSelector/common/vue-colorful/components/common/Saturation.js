import { defineComponent, toRefs, createVNode } from "vue";
import { Interactive } from "./Interactive.js";
import { Pointer } from "./Pointer.js";
import { hsvaToHslString } from "../../utils/convert.js";
import { clamp } from "../../utils/clamp.js";
import { round } from "../../utils/round.js";
const Saturation = /* @__PURE__ */ defineComponent({
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
    } = toRefs(props);
    const handleMove = (interaction) => {
      props.onChange({
        s: interaction.left * 100,
        v: 100 - interaction.top * 100
      });
    };
    const handleKey = (offset) => {
      props.onChange({
        s: clamp(hsva.value.s + offset.left * 100, 0, 100),
        v: clamp(hsva.value.v - offset.top * 100, 0, 100)
      });
    };
    return () => {
      const containerStyle = {
        backgroundColor: hsvaToHslString({
          h: hsva.value.h,
          s: 100,
          v: 100,
          a: 1
        })
      };
      return createVNode("div", {
        ...attrs,
        "class": "vue-colorful__saturation",
        "style": containerStyle
      }, [createVNode(Interactive, {
        "onMove": handleMove,
        "onKey": handleKey,
        "aria-label": "Color",
        "aria-valuetext": `Saturation ${round(hsva.value.s)}%, Brightness ${round(hsva.value.v)}%`
      }, {
        default: () => [createVNode(Pointer, {
          "class": "vue-colorful__saturation-pointer",
          "top": 1 - hsva.value.v / 100,
          "left": hsva.value.s / 100,
          "color": hsvaToHslString(hsva.value)
        }, null)]
      })]);
    };
  }
});
export {
  Saturation
};
