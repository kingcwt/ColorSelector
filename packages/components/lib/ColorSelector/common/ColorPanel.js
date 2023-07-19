"use strict";
const vue = require("vue");
const classNames = require("../../node_modules/.pnpm/ant-design-vue@4.0.0_vue@3.3.4/node_modules/ant-design-vue/es/_util/classNames.js");
const HexColorPicker = require("./vue-colorful/components/HexColorPicker.js");
const RgbaColorPicker = require("./vue-colorful/components/RgbaColorPicker.js");
const tinycolor = require("../../node_modules/.pnpm/tinycolor2@1.6.0/node_modules/tinycolor2/esm/tinycolor.js");
const makeStyle = require("./utils/makeStyle.js");
const index = require("../../node_modules/.pnpm/ant-design-vue@4.0.0_vue@3.3.4/node_modules/ant-design-vue/es/select/index.js");
const index$1 = require("../../node_modules/.pnpm/ant-design-vue@4.0.0_vue@3.3.4/node_modules/ant-design-vue/es/theme/index.js");
require("../../node_modules/.pnpm/ant-design-vue@4.0.0_vue@3.3.4/node_modules/ant-design-vue/es/input/index.js");
const Input = require("../../node_modules/.pnpm/ant-design-vue@4.0.0_vue@3.3.4/node_modules/ant-design-vue/es/input/Input.js");
const index$2 = require("../../node_modules/.pnpm/ant-design-vue@4.0.0_vue@3.3.4/node_modules/ant-design-vue/es/config-provider/index.js");
const index$3 = require("../../node_modules/.pnpm/ant-design-vue@4.0.0_vue@3.3.4/node_modules/ant-design-vue/es/input-number/index.js");
const {
  useToken
} = index$1;
const useStyle = makeStyle("ColorPanel", (token) => ({
  ".color-panel": {
    padding: 12,
    backgroundColor: "#fff",
    borderRadius: 12,
    border: "1px solid rgba(0, 0, 0, 0.06)",
    boxShadow: token.boxShadow,
    width: 224,
    boxSizing: "border-box",
    ".color-panel-mode": {
      display: "flex",
      alignItems: "center",
      marginBottom: 6
    },
    ".color-panel-preview": {
      width: 24,
      height: 24,
      borderRadius: 4,
      boxShadow: "0 2px 3px -1px rgba(0,0,0,0.20), inset 0 0 0 1px rgba(0,0,0,0.09)",
      flex: "none",
      overflow: "hidden",
      background: "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAALGPC/xhBQAAAFpJREFUWAntljEKADAIA23p6v//qQ+wfUEcCu1yriEgp0FHRJSJcnehmmWm1Dv/lO4HIg1AAAKjTqm03ea88zMCCEDgO4HV5bS757f+7wRoAAIQ4B9gByAAgQ3pfiDmXmAeEwAAAABJRU5ErkJggg==) 0% 0% / 32px"
    },
    ".color-panel-preset-colors": {
      paddingTop: 12,
      display: "flex",
      flexWrap: "wrap",
      width: 200
    },
    ".color-panel-preset-color-btn": {
      borderRadius: 4,
      width: 20,
      height: 20,
      border: "none",
      outline: "none",
      margin: 4,
      cursor: "pointer",
      boxShadow: "0 2px 3px -1px rgba(0,0,0,0.20), inset 0 0 0 1px rgba(0,0,0,0.09)"
    },
    ".color-panel-mode-title": {
      color: token.colorTextPlaceholder,
      marginTop: 2,
      fontSize: 12,
      textAlign: "center"
    },
    ".color-panel-rgba-input": {
      display: "flex",
      alignItems: "center",
      "&-part": {
        flex: 1,
        width: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        "&-title": {
          color: token.colorTextPlaceholder,
          marginTop: 2,
          fontSize: 12
        },
        "&:not(:last-child)": {
          marginRight: 4
        },
        [`${token.rootCls}-input-number`]: {
          width: "100%",
          input: {
            fontSize: 12,
            padding: "0 4px"
          }
        }
      }
    }
  }
}));
const getHexValue = (value, alpha = false) => {
  return alpha ? tinycolor(value).toHex8() : tinycolor(value).toHex();
};
const HexColorInput = /* @__PURE__ */ vue.defineComponent({
  name: "HexColorInput",
  props: {
    value: {
      type: String
    },
    alpha: {
      type: Boolean
    },
    onChange: {
      type: Function
    }
  },
  setup(props) {
    const {
      value,
      alpha
    } = vue.toRefs(props);
    const hexValue = vue.ref(value.value);
    const focusRef = vue.ref(false);
    const handleChange = (e) => {
      hexValue.value = e.target.value;
      props.onChange(getHexValue(e.target.value, alpha.value));
    };
    const handleBlur = (e) => {
      focusRef.value = false;
      hexValue.value = getHexValue(e.target.value, alpha.value);
    };
    const handleFocus = () => {
      focusRef.value = true;
    };
    vue.watchEffect(() => {
      if (!focusRef.value) {
        hexValue.value = getHexValue(value.value, alpha.value);
      }
    });
    return () => {
      return vue.createVNode("div", null, [vue.createVNode(Input, {
        "size": "small",
        "value": hexValue.value,
        "onFocus": handleFocus,
        "onChange": handleChange,
        "onBlur": handleBlur
      }, {
        prefix: () => "#"
      }), vue.createVNode("div", {
        "class": "color-panel-mode-title"
      }, [vue.createTextVNode("HEX"), alpha.value ? "8" : ""])]);
    };
  }
});
const RgbColorInput = /* @__PURE__ */ vue.defineComponent({
  name: "RgbColorInput",
  props: {
    value: {
      type: Object,
      default: () => ({
        r: 0,
        g: 0,
        b: 0,
        a: 1
      })
    },
    onChange: {
      type: Function
    },
    alpha: {
      type: Boolean
    }
  },
  setup(props) {
    const {
      value,
      alpha
    } = vue.toRefs(props);
    vue.watch(value, (val) => {
      props.onChange(val);
    });
    return () => {
      return vue.createVNode("div", {
        "class": "color-panel-rgba-input"
      }, [vue.createVNode(index$2.default, {
        "theme": {
          components: {
            InputNumber: {
              handleWidth: 12
            }
          }
        }
      }, {
        default: () => [vue.createVNode("div", {
          "class": "color-panel-rgba-input-part"
        }, [vue.createVNode(index$3.default, {
          "min": 0,
          "max": 255,
          "size": "small",
          "value": value.value.r,
          "onUpdate:value": ($event) => value.value.r = $event
        }, null), vue.createVNode("div", {
          "class": "color-panel-mode-title"
        }, [vue.createTextVNode("R")])]), vue.createVNode("div", {
          "class": "color-panel-rgba-input-part"
        }, [vue.createVNode(index$3.default, {
          "min": 0,
          "max": 255,
          "size": "small",
          "value": value.value.g,
          "onUpdate:value": ($event) => value.value.g = $event
        }, null), vue.createVNode("div", {
          "class": "color-panel-mode-title"
        }, [vue.createTextVNode("G")])]), vue.createVNode("div", {
          "class": "color-panel-rgba-input-part"
        }, [vue.createVNode(index$3.default, {
          "min": 0,
          "max": 255,
          "size": "small",
          "value": value.value.b,
          "onUpdate:value": ($event) => value.value.b = $event
        }, null), vue.createVNode("div", {
          "class": "color-panel-mode-title"
        }, [vue.createTextVNode("B")])]), alpha.value && vue.createVNode("div", {
          "class": "color-panel-rgba-input-part"
        }, [vue.createVNode(index$3.default, {
          "min": 0,
          "max": 1,
          "step": 0.01,
          "size": "small",
          "value": value.value.a,
          "onUpdate:value": ($event) => value.value.a = $event
        }, null), vue.createVNode("div", {
          "class": "color-panel-mode-title"
        }, [vue.createTextVNode("A")])])]
      })]);
    };
  }
});
const colorModes = ["HEX", "HEX8", "RGB", "RGBA"];
const getColorStr = (color, mode) => {
  switch (mode) {
    case "HEX":
      return tinycolor(color).toHexString();
    case "HEX8":
      return tinycolor(color).toHex8String();
    case "RGBA":
    case "RGB":
    default:
      return tinycolor(color).toRgbString();
  }
};
const ColorPanel = /* @__PURE__ */ vue.defineComponent({
  name: "ColorPanel",
  inheritAttrs: false,
  props: {
    color: {
      type: String
    },
    onChange: {
      type: Function
    },
    alpha: {
      type: Boolean
    }
  },
  setup(props, {
    attrs
  }) {
    const {
      color,
      alpha
    } = vue.toRefs(props);
    const {
      token
    } = useToken();
    const [wrapSSR, hashId] = useStyle();
    const colorMode = vue.ref("HEX");
    const presetColors = vue.computed(() => {
      return [token.value.blue, token.value.purple, token.value.cyan, token.value.green, token.value.magenta, token.value.pink, token.value.red, token.value.orange, token.value.yellow, token.value.volcano, token.value.geekblue, token.value.gold, token.value.lime, "#000"];
    });
    const handleColorModeChange = (value) => {
      colorMode.value = value;
      props.onChange(getColorStr(color.value, value));
    };
    return () => {
      return wrapSSR(vue.createVNode("div", {
        ...attrs,
        "class": classNames(hashId.value, "color-panel")
      }, [(colorMode.value === "HEX" || colorMode.value === "RGB") && vue.createVNode(HexColorPicker.HexColorPicker, {
        "style": {
          height: "160px"
        },
        "color": tinycolor(color.value).toHex(),
        "onChange": (value) => {
          props.onChange(getColorStr(value, colorMode.value));
        }
      }, null), (colorMode.value === "RGBA" || colorMode.value === "HEX8") && vue.createVNode(RgbaColorPicker.RgbaColorPicker, {
        "style": {
          height: "160px"
        },
        "color": tinycolor(color.value).toRgb(),
        "onChange": (value) => {
          props.onChange(getColorStr(value, colorMode.value));
        }
      }, null), vue.createVNode("div", {
        "style": {
          marginTop: "12px"
        }
      }, [vue.createVNode("div", {
        "class": "color-panel-mode"
      }, [vue.createVNode("div", {
        "class": "color-panel-preview"
      }, [vue.createVNode("div", {
        "style": {
          backgroundColor: color.value,
          width: "100%",
          height: "100%"
        }
      }, null)]), vue.createVNode(index.default, {
        "value": colorMode.value,
        "onChange": handleColorModeChange,
        "options": colorModes.filter((item) => alpha.value || item === "HEX" || item === "RGB").map((item) => ({
          value: item,
          key: item
        })),
        "size": "small",
        "bordered": false,
        "dropdownMatchSelectWidth": false
      }, null)]), colorMode.value === "HEX" && vue.createVNode(HexColorInput, {
        "value": tinycolor(color.value).toHex(),
        "onChange": (v) => props.onChange(tinycolor(v).toHexString())
      }, null), colorMode.value === "HEX8" && vue.createVNode(HexColorInput, {
        "alpha": true,
        "value": tinycolor(color.value).toHex8(),
        "onChange": (v) => props.onChange(tinycolor(v).toHex8String())
      }, null), (colorMode.value === "RGBA" || colorMode.value === "RGB") && vue.createVNode(RgbColorInput, {
        "alpha": colorMode.value === "RGBA",
        "value": tinycolor(color.value).toRgb(),
        "onChange": (v) => props.onChange(tinycolor(v).toRgbString())
      }, null)]), vue.createVNode("div", {
        "class": "color-panel-preset-colors"
      }, [presetColors.value.map((presetColor) => vue.createVNode("button", {
        "key": presetColor,
        "class": "color-panel-preset-color-btn",
        "style": {
          backgroundColor: presetColor
        },
        "onClick": () => props.onChange(presetColor)
      }, null))])]));
    };
  }
});
module.exports = ColorPanel;
