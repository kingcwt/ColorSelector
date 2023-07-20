"use strict";
const index_js$1 = require("/Users/cuihongran/Desktop/ColorSelector/node_modules/.pnpm/ant-design-vue@4.0.0_vue@3.3.4/node_modules/ant-design-vue/es/_util/cssinjs/index.js");
const index_js = require("/Users/cuihongran/Desktop/ColorSelector/node_modules/.pnpm/ant-design-vue@4.0.0_vue@3.3.4/node_modules/ant-design-vue/es/index.js");
const internal_js = require("/Users/cuihongran/Desktop/ColorSelector/node_modules/.pnpm/ant-design-vue@4.0.0_vue@3.3.4/node_modules/ant-design-vue/es/theme/internal.js");
const vue = require("vue");
const useConfigInject = require("/Users/cuihongran/Desktop/ColorSelector/node_modules/.pnpm/ant-design-vue@4.0.0_vue@3.3.4/node_modules/ant-design-vue/es/config-provider/hooks/useConfigInject.js");
const makeStyle = (path, styleFn) => {
  return () => {
    const {
      theme,
      token,
      hashId
    } = index_js.theme.useToken();
    const {
      getPrefixCls
    } = useConfigInject("", {});
    const rootCls = getPrefixCls();
    const componentInfo = vue.computed(() => {
      return {
        theme: theme.value,
        token: token.value,
        hashId: hashId.value,
        path: [path]
      };
    });
    return [index_js$1.useStyleRegister(componentInfo, () => {
      const mergedToken = internal_js.mergeToken(token.value, {
        rootCls: `.${rootCls}`
      });
      const styleInterpolation = styleFn(mergedToken);
      return [styleInterpolation];
    }), hashId];
  };
};
module.exports = makeStyle;
