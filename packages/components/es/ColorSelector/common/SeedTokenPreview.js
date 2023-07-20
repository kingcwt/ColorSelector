import { defineComponent, toRefs, computed, ref, watchEffect, createVNode, createTextVNode } from "vue";
import { debounce } from "lodash";
import "./index.css.js";
import ColorPanel from "./ColorPanel.js";
import InputNumberPlus from "./InputNumberPlus.js";
import "../../node_modules/.pnpm/ant-design-vue@4.0.0_vue@3.3.4/node_modules/ant-design-vue/es/typography/index.js";
import Typography from "../../node_modules/.pnpm/ant-design-vue@4.0.0_vue@3.3.4/node_modules/ant-design-vue/es/typography/Typography.js";
import Popover from "../../node_modules/.pnpm/ant-design-vue@4.0.0_vue@3.3.4/node_modules/ant-design-vue/es/popover/index.js";
import Switch from "../../node_modules/.pnpm/ant-design-vue@4.0.0_vue@3.3.4/node_modules/ant-design-vue/es/switch/index.js";
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
const SeedTokenPreview = /* @__PURE__ */ defineComponent({
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
    } = toRefs(props);
    const tokenPath = computed(() => ["token", tokenName.value]);
    const tokenValue = ref(color);
    const debouncedOnChange = debounce((newValue) => {
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
    watchEffect(() => {
    });
    const showReset = computed(() => {
      var _a, _b;
      return (_b = (_a = theme.value).getCanReset) == null ? void 0 : _b.call(_a, tokenPath.value);
    });
    return () => {
      return createVNode("div", {
        "class": "token-panel-pro-token-collapse-seed-block-sample"
      }, [createVNode("div", {
        "class": "token-panel-pro-token-collapse-seed-block-sample-theme"
      }, [createVNode(Typography.Link, {
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
        default: () => [createTextVNode("重置")]
      })]), tokenName.value.startsWith("color") && createVNode(Popover, {
        "trigger": "click",
        "placement": "bottomRight",
        "overlayInnerStyle": {
          padding: 0
        }
      }, {
        default: () => [createVNode("div", {
          "class": "token-panel-pro-token-collapse-seed-block-sample-card",
          "style": {
            pointerEvents: disabled.value ? "none" : "auto"
          }
        }, [createVNode("div", {
          "style": {
            backgroundColor: tokenValue.value,
            width: "48px",
            height: "32px",
            borderRadius: "4px",
            marginRight: "14px",
            boxShadow: "0 2px 3px -1px rgba(0,0,0,0.20), inset 0 0 0 1px rgba(0,0,0,0.09)"
          }
        }, null), createVNode("div", {
          "class": "token-panel-pro-token-collapse-seed-block-sample-card-value"
        }, [tokenValue.value])])],
        content: () => createVNode(ColorPanel, {
          "color": tokenValue.value,
          "onChange": handleChange,
          "style": {
            border: "none"
          }
        }, null)
      }), ["fontSize", "sizeUnit", "sizeStep", "borderRadius"].includes(tokenName.value) && createVNode(InputNumberPlus, {
        "value": tokenValue.value,
        "onChange": handleChange,
        "min": seedRange[tokenName.value].min,
        "max": seedRange[tokenName.value].max
      }, null), tokenName.value === "wireframe" && createVNode(Switch, {
        "checked": tokenValue.value,
        "onChange": handleChange
      }, null)]);
    };
  }
});
export {
  SeedTokenPreview as default
};
