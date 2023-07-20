"use strict";
const vue = require("vue");
const lodash = require("lodash");
require("./index.css.js");
const index_js = require("/Users/cuihongran/Desktop/ColorSelector/node_modules/.pnpm/ant-design-vue@4.0.0_vue@3.3.4/node_modules/ant-design-vue/es/index.js");
const ColorPanel = require("./ColorPanel.js");
const InputNumberPlus = require("./InputNumberPlus.js");
const seedRange = {
  borderRadius: {
    min: 0,
    max: 16
  },
  fontSize: {
    min: 12,
    max: 32
  },
  sizeStep: {
    min: 0,
    max: 16
  },
  sizeUnit: {
    min: 0,
    max: 16
  }
};
const SeedTokenPreview = /* @__PURE__ */ vue.defineComponent({
  name: "SeedTokenPreview",
  props: {
    color: {
      type: Object,
      required: true
    },
    handleChangeColor: {
      type: Object,
      required: false
    },
    theme: {
      type: Object
    },
    tokenName: {
      type: String,
      required: true
    },
    disabled: {
      type: Boolean
    }
  },
  setup(props) {
    const {
      handleChangeColor,
      color,
      theme,
      tokenName,
      disabled
    } = vue.toRefs(props);
    const tokenPath = vue.computed(() => ["token", tokenName.value]);
    const tokenValue = vue.ref(color);
    const debouncedOnChange = lodash.debounce((newValue) => {
      var _a, _b;
      (_b = (_a = theme.value).onThemeChange) == null ? void 0 : _b.call(_a, {
        ...theme.value.config,
        token: {
          ...theme.value.config.token,
          [tokenName.value]: newValue
        }
      }, ["token", tokenName.value]);
    }, 500);
    const handleChange = (value) => {
      debouncedOnChange(value);
      if (handleChangeColor && handleChangeColor.value && typeof handleChangeColor.value === "function") {
        handleChangeColor.value(value);
      }
    };
    vue.watchEffect(() => {
    });
    const showReset = vue.computed(() => {
      var _a, _b;
      return (_b = (_a = theme.value).getCanReset) == null ? void 0 : _b.call(_a, tokenPath.value);
    });
    return () => {
      return vue.createVNode("div", {
        "class": "token-panel-pro-token-collapse-seed-block-sample"
      }, [vue.createVNode("div", {
        "class": "token-panel-pro-token-collapse-seed-block-sample-theme"
      }, [vue.createVNode(index_js.Typography.Link, {
        "style": {
          fontSize: "12px",
          padding: 0,
          opacity: showReset.value ? 1 : 0,
          pointerEvents: showReset.value ? "auto" : "none"
        },
        "onClick": () => {
          var _a, _b;
          return (_b = (_a = theme.value).onReset) == null ? void 0 : _b.call(_a, tokenPath.value);
        }
      }, {
        default: () => [vue.createTextVNode("重置")]
      })]), tokenName.value.startsWith("color") && vue.createVNode(index_js.Popover, {
        "trigger": "click",
        "placement": "bottomRight",
        "overlayInnerStyle": {
          padding: 0
        }
      }, {
        default: () => [vue.createVNode("div", {
          "class": "token-panel-pro-token-collapse-seed-block-sample-card",
          "style": {
            pointerEvents: disabled.value ? "none" : "auto"
          }
        }, [vue.createVNode("div", {
          "style": {
            backgroundColor: tokenValue.value,
            width: "48px",
            height: "32px",
            borderRadius: "4px",
            marginRight: "14px",
            boxShadow: "0 2px 3px -1px rgba(0,0,0,0.20), inset 0 0 0 1px rgba(0,0,0,0.09)"
          }
        }, null), vue.createVNode("div", {
          "class": "token-panel-pro-token-collapse-seed-block-sample-card-value"
        }, [tokenValue.value])])],
        content: () => vue.createVNode(ColorPanel, {
          "color": tokenValue.value,
          "onChange": handleChange,
          "style": {
            border: "none"
          }
        }, null)
      }), ["fontSize", "sizeUnit", "sizeStep", "borderRadius"].includes(tokenName.value) && vue.createVNode(InputNumberPlus, {
        "value": tokenValue.value,
        "onChange": handleChange,
        "min": seedRange[tokenName.value].min,
        "max": seedRange[tokenName.value].max
      }, null), tokenName.value === "wireframe" && vue.createVNode(index_js.Switch, {
        "checked": tokenValue.value,
        "onChange": handleChange
      }, null)]);
    };
  }
});
module.exports = SeedTokenPreview;
