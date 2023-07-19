import { defineComponent, toRefs, ref, computed, createVNode } from "vue";
import { Hue } from "./Hue.js";
import { Saturation } from "./Saturation.js";
import { Alpha } from "./Alpha.js";
import { useColorManipulation } from "../../hooks/useColorManipulation.js";
import { useStyleSheet } from "../../hooks/useStyleSheet.js";
import { formatClassName } from "../../utils/format.js";
const AlphaColorPicker = /* @__PURE__ */ defineComponent({
  name: "AlphaColorPicker",
  props: {
    colorModel: {
      type: Object
    },
    color: {
      type: [String, Object]
    },
    onChange: {
      type: Function
    }
  },
  setup(props, {
    attrs
  }) {
    const {
      colorModel,
      color
    } = toRefs(props);
    const nodeRef = ref(null);
    useStyleSheet(nodeRef);
    const mergedColor = computed(() => color.value || colorModel.value.defaultColor);
    const [hsva, updateHsva] = useColorManipulation(colorModel, mergedColor, props.onChange);
    return () => {
      const nodeClassName = formatClassName(["vue-colorful", attrs.class]);
      return createVNode("div", {
        ...attrs,
        "ref": nodeRef,
        "class": nodeClassName
      }, [createVNode(Saturation, {
        "hsva": hsva.value,
        "onChange": updateHsva
      }, null), createVNode(Hue, {
        "hue": hsva.value.h,
        "onChange": updateHsva
      }, null), createVNode(Alpha, {
        "hsva": hsva.value,
        "onChange": updateHsva,
        "class": "vue-colorful__last-control"
      }, null)]);
    };
  }
});
export {
  AlphaColorPicker
};
