"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const vue = require("vue");
const Hue = require("./Hue.js");
const Saturation = require("./Saturation.js");
const useColorManipulation = require("../../hooks/useColorManipulation.js");
const useStyleSheet = require("../../hooks/useStyleSheet.js");
const format = require("../../utils/format.js");
const ColorPicker = /* @__PURE__ */ vue.defineComponent({
  name: "ColorPicker",
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
    } = vue.toRefs(props);
    const nodeRef = vue.ref(null);
    useStyleSheet.useStyleSheet(nodeRef);
    const mergedColor = vue.computed(() => color.value || colorModel.value.defaultColor);
    const [hsva, updateHsva] = useColorManipulation.useColorManipulation(colorModel, mergedColor, props.onChange);
    return () => {
      const nodeClassName = format.formatClassName(["vue-colorful", attrs.class]);
      return vue.createVNode("div", {
        ...attrs,
        "ref": nodeRef,
        "class": nodeClassName
      }, [vue.createVNode(Saturation.Saturation, {
        "hsva": hsva.value,
        "onChange": updateHsva
      }, null), vue.createVNode(Hue.Hue, {
        "hue": hsva.value.h,
        "onChange": updateHsva,
        "class": "vue-colorful__last-control"
      }, null)]);
    };
  }
});
exports.ColorPicker = ColorPicker;
