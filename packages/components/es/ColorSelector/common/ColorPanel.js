import { defineComponent, toRefs, ref, computed, createVNode, watchEffect, createTextVNode, watch } from "vue";
import { Select, theme, Input, ConfigProvider, InputNumber } from "/Users/cuihongran/Desktop/ColorSelector/node_modules/.pnpm/ant-design-vue@4.0.0_vue@3.3.4/node_modules/ant-design-vue/es/index.js";
import classNames from "/Users/cuihongran/Desktop/ColorSelector/node_modules/.pnpm/ant-design-vue@4.0.0_vue@3.3.4/node_modules/ant-design-vue/es/_util/classNames.js";
import { HexColorPicker } from "./vue-colorful/components/HexColorPicker.js";
import { RgbaColorPicker } from "./vue-colorful/components/RgbaColorPicker.js";
import tinycolor from "/Users/cuihongran/Desktop/ColorSelector/node_modules/.pnpm/tinycolor2@1.6.0/node_modules/tinycolor2/esm/tinycolor.js";
import makeStyle from "./utils/makeStyle.js";
const {
  useToken
} = theme;
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
const HexColorInput = /* @__PURE__ */ defineComponent({
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
    } = toRefs(props);
    const hexValue = ref(value.value);
    const focusRef = ref(false);
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
    watchEffect(() => {
      if (!focusRef.value) {
        hexValue.value = getHexValue(value.value, alpha.value);
      }
    });
    return () => {
      return createVNode("div", null, [createVNode(Input, {
        "size": "small",
        "value": hexValue.value,
        "onFocus": handleFocus,
        "onChange": handleChange,
        "onBlur": handleBlur
      }, {
        prefix: () => "#"
      }), createVNode("div", {
        "class": "color-panel-mode-title"
      }, [createTextVNode("HEX"), alpha.value ? "8" : ""])]);
    };
  }
});
const RgbColorInput = /* @__PURE__ */ defineComponent({
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
    } = toRefs(props);
    watch(value, (val) => {
      props.onChange(val);
    });
    return () => {
      return createVNode("div", {
        "class": "color-panel-rgba-input"
      }, [createVNode(ConfigProvider, {
        "theme": {
          components: {
            InputNumber: {
              handleWidth: 12
            }
          }
        }
      }, {
        default: () => [createVNode("div", {
          "class": "color-panel-rgba-input-part"
        }, [createVNode(InputNumber, {
          "min": 0,
          "max": 255,
          "size": "small",
          "value": value.value.r,
          "onUpdate:value": ($event) => value.value.r = $event
        }, null), createVNode("div", {
          "class": "color-panel-mode-title"
        }, [createTextVNode("R")])]), createVNode("div", {
          "class": "color-panel-rgba-input-part"
        }, [createVNode(InputNumber, {
          "min": 0,
          "max": 255,
          "size": "small",
          "value": value.value.g,
          "onUpdate:value": ($event) => value.value.g = $event
        }, null), createVNode("div", {
          "class": "color-panel-mode-title"
        }, [createTextVNode("G")])]), createVNode("div", {
          "class": "color-panel-rgba-input-part"
        }, [createVNode(InputNumber, {
          "min": 0,
          "max": 255,
          "size": "small",
          "value": value.value.b,
          "onUpdate:value": ($event) => value.value.b = $event
        }, null), createVNode("div", {
          "class": "color-panel-mode-title"
        }, [createTextVNode("B")])]), alpha.value && createVNode("div", {
          "class": "color-panel-rgba-input-part"
        }, [createVNode(InputNumber, {
          "min": 0,
          "max": 1,
          "step": 0.01,
          "size": "small",
          "value": value.value.a,
          "onUpdate:value": ($event) => value.value.a = $event
        }, null), createVNode("div", {
          "class": "color-panel-mode-title"
        }, [createTextVNode("A")])])]
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
const ColorPanel = /* @__PURE__ */ defineComponent({
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
    } = toRefs(props);
    const {
      token
    } = useToken();
    const [wrapSSR, hashId] = useStyle();
    const colorMode = ref("HEX");
    const presetColors = computed(() => {
      return [token.value.blue, token.value.purple, token.value.cyan, token.value.green, token.value.magenta, token.value.pink, token.value.red, token.value.orange, token.value.yellow, token.value.volcano, token.value.geekblue, token.value.gold, token.value.lime, "#000"];
    });
    const handleColorModeChange = (value) => {
      colorMode.value = value;
      props.onChange(getColorStr(color.value, value));
    };
    return () => {
      return wrapSSR(createVNode("div", {
        ...attrs,
        "class": classNames(hashId.value, "color-panel")
      }, [(colorMode.value === "HEX" || colorMode.value === "RGB") && createVNode(HexColorPicker, {
        "style": {
          height: "160px"
        },
        "color": tinycolor(color.value).toHex(),
        "onChange": (value) => {
          props.onChange(getColorStr(value, colorMode.value));
        }
      }, null), (colorMode.value === "RGBA" || colorMode.value === "HEX8") && createVNode(RgbaColorPicker, {
        "style": {
          height: "160px"
        },
        "color": tinycolor(color.value).toRgb(),
        "onChange": (value) => {
          props.onChange(getColorStr(value, colorMode.value));
        }
      }, null), createVNode("div", {
        "style": {
          marginTop: "12px"
        }
      }, [createVNode("div", {
        "class": "color-panel-mode"
      }, [createVNode("div", {
        "class": "color-panel-preview"
      }, [createVNode("div", {
        "style": {
          backgroundColor: color.value,
          width: "100%",
          height: "100%"
        }
      }, null)]), createVNode(Select, {
        "value": colorMode.value,
        "onChange": handleColorModeChange,
        "options": colorModes.filter((item) => alpha.value || item === "HEX" || item === "RGB").map((item) => ({
          value: item,
          key: item
        })),
        "size": "small",
        "bordered": false,
        "dropdownMatchSelectWidth": false
      }, null)]), colorMode.value === "HEX" && createVNode(HexColorInput, {
        "value": tinycolor(color.value).toHex(),
        "onChange": (v) => props.onChange(tinycolor(v).toHexString())
      }, null), colorMode.value === "HEX8" && createVNode(HexColorInput, {
        "alpha": true,
        "value": tinycolor(color.value).toHex8(),
        "onChange": (v) => props.onChange(tinycolor(v).toHex8String())
      }, null), (colorMode.value === "RGBA" || colorMode.value === "RGB") && createVNode(RgbColorInput, {
        "alpha": colorMode.value === "RGBA",
        "value": tinycolor(color.value).toRgb(),
        "onChange": (v) => props.onChange(tinycolor(v).toRgbString())
      }, null)]), createVNode("div", {
        "class": "color-panel-preset-colors"
      }, [presetColors.value.map((presetColor) => createVNode("button", {
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
export {
  ColorPanel as default
};
