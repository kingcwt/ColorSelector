import { defineComponent, toRefs, computed, createVNode } from "vue";
import { Interactive } from "./Interactive.js";
import { Pointer } from "./Pointer.js";
import { hsvaToHslaString } from "../../utils/convert.js";
import { formatClassName } from "../../utils/format.js";
import { clamp } from "../../utils/clamp.js";
import { round } from "../../utils/round.js";
const Alpha = /* @__PURE__ */ defineComponent({
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
    } = toRefs(props);
    const handleMove = (interaction) => {
      props.onChange({
        a: interaction.left
      });
    };
    const handleKey = (offset) => {
      props.onChange({
        a: clamp(hsva.value.a + offset.left)
      });
    };
    const colorFrom = computed(() => hsvaToHslaString(Object.assign({}, hsva.value, {
      a: 0
    })));
    const colorTo = computed(() => hsvaToHslaString(Object.assign({}, hsva.value, {
      a: 1
    })));
    return () => {
      const gradientStyle = {
        backgroundImage: `linear-gradient(90deg, ${colorFrom.value}, ${colorTo.value})`
      };
      const nodeClassName = formatClassName(["vue-colorful__alpha", attrs.class]);
      const ariaValue = round(hsva.value.a * 100);
      return createVNode("div", {
        ...attrs,
        "class": nodeClassName
      }, [createVNode("div", {
        "class": "vue-colorful__alpha-gradient",
        "style": gradientStyle
      }, null), createVNode(Interactive, {
        "onMove": handleMove,
        "onKey": handleKey,
        "aria-label": "Alpha",
        "aria-valuetext": `${ariaValue}%`,
        "aria-valuenow": ariaValue,
        "aria-valuemin": "0",
        "aria-valuemax": "100"
      }, {
        default: () => [createVNode(Pointer, {
          "class": "vue-colorful__alpha-pointer",
          "left": hsva.value.a,
          "color": hsvaToHslaString(hsva.value)
        }, null)]
      })]);
    };
  }
});
export {
  Alpha
};
